# Patchwork Pride Project Structure

This document outlines the intended layout for a small React + Vite + Tailwind project. The directory tree is designed to be approachable for beginners while leaving room to grow.

```
patchwork-pride/
├── public/
│   ├── index.html        # Vite entry HTML file
│   └── flags/            # Static flag images accessible at runtime
├── src/
│   ├── assets/           # Local images or fonts used in the app
│   ├── components/       # Reusable UI pieces
│   ├── data/             # JSON or TypeScript modules with flag data
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Tailwind setup and any global CSS
│   ├── App.tsx           # Root component
│   └── main.tsx          # Vite entry point that mounts React
├── .eslintrc.cjs         # Linting rules
├── .prettierrc           # Formatting configuration
├── tailwind.config.ts    # Tailwind customization
├── tsconfig.json         # TypeScript options
└── vite.config.ts        # Vite build and plugin settings
```

## Folder Purpose

- **public/** – Contains static files served as-is. The `flags` subfolder holds images or SVGs for each LGBTQ+ flag.
- **src/assets/** – Additional local assets imported by the app.
- **src/components/** – React components such as `FlagCard`, `Modal`, and shared UI elements.
- **src/data/** – Data sources that drive the UI. Keeping data in one place makes components simpler.
- **src/hooks/** – Custom hooks for reusable logic.
- **src/styles/** – Global styles including the Tailwind base import. Can grow to include variables or custom utilities.
- **App.tsx** – The top-level component that defines routes and layout.
- **main.tsx** – Bootstraps the React application and registers any global providers.

## Developer Experience

### ESLint
A consistent ESLint configuration helps keep code quality high. The project uses a base config extending `eslint:recommended`, `plugin:react/recommended`, and `plugin:@typescript-eslint/recommended`. Rules can be tweaked as the codebase evolves.

### Prettier
Formatting is handled by Prettier to maintain a uniform style across contributors. Run Prettier as a pre-commit hook or manually with `npm run format`.

### Tailwind Styling
`tailwind.config.ts` defines design tokens and any custom utilities. Global styles live in `src/styles/tailwind.css`, imported once in `main.tsx`. Components rely on Tailwind classes for styling rather than custom CSS files.

### TypeScript
`tsconfig.json` enables strict type checking and sets up path aliases like `@/components` for cleaner imports. This helps avoid deeply nested relative paths as the project scales.

### Vite Configuration
`vite.config.ts` can define aliases matching `tsconfig.json` and include plugins such as React Refresh or SVGR for importing SVGs as components.

---
This structure provides a solid foundation for Patchwork Pride, keeping the layout easy to navigate while allowing for future enhancements.
