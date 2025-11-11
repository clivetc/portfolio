# 📧 Gmail Setup Guide for Contact Form

## Overview
Your contact form is now configured to use Gmail SMTP to send emails. Follow these steps to set it up.

## 🔐 Step 1: Enable 2-Factor Authentication

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", click on **2-Step Verification**
4. Follow the prompts to enable 2FA (required for App Passwords)

## 🔑 Step 2: Generate App Password

1. After enabling 2FA, go back to **Security**
2. Under "Signing in to Google", click on **App passwords**
   - If you don't see this option, make sure 2FA is enabled
3. Click **Select app** and choose **Mail**
4. Click **Select device** and choose **Other (Custom name)**
5. Enter a name like "Portfolio Contact Form"
6. Click **Generate**
7. **Copy the 16-character password** (you won't see it again!)

## ⚙️ Step 3: Update Environment Variables

### Local Development (.env)
Update your `.env` file:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

**Important**: 
- Replace `your-email@gmail.com` with your actual Gmail address
- Replace `xxxx xxxx xxxx xxxx` with the 16-character app password
- Remove spaces from the app password (or keep them, both work)

### Production (Vercel)

1. Go to your Vercel project dashboard
2. Click on **Settings**
3. Click on **Environment Variables**
4. Add two variables:
   - **Name**: `GMAIL_USER`
     **Value**: `your-email@gmail.com`
   - **Name**: `GMAIL_APP_PASSWORD`
     **Value**: `your-16-char-app-password`
5. Click **Save**
6. Redeploy your application

## 📝 Step 4: Update .gitignore

Make sure your `.env` file is in `.gitignore`:

```gitignore
# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

## ✅ Step 5: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page: http://localhost:3000/contact

3. Fill out the form and submit

4. Check your Gmail inbox for the message

## 🎨 Email Features

Your contact form now sends beautifully formatted HTML emails with:
- **Styled layout** with your brand colors
- **Sender information** (name and email)
- **Reply-To header** set to visitor's email for easy replies
- **Professional formatting** with proper spacing and typography

## 🔧 Troubleshooting

### "Invalid login" error
- Make sure you're using an **App Password**, not your regular Gmail password
- Verify 2FA is enabled on your Google account
- Check that the email address is correct

### "Less secure app access" error
- This shouldn't happen with App Passwords
- If it does, use App Passwords instead of regular password

### Email not received
- Check your spam folder
- Verify the `GMAIL_USER` environment variable is correct
- Check the server logs for errors
- Make sure the app password is correct (no extra spaces)

### Development vs Production
- Local: Uses `.env` file
- Production: Uses Vercel environment variables
- Make sure both are configured

## 🚀 Advanced Configuration

### Custom Email Template
Edit `pages/api/send-email.ts` to customize the HTML template:

```typescript
html: `
  <div style="your-custom-styles">
    <!-- Your custom email template -->
  </div>
`
```

### Send to Multiple Recipients
```typescript
to: [process.env.GMAIL_USER, "another@email.com"].join(",")
```

### Add CC or BCC
```typescript
const mailOptions = {
  // ... other options
  cc: "cc@email.com",
  bcc: "bcc@email.com",
};
```

### Custom Subject Line
```typescript
subject: `[Portfolio] ${name} sent you a message`
```

## 📊 Rate Limits

Gmail has sending limits:
- **Free Gmail**: 500 emails per day
- **Google Workspace**: 2,000 emails per day

For a portfolio contact form, this is more than enough!

## 🔒 Security Best Practices

1. ✅ **Never commit** `.env` file to Git
2. ✅ **Use App Passwords** instead of regular passwords
3. ✅ **Rotate passwords** periodically
4. ✅ **Monitor** your Gmail account for suspicious activity
5. ✅ **Use environment variables** for all sensitive data

## 🎯 Alternative Email Services

If you prefer other services:

### SendGrid
```typescript
const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.SENDGRID_API_KEY,
  },
});
```

### Mailgun
```typescript
const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASSWORD,
  },
});
```

### AWS SES
```typescript
const transporter = nodemailer.createTransport({
  host: "email-smtp.us-east-1.amazonaws.com",
  port: 587,
  auth: {
    user: process.env.AWS_SES_USER,
    pass: process.env.AWS_SES_PASSWORD,
  },
});
```

## 📞 Support

If you encounter issues:
1. Check the [Nodemailer documentation](https://nodemailer.com/)
2. Review [Gmail SMTP settings](https://support.google.com/mail/answer/7126229)
3. Check Vercel deployment logs
4. Verify environment variables are set correctly

---

**Your contact form is now ready to receive messages! 📧✨**
