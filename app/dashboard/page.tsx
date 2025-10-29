"use client";

import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { MetricCard } from "@/components/MetricCard";
import { SubscriptionStatus } from "@/components/SubscriptionStatus";
import { motion } from "framer-motion";
import { mockMetrics } from "@/utils/mockData";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <TopBar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Welcome back! Here's your account overview.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {mockMetrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </motion.div>

        {/* Subscription Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SubscriptionStatus />
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mt-12"
        >
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: "Logged in", time: "2 hours ago" },
                { action: "Updated profile", time: "5 days ago" },
                { action: "Changed password", time: "1 week ago" },
                { action: "Subscribed to plan", time: "2 weeks ago" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700 last:border-0">
                  <span className="text-slate-600 dark:text-slate-400">{item.action}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-500">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Upgrade Plan
              </button>
              <button className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-semibold">
                Download Invoice
              </button>
              <button className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-semibold">
                View Documentation
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
