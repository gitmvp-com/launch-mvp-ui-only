# LaunchMVP - UI Only Demo

A modern Next.js MVP with UI-only features - no backend integrations. Perfect for showcasing design and UX.

**Live Demo:** [View on GitHub](https://github.com/gitmvp-com/launch-mvp-ui-only)

## Features

- Beautiful UI Components with Tailwind CSS
- Dark Mode Support
- Fully Responsive Design
- Modern Animations with Framer Motion
- Dashboard UI with Mock Data
- Profile Management Interface
- Pricing Page

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/gitmvp-com/launch-mvp-ui-only.git
cd launch-mvp-ui-only
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
├── app/
│   ├── dashboard/          # Dashboard page
│   ├── profile/            # Profile page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable UI components
├── contexts/
│   └── ThemeContext.tsx    # Dark mode context
├── utils/
│   └── mockData.ts         # Mock data
├── types/
│   └── index.ts            # TypeScript types
└── package.json
```

## Pages

**Home** - Landing page with hero, features, and pricing
**Dashboard** - Dashboard with metrics and status cards
**Profile** - User profile and account settings

## Built With

- Next.js 15
- React 19
- TypeScript 5
- Tailwind CSS 3
- Framer Motion 12
- Lucide React (icons)
- Headless UI (components)

## Customization

Edit `tailwind.config.ts` to change colors and `utils/mockData.ts` to update mock data.

## Available Scripts

- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm start` - Production server
- `npm run lint` - ESLint

## Deployment

Push to GitHub and deploy to Vercel, Netlify, Railway, or any Node.js host.

## Notes

- UI-only demo with no backend or database
- All data is mock data for demonstration
- Perfect for portfolios and showcasing design skills

## License

MIT License

## Support

Check [GitHub Issues](https://github.com/gitmvp-com/launch-mvp-ui-only/issues) for questions or create a new issue.