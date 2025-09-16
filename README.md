# Invoice Dashboard (React + Vite + TypeScript)

An invoice analytics dashboard made using React, Vite, and TypeScript. It features a modern, flexible, and scalable layout with a clean folder structure. Includes a dashboard view, income trends chart, and a Not Found page for unknown routes.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite 7
- **Routing**: React-Router-Dom
- **Charts**: Chart.js + React-Chartjs-2
- **Icons**: React Icons
- **Styling**: Tailwind CSS 4

## Routes

- `/` → `MainLayout` (renders the Dashboard)
- `*` → `NotFound` (404 page)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Notes

- The layout is designed to be flexible and scalable; adding new pages or widgets involves creating a component and registering a route.
- The folder structure is intentionally simple and clear to support growth without refactors.
