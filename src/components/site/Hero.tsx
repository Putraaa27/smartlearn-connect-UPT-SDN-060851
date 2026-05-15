import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-school.jpg";
import { SCHOOL } from "@/lib/school-data";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="UPT SD Negeri 060851 di Medan dengan siswa berseragam merah putih dan bendera Indonesia"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-mesh opacity-60" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute size-1.5 rounded-full bg-white/60"
            initial={{
              x: `${(i * 53) % 100}%`,
              y: `${(i * 37) % 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [`${(i * 37) % 100}%`, `${((i * 37) % 100) - 15}%`, `${(i * 37) % 100}%`],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white/90 text-xs font-medium mb-6">
            <Sparkles className="size-3.5" />
            AI Powered Education Platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
            Smart School Dashboard <br />
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              {SCHOOL.shortName}
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
            Platform digital sekolah dasar di {SCHOOL.city}. Jelajahi profil, fasilitas,
            sejarah, dan data sekolah secara interaktif — kapan pun, dari mana pun.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/dashboard">
              <Button size="lg" className="gradient-primary border-0 shadow-glow hover:scale-[1.02] transition-transform">
                Lihat Dashboard
                <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href="#location">
              <Button size="lg" variant="outline" className="glass border-white/40 text-white hover:bg-white/15 hover:text-white">
                <MapPin className="size-4" />
                Lokasi Sekolah
              </Button>
            </a>
          </div>

          {/* Quick stats */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
          >
            {[
              { label: "Berdiri", value: SCHOOL.established },
              { label: "Akreditasi", value: SCHOOL.accreditation },
              { label: "NPSN", value: SCHOOL.npsn },
              { label: "Luas", value: `${SCHOOL.area} m²` },
            ].map((s) => (
              <motion.div
                key={s.label}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="glass rounded-2xl p-4 text-white"
              >
                <div className="text-xs text-white/70">{s.label}</div>
                <div className="font-display font-bold text-xl mt-1">{s.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
