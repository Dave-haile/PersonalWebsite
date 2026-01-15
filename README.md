# 🚀 Dawit Haile - Personal Portfolio

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.182.0-black.svg)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC.svg)](https://tailwindcss.com/)

A modern, interactive personal portfolio website showcasing full-stack development expertise with cutting-edge web technologies and stunning 3D animations. Built with React 19, TypeScript, and Three.js for an immersive user experience.

![Portfolio Preview](public/screenshots/Screenshot%202026-01-15%20081532.png)

## ✨ Features

- **🌟 3D Interactive Graphics**: Powered by Three.js with particle systems and star fields
- **🎭 Smooth Animations**: Framer Motion and GSAP for fluid motion design
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **⚡ Performance Optimized**: Built with Vite for lightning-fast development and builds
- **🎮 Interactive Components**: Custom cursor, distortion images, and particle signatures
- **🎨 Modern UI/UX**: Dark theme with gradient effects and glassmorphism
- **📧 Contact Integration**: EmailJS-powered contact form
- **🎯 Interactive Elements**: Hover effects, particle animations, and smooth transitions

## 🛠️ Tech Stack

### Frontend Framework

- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.2.4** - Next-generation frontend tooling

### 3D Graphics & Animation

- **Three.js 0.182.0** - 3D graphics library
- **@react-three/fiber 9.5.0** - React renderer for Three.js
- **@react-three/drei 10.7.7** - Useful helpers for React Three Fiber
- **Framer Motion 12.23.26** - Production-ready motion library
- **GSAP 3.14.2** - High-performance animation library

### Styling & UI

- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Lucide React 0.562.0** - Beautiful icon library

### Development Tools

- **ESLint 9.39.1** - Code linting
- **TypeScript ESLint 8.46.4** - TypeScript-specific linting rules
- **Vite Plugin React 5.1.1** - Fast React development

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CustomCursor.tsx    # Custom cursor implementation
│   ├── DistortionImage.tsx # Image distortion effects
│   ├── Footer.tsx          # Site footer
│   ├── IdentityParticles.tsx # Particle animations
│   ├── Navbar.tsx          # Navigation component
│   ├── ParticleImage.tsx   # Particle-based images
│   ├── ParticleSignature.tsx # Animated signature
│   └── StarField.tsx       # 3D star field background
├── sections/           # Page sections
│   ├── Hero.tsx           # Landing section with 3D elements
│   ├── About.tsx          # Personal introduction
│   ├── Evolution.tsx      # Career progression
│   ├── Skills.tsx         # Technical skills showcase
│   ├── Capabilities.tsx   # Technical capabilities
│   ├── Architecture.tsx   # System design showcase
│   ├── Experience.tsx     # Work experience
│   ├── Exploring.tsx      # Personal interests
│   └── Contact.tsx        # Contact information
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
├── index.css          # Global styles
├── App.css            # Application styles
└── constants.ts       # Application constants
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
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

- **StarField**: Background particle system with lazy loading
- **ParticleSignature**: Animated signature with particles
- **DistortionImage**: WebGL-powered hover distortion effects
- **IdentityParticles**: Custom particle animations

## 🌟 Key Components

### Hero Section

- 3D star field background with lazy loading
- Interactive animated particle signature
- Smooth text animations with Framer Motion
- Call-to-action buttons with hover effects

### Interactive Elements

- **Custom Cursor**: Follows mouse with smooth animations
- **Distortion Images**: WebGL-powered image transitions
- **Particle Systems**: GPU-accelerated animations
- **Interactive Letters**: Hover effects on text elements

### Performance Features

- Lazy loading of heavy 3D components
- Optimized Three.js rendering
- Minimal bundle size with tree shaking
- Code splitting for better performance

## 📱 Responsive Design

- **Mobile-first** approach with touch-friendly interactions
- Tablet and desktop optimizations
- Optimized 3D performance across devices
- Adaptive layouts for different screen sizes

## 🔧 Development

### Code Quality

- TypeScript for type safety
- ESLint for code consistency
- Modern React patterns and hooks
- Component composition architecture

### Performance

- Vite for fast development and optimized builds
- Code splitting and lazy loading
- Optimized asset loading
- Minimal runtime overhead

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 👨‍💻 About the Developer

**Dawit Haile** - Full Stack Architect from Addis Ababa, Ethiopia

- 🔧 5+ years of experience
- 📊 50+ projects delivered
- 😊 20+ happy clients
- 🎯 99% code quality standard

Specializing in engineering digital experiences where performance meets high-fidelity interactive design.

## 📞 Contact

- **Email**: [your.email@example.com](mailto:your.email@example.com)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

Built with ❤️ using React, TypeScript, and Three.js
