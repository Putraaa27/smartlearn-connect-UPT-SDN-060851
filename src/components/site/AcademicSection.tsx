import { motion } from "framer-motion";
import { GraduationCap, Calendar, Clock, Award } from "lucide-react";
import { SCHOOL } from "@/lib/school-data";

const items = [
  { icon: GraduationCap, title: "Kurikulum", value: SCHOOL.curriculum, desc: "Pembelajaran tematik & berbasis karakter." },
  { icon: Award, title: "Akreditasi", value: SCHOOL.accreditation, desc: "Diakui kualitas pendidikannya." },
  { icon: Calendar, title: "Hari Belajar", value: SCHOOL.days, desc: "Enam hari aktif belajar." },
  { icon: Clock, title: "Jam Belajar", value: SCHOOL.hours, desc: "Sesi pagi hingga siang hari." },
];

export function AcademicSection() {
  return (
    <section id="academic" className="relative py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Akademik
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Informasi <span className="text-gradient">Akademik</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong rounded-3xl p-6 shadow-soft"
            >
              <div className="size-12 rounded-2xl gradient-primary grid place-items-center text-primary-foreground shadow-glow">
                <it.icon className="size-5" />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">{it.title}</div>
              <div className="font-display font-bold text-xl mt-0.5">{it.value}</div>
              <p className="mt-3 text-xs text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
