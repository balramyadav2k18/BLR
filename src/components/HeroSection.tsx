import { Button } from "@/components/ui/button";
import bangaloreHero from "@/assets/bangalore-hero.jpg";
import { ArrowRight, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bangaloreHero} 
          alt="Bangalore City Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-scale">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-6 w-6 text-secondary" />
            <span className="text-lg font-medium text-secondary">Namma Bengaluru</span>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the
            <span className="text-secondary block">Garden City</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of tradition and innovation in India's Silicon Valley. 
            From lush gardens to vibrant tech hubs, Bangalore awaits your exploration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="orange-gradient hover-glow text-lg px-8 py-6 font-semibold group"
            >
              Explore Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6"
            >
              Watch Video
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;