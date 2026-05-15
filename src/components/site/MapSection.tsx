import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SCHOOL } from "@/lib/school-data";

export function MapSection() {
  const query = encodeURIComponent(`${SCHOOL.name}, ${SCHOOL.address}`);
  const embed = `https://www.google.com/maps?q=${query}&output=embed`;
  const openUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <section id="location" className="relative py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
              Lokasi
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold">
              Datang & <span className="text-gradient">Berkunjung</span>
            </h2>
            <p className="mt-4 text-muted-foreground">{SCHOOL.address}</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 glass-strong rounded-2xl p-4">
                <MapPin className="size-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm font-semibold">Alamat</div>
                  <div className="text-sm text-muted-foreground">{SCHOOL.address}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={directionsUrl} target="_blank" rel="noreferrer">
                <Button className="gradient-primary border-0 shadow-soft">
                  <Navigation className="size-4" /> Petunjuk Arah
                </Button>
              </a>
              <a href={openUrl} target="_blank" rel="noreferrer">
                <Button variant="outline">
                  <ExternalLink className="size-4" /> Buka di Google Maps
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-elegant glass-strong p-2"
          >
            <iframe
              title="Peta UPT SD Negeri 060851"
              src={embed}
              className="w-full h-[420px] rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
