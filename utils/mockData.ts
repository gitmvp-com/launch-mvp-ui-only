// Mock user data
export const mockUser = {
  id: "user_123",
  name: "Alex Johnson",
  email: "alex@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  role: "Premium Member",
  joinDate: "January 15, 2024",
};

// Mock subscription data
export const mockSubscription = {
  status: "active",
  plan: "Premium",
  price: "$29/month",
  nextBillingDate: "February 15, 2025",
  features: [
    "Unlimited projects",
    "Priority support",
    "Advanced analytics",
    "Custom integrations",
    "Team collaboration",
  ],
};

// Mock trial data
export const mockTrial = {
  daysRemaining: 14,
  startDate: "January 15, 2025",
  endDate: "February 15, 2025",
  isActive: true,
};

// Mock dashboard metrics
export const mockMetrics = [
  { label: "Total Projects", value: "12", icon: "📊" },
  { label: "Active Users", value: "4,562", icon: "👥" },
  { label: "Revenue", value: "$124,500", icon: "💰" },
  { label: "Growth", value: "+23%", icon: "📈" },
];

// Mock pricing plans
export const pricingPlans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "Community support",
      "1 team member",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Best for growing teams",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Up to 10 team members",
      "Custom integrations",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Dedicated support",
      "Custom contracts",
      "Unlimited team members",
      "SLA guarantee",
    ],
    highlighted: false,
  },
];

// Mock features
export const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Built with modern technologies for optimal performance",
  },
  {
    icon: "🔒",
    title: "Secure",
    description: "Enterprise-grade security to protect your data",
  },
  {
    icon: "🎨",
    title: "Beautiful UI",
    description: "Stunning design with dark mode support",
  },
  {
    icon: "📱",
    title: "Responsive",
    description: "Works perfectly on all devices and screen sizes",
  },
  {
    icon: "🔧",
    title: "Easy to Use",
    description: "Intuitive interface that requires minimal learning",
  },
  {
    icon: "🚀",
    title: "Scalable",
    description: "Grows with your business needs",
  },
];
