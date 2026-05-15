import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/school-data";

export function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Perjalanan Kami
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Sejarah <span className="text-gradient">Sekolah</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Lebih dari satu abad mengabdi untuk pendidikan dasar di Kota Medan.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 -translate-x-1/2" />

          <div className="space-y-10">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative flex md:items-center gap-4 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-4 rounded-full gradient-primary shadow-glow ring-4 ring-background" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-strong rounded-2xl p-5 shadow-soft">
                    <div className="text-xs font-bold text-primary">{t.year}</div>
                    <div className="font-display font-semibold text-lg mt-1">{t.title}</div>
                    <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
