# 🎯 Customize Your Projects

## Overview
The ProjectShowcase component is now visible on your home page! Here's how to customize it with your actual projects.

## 📝 Edit Projects

Open `compoments/common/contants.ts` and find the `projects` array:

```typescript
const projects = [
	{
		title: "Your Project Name",
		description: "Brief description of what the project does",
		tags: ["Tech1", "Tech2", "Tech3"],
		featured: true,  // Shows "FEATURED" badge
		link: "https://your-project-url.com",  // Optional
		github: "https://github.com/username/repo",  // Optional
	},
	// Add more projects...
];
```

## 🎨 Project Properties

### Required Fields:
- **title**: Project name (string)
- **description**: What the project does (string)
- **tags**: Technologies used (array of strings)

### Optional Fields:
- **featured**: Show featured badge (boolean, default: false)
- **link**: Live project URL (string, shows "View Project" link)
- **github**: GitHub repository URL (string, shows "Source Code" link)

## 💡 Examples

### Featured Project with Links
```typescript
{
	title: "E-Commerce Platform",
	description: "Full-stack online store with payment integration and admin dashboard",
	tags: ["React", "Node.js", "MongoDB", "Stripe"],
	featured: true,
	link: "https://mystore.com",
	github: "https://github.com/username/ecommerce",
}
```

### Project Without Links
```typescript
{
	title: "Internal Company Tool",
	description: "Private project for company workflow automation",
	tags: ["Next.js", "TypeScript", "PostgreSQL"],
	featured: false,
	// No link or github (private project)
}
```

### Mobile App Project
```typescript
{
	title: "Fitness Tracker App",
	description: "React Native mobile app for tracking workouts and nutrition",
	tags: ["React Native", "Firebase", "Redux"],
	featured: true,
	link: "https://apps.apple.com/app/fitness-tracker",
}
```

## 🎯 Best Practices

### Project Descriptions
- Keep it concise (1-2 sentences)
- Highlight key features or technologies
- Focus on impact or results
- Use action words

**Good Examples:**
- ✅ "Real-time chat application with end-to-end encryption and file sharing"
- ✅ "AI-powered recommendation engine that increased user engagement by 40%"
- ✅ "Automated deployment pipeline reducing release time from hours to minutes"

**Avoid:**
- ❌ "A project I built"
- ❌ "This is a website"
- ❌ Too technical jargon without context

### Tags
- Use 3-5 tags per project
- Include main technologies
- Add frameworks/libraries
- Mention key features (e.g., "Real-time", "AI", "Mobile")

**Good Examples:**
- ✅ ["React", "TypeScript", "AWS", "Real-time"]
- ✅ ["Next.js", "Tailwind", "PostgreSQL", "Stripe"]
- ✅ ["React Native", "Firebase", "Redux", "iOS/Android"]

### Featured Projects
- Mark your best 2-3 projects as featured
- Choose projects that showcase different skills
- Prioritize recent or impactful work
- Update regularly

## 🎨 Customization Options

### Change Number of Projects Displayed
In `compoments/common/ProjectShowcase.tsx`, the component shows all projects. To limit:

```typescript
// Show only first 3 projects
{projects.slice(0, 3).map((project, index) => (
	// ...
))}
```

### Change Layout
Currently uses vertical stack. To change to grid:

```typescript
<SimpleGrid columns={[1, 1, 2]} spacing={6}>
	{projects.map((project, index) => (
		// ...
	))}
</SimpleGrid>
```

### Change Colors
Update gradient colors in the component:

```typescript
// Change featured badge color
<Badge colorScheme="blue">  // or "purple", "green", etc.

// Change border color
borderColor="blue.500"  // instead of purple.500
```

## 📊 Project Ideas to Showcase

### Full-Stack Projects
- E-commerce platforms
- Social media applications
- Content management systems
- Real-time collaboration tools

### Frontend Projects
- Portfolio websites
- Landing pages
- Dashboard applications
- Component libraries

### Backend Projects
- REST APIs
- GraphQL servers
- Microservices
- Authentication systems

### Mobile Projects
- iOS/Android apps
- Cross-platform apps
- Progressive web apps

### Open Source
- npm packages
- GitHub repositories
- Documentation sites
- Developer tools

## 🚀 Quick Start

1. **Open** `compoments/common/contants.ts`
2. **Find** the `projects` array
3. **Replace** the example projects with your own
4. **Add** your project URLs and GitHub links
5. **Save** and refresh your browser

## 📸 Adding Project Images (Optional)

To add project screenshots in the future:

```typescript
{
	title: "Project Name",
	description: "Description",
	tags: ["Tech"],
	image: "/projects/project-name.png",  // Add this
	// ...
}
```

Then update the component to display images.

## 🎯 Example Portfolio Projects

Here's a complete example with 5 diverse projects:

```typescript
const projects = [
	{
		title: "AI-Powered Portfolio",
		description: "Modern portfolio with terminal simulation, code animations, and glassmorphism effects",
		tags: ["Next.js", "TypeScript", "Chakra UI", "Framer Motion"],
		featured: true,
		link: "https://your-portfolio.com",
		github: "https://github.com/username/portfolio",
	},
	{
		title: "Task Management Platform",
		description: "Collaborative tool with real-time updates, Kanban boards, and team analytics",
		tags: ["React", "Node.js", "Socket.io", "MongoDB"],
		featured: true,
		link: "https://taskmanager.com",
		github: "https://github.com/username/taskmanager",
	},
	{
		title: "E-Commerce Store",
		description: "Full-stack online store with payment integration and inventory management",
		tags: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
		featured: true,
		link: "https://mystore.com",
	},
	{
		title: "Weather Dashboard",
		description: "Real-time weather app with forecasts, maps, and location-based alerts",
		tags: ["React", "OpenWeather API", "Mapbox", "Redux"],
		link: "https://weather-app.com",
		github: "https://github.com/username/weather",
	},
	{
		title: "Fitness Tracker",
		description: "Mobile app for tracking workouts, nutrition, and progress with social features",
		tags: ["React Native", "Firebase", "Redux", "iOS/Android"],
		link: "https://apps.apple.com/app/fitness",
	},
];
```

---

**Now customize your projects and showcase your best work! 🚀**
