import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SCHOOL } from "@/lib/school-data";

const facts = [
  ["NPSN", SCHOOL.npsn],
  ["Akreditasi", SCHOOL.accreditation],
  ["Status", SCHOOL.status],
  ["Kurikulum", SCHOOL.curriculum],
  ["Hari Operasional", SCHOOL.days],
  ["Jam Operasional", SCHOOL.hours],
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              Tentang Sekolah
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold">
              Pendidikan Dasar <span className="text-gradient">Berkarakter</span> di Jantung Kota Medan
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              {SCHOOL.name} berdiri sejak {SCHOOL.established}, melayani pendidikan dasar
              berkualitas dengan kurikulum {SCHOOL.curriculum}. Berlokasi di {SCHOOL.address},
              sekolah kami berkomitmen membentuk siswa yang cerdas, berkarakter, dan siap
              menghadapi era digital.
            </p>

            <ul className="mt-6 space-y-2">
              {[
                "Lingkungan belajar yang aman dan ramah anak",
                "Tenaga pengajar berdedikasi",
                "Fasilitas dasar lengkap & terawat",
                "Listrik dan jaringan internet tersedia",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="size-5 text-success mt-0.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 shadow-elegant"
          >
            <div className="grid grid-cols-2 gap-6">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{k}</div>
                  <div className="font-display font-semibold text-lg mt-1">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
