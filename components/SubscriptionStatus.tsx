"use client";

import { CheckCircle, Calendar } from "lucide-react";
import { mockSubscription } from "@/utils/mockData";
import { motion } from "framer-motion";

export function SubscriptionStatus() {
  return (
    <motion.div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-500" />
            Subscription Active
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Your premium membership is active
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Current Plan</p>
          <p className="text-2xl font-bold">{mockSubscription.plan}</p>
        </div>
        <div>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Price</p>
          <p className="text-2xl font-bold">{mockSubscription.price}</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Next billing date: {mockSubscription.nextBillingDate}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-3">Included Features</h3>
        <ul className="grid md:grid-cols-2 gap-3">
          {mockSubscription.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
          Manage Subscription
        </button>
        <button className="px-6 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-semibold">
          View Invoice
        </button>
      </div>
    </motion.div>
  );
}
