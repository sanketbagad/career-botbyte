export function getUserEmailTemplate(name, program) {
    return `
      <html>
        <body>
          <h1>Application Received - Botbyte AI</h1>
          <p>Dear ${name},</p>
          <p>Thank you for applying to our ${program} program at Botbyte AI. We have received your application and are excited to review it.</p>
          <p>Here's what you can expect next:</p>
          <ol>
            <li>Our team will carefully review your application.</li>
            <li>We aim to respond within 5-7 business days.</li>
            <li>If your application meets our criteria, we'll invite you for an interview.</li>
          </ol>
          <p>If you have any questions in the meantime, please don't hesitate to reach out to us at hello@botbyte.in.</p>
          <p>Best regards,<br>Botbyte AI Team</p>
        </body>
      </html>
    `
  }
  
  export function getAdminEmailTemplate(name, email, program) {
    return `
      <html>
        <body>
          <h1>New Application Received</h1>
          <p>A new application has been submitted for the ${program} program.</p>
          <p>Applicant Details:</p>
          <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Program: ${program}</li>
          </ul>
          <p>Please review this application at your earliest convenience.</p>
        </body>
      </html>
    `
  }
  
  