"use client";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 border-4 border-slate-200 dark:border-slate-700 rounded-full" />
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin" />
      </div>
    </div>
  );
}
