# Rizz Pharma - UI Design

A modern, responsive pharmaceutical e-commerce interface built with React, TypeScript, and Vite.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository (if applicable)
# git clone <repository-url>
# cd rizzuidesign

# Install dependencies
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📂 Project Structure

```text
rizzuidesign/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── assets/          # Project assets
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Base UI components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Product.tsx
│   │   └── ...
│   ├── icon/            # Custom SVG icon components
│   ├── lib/             # Utilities and API integration
│   │   ├── api.ts       # API service functions
│   │   ├── animations.ts # Motion/Animation variants
│   │   └── utils.ts     # Helper functions
│   ├── pages/           # Main page components
│   │   └── Home.tsx
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles
│   └── App.css          # Component-specific styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```


## 📝 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build locally.
