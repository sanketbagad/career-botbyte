import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // Use TLS for port 587
  auth: {
    user: process.env.BREVO_USERNAME,
    pass: process.env.BREVO_SMTP_KEY,
  },
  tls: {
    rejectUnauthorized: false, // Ensures TLS is used properly
  },
})

export async function sendEmail(to: string, subject: string, html: string) {
  const mailOptions = {
    from: process.env.EMAIL_FROM, // Ensure this email is verified in Brevo
    to,
    subject,
    html,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log(`✅ Email sent successfully to ${to}. Message ID: ${info.messageId}`)
  } catch (error: any) {
    console.error("❌ Error sending email:", error.message || error)
    if (error.response) {
      console.error("SMTP Response:", error.response)
    }
    throw error
  }
}

// Test the email sending functionality
export async function testEmailSender() {
  try {
    await sendEmail(
      "alencolins@gmail.com",
      "Test Email from TechInnovate Solutions",
      "<h1>This is a test email</h1><p>If you received this, the email sender is working correctly with Brevo.</p>",
    )
    console.log("✅ Test email sent successfully")
  } catch (error) {
    console.error("❌ Failed to send test email:", error)
  }
}
