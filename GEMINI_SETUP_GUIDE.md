# 🤖 Google Gemini AI Chatbot Setup Guide

## Overview
Your portfolio now features an AI-powered chatbot using Google's Gemini API - completely FREE with no credit card required!

## ✨ Why Gemini?

### Advantages
- ✅ **Completely Free** - No credit card needed
- ✅ **60 requests/minute** - Generous rate limit
- ✅ **High Quality** - Google's latest AI
- ✅ **Fast Responses** - 1-2 second replies
- ✅ **Easy Setup** - Simple API key
- ✅ **Reliable** - Google infrastructure

### vs Other Options
| Feature | Gemini | OpenAI | Hugging Face |
|---------|--------|--------|--------------|
| Cost | Free | $5 free then paid | Free tier |
| Credit Card | No | Yes | No |
| Quality | Excellent | Excellent | Good |
| Rate Limit | 60/min | Varies | 30K/month |
| Setup | Easy | Medium | Easy |

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get Your Free API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. **Sign in** with your Google account
3. Click **"Get API Key"** or **"Create API Key"**
4. Click **"Create API key in new project"** (or select existing project)
5. **Copy the API key** (starts with `AIza...`)

**That's it!** No credit card, no payment info needed.

### Step 2: Add to Environment Variables

#### Local Development (.env)
```env
GEMINI_API_KEY=AIzaSy...your-actual-key-here
```

#### Production (Vercel)
1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: `AIzaSy...your-actual-key-here`
4. Click **Save**
5. Redeploy your application

### Step 3: Test It!

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Look for the **blue robot icon** in bottom-left corner

3. Click to open chat

4. Try asking:
   - "What are Tendai's skills?"
   - "Tell me about his projects"
   - "What's his experience?"
   - "How can I contact him?"

## 🎨 Chatbot Features

### Visual Design
- **Blue-to-cyan gradient** (Google colors)
- **Google Gemini branding** in header
- **Smooth animations** with Framer Motion
- **Mobile responsive** design
- **Professional appearance**

### AI Capabilities
- **Understands context** about your portfolio
- **Natural conversations** with Gemini Pro
- **Concise responses** (2-3 sentences)
- **Professional tone** for visitors
- **Smart fallbacks** if API unavailable

### User Experience
- **Floating button** always accessible
- **Instant responses** (1-2 seconds)
- **Keyboard support** (Enter to send)
- **Auto-scroll** to latest message
- **Loading animation** while thinking

## 🧠 What the AI Knows

The chatbot has complete knowledge about:

### Professional Info
- Current role at CDL Software
- Previous experience at MBL Hightech
- 3+ years of experience
- Full-stack expertise

### Technical Skills
- Frontend: React, Next.js, TypeScript, etc.
- Backend: Node.js, NestJS, SpringBoot
- Databases: MongoDB, PostgreSQL
- Tools: AWS, Git, CI/CD, etc.

### Projects
- Carinya Healthcare Services
- Rhuomai Home Care
- Health AI System
- All with descriptions and tech stacks

### Education & Contact
- Bachelor's degree details
- Certifications
- Email, GitHub, LinkedIn

## 🎯 How It Works

### Architecture
```
User Message
    ↓
AIChatbot Component
    ↓
/api/gemini-chat API Route
    ↓
Google Gemini API
    ↓
AI Response (or Smart Fallback)
    ↓
Display in Chat
```

### Smart Fallback System
If Gemini API is unavailable (no key or error):
- Uses intelligent keyword matching
- Provides relevant pre-written responses
- Ensures chatbot always works
- Seamless user experience

## 📊 Usage Limits

### Free Tier (Forever!)
- **60 requests per minute**
- **1,500 requests per day**
- **1 million tokens per month**

### What This Means
- ~1,500 conversations per day
- More than enough for a portfolio
- No costs ever
- No credit card needed

### Rate Limiting
The API automatically handles rate limits. If exceeded:
- Fallback responses activate
- User still gets answers
- No errors shown

## 🔒 Security Best Practices

1. **Never commit** API keys to Git ✅
2. **Use environment variables** ✅
3. **Rotate keys** periodically
4. **Monitor usage** in Google AI Studio
5. **Keep keys private**

