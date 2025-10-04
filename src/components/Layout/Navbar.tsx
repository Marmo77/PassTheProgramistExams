// src/components/Layout/Navbar.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AppConstants } from "@/data/constants";
import { GraduationCap, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const themeColors = [
    {
      name: "light",
      bg: "#fff",
      text: "#000",
    },
    {
      name: "dark",
      bg: "#000",
      text: "#fff",
    },
  ];

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    // const prefersDark = window.matchMedia(
    //   "(prefers-color-scheme: dark)"
    // ).matches;

    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const themeChangeNotification = (theme: string) => {
    const themeName = theme === "light" ? "jasny" : "ciemny";

    const themeColor = themeColors.find((t) => t.name === theme);

    toast.success("Zmieniono motyw na " + themeName + "!", {
      duration: 2000,
      richColors: false,
      position: "bottom-right",
      style: {
        background: themeColor?.bg,
        color: themeColor?.text,
        border: "1px solid " + themeColor?.bg,
      },
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    themeChangeNotification(newTheme);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="flex h-16 w-6xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <Link to={"/"}>
            <h1 className="text-primary font-semibold hover:text-blue-600 transition-colors">
              {AppConstants.Website.Title}
            </h1>
          </Link>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            v{AppConstants.Website.version}
          </Badge>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to={AppConstants.Navigation.Theory}
            className="text-primary/90 hover:text-primary transition-colors font-medium"
          >
            Teoria
          </Link>
          <Link
            to={AppConstants.Navigation.Practice}
            className="text-primary/90 hover:text-primary transition-colors font-medium"
          >
            Praktyka
          </Link>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="hidden sm:inline-flex"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>

          {/* CTA Button */}
          <Link
            to={AppConstants.Navigation.Theory}
            className="flex items-center"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105">
              Rozpocznij test
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
