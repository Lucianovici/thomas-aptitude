# Thomas Aptitude Test

A React-based aptitude test application built with Vite that simulates the Thomas General Intelligence Assessment (GIA) test.

## Test Overview

This application simulates five cognitive tasks from the Thomas GIA test:

1. **Reasoning Task**: Problem-solving questions comparing relationships between people (e.g., "who is heavier?", "who is brighter?").
2. **Perceptual Speed**: Quick identification of matching letter pairs, testing speed and accuracy in pattern recognition.
3. **Number Speed & Accuracy**: Mental arithmetic task requiring quick comparison of number distances and relationships.
4. **Word Meaning**: Vocabulary assessment where you identify the odd word out from related terms.
5. **Spatial Visualisation**: Mental rotation task testing ability to match and compare rotated symbols.

Each task includes practice questions and is timed, typically taking 30-45 minutes to complete all five sections.

Find more info about this at [thomas-aptitude.md](docs/thomas-aptitude.md)

Or the original official Thomas PDF guide [here](https://www.thomas.co/sites/default/files/thomas-files/2022-09/Aptitude%20Example%20Booklet_2021%20V1.pdf)

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd thomas-aptitude
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Tech Stack

This project uses:

- [React](https://reactjs.org/) - UI Framework
- [Vite](https://vitejs.dev/) - Build tool and development server

## Vite + React

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
