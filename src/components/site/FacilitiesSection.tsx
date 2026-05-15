import { motion } from "framer-motion";
import { BookOpen, Library, Toilet, FlaskConical, Wifi, Zap } from "lucide-react";
import { SCHOOL } from "@/lib/school-data";

const items = [
  { icon: BookOpen, label: "Ruang Kelas", value: SCHOOL.classrooms, ok: true },
  { icon: Library, label: "Perpustakaan", value: SCHOOL.libraries, ok: true },
  { icon: Toilet, label: "Toilet Guru", value: SCHOOL.teacherToilets, ok: true },
  { icon: Toilet, label: "Toilet Siswa", value: SCHOOL.studentToilets, ok: true },
  { icon: Wifi, label: "Internet", value: "Tersedia", ok: true },
  { icon: Zap, label: "Listrik", value: "Tersedia", ok: true },
  { icon: FlaskConical, label: "Laboratorium", value: "Belum tersedia", ok: false },
];

export function FacilitiesSection() {
  return (
    <section id="facilities" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Fasilitas
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Sarana & <span className="text-gradient">Prasarana</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong rounded-2xl p-5 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 group"
            >
              <div className={`size-10 rounded-xl grid place-items-center ${it.ok ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                <it.icon className="size-5" />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">{it.label}</div>
              <div className="font-display font-bold text-xl mt-1">{it.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
