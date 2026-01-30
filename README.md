# React + TypeScript + Vite + Tailwind CSS Template

A modern React frontend template built with TypeScript, Vite, and Tailwind CSS, ready for production.

## Features

- ⚡️ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React version
- 🔷 **TypeScript** - Type safety
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📏 **ESLint** - Code linting
- 💅 **Prettier** - Code formatting (with Tailwind plugin)
- 📁 **Organized Structure** - Pre-configured folder structure for scalability

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

Run ESLint:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint:fix
```

### Format Code

Format code with Prettier:

```bash
npm run format
```

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── types/          # TypeScript type definitions
├── App.tsx         # Main App component
├── main.tsx        # Application entry point
└── index.css       # Global styles with Tailwind directives
```

## Tailwind CSS

This template includes Tailwind CSS v3 with automatic class sorting via Prettier plugin.

Custom configurations can be added in `tailwind.config.js`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## License

MIT
