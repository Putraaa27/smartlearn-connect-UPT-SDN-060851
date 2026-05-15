import { Link } from "@tanstack/react-router";
import { Home, LayoutDashboard, MapPin, Image, Info } from "lucide-react";

const items = [
  { icon: Home, label: "Beranda", href: "/#hero", isLink: false },
  { icon: Info, label: "Tentang", href: "/#about", isLink: false },
  { icon: Image, label: "Galeri", href: "/#gallery", isLink: false },
  { icon: MapPin, label: "Lokasi", href: "/#location", isLink: false },
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", isLink: true },
];

export function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-3 inset-x-3 z-40 glass-strong rounded-2xl shadow-elegant">
      <div className="flex items-center justify-between px-2 py-1.5">
        {items.map((it) =>
          it.isLink ? (
            <Link
              key={it.label}
              to={it.href}
              className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl text-[10px] text-muted-foreground hover:text-primary"
            >
              <it.icon className="size-5" />
              {it.label}
            </Link>
          ) : (
            <a
              key={it.label}
              href={it.href}
              className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl text-[10px] text-muted-foreground hover:text-primary"
            >
              <it.icon className="size-5" />
              {it.label}
            </a>
          ),
        )}
      </div>
    </nav>
  );
}