## 🎨 Customization

### Change Colors
Edit `compoments/common/AIChatbot.tsx`:

```typescript
// Change gradient
bgGradient="linear(to-r, purple.500, pink.500)"

// Change avatar color
bg="purple.500"  // instead of cyan.500
```

### Change Position
```typescript
// Move to right side
bottom={8}
right={8}  // instead of left={8}
```

### Change Size
```typescript
// Larger chat window
w={["90vw", "500px"]}  // wider
h={["80vh", "700px"]}  // taller
```

### Modify AI Behavior
Edit `pages/api/gemini-chat.ts`:

```typescript
generationConfig: {
  temperature: 0.9,  // More creative (0.7 default)
  maxOutputTokens: 300,  // Longer responses (200 default)
}
```

### Update Portfolio Context
Edit the `PORTFOLIO_CONTEXT` in `pages/api/gemini-chat.ts` to update what the AI knows about you.

## 🐛 Troubleshooting

### Chatbot button not showing
- Check browser console for errors
- Verify `AIChatbot` is in `MainLayOut.tsx`
- Clear browser cache

### API key not working
- Verify key starts with `AIza`
- Check it's copied completely
- Ensure no extra spaces
- Try generating a new key

### Slow responses
- First request may take 2-3 seconds
- Subsequent requests are faster
- Check internet connection
- Fallback responses are instant

### "API error" messages
- Check API key is correct
- Verify environment variables are set
- Check Google AI Studio for quota
- Fallback responses will still work

## 📈 Monitoring Usage

### Google AI Studio Dashboard
1. Go to [Google AI Studio](https://makersuite.google.com/)
2. View your API keys
3. Check usage statistics
4. Monitor rate limits
5. See request history

### What to Monitor
- Daily request count
- Response times
- Error rates
- Popular questions

## 🎯 Best Practices

### For Best Results
1. **Keep API key secure** - Never share publicly
2. **Monitor usage** - Check dashboard weekly
3. **Update context** - Keep portfolio info current
4. **Test regularly** - Try different questions
5. **Collect feedback** - Ask users about experience

### Optimization Tips
1. **Concise prompts** - Shorter = faster
2. **Clear context** - Help AI understand
3. **Fallback ready** - Always have backups
4. **Cache common** - Consider caching FAQs

## 🌟 Advanced Features

### Add Conversation Memory
```typescript
// Store chat history
const history = messages.map(m => 
  `${m.role}: ${m.content}`
).join('\n');
```

### Add Suggested Questions
```typescript
const suggestions = [
  "What are your skills?",
  "Tell me about your projects",
  "How can I contact you?"
];
```

### Add Voice Input
```typescript
const recognition = new webkitSpeechRecognition();
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  setInput(transcript);
};
```

### Export Conversations
```typescript
const exportChat = () => {
  const text = messages.map(m => 
    `${m.role}: ${m.content}`
  ).join('\n\n');
  // Download as text file
};
```

## 📚 Resources

- [Google AI Studio](https://makersuite.google.com/)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [API Reference](https://ai.google.dev/api/rest)
- [Pricing](https://ai.google.dev/pricing) (Free tier details)

## ✅ Setup Checklist

- [ ] Sign in to Google AI Studio
- [ ] Generate API key
- [ ] Add to `.env` file
- [ ] Add to Vercel environment variables
- [ ] Test chatbot locally
- [ ] Deploy to production
- [ ] Test on live site
- [ ] Monitor usage in dashboard

## 🎉 You're Done!

Your AI chatbot is now powered by Google Gemini!

### What You Get
- ✅ Real AI conversations
- ✅ Completely free forever
- ✅ Professional appearance
- ✅ Smart fallback system
- ✅ Mobile responsive
- ✅ Easy to maintain

### Next Steps
1. Get your API key (5 minutes)
2. Add to environment variables
3. Test it out
4. Share your impressive portfolio!

---

**Your portfolio now has a truly intelligent AI assistant powered by Google! 🚀**

The chatbot works even without the API key (using smart fallbacks), but adding Gemini makes it truly conversational!
