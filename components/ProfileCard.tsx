"use client";

import Image from "next/image";
import { User } from "@/types/index";
import { Edit, LogOut } from "lucide-react";
import { motion } from "framer-motion";

interface ProfileCardProps {
  user: User;
}

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700"
    >
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-1">{user.name}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">{user.role}</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{user.email}</p>
        
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-semibold">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>
    </motion.div>
  );
}
