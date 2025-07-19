import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wifi, Car, Coffee, Star, Users } from "lucide-react";

const hostels = [
  {
    id: 1,
    name: "Backpacker Panda Bangalore",
    priceRange: "₹800-1200",
    location: "Koramangala",
    rating: 4.5,
    amenities: ["Free WiFi", "Parking", "Cafe", "Common Area"],
    description: "Modern hostel with comfortable dorms and private rooms in the heart of startup district.",
    reviews: 1248,
    type: "Hostel"
  },
  {
    id: 2,
    name: "zostel Bangalore",
    priceRange: "₹900-1500",
    location: "Indiranagar",
    rating: 4.6,
    amenities: ["Free WiFi", "Cafe", "Events", "Rooftop"],
    description: "Vibrant community hostel perfect for solo travelers and digital nomads.",
    reviews: 2156,
    type: "Hostel"
  },
  {
    id: 3,
    name: "Mad Monkey Hostel",
    priceRange: "₹700-1000",
    location: "MG Road",
    rating: 4.3,
    amenities: ["Free WiFi", "Bar", "Tours", "Lockers"],
    description: "Social hostel with great atmosphere near shopping and nightlife areas.",
    reviews: 892,
    type: "Hostel"
  },
  {
    id: 4,
    name: "Bunk Hostel",
    priceRange: "₹600-900",
    location: "Jayanagar",
    rating: 4.4,
    amenities: ["Free WiFi", "Kitchen", "Garden", "Bikes"],
    description: "Budget-friendly hostel with homely atmosphere and helpful staff.",
    reviews: 673,
    type: "Budget Stay"
  },
  {
    id: 5,
    name: "Jugaad Hostels",
    priceRange: "₹750-1100",
    location: "HSR Layout",
    rating: 4.7,
    amenities: ["Free WiFi", "Coworking", "Gym", "Meals"],
    description: "Tech-friendly hostel catering to young professionals and startups.",
    reviews: 1045,
    type: "Co-living"
  },
  {
    id: 6,
    name: "Stops Hostel",
    priceRange: "₹650-950",
    location: "Whitefield",
    rating: 4.2,
    amenities: ["Free WiFi", "Shuttle", "Games", "Terrace"],
    description: "Convenient location near IT corridor with modern facilities.",
    reviews: 567,
    type: "Hostel"
  }
];

const getAmenityIcon = (amenity: string) => {
  switch (amenity) {
    case "Free WiFi":
      return <Wifi className="h-3 w-3" />;
    case "Parking":
    case "Shuttle":
      return <Car className="h-3 w-3" />;
    case "Cafe":
    case "Bar":
    case "Kitchen":
    case "Meals":
      return <Coffee className="h-3 w-3" />;
    default:
      return <Users className="h-3 w-3" />;
  }
};

const HostelsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-accent-light/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-accent text-accent">
            <Users className="h-4 w-4 mr-1" />
            Accommodation
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Affordable Hostels & Stays
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comfortable and budget-friendly accommodation options for every type of traveler
          </p>
        </div>

        {/* Hostels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hostels.map((hostel, index) => (
            <Card 
              key={hostel.id} 
              className="group hover-lift border-0 bg-white shadow-soft overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Badge className="bg-accent/10 text-accent border-accent/20 mb-2 text-xs">
                      {hostel.type}
                    </Badge>
                    <h3 className="font-semibold text-lg text-foreground line-clamp-1">
                      {hostel.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-right">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium text-sm">{hostel.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{hostel.location}</span>
                  <span className="text-xs">({hostel.reviews} reviews)</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {hostel.description}
                </p>
                
                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {hostel.amenities.slice(0, 4).map((amenity, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full"
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                
                {/* Price and Booking */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-secondary">
                      {hostel.priceRange.split('-')[0]}
                    </span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </div>
                  <Button className="orange-gradient hover-glow text-sm px-6">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="blue-gradient text-white px-8 py-3 rounded-full font-semibold hover-glow transition-all duration-300 hover:scale-105">
            View All Accommodations
          </button>
        </div>
      </div>
    </section>
  );
};

export default HostelsSection;