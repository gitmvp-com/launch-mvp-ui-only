# LaunchMVP - UI Only Demo

A modern Next.js MVP with UI-only features - no backend integrations. Perfect for showcasing design and UX.

## Features

- Beautiful UI components with Tailwind CSS
- Dark mode support with automatic theme switching
- Fully responsive design for all devices
- Modern animations with Framer Motion
- Next.js 15 with App Router
- Dashboard with mock data
- User profile management page
- Pricing page

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/gitmvp-com/launch-mvp-ui-only.git
cd launch-mvp-ui-only
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
├── app/
│   ├── dashboard/        # Dashboard page
│   ├── profile/          # Profile page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Styles
├── components/           # Reusable components
├── contexts/             # Theme context
├── utils/                # Mock data
└── types/                # TypeScript types
```

## Pages

- **Home** (/) - Landing page with hero, features, and pricing
- **Dashboard** (/dashboard) - Metrics and subscription status
- **Profile** (/profile) - User profile and account settings

## Built With

- Next.js 15
- React 19
- TypeScript 5
- Tailwind CSS 3
- Framer Motion 12
- Lucide React
- Headless UI

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Deployment

Deploy to Vercel, Netlify, Railway, or any Node.js host.

## Notes

- UI-only demo with mock data
- No backend or database required
- Great for portfolios and design showcases

## License

MIT

1. Check the [GitHub Issues](https://github.com/gitmvp-com/launch-mvp-ui-only/issues)
2. Create a new issue with details
3. Check existing documentation

## 🎯 Next Steps

Want to extend this project?

- Add real authentication with Supabase
- Integrate Stripe for payments
- Add a backend API
- Connect to a database
- Deploy to production

Enjoy building! 🚀