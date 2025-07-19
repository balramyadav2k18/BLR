import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import lalbaghImage from "@/assets/lalbagh.jpg";
import cubbonParkImage from "@/assets/cubbon-park.jpg";
import nandiHillsImage from "@/assets/nandi-hills.jpg";
import { MapPin, Clock, Star } from "lucide-react";

const attractions = [
  {
    id: 1,
    name: "Lalbagh Botanical Garden",
    image: lalbaghImage,
    description: "A 240-acre botanical garden with rare plants, serene lake, and the famous Glass House hosting flower shows.",
    duration: "2-3 hours",
    rating: 4.5,
    category: "Nature",
    location: "South Bangalore"
  },
  {
    id: 2,
    name: "Cubbon Park",
    image: cubbonParkImage,
    description: "Historic park in the heart of the city with walking trails, government buildings, and peaceful green spaces.",
    duration: "1-2 hours",
    rating: 4.3,
    category: "Park",
    location: "Central Bangalore"
  },
  {
    id: 3,
    name: "Nandi Hills",
    image: nandiHillsImage,
    description: "Ancient hill fortress offering breathtaking sunrise views, cool climate, and historical significance.",
    duration: "4-5 hours",
    rating: 4.7,
    category: "Hills",
    location: "60km from city"
  }
];

const AttractionsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium">
            Top Destinations
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Must-Visit Attractions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover Bangalore's most iconic destinations, from serene gardens to historic landmarks
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <Card 
              key={attraction.id} 
              className="group hover-lift border-0 card-gradient shadow-soft overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="blue-gradient text-white font-medium">
                    {attraction.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium">{attraction.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground">
                  {attraction.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {attraction.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{attraction.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{attraction.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="blue-gradient text-white px-8 py-3 rounded-full font-semibold hover-glow transition-all duration-300 hover:scale-105">
            View All Attractions
          </button>
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;