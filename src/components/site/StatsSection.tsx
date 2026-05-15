import { motion } from "framer-motion";
import { Users, BookOpen, Building2, Wifi } from "lucide-react";
import { SCHOOL } from "@/lib/school-data";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { icon: Users, label: "Total Guru", value: SCHOOL.teachers, accent: "from-blue-500/20 to-blue-500/5" },
  { icon: BookOpen, label: "Ruang Kelas", value: SCHOOL.classrooms, accent: "from-violet-500/20 to-violet-500/5" },
  { icon: Building2, label: "Luas Sekolah", value: SCHOOL.area, suffix: " m²", accent: "from-emerald-500/20 to-emerald-500/5" },
  { icon: Wifi, label: "Tahun Berdiri", value: SCHOOL.established, accent: "from-amber-500/20 to-amber-500/5" },
];

export function StatsSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden glass-strong rounded-3xl p-6 shadow-soft hover:shadow-elegant transition-all"
            >
              <div className={`absolute -top-10 -right-10 size-32 rounded-full bg-gradient-to-br ${s.accent} blur-2xl`} />
              <s.icon className="size-6 text-primary mb-4" />
              <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
