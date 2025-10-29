"use client";

import Image from "next/image";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { ProfileCard } from "@/components/ProfileCard";
import { AccountManagement } from "@/components/AccountManagement";
import { motion } from "framer-motion";
import { mockUser } from "@/utils/mockData";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <TopBar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-2">Profile</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Manage your account settings and preferences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ProfileCard user={mockUser} />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Personal Information */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    value={mockUser.name}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    value={mockUser.email}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Member Since</label>
                  <input
                    type="text"
                    value={mockUser.joinDate}
                    readOnly
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Account Management */}
            <AccountManagement />
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
