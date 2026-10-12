import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import LocationsSection from "@/components/locations-section";
import AboutSection from "@/components/about-section";
import OurTeamSection from "@/components/our-team-section";
import ReviewSection from "@/components/review-section";
import Footer from "@/components/footer"; // IMPORT FOOTER

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <HeroSection />
        <LocationsSection />
        <AboutSection />
        <OurTeamSection />
        <ReviewSection />
      </main>
      <Footer />
    </>
  );
}