import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []); // Empty dependency array ensures it runs only on mount

  // Function to switch themes
  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch from dark to light
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // Switch from light to dark
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
      <button
          onClick={toggleTheme}
          className={cn(
              // Positioning and styling for the button
              "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
              "focus:outline-none" // Use 'focus:outline-none' instead of 'focus:outline-hidden'
          )}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
            // Show Sun icon when in dark mode (suggesting a switch to light)
            <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
            // Show Moon icon when in light mode (suggesting a switch to dark)
            <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
  );
};