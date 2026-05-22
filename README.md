# ✦ Nabe Starter Kit ✦

<div align="center">
  <h3>Modern. Minimal. Animated.</h3>
  <p>The definitive foundation for high-end web experiences, engineered for speed and sophisticated motion.</p>

  <p>
    <a href="https://gsapstarter.vercel.app/"><strong>Live Demo</strong></a> •
    <a href="https://www.npmjs.com/package/gsap-starter-kit"><strong>NPM Package</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/Tailwind_CSS_v4-000000?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/GSAP-000000?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </p>
</div>

---

## 🚀 Quick Start

Instantly spin up a fresh Next.js environment bundled with GSAP animation workflows and Lenis smooth scrolling.

### Installation

Generate your project folder using npx:

```bash
npx gsap-starter-kit your-project-name
```

### Development

Once the project is generated, navigate to the folder and start the dev server:

```bash
cd your-project-name
npm install
npm run dev
```

---

## ✨ Key Features

- 🎭 **GSAP Workflows**: Pre-configured timeline management and page transition utilities.
- 🌊 **Smooth Scrolling**: Integrated with **Lenis** for a premium, buttery-smooth feel.
- 🎨 **Tailwind v4**: Utilizing the latest CSS-first configuration and high-performance styling.
- 🅰️ **Custom Typography**: Premium local font integration including _Poppins_ and _Roboto Slab_.
- 📱 **Fully Responsive**: Crafted for a seamless experience across all device sizes.

---

## 🏗️ Project Structure

```bash
├── app/              # Next.js App Router
│   ├── Components/   # Reusable UI Components (Hero, Navbar, Footer)
│   ├── documentation/# Built-in Documentation Route
│   ├── contact/      # Minimalist Contact Route
│   ├── utils/        # Animation & Helper Utilities
│   └── globals.css   # Tailwind v4 Base Styles
└── public/           # Static Assets (Local Fonts)
```

---

## �️ Customization & Cleanup

The Nabe Starter Kit is designed to be modular. You can keep what you need and remove what you don't.

| Component         | How to Remove                                                               |
| :---------------- | :-------------------------------------------------------------------------- |
| **Contact Page**  | Delete the `app/contact/` folder.                                           |
| **Documentation** | Delete the `app/documentation/` folder.                                     |
| **Hero Section**  | Remove `<Hero />` from `app/page.tsx` and delete `app/Components/hero.tsx`. |
| **Global UI**     | Remove `<Navbar />` or `<Footer />` from `app/layout.tsx`.                  |
| **Home Content**  | Modify or clear the return statement in `app/page.tsx`.                     |

---

<div align="center">
  <p>Built with ✦ by <a href="https://www.linkedin.com/in/nabeel-dev/">Nabeel Mustafa</a></p>
  <p>
    <a href="https://github.com/nabeelmustafaskp">GitHub</a> •
    <a href="https://www.linkedin.com/in/nabeel-dev/">LinkedIn</a>
  </p>
</div>
