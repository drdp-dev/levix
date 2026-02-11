# Levix - Interactive Full-Screen Presentation Framework

<div align="center">
  <img src="logo.png" alt="Levix Logo" width="120" height="120">
  
  <p><strong>A modern, interactive full-screen presentation application built with Next.js, React, and Tailwind CSS.</strong></p>
  
  <p>Create engaging presentations with smooth animations, interactive elements, and responsive design.</p>

  ![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=flat-square&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=flat-square&logo=tailwind-css)
  ![License](https://img.shields.io/badge/License-Private-red?style=flat-square)
</div>

---

## 🎯 Overview

Levix is a comprehensive presentation framework featuring interactive slides with smooth animations, quizzes, clickable cards, and engaging visual elements. The architecture supports any content domain and presentation style.

## ✨ Features

### Interactive Presentation
- **Full-screen slide navigation** with keyboard, mouse wheel, and touch support
- **4:3 aspect ratio** maintained across all screen sizes with 40px margins
- **Radial progress indicator** showing current position in presentation
- **Smooth transitions** with 1000ms animations between slides

### Rich Content Types
- **Interactive Quizzes** with retry functionality on wrong answers
- **Clickable Cards** revealing detailed explanations
- **Visual Diagrams** and charts
- **Activity Slides** for hands-on learning
- **Modal Overlays** for detailed content
- **Animated Elements** with customizable timing

### Design System
- **Flexible Color Palette**: Tailwind CSS colors for unlimited customization
- **Responsive Scaling**: Fixed 1280x960 reference canvas that scales to fit any screen
- **Consistent Typography**: Clear hierarchy with bold headings and readable body text
- **Icon System**: Lucide React icons throughout
- **Smooth Animations**: Configurable transitions and delays

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd levix

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the presentation.

### Build for Production

```bash
npm run build
npm start
```

## 🎮 Navigation Controls

- **Arrow Keys**: ↑/↓ or PageUp/PageDown to navigate slides
- **Mouse Wheel**: Scroll up/down to change slides
- **Touch**: Swipe up/down on touch devices
- **Spacebar**: Advance to next slide
- **Radial Menu**: Click on any sector to jump to that slide

## 🛠️ Technology Stack

- **Framework**: Next.js 15.1.6
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS 4.1.18
- **Icons**: Lucide React 0.563.0
- **Language**: TypeScript 5.8.2
- **Charts**: Recharts 3.7.0 (for data visualization)

## 📁 Project Structure

```
levix/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Landing page
│   │   ├── globals.css        # Global styles
│   │   └── presentations/     # Presentation routes
│   ├── components/
│   │   ├── slides/            # Individual slide components
│   │   └── RadialBackground.tsx  # Progress indicator
│   ├── App.tsx                # Main presentation component
│   └── types.ts               # TypeScript interfaces
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 📝 Customization

### Adding New Slides
1. Create a new component in `src/components/slides/`
2. Import and add to `SlideComponents` array in `src/App.tsx`
3. Update `TOTAL_SLIDES` count

### Modifying Colors
Edit the Tailwind color classes in individual slide components. The design system uses:
- Backgrounds: `-50`, `-100`, `-200`
- Borders: `-200`, `-300`, `-400`
- Text: `-700`, `-800`, `-900`, `-950`
- Icons: `-600`, `-700`

### Adjusting Timing
- Slide transitions: `duration-1000` (1000ms)
- Animation delays: `delay-[Xms]` where X is milliseconds
- Scroll lock: 1000ms in `navigate()` function

## 🐛 Known Issues & Solutions

- **Content Overflow**: Graphics in slide 11 have been optimized to h-28
- **Quiz Retry**: Fixed - users can now retry after wrong answers
- **White Space**: Resolved with 40px margins and proper aspect ratio handling

## 👨‍⚕️ Current Content Author

**Dr. Devaprasad Reddy**  
Health education evaluation content

## 🎯 Use Cases

This framework is suitable for:
- Educational presentations and lectures
- Training sessions and workshops
- Conference talks and keynotes
- Product demonstrations
- Interactive storytelling
- Any topic requiring engaging visual presentation

## 📄 License

Private - Educational Use

## 🤝 Contributing

This is a presentation tool for educational purposes. For modifications or improvements, please maintain:
- Consistent color scheme
- 4:3 aspect ratio
- Smooth animations
- Accessibility standards

---

**Version**: 0.0.0  
**Last Updated**: February 2026
