import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsSection } from "@/components/site/StatsSection";
import { AboutSection } from "@/components/site/AboutSection";
import { TimelineSection } from "@/components/site/TimelineSection";
import { FacilitiesSection } from "@/components/site/FacilitiesSection";
import { AcademicSection } from "@/components/site/AcademicSection";
import { GallerySection } from "@/components/site/GallerySection";
import { MapSection } from "@/components/site/MapSection";
import { Footer } from "@/components/site/Footer";
import { Chatbot } from "@/components/site/Chatbot";
import { MobileNav } from "@/components/site/MobileNav";
import { SCHOOL } from "@/lib/school-data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${SCHOOL.shortName} — Smart School Dashboard` },
      {
        name: "description",
        content: `Platform digital ${SCHOOL.name} di Medan. Profil, fasilitas, sejarah, lokasi, dan asisten AI.`,
      },
      { property: "og:title", content: `${SCHOOL.shortName} — Smart School Dashboard` },
      {
        property: "og:description",
        content: `Jelajahi profil dan data ${SCHOOL.name} secara interaktif.`,
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen pb-20 lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <TimelineSection />
        <FacilitiesSection />
        <AcademicSection />
        <GallerySection />
        <MapSection />
      </main>
      <Footer />
      <Chatbot />
      <MobileNav />
    </div>
  );
}
