import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Waves,
  Bed,
  Utensils,
  Music,
  Gamepad2,
  Flame,
  TreePine,
  Car,
  Wifi,
  Shield,
  Clock,
  Users,
  Star
} from "lucide-react";

const Amenities = () => {
  const mainAmenities = [
    {
      icon: Waves,
      title: "Infinity Swimming Pool",
      description: "Crystal clear infinity pool with stunning views, perfect for relaxation and recreation. Open all day with poolside service available.",
      features: ["Infinity edge design", "Crystal clear water", "Poolside seating", "Pool lighting"]
    },
    {
      icon: Bed,
      title: "Luxury Rooms & Suites",
      description: "Spacious, elegantly designed rooms with modern amenities and comfortable furnishing for a perfect stay.",
      features: ["King-size beds", "AC & heating", "Premium bedding", "En-suite bathrooms"]
    },
    {
      icon: Utensils,
      title: "Pure Veg Restaurant",
      description: "Delicious vegetarian cuisine prepared with fresh, organic ingredients in our fully equipped kitchen.",
      features: ["Fresh organic ingredients", "Traditional recipes", "Modern cooking", "Dietary accommodations"]
    },
    {
      icon: Music,
      title: "DJ/Music Area",
      description: "Professional sound system and dedicated space for music and entertainment during your celebrations.",
      features: ["Professional sound system", "DJ console", "Dance floor", "Lighting effects"]
    },
    {
      icon: Gamepad2,
      title: "Indoor & Outdoor Games",
      description: "Various recreational activities to keep everyone entertained throughout your stay.",
      features: ["Outdoor sports", "Indoor games", "Board games", "Recreation equipment"]
    },
    {
      icon: Flame,
      title: "Bonfire Space",
      description: "Cozy bonfire area perfect for evening gatherings, storytelling, and creating memorable moments.",
      features: ["Safe fire pit", "Seating arrangement", "Firewood provided", "Evening ambiance"]
    },
    {
      icon: TreePine,
      title: "Large Green Lawn",
      description: "Expansive green lawn area perfect for outdoor activities, events, and enjoying the natural surroundings.",
      features: ["Well-maintained grass", "Shade trees", "Event space", "Natural beauty"]
    },
    {
      icon: Car,
      title: "Ample Parking",
      description: "Secure parking space for multiple vehicles with easy access to the main building.",
      features: ["Multiple car spaces", "Secure area", "Easy access", "24/7 availability"]
    }
  ];

  const additionalFeatures = [
    { icon: Wifi, title: "High-Speed WiFi", description: "Complimentary wireless internet throughout the property" },
    { icon: Shield, title: "24/7 Security", description: "Professional security staff ensuring your safety and peace of mind" },
    { icon: Clock, title: "24/7 Room Service", description: "Round-the-clock service for all your needs and requirements" },
    { icon: Users, title: "Event Hosting", description: "Professional event management for parties and celebrations" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-verde-gold/20 text-verde-gold border-verde-gold/30">
            <Star className="w-4 h-4 mr-2" />
            Premium Facilities
          </Badge>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-verde-primary">
            Our Amenities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive range of luxury amenities and facilities that make 
            Verde Vista Farmhouse the perfect destination for your getaway.
          </p>
        </div>

        {/* Main Amenities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mainAmenities.map((amenity, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-verde-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <amenity.icon className="w-6 h-6 text-verde-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{amenity.title}</CardTitle>
                    <p className="text-muted-foreground">{amenity.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {amenity.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-verde-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-verde-primary">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="w-10 h-10 mx-auto mb-4 text-verde-primary" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlight Section */}
        <div className="bg-gradient-to-r from-verde-primary to-verde-primary-light text-white rounded-2xl p-8 md:p-12 text-center mb-16">
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Everything You Need for the Perfect Stay
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            From luxury accommodations to recreational facilities, Verde Vista Farmhouse 
            offers everything you need for an unforgettable experience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-white/80">Luxury Rooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-white/80">Amenities</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Pure Veg</div>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/booking">
              Book Your Stay Now
            </Link>
          </Button>
        </div>

        {/* Pure Veg Commitment */}
        <div className="bg-verde-secondary/20 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Utensils className="w-16 h-16 mx-auto mb-6 text-verde-primary" />
            <h2 className="font-playfair text-2xl font-bold mb-4 text-verde-primary">
              100% Pure Vegetarian Experience
            </h2>
            <p className="text-muted-foreground mb-6">
              Verde Vista Farmhouse is committed to providing a completely pure vegetarian environment. 
              All our food preparation, dining areas, and kitchen facilities maintain the highest 
              standards of vegetarian cuisine, ensuring a wholesome and healthy dining experience.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary">Organic Ingredients</Badge>
              <Badge variant="secondary">Fresh Preparations</Badge>
              <Badge variant="secondary">Traditional Recipes</Badge>
              <Badge variant="secondary">Healthy Options</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;