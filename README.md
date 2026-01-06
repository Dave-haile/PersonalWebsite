# 🚀 Dawit Haile - Personal Portfolio

A modern, interactive personal portfolio website showcasing full-stack development expertise with cutting-edge web technologies and stunning 3D animations.

![Portfolio Preview](./public/L38B7100.JPG)

## ✨ Features

- **3D Interactive Graphics**: Powered by Three.js with particle systems and star fields
- **Smooth Animations**: Framer Motion and GSAP for fluid motion design
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Built with Vite for lightning-fast development and builds
- **Interactive Components**: Custom cursor, distortion images, and particle signatures
- **Modern UI/UX**: Dark theme with gradient effects and glassmorphism

## 🛠️ Tech Stack

### Frontend Framework

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling

### 3D Graphics & Animation

- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Production-ready motion library
- **GSAP** - High-performance animation library

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Development Tools

- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Vite Plugin React** - Fast React development

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CustomCursor.tsx    # Custom cursor implementation
│   ├── DistortionImage.tsx # Image distortion effects
│   ├── IdentityParticles.tsx # Particle animations
│   ├── Navbar.tsx          # Navigation component
│   ├── ParticleImage.tsx   # Particle-based images
│   ├── ParticleSignature.tsx # Animated signature
│   └── StarField.tsx       # 3D star field background
├── sections/           # Page sections
│   ├── Hero.tsx           # Landing section with 3D elements
│   ├── About.tsx          # Personal introduction
│   ├── Evolution.tsx      # Career progression
│   ├── Capabilities.tsx   # Technical skills
│   ├── Architecture.tsx   # System design showcase
│   ├── Experience.tsx     # Work experience
│   ├── Exploring.tsx      # Personal interests
│   └── Contact.tsx        # Contact information
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
├── index.css          # Global styles
└── App.css            # Application styles
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint for code quality checks       |

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/sections/`
2. Import and add it to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx` if needed

### Styling Guidelines

- Uses **Tailwind CSS** for utility classes
- Custom gradients defined in component classes
- Dark theme with blue/purple accent colors
- Responsive breakpoints: `md:` (768px+), `lg:` (1024px+)

### 3D Components

- **StarField**: Background particle system
- **ParticleSignature**: Animated signature with particles
- **DistortionImage**: Hover distortion effects between two images

## 🌟 Key Components

### Hero Section

- 3D star field background
- Animated particle signature
- Smooth text animations with Framer Motion
- Call-to-action buttons with hover effects

### Interactive Elements

- **Custom Cursor**: Follows mouse with smooth animations
- **Distortion Images**: WebGL-powered image transitions
- **Particle Systems**: GPU-accelerated animations

### Performance Features

- Lazy loading of 3D components
- Optimized Three.js rendering
- Minimal bundle size with tree shaking

## 📱 Responsive Design

- **Mobile-first** approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Optimized 3D performance across devices

## 🔧 Development

### Code Quality

- TypeScript for type safety
- ESLint for code consistency
- Prettier-ready configuration

### Performance

- Vite for fast development
- Optimized production builds
- Code splitting and lazy loading

## 📄 License

This project is private and proprietary.

## 👨‍💻 About the Developer

**Dawit Haile** - Full Stack Architect from Addis Ababa, Ethiopia

- 5+ years of experience
- 50+ projects delivered
- 20+ happy clients
- 99% code quality standard

Specializing in engineering digital experiences where performance meets high-fidelity interactive design.

---

Built with ❤️ using React, TypeScript, and Three.js
