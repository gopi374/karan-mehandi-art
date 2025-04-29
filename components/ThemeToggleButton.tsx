// ThemeToggleButton.tsx

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // Make sure you're using Lucide icons or similar

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 bg-[#FF6969] dark:bg-[#C70039] transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-[#FFF5E0]" />
      ) : (
        <Moon className="h-5 w-5 text-[#FFF5E0]" />
      )}
    </button>
  );
}
