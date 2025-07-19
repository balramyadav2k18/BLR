import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import foodCourtImage from "@/assets/food-court.jpg";
import { Star, MapPin, Clock, Utensils } from "lucide-react";

const foodPlaces = [
  {
    id: 1,
    name: "VV Puram Food Street",
    image: foodCourtImage,
    cuisine: "Street Food",
    rating: 4.6,
    priceRange: "₹50-200",
    location: "Basavanagudi",
    speciality: "Dosa, Idli, Vada",
    timing: "6 AM - 11 PM"
  },
  {
    id: 2,
    name: "Brigade Road Food Courts",
    image: foodCourtImage,
    cuisine: "Multi-Cuisine",
    rating: 4.4,
    priceRange: "₹200-500",
    location: "Brigade Road",
    speciality: "Global Cuisines",
    timing: "10 AM - 11 PM"
  },
  {
    id: 3,
    name: "Mavalli Tiffin Rooms (MTR)",
    image: foodCourtImage,
    cuisine: "South Indian",
    rating: 4.8,
    priceRange: "₹100-300",
    location: "Lalbagh",
    speciality: "Traditional Breakfast",
    timing: "6:30 AM - 2 PM"
  },
  {
    id: 4,
    name: "Commercial Street Eateries",
    image: foodCourtImage,
    cuisine: "Mixed",
    rating: 4.3,
    priceRange: "₹80-250",
    location: "Commercial Street",
    speciality: "Chaat, Juice",
    timing: "9 AM - 10 PM"
  }
];

const FoodSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary-light/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-secondary text-secondary">
            <Utensils className="h-4 w-4 mr-1" />
            Culinary Journey
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Best Food Courts & Eateries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Savor authentic South Indian flavors and international cuisines at Bangalore's most beloved food destinations
          </p>
        </div>

        {/* Food Places Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodPlaces.map((place, index) => (
            <Card 
              key={place.id} 
              className="group hover-lift border-0 bg-white shadow-soft overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="orange-gradient text-white font-medium text-xs">
                    {place.cuisine}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium">{place.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2 text-foreground line-clamp-1">
                  {place.name}
                </h3>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-accent" />
                    <span className="line-clamp-1">{place.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-accent" />
                    <span className="line-clamp-1">{place.timing}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-secondary text-sm">
                    {place.priceRange}
                  </span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {place.speciality}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="orange-gradient text-white px-8 py-3 rounded-full font-semibold hover-glow transition-all duration-300 hover:scale-105">
            Explore More Food Places
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;