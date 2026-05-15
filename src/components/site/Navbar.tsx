import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, LayoutDashboard, Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SCHOOL } from "@/lib/school-data";

const NAV = [
  { label: "Beranda", href: "/#hero" },
  { label: "Tentang", href: "/#about" },
  { label: "Sejarah", href: "/#timeline" },
  { label: "Fasilitas", href: "/#facilities" },
  { label: "Galeri", href: "/#gallery" },
  { label: "Lokasi", href: "/#location" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass-strong shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5">
            <div className="relative">
              <div className="size-10 rounded-xl gradient-primary grid place-items-center shadow-glow">
                <GraduationCap className="size-5 text-primary-foreground" />
              </div>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-display font-bold text-sm">{SCHOOL.shortName}</div>
              <div className="text-[10px] text-muted-foreground">Smart School Dashboard</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent/50"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Link to="/dashboard" className="hidden sm:block">
              <Button className="gradient-primary border-0 shadow-soft hover:shadow-glow transition-all">
                <LayoutDashboard className="size-4" />
                Dashboard
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 glass-strong rounded-2xl p-2 shadow-elegant"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm hover:bg-accent/60"
              >
                {n.label}
              </a>
            ))}
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-primary"
            >
              Dashboard Analytics
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
