"use client";

import { AlertCircle, Shield, Bell, Eye } from "lucide-react";
import { motion } from "framer-motion";

export function AccountManagement() {
  return (
    <motion.div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800">
      <h2 className="text-2xl font-bold mb-6">Security & Privacy</h2>
      
      <div className="space-y-6">
        {/* Change Password */}
        <div className="pb-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Password</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Change your password regularly to keep your account secure
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm">
              Change
            </button>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="pb-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Two-Factor Authentication</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Add an extra layer of security to your account
                </p>
              </div>
            </div>
            <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-semibold text-sm">
              Enable
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="pb-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Bell className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email Notifications</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Manage your notification preferences
                </p>
              </div>
            </div>
            <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-semibold text-sm">
              Manage
            </button>
          </div>
        </div>

        {/* Delete Account */}
        <div>
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-red-600 dark:text-red-400">Delete Account</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Permanently delete your account and all associated data
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
