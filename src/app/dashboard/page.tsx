"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseBrowser"
import UpgradeButton from "@/components/UpgradeButton"

export default function Dashboard() {
  const [leads, setLeads] = useState<any[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [lastMessage, setLastMessage] = useState("")
  const [userId, setUserId] = useState<string | null>(null)

  const [loadingAI, setLoadingAI] = useState(false)
  const [aiResult, setAiResult] = useState("")
  const [isPro, setIsPro] = useState(false)

  // Get user + PRO STATUS
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()

      const user = data.user
      if (!user) return

      setUserId(user.id)

      const { data: profile } = await supabase
        .from("profiles")
        .select("is_pro")
        .eq("id", user.id)
        .single()

      setIsPro(profile?.is_pro || false)
    }

    getUser()
  }, [])

  // Fetch leads
  const fetchLeads = async () => {
    if (!userId) return

    const { data } = await supabase
      .from("leads")
      .select("*")
      .eq("user_id", userId)

    setLeads(data || [])
  }

  useEffect(() => {
    if (userId) fetchLeads()
  }, [userId])

  // Add lead
  const addLead = async () => {
    if (!userId) return

    await supabase.from("leads").insert({
      name,
      email,
      last_message: lastMessage,
      user_id: userId,
    })

    setName("")
    setEmail("")
    setLastMessage("")
    fetchLeads()
  }

  // AI function
  const generateAI = async (message: string) => {
    setLoadingAI(true)
    setAiResult("")

    try {
      const res = await fetch("/api/generate-followup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })

      const data = await res.json()
      setAiResult(data.result || "No response")
    } catch (err) {
      setAiResult("Error generating AI response")
    }

    setLoadingAI(false)
  }

  // COPY
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="p-10 space-y-6">

      {/* HEADER + UPGRADE BUTTON */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            SalesAI Assistant 🚀
          </h1>
          <p className="text-gray-500">
            Generate high-converting follow-ups in seconds
          </p>
        </div>

        {!isPro && <UpgradeButton />}
      </div>

      {/* FORM */}
      <div className="space-y-2 border p-4 rounded">
        <input
          className="border p-2 w-full"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Last message"
          value={lastMessage}
          onChange={(e) => setLastMessage(e.target.value)}
        />

        <button
          className="bg-black text-white p-2 w-full"
          onClick={addLead}
        >
          Add Lead
        </button>
      </div>

      {/* LEADS */}
      <div className="space-y-3">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="border p-3 rounded space-y-2"
          >
            <p className="font-bold">{lead.name}</p>
            <p>{lead.email}</p>
            <p className="text-sm text-gray-500">
              {lead.last_message}
            </p>

            <button
              className="bg-blue-600 text-white px-3 py-1 rounded"
              onClick={() => generateAI(lead.last_message)}
            >
              Generate follow-up ✨
            </button>
          </div>
        ))}
      </div>

      {/* AI RESULT */}
      {loadingAI && (
        <p className="text-gray-500">
          Generating AI response...
        </p>
      )}

      {aiResult && (
        <div className="mt-6 border p-4 rounded bg-gray-50 space-y-3">
          <h2 className="font-bold">AI Result</h2>

          <p className="whitespace-pre-line">
            {aiResult}
          </p>

          <button
            className="bg-green-600 text-white px-3 py-1 rounded"
            onClick={() => copyToClipboard(aiResult)}
          >
            Copy email 📋
          </button>
        </div>
      )}
    </div>
  )
}