import { motion } from "framer-motion";
import heroImg from "@/assets/hero-school.jpg";

const images = [
  { src: heroImg, alt: "Siswa SD berseragam merah putih di halaman sekolah", span: "lg:col-span-2 lg:row-span-2" },
  { src: heroImg, alt: "Bendera Indonesia di tiang sekolah", span: "" },
  { src: heroImg, alt: "Bangunan sekolah dengan atap merah", span: "" },
  { src: heroImg, alt: "Halaman sekolah yang hijau", span: "lg:col-span-2" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            Galeri
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Suasana <span className="text-gradient">Sekolah</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:auto-rows-[180px]">
          {images.map((im, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl shadow-soft group ${im.span}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
