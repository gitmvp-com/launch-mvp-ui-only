export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  joinDate: string;
}

export interface Subscription {
  status: "active" | "trial" | "inactive";
  plan: string;
  price: string;
  nextBillingDate: string;
  features: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface Metric {
  label: string;
  value: string;
  icon: string;
}
