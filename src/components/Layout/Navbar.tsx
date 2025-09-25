import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-16 items-center max-w-7xl justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to={"/"}>
            <h1 className="text-xl font-semibold">Pass the Exam</h1>
          </Link>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            v1.0
          </Badge>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#teoria"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Teoria
          </a>
          <a
            href="#praktyka"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Praktyka
          </a>
          <a
            href="#arkusze"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Arkusze
          </a>
          <a
            href="#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            O nas
          </a>
        </nav>

        {/* CTA Button */}
        <Button size="sm" className="hidden sm:inline-flex">
          Rozpocznij test
        </Button>

        {/* Mobile menu button (implement later) */}
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
    </header>
  );
}
