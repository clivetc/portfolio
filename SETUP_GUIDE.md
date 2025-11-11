# 🚀 AI-Powered Portfolio Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🎨 Customization Guide

### Personal Information
Edit `compoments/common/contants.ts`:
- Update your name, email, and social links
- Modify work experience and education
- Add/remove tech stack items

### AI Components Configuration

#### Stats Counter
**File**: `compoments/common/StatsCounter.tsx`
```typescript
// Update these values to match your experience
<StatItem label="Years Experience" value={3} suffix="+" delay={0} />
<StatItem label="Projects Completed" value={50} suffix="+" delay={0.1} />
<StatItem label="Technologies" value={20} suffix="+" delay={0.2} />
<StatItem label="Code Quality" value={99} suffix="%" delay={0.3} />
```

#### Skills Radar
**File**: `compoments/common/SkillsRadar.tsx`
```typescript
// Customize your skill levels (0-100)
const skills: Skill[] = [
	{ name: "React/Next.js", level: 95, color: "#61DAFB" },
	{ name: "TypeScript", level: 90, color: "#3178C6" },
	// Add more skills...
];
```

#### Terminal Commands
**File**: `compoments/common/TerminalHero.tsx`
```typescript
// Customize terminal commands
const commands = [
	{ cmd: "whoami", output: "Your Title | Your Role" },
	{ cmd: "cat skills.txt", output: "Your • Key • Skills" },
	// Add more commands...
];
```

#### Code Snippets
**File**: `compoments/common/CodeAnimation.tsx`
```typescript
// Add your favorite code snippets
const codeSnippets = [
	"const developer = new SoftwareEngineer();",
	"// Your custom code here",
];
```

### Color Scheme
Modify gradient colors throughout components:
```typescript
// Primary gradient
bgGradient="linear(to-r, blue.400, purple.500, pink.500)"

// Alternative gradients
bgGradient="linear(to-r, cyan.400, blue.500)"
bgGradient="linear(to-r, green.400, teal.500)"
```

### Projects Showcase
**File**: `compoments/common/ProjectShowcase.tsx`
```typescript
const projects: Project[] = [
	{
		title: "Your Project Name",
		description: "Project description",
		tags: ["React", "Node.js"],
		featured: true,
		link: "https://project-url.com",
		github: "https://github.com/username/repo",
	},
];
```

## 🎯 Feature Toggles

### Enable/Disable Components
In `compoments/common/Profile.tsx`:
```typescript
// Comment out components you don't want
<AIBadge />           // AI-Powered badge
<TerminalHero />      // Terminal simulation
<CodeAnimation />     // Typing code animation
<StatsCounter />      // Animated statistics
<SkillsRadar />       // Skill progress bars
```

In `pages/index.tsx`:
```typescript
<AIFeatures />        // Feature cards
<TechList />          // Technology grid
<WorkPlace />         // Workspace visualization
```

## 🎨 Theme Customization

### Dark Mode Colors
Edit `pages/_app.tsx`:
```typescript
const config = {
	useSystemColorMode: false,
	initialColorMode: "dark", // or "light"
};
```

### Custom Theme
Extend Chakra UI theme in `pages/_app.tsx`:
```typescript
const theme = extendTheme({
	config,
	colors: {
		brand: {
			50: "#your-color",
			// ... more shades
		},
	},
	fonts: {
		heading: "Your Font",
		body: "Your Font",
	},
});
```

## 📱 Responsive Breakpoints

Chakra UI breakpoints used:
- `base`: 0px (mobile)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)

Example usage:
```typescript
fontSize={{ base: "24px", md: "32px", lg: "48px" }}
display={{ base: "none", md: "flex" }}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables
Create `.env.local`:
```bash
VERCEL_GITHUB_USERNAME=your-github-username
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Build for Production
```bash
npm run build
npm run start
```

## 🎭 Animation Customization

### Framer Motion Settings
Adjust animation timings:
```typescript
// Faster animations
transition={{ duration: 0.3, delay: 0 }}

// Slower animations
transition={{ duration: 1, delay: 0.5 }}

// Spring physics
transition={{ type: "spring", stiffness: 300 }}
```

### CSS Animations
Edit `styles/index.css`:
```css
/* Adjust animation speed */
animation: shimmer 2s infinite; /* Change 2s to your preference */
```

## 🔧 Performance Optimization

### Image Optimization
Use Next.js Image component:
```typescript
import Image from "next/image";

<Image
	src="/your-image.jpg"
	alt="Description"
	width={500}
	height={300}
	priority // For above-the-fold images
/>
```

### Code Splitting
Components are automatically code-split by Next.js.

### Lazy Loading
For heavy components:
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
	loading: () => <p>Loading...</p>,
});
```

## 📊 Analytics Setup

### Vercel Analytics
Already integrated! Just deploy to Vercel.

### Google Analytics
Add to `pages/_app.tsx`:
```typescript
import Script from 'next/script';

// In component
<Script
	src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
	strategy="afterInteractive"
/>
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Type Errors
```bash
# Regenerate types
npm run build
```

### Style Issues
```bash
# Clear Chakra UI cache
rm -rf node_modules/.cache
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Documentation](https://chakra-ui.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🤝 Support

For issues or questions:
1. Check existing documentation
2. Review component files for inline comments
3. Consult framework documentation
4. Create an issue on GitHub

---

**Happy Coding! 🚀**
