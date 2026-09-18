import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAV */}
      <div className="flex justify-between p-6 border-b">
        <h1 className="font-bold">SalesAI 🚀</h1>

        <div className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/signup" className="font-bold">
            Get started
          </Link>
        </div>
      </div>

      {/* HERO */}
      <div className="flex flex-col items-center text-center mt-20 px-6">
        <h2 className="text-4xl font-bold max-w-2xl">
          Generate high-converting sales follow-ups with AI
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl">
          Turn any lead message into a professional email in seconds.
          Save time. Close more deals. Automate your sales.
        </p>

        <Link
          href="/signup"
          className="mt-6 bg-black text-white px-6 py-3 rounded"
        >
          Start free trial
        </Link>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 p-10 mt-20">
        <div className="border p-4 rounded">
          <h3 className="font-bold">⚡ Instant AI emails</h3>
          <p className="text-gray-500">
            Generate follow-ups in 1 click
          </p>
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-bold">📊 CRM built-in</h3>
          <p className="text-gray-500">
            Manage all your leads in one place
          </p>
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-bold">💰 Close more deals</h3>
          <p className="text-gray-500">
            Improve response rate with AI
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-10 mt-10">
        <h2 className="text-2xl font-bold">
          Ready to boost your sales?
        </h2>

        <Link
          href="/signup"
          className="mt-4 inline-block bg-black text-white px-6 py-3 rounded"
        >
          Get started now
        </Link>
      </div>
    </div>
  )
}