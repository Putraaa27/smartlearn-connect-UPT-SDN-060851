import { GraduationCap, Mail, Phone, Globe, Camera, Share2 } from "lucide-react";
import { SCHOOL } from "@/lib/school-data";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t bg-card/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="size-10 rounded-xl gradient-primary grid place-items-center shadow-glow">
                <GraduationCap className="size-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-bold">{SCHOOL.shortName}</div>
                <div className="text-xs text-muted-foreground">Smart School Dashboard</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              {SCHOOL.name} — sekolah dasar negeri yang berdiri sejak {SCHOOL.established} di Kota Medan.
              Berkomitmen menghadirkan pendidikan dasar yang berkualitas dan berkarakter.
            </p>
            <div className="mt-4 flex gap-2">
              {[Camera, Share2, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 grid place-items-center rounded-xl glass hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold mb-3">Kontak</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5" /> info@sdn060851.sch.id</li>
              <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5" /> (061) 000-0000</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-3">Tautan</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">Tentang</a></li>
              <li><a href="#facilities" className="hover:text-foreground">Fasilitas</a></li>
              <li><a href="#location" className="hover:text-foreground">Lokasi</a></li>
              <li><a href="/dashboard" className="hover:text-foreground">Dashboard</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {SCHOOL.name}. NPSN {SCHOOL.npsn}.</div>
          <div>Dibangun dengan ❤️ untuk pendidikan Indonesia.</div>
        </div>
      </div>
    </footer>
  );
}
