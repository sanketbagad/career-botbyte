import { NextResponse } from "next/server"
import { testEmailSender } from "@/lib/emailSender"

export async function GET() {
  try {
    await testEmailSender()
    return NextResponse.json({ message: "Test email sent successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send test email" }, { status: 500 })
  }
}

