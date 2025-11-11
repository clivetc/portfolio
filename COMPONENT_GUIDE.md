# 🧩 Component Guide - AI-Powered Portfolio

## Component Hierarchy

```
MainLayout
├── ScrollIndicator (Progress bar + Scroll to top)
├── ParticleBackground (Dot pattern)
├── Nav (Sticky navigation)
├── Main Content
│   └── Profile
│       ├── AIBadge (AI-powered indicator)
│       ├── Hero Section (Name + Avatar)
│       ├── TerminalHero (Terminal simulation)
│       ├── CodeAnimation (Typing code)
│       ├── Description Card (Role + Tech stack)
│       ├── StatsCounter (Animated statistics)
│       ├── SkillsRadar (Skill progress bars)
│       └── Action Buttons (Resume + Contact)
│   ├── AIFeatures (Feature showcase)
│   ├── TechList (Technology grid)
│   └── WorkPlace (Workspace visualization)
└── Footer (Social links + Copyright)
```

## 🎨 Component Details

### 1. AIBadge
**Purpose**: Highlight AI-powered development approach
**Location**: Top of Profile section
**Features**:
- Animated shimmer effect
- Pulsing green indicator
- Gradient text
- Glassmorphic background

**Customization**:
```typescript
// Change text
<Text>YOUR CUSTOM TEXT</Text>

// Change colors
bgGradient="linear(to-r, your.color1, your.color2)"
```

---

### 2. TerminalHero
**Purpose**: Showcase technical skills through terminal simulation
**Location**: Below hero heading
**Features**:
- Rotating commands
- Realistic output
- macOS window controls
- Blinking cursor

**Customization**:
```typescript
const commands = [
	{ cmd: "your-command", output: "your output" },
];
```

---

### 3. CodeAnimation
**Purpose**: Demonstrate coding expertise
**Location**: Below terminal
**Features**:
- Typewriter effect
- Rotating snippets
- Monospace font
- Blinking cursor

**Customization**:
```typescript
const codeSnippets = [
	"your code snippet",
];
```

---

### 4. StatsCounter
**Purpose**: Quantify achievements
**Location**: Middle of Profile
**Features**:
- Smooth counting
- 4 metrics
- Gradient numbers
- Hover effects

**Customization**:
```typescript
<StatItem 
	label="Your Metric" 
	value={100} 
	suffix="+" 
	delay={0} 
/>
```

---

### 5. SkillsRadar
**Purpose**: Visual skill representation
**Location**: Below stats
**Features**:
- Animated progress bars
- Percentage display
- Color-coded skills
- Shimmer effects

**Customization**:
```typescript
const skills: Skill[] = [
	{ 
		name: "Your Skill", 
		level: 95, 
		color: "#HEX" 
	},
];
```

---

### 6. AIFeatures
**Purpose**: Highlight key differentiators
**Location**: After Profile section
**Features**:
- 4 feature cards
- Icon-based design
- Hover animations
- Glassmorphic cards

**Customization**:
```typescript
const features: Feature[] = [
	{
		icon: YourIcon,
		title: "Your Feature",
		description: "Description",
		color: "color.500",
	},
];
```

---

### 7. ProjectShowcase
**Purpose**: Display featured work
**Location**: Optional (can add to index.tsx)
**Features**:
- Featured badges
- Technology tags
- External links
- GitHub integration

**Customization**:
```typescript
const projects: Project[] = [
	{
		title: "Project Name",
		description: "Description",
		tags: ["Tech1", "Tech2"],
		featured: true,
		link: "https://...",
		github: "https://...",
	},
];
```

---

### 8. ScrollIndicator
**Purpose**: Show scroll progress and enable quick navigation
**Location**: Fixed at top and bottom-right
**Features**:
- Progress bar
- Scroll to top button
- Gradient styling
- Smooth animations

**Customization**:
```typescript
// Adjust visibility threshold
{scrollProgress > 20 && ( // Change 20 to your preference
```

---

### 9. ParticleBackground
**Purpose**: Add subtle depth to design
**Location**: Fixed background
**Features**:
- Dot pattern
- Low opacity
- Non-intrusive

**Customization**:
```typescript
// Change dot size and spacing
backgroundSize: "50px 50px", // Adjust spacing
```

---

## 🎯 Usage Examples

### Adding a New Section
```typescript
// In pages/index.tsx
import YourComponent from "~/compoments/common/YourComponent";

<Container>
	<Profile />
	<YourComponent /> {/* Add here */}
	<AIFeatures />
</Container>
```

### Removing a Component
```typescript
// In compoments/common/Profile.tsx
// Simply comment out or delete
{/* <StatsCounter /> */}
```

### Reordering Components
```typescript
// In compoments/common/Profile.tsx
<SkillsRadar />      {/* Move up */}
<StatsCounter />     {/* Move down */}
```

## 🎨 Styling Patterns

### Glassmorphism Card
```typescript
<Box
	bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.50")}
	backdropFilter="blur(10px)"
	border="1px solid"
	borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
	borderRadius="2xl"
	boxShadow="xl"
>
```

### Gradient Text
```typescript
<Text
	bgGradient="linear(to-r, blue.500, purple.500)"
	bgClip="text"
	fontWeight="800"
>
```

### Hover Effect
```typescript
<Box
	_hover={{
		transform: "translateY(-4px)",
		boxShadow: "2xl",
	}}
	transition="all 0.3s ease"
>
```

### Animated Border
```typescript
<Box
	_before={{
		content: '""',
		position: "absolute",
		borderRadius: "2xl",
		padding: "2px",
		background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
		WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
		WebkitMaskComposite: "xor",
		maskComposite: "exclude",
		opacity: 0,
		transition: "opacity 0.3s ease",
	}}
	_hover={{
		_before: { opacity: 1 },
	}}
>
```

## 🔧 Common Modifications

### Change Animation Speed
```typescript
// Faster
transition={{ duration: 0.3 }}

// Slower
transition={{ duration: 1 }}
```

### Adjust Delays
```typescript
// Staggered animations
delay={index * 0.1} // 0.1s between each
```

### Modify Colors
```typescript
// Find and replace color schemes
"purple.500" → "blue.500"
"pink.500" → "green.500"
```

### Update Spacing
```typescript
// Increase spacing
spacing={8} // from 6

// Increase padding
p={8} // from 6
```

## 📱 Responsive Patterns

### Hide on Mobile
```typescript
display={{ base: "none", md: "flex" }}
```

### Show on Mobile Only
```typescript
display={{ base: "flex", md: "none" }}
```

### Responsive Sizing
```typescript
fontSize={{ base: "24px", md: "32px", lg: "48px" }}
```

### Responsive Grid
```typescript
columns={[1, 2, 3, 4]} // mobile, tablet, desktop, large
```

## 🎭 Animation Patterns

### Fade In
```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5 }}
```

### Slide Up
```typescript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
```

### Scale
```typescript
whileHover={{ scale: 1.05 }}
```

### Rotate
```typescript
whileHover={{ rotate: 5 }}
```

## 🚀 Performance Tips

1. **Use CSS animations** for simple effects
2. **Lazy load** heavy components
3. **Optimize images** with Next.js Image
4. **Minimize re-renders** with React.memo
5. **Use will-change** for animated elements

## 📚 Best Practices

1. **Consistent spacing** - Use Chakra's spacing scale
2. **Color harmony** - Stick to defined color palette
3. **Accessibility** - Include ARIA labels
4. **Responsive first** - Test on all screen sizes
5. **Performance** - Monitor bundle size

---

**Happy Building! 🎨**
