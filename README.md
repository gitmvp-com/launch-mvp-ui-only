# LaunchMVP - UI Only Demo

A modern, beautiful Next.js MVP with UI-only features - no backend integrations. Perfect for showcasing design and UX.

**Live Demo:** [View on GitHub](https://github.com/gitmvp-com/launch-mvp-ui-only)

## Features

- **Beautiful UI Components** - Crafted with Tailwind CSS
- **Dark Mode Support** - Automatic theme switching
- **Fully Responsive** - Works on all devices
- **Modern Animations** - Built with Framer Motion
- **Professional Design** - Clean, modern aesthetics
- **Next.js 15** - Latest version with App Router
- **Dashboard UI** - Mock data and metrics
- **Profile Management** - User profile interface
- **Pricing Page** - Beautiful pricing section

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or 20+)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/gitmvp-com/launch-mvp-ui-only.git
cd launch-mvp-ui-only
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/
│   ├── dashboard/        # Dashboard page with mock metrics
│   ├── profile/          # User profile page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── TopBar.tsx        # Navigation bar
│   ├── HeroSection.tsx   # Landing page hero
│   ├── FeaturesSection.tsx # Features showcase
│   ├── PricingSection.tsx # Pricing plans
│   ├── Footer.tsx        # Footer
│   ├── DashboardMetric.tsx # Metric card component
│   ├── SubscriptionStatus.tsx # Subscription card
│   ├── ProfileCard.tsx   # User profile card
│   ├── AccountManagement.tsx # Account settings
│   └── LoadingSpinner.tsx # Loading indicator
├── contexts/
│   └── ThemeContext.tsx  # Dark mode context
├── utils/
│   └── mockData.ts       # Mock data for all pages
├── types/
│   └── index.ts          # TypeScript types
└── package.json
```

## 🎨 Pages

### Home Page (`/`)
Beautiful landing page with:
- Hero section with CTA buttons
- Features showcase (6 feature cards)
- Pricing section with 3 plans
- Footer with links and social icons

### Dashboard (`/dashboard`)
Feature-rich dashboard with:
- 4 metric cards with mock data
- Subscription status card
- Recent activity section
- Quick actions panel

### Profile (`/profile`)
User profile management with:
- Profile card with avatar
- Personal information form
- Security & Privacy settings
- Account management options

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion 12](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Headless UI](https://headlessui.com/)** - Unstyled components

## 🎨 Customization

### Colors

Edit the Tailwind config in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#3b82f6",
  secondary: "#8b5cf6",
  accent: "#ec4899",
}
```

### Mock Data

All mock data is in `utils/mockData.ts`. Edit it to customize:
- User information
- Subscription details
- Pricing plans
- Features list
- Dashboard metrics

### Theme

The app uses automatic dark mode detection. Toggle it manually in the TopBar or it respects system preferences.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

That's it! Your app is live.

### Deploy to Other Platforms

The app is a standard Next.js application and works on:
- **Netlify** - With Next.js adapter
- **Railway** - Zero config
- **Render** - Simple deployment
- **Any Node.js host** - Using `npm start`

## 📝 Notes

- This is a **UI-only demo** - no backend or database
- All data is mock data for demonstration
- Perfect for portfolios and showcasing design skills
- Can be extended with real backend services

## 🔗 Related Projects

- **[launch-mvp-stripe-nextjs-supabase](https://github.com/ShenSeanChen/launch-mvp-stripe-nextjs-supabase)** - Full-stack version with Stripe & Supabase

## 📄 License

MIT License - feel free to use this project for anything you want.

## 🙋 Support

If you have questions or issues:

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