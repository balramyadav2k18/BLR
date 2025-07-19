import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Phone, Mail } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary text-primary">
            <MapPin className="h-4 w-4 mr-1" />
            Location Guide
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Bangalore
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Navigate the city with ease and discover all major attractions, food courts, and accommodations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-medium overflow-hidden">
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {/* Map Placeholder with Interactive Elements */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">
                    Interactive City Map
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Explore all tourist attractions, food courts, and accommodation options on our detailed city map.
                  </p>
                  <button className="blue-gradient text-white px-6 py-3 rounded-full font-semibold hover-glow transition-all duration-300 hover:scale-105">
                    <Navigation className="h-4 w-4 mr-2 inline" />
                    Launch Map
                  </button>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-8 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-8 left-12 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-16 right-6 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </Card>
          </div>

          {/* Quick Info & Contact */}
          <div className="space-y-6">
            {/* Tourist Information */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  Tourist Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Tourist Helpline</p>
                      <p className="text-sm text-muted-foreground">1363 (24/7)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Tourism Office</p>
                      <p className="text-sm text-muted-foreground">tourism@bangalore.gov.in</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-sm">City Center</p>
                      <p className="text-sm text-muted-foreground">MG Road, Brigade Road</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  Quick Facts
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <p className="font-bold text-xl text-primary">50+</p>
                    <p className="text-xs text-muted-foreground">Attractions</p>
                  </div>
                  <div className="text-center p-3 bg-secondary/5 rounded-lg">
                    <p className="font-bold text-xl text-secondary">200+</p>
                    <p className="text-xs text-muted-foreground">Restaurants</p>
                  </div>
                  <div className="text-center p-3 bg-accent/5 rounded-lg">
                    <p className="font-bold text-xl text-accent">100+</p>
                    <p className="text-xs text-muted-foreground">Hotels</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="font-bold text-xl text-foreground">24°C</p>
                    <p className="text-xs text-muted-foreground">Avg. Temp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Best Time to Visit */}
            <Card className="border-0 shadow-soft orange-gradient">
              <CardContent className="p-6 text-white">
                <h3 className="font-semibold text-lg mb-3">
                  Best Time to Visit
                </h3>
                <p className="text-sm text-white/90 mb-2">
                  <strong>Oct - Feb:</strong> Pleasant weather (15-25°C)
                </p>
                <p className="text-sm text-white/90">
                  Perfect for outdoor activities and sightseeing!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;