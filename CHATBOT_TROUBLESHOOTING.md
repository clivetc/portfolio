# 🔧 Chatbot Troubleshooting Guide

## Can't See the Chatbot Button?

### Quick Fixes (Try These First)

#### 1. Restart Development Server
```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

#### 2. Clear Browser Cache
- **Chrome/Edge**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Firefox**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- Or open in **Incognito/Private** window

#### 3. Check Browser Console
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Look for any red errors
4. Share the errors if you see any

### Common Issues & Solutions

#### Issue: "Module not found" Error
**Solution:**
```bash
# Install dependencies
npm install
# or
yarn install
```

#### Issue: Button Not Visible
**Check:**
1. Look in **bottom-left corner** of the page
2. Scroll down if needed
3. Check if it's behind another element
4. Try zooming out (Ctrl + Mouse Wheel)

#### Issue: TypeScript Errors
**Solution:**
```bash
# Rebuild the project
npm run build
```

### Verification Steps

#### 1. Check File Exists
Verify these files exist:
- ✅ `compoments/common/AIChatbot.tsx`
- ✅ `pages/api/gemini-chat.ts`
- ✅ `compoments/layout/MainLayOut.tsx` (with AIChatbot import)

#### 2. Check Import in Layout
Open `compoments/layout/MainLayOut.tsx` and verify:
```typescript
import AIChatbot from "../common/AIChatbot";

// And in the return:
<AIChatbot />
```

#### 3. Check Browser Console
Open DevTools (F12) and check for:
- ❌ Red errors
- ⚠️ Yellow warnings
- Any messages about AIChatbot

### Manual Test

Add this temporary test to `pages/index.tsx` to verify the component works:

```typescript
import AIChatbot from "~/compoments/common/AIChatbot";

// In your component:
<AIChatbot />
```

If you see it on the home page, the component works!

### Still Not Working?

#### Option 1: Check Z-Index
The button might be behind other elements. Edit `compoments/common/AIChatbot.tsx`:

```typescript
// Find this line:
zIndex={9999}

// Change to:
zIndex={99999}  // Even higher
```

#### Option 2: Change Position
Try moving it to the right side:

```typescript
// Find:
left={8}

// Change to:
right={8}
```

#### Option 3: Make It Bigger
```typescript
// Find:
w={16}
h={16}

// Change to:
w={20}
h={20}
```

### Debug Mode

Add console logs to verify the component is rendering:

```typescript
// In AIChatbot component, add:
useEffect(() => {
  console.log("🤖 AIChatbot mounted!");
}, []);
```

Check browser console for the message.

### Nuclear Option: Rebuild Everything

```bash
# Stop server
# Delete build folders
rm -rf .next
rm -rf node_modules

# Reinstall
npm install

# Restart
npm run dev
```

### Check These Common Mistakes

1. ❌ Server not running
   - ✅ Run `npm run dev`

2. ❌ Wrong port
   - ✅ Check http://localhost:3000

3. ❌ Browser cache
   - ✅ Hard refresh (Ctrl+Shift+R)

4. ❌ Ad blocker
   - ✅ Disable ad blockers

5. ❌ Browser extensions
   - ✅ Try incognito mode

### Expected Behavior

When working correctly, you should see:
- 🔵 **Blue pulsing robot button** in bottom-left corner
- Button has a **tooltip** on hover: "Chat with AI Assistant"
- Button **animates** (pulse effect)
- Clicking opens a **chat window**

### Visual Reference

The button should look like this:
```
┌─────────────────────────────┐
│                             │
│                             │
│                             │
│                             │
│                             │
│                             │
│                             │
│  🤖 ← Blue robot button     │
│     (bottom-left corner)    │
└─────────────────────────────┘
```

### Get Help

If still not working, check:
1. **Browser console** for errors
2. **Terminal** for build errors
3. **Network tab** in DevTools
4. Try a **different browser**

### Quick Test Component

Create `pages/test-chatbot.tsx`:

```typescript
import AIChatbot from "~/compoments/common/AIChatbot";

export default function TestChatbot() {
  return (
    <div style={{ padding: "50px" }}>
      <h1>Chatbot Test Page</h1>
      <p>Look for the robot button in the bottom-left corner!</p>
      <AIChatbot />
    </div>
  );
}
```

Visit http://localhost:3000/test-chatbot

---

**Most Common Solution:** Restart your dev server and hard refresh your browser! 🔄
