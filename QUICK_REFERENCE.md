# 🚀 Quick Reference - AI-Powered Portfolio

## 📁 Project Structure

```
portfolio-app/
├── pages/
│   ├── index.tsx           ✨ Home (AI-powered features)
│   ├── experience.tsx      ✨ Career & Education (Timeline)
│   ├── github.tsx          ✨ GitHub Stats & Repos
│   └── contact.tsx         ✨ Contact Form & Info
├── compoments/
│   ├── common/
│   │   ├── AIBadge.tsx            🤖 AI-powered indicator
│   │   ├── CodeAnimation.tsx      💻 Typing code effect
│   │   ├── TerminalHero.tsx       🖥️ Terminal simulation
│   │   ├── StatsCounter.tsx       📊 Animated statistics
│   │   ├── SkillsRadar.tsx        📈 Skill progress bars
│   │   ├── AIFeatures.tsx         ⭐ Feature showcase
│   │   ├── ProjectShowcase.tsx    🎯 Featured projects
│   │   ├── PageHero.tsx           🎨 Page hero sections
│   │   ├── TimelineView.tsx       📅 Timeline component
│   │   ├── ScrollIndicator.tsx    📍 Scroll progress
│   │   └── ParticleBackground.tsx ✨ Dot pattern
│   └── layout/
│       ├── MainLayOut.tsx         🏗️ Main layout
│       ├── Nav.tsx                🧭 Navigation
│       └── Footer.tsx             👣 Footer
└── styles/
    ├── globals.css         🎨 Global styles
    └── index.css           🎨 Custom animations
```

## 🎨 Component Quick Reference

### Home Page Components
```typescript
<AIBadge />              // AI-powered badge
<TerminalHero />         // Terminal simulation
<CodeAnimation />        // Typing code
<StatsCounter />         // Animated stats
<SkillsRadar />          // Skill bars
<AIFeatures />           // Feature cards
<TechList />             // Tech stack grid
<WorkPlace />            // Workspace visual
```

### Experience Page Components
```typescript
<PageHero />             // Hero section
<TimelineView />         // Timeline wrapper
<ExperienceCard />       // Career/education cards
```

### GitHub Page Components
```typescript
<PageHero />             // Hero section
<GithubStats />          // Stats cards
<GithubSection />        // Repo grid
<GithubCard />           // Individual repo
```

### Contact Page Components
```typescript
<PageHero />             // Hero section
<ContactInfo />          // Contact method cards
<ContactForm />          // Message form
```

## 🎯 Common Patterns

### Glassmorphic Card
```typescript
<Box
  bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
  backdropFilter="blur(10px)"
  border="1px solid"
  borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
  borderRadius="2xl"
  boxShadow="xl"
/>
```

### Gradient Text
```typescript
<Text
  bgGradient="linear(to-r, blue.500, purple.500)"
  bgClip="text"
  fontWeight="800"
/>
```

### Hover Effect
```typescript
<Box
  _hover={{
    transform: "translateY(-4px)",
    boxShadow: "2xl",
  }}
  transition="all 0.3s ease"
/>
```

### Animated Entry
```typescript
<MotionBox
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>
```

## 🎨 Color Palette

### Gradients
```typescript
// Primary
"linear(to-r, blue.500, purple.500)"
"linear(to-r, purple.500, pink.500)"
"linear(to-r, blue.400, purple.500, pink.500)"

// Backgrounds
"linear(to-br, blue.400, purple.400)"
"linear(to-br, purple.400, pink.400)"
```

### Solid Colors
```typescript
// Blue shades
blue.400, blue.500, blue.600

// Purple shades
purple.400, purple.500, purple.600

// Pink shades
pink.400, pink.500, pink.600

// Accent colors
cyan.400, cyan.500
yellow.400, yellow.500
```

## 📱 Responsive Breakpoints

```typescript
// Chakra UI breakpoints
base: "0px"      // Mobile
md: "768px"      // Tablet
lg: "1024px"     // Desktop

// Usage
fontSize={{ base: "24px", md: "32px", lg: "48px" }}
columns={[1, 2, 3, 4]}  // mobile, tablet, desktop, large
display={{ base: "none", md: "flex" }}
```

## ⚡ Quick Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
```

### Common Tasks
```bash
# Clear cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules && npm install

# Check types
npm run build
```

## 🎯 Customization Checklist

### Personal Info
- [ ] Update name in `contants.ts`
- [ ] Update email in `contants.ts`
- [ ] Update social links in `contants.ts`
- [ ] Update profile picture in `/public`
- [ ] Update resume link in `contants.ts`

### Experience
- [ ] Update companies in `contants.ts`
- [ ] Update educations in `contants.ts`
- [ ] Update tech stacks in `contants.ts`

### Stats & Skills
- [ ] Update stats in `StatsCounter.tsx`
- [ ] Update skills in `SkillsRadar.tsx`
- [ ] Update features in `AIFeatures.tsx`

### Content
- [ ] Update terminal commands in `TerminalHero.tsx`
- [ ] Update code snippets in `CodeAnimation.tsx`
- [ ] Update contact info in `contact.tsx`

### Styling
- [ ] Adjust color gradients
- [ ] Modify animation timings
- [ ] Update spacing values
- [ ] Customize fonts

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Type Errors
```bash
# Check TypeScript
npx tsc --noEmit
```

### Style Issues
```bash
# Clear Chakra cache
rm -rf node_modules/.cache
```

### Performance Issues
- Check for console errors
- Reduce animation complexity
- Optimize images
- Enable lazy loading

## 📚 Key Files to Know

### Configuration
- `pages/_app.tsx` - App configuration & theme
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration

### Content
- `compoments/common/contants.ts` - All content data
- `pages/index.tsx` - Home page
- `pages/experience.tsx` - Experience page
- `pages/github.tsx` - GitHub page
- `pages/contact.tsx` - Contact page

### Styling
- `styles/globals.css` - Global styles
- `styles/index.css` - Custom animations
- `pages/_app.tsx` - Chakra theme

## 🎨 Animation Reference

### Available Animations
```css
/* In styles/index.css */
@keyframes wave          // Waving hand
@keyframes fadeInUp      // Fade in from bottom
@keyframes pulse         // Pulsing effect
@keyframes float         // Floating motion
@keyframes shimmer       // Shimmer effect
@keyframes blink         // Blinking cursor
@keyframes gradientShift // Background gradient
@keyframes meshMove      // Mesh gradient movement
```

### Usage
```typescript
animation="wave 2.5s ease-in-out infinite"
animation="pulse 2s ease-in-out infinite"
animation="float 6s ease-in-out infinite"
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

### Environment Variables
```bash
VERCEL_GITHUB_USERNAME=your-username
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📊 Performance Tips

1. **Images**: Use Next.js Image component
2. **Animations**: Use CSS over JavaScript
3. **Code Splitting**: Automatic with Next.js
4. **Lazy Loading**: Use dynamic imports
5. **Caching**: Leverage Next.js caching

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Chakra UI Docs](https://chakra-ui.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

**Quick reference for your AI-powered portfolio! 🚀**
