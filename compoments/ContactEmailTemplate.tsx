interface ContactEmailTemplateProps {
	name: string;
	email: string;
	phone?: string;
	message: string;
}

export const ContactEmailTemplate = ({
	name,
	email,
	phone,
	message,
}: ContactEmailTemplateProps) => {
	return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
    <style>
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f0f2f5; margin:0; padding:0; }
      .container { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 16px; box-shadow: 0 12px 30px rgba(0,0,0,0.1); overflow: hidden; }
      .header { background: linear-gradient(135deg, #4F7CF3, #9B59F6); color: #fff; text-align:center; padding: 40px 20px; }
      .header h1 { margin:0; font-size:28px; }
      .header p { margin-top:8px; font-size:16px; opacity:0.9; }
      .content { padding: 30px 40px; color: #111827; }
      .content p { margin:16px 0; line-height:1.6; }
      .info-table { width: 100%; margin-top:20px; border-collapse: collapse; }
      .info-table td { padding:8px 0; font-size:14px; color:#374151; }
      .info-table td.label { color:#6b7280; font-weight:500; width:100px; }
      .message-box { margin-top:24px; padding:20px; background:#f3f4f6; border-left:5px solid #4F7CF3; border-radius:12px; font-size:14px; white-space:pre-wrap; }
      .footer { margin-top:32px; font-size:12px; color:#6b7280; text-align:center; }
      a { color:#4F7CF3; text-decoration:none; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>📬 New Contact Message</h1>
        <p>From your AI-powered portfolio contact form</p>
      </div>
      <div class="content">
        <p>Hi Tendai 👋,</p>
        <p>You’ve received a new message:</p>

        <table class="info-table">
          <tr>
            <td class="label">Name</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td class="label">Email</td>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${
						phone
							? `<tr>
                  <td class="label">Phone</td>
                  <td>${phone}</td>
                </tr>`
							: ""
					}
        </table>

        <div class="message-box">${message}</div>
        <p class="footer">
          ⚡ Automatically sent from your website at <a href="https://www.tendaiclivechikwape.co.uk/">tendaiclivechikwape.co.uk</a>
        </p>
      </div>
    </div>
  </body>
  </html>
  `;
};

export const ContactAutoReplyTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thanks for contacting us</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f0f2f5; margin:0; padding:0; }
    .container { max-width:600px; margin:40px auto; background:#fff; border-radius:16px; box-shadow:0 12px 30px rgba(0,0,0,0.1); overflow:hidden; }
    .header { background: linear-gradient(135deg,#4F7CF3,#9B59F6); color:#fff; text-align:center; padding:40px 20px; }
    .header h1 { margin:0; font-size:26px; }
    .header p { margin-top:8px; font-size:16px; opacity:0.9; }
    .content { padding:30px 40px; color:#111827; text-align:center; }
    .content p { margin:16px 0; line-height:1.6; font-size:16px; }
    .cta-button { display:inline-block; margin-top:20px; padding:12px 24px; background:#4F7CF3; color:#fff; border-radius:8px; text-decoration:none; font-weight:600; transition:0.3s; }
    .cta-button:hover { background:#6b82f7; }
    .footer { margin-top:32px; font-size:12px; color:#6b7280; text-align:center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🤖 Thanks for reaching out!</h1>
      <p>We’ve received your message</p>
    </div>
    <div class="content">
      <p>Hi ${name},</p>
      <p>Thank you for contacting us! Our team will review your message and get back to you as soon as possible.</p>
      <a href="https://www.tendaiclivechikwape.co.uk/" class="cta-button">Visit Our Website</a>
      <p class="footer">This is an automated response from Tendai's AI-powered contact form.</p>
    </div>
  </div>
</body>
</html>
`;
