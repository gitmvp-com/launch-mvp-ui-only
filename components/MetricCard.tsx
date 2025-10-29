"use client";

import { motion } from "framer-motion";
import { Metric } from "@/types/index";

interface MetricCardProps {
  metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all"
    >
      <div className="text-3xl mb-3">{metric.icon}</div>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{metric.label}</p>
      <p className="text-3xl font-bold">{metric.value}</p>
    </motion.div>
  );
}
