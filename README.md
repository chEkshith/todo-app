<div align="center">

# ✦ Todo-APP

**A modern, glassmorphic productivity app built with React, Vite, and Tailwind CSS.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-chekshith.github.io-6366f1?style=for-the-badge&logo=githubpages&logoColor=white)](https://chekshith.github.io/todo-app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<br />

<p align="center">
  <i>"Stay focused. Get things done."</i>
</p>

<p align="center">
  <a href="https://chekshith.github.io/todo-app/">
    <strong>View Live Site »</strong>
  </a>
</p>

</div>

---

## 🌟 Overview

**Todo-APP** is a sleek task management interface designed with an emphasis on fluid animations and modern visual polish. Featuring a dark-mode glassmorphic aesthetic, floating gradient background orbs, dual context-aware cursors, and local persistence, it delivers a tactile, focused user experience.

---

## ✨ Features

- **Liquid Glassmorphism UI**: Layered backdrop blur (`backdrop-blur-2xl`), frosted inner borders, and glowing translucent containers.
- **Dual Context-Aware Cursor**:
  - *Ambient Mode (Background)*: Smooth orbital indigo glow ring tracking outside the card.
  - *Precision Mode (Task Box)*: Shifts into a focused, pulsing neon-cyan target reticle when hovering inside the workspace.
- **Micro-Interactions & Hover Dynamics**:
  - Interactive bounce and shimmer on each letter of `Todo-APP`.
  - Elevation transitions and tactile scale effects across buttons, inputs, and badges.
- **Full CRUD Capabilities**:
  - Add tasks with keyboard (`Enter`) or button submission.
  - In-place task editing and completion toggling.
  - Task deletion.
- **Instant Filtering**: Filter by **All**, **Active**, and **Completed** tasks in real time.
- **Local Persistence**: Todos stay preserved in browser `localStorage` across page reloads.

---

## 📁 Project Structure

```text
todo-app/
│
├── public/                 # Static assets & favicon
│
├── src/
│   ├── components/
│   │   ├── TodoInput.jsx   # Input field and submit action
│   │   ├── TodoItem.jsx    # Individual todo item
│   │   └── TodoList.jsx    # Todo container & empty state
│   │
│   ├── App.jsx             # Main layout and state management
│   ├── main.jsx            # Application entry point
│   └── index.css           # Tailwind styles & animations
│
├── index.html              # HTML shell
├── package.json            # Scripts & dependencies
├── vite.config.js          # Vite configuration
└── README.md
```

---

## 🛠️ Built With

- [**React**](https://react.dev/) — Declarative UI and state management
- [**Vite**](https://vitejs.dev/) — Fast development server and production bundling
- [**Tailwind CSS**](https://tailwindcss.com/) — Utility-first CSS framework
- **HTML5 Local Storage** — Client-side task persistence

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

Check your versions:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/chekshith/todo-app.git
```

2. **Navigate to the project directory:**

```bash
cd todo-app
```

3. **Install dependencies:**

```bash
npm install
```

4. **Start the development server:**

```bash
npm run dev
```

5. Open the application at:

```text
http://localhost:5173
```

---

## 📦 Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deployment

This application is deployed using **GitHub Pages**.

The Vite configuration uses the repository path as the base:

```javascript
// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/todo-app/",
});
```

### Live Demo

👉 https://chekshith.github.io/todo-app/

---

## 👤 Author

### Chekshith

- 🌐 **Live Demo:** https://chekshith.github.io/todo-app/
- 💻 **GitHub:** https://github.com/chekshith

---

## 📄 License

This project is open source and available under the **MIT License**.