import HeroSection from "@/components/HeroSection";
import AttractionsSection from "@/components/AttractionsSection";
import FoodSection from "@/components/FoodSection";
import HostelsSection from "@/components/HostelsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AttractionsSection />
      <FoodSection />
      <HostelsSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
