import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Star, 
  Users, 
  Wifi, 
  Car, 
  Utensils, 
  Waves,
  TreePine,
  Music,
  Gamepad2,
  Flame,
  Calendar,
  Eye,
  MessageCircle
} from "lucide-react";
import heroImage from "@/assets/hero-farmhouse.jpg";
import poolImage from "@/assets/infinity-pool.jpg";
import roomImage from "@/assets/luxury-room.jpg";
import restaurantImage from "@/assets/restaurant.jpg";

const Index = () => {
  const features = [
    { icon: Waves, title: "Infinity Pool", description: "Crystal clear infinity swimming pool" },
    { icon: TreePine, title: "Natural Setting", description: "Surrounded by lush greenery" },
    { icon: Utensils, title: "Pure Veg Dining", description: "Delicious vegetarian cuisine" },
    { icon: Users, title: "Event Hosting", description: "Perfect for parties & gatherings" },
  ];

  const amenities = [
    { icon: Waves, name: "Infinity Swimming Pool" },
    { icon: Users, name: "Luxury Rooms & Suites" },
    { icon: Utensils, name: "Pure Veg Restaurant" },
    { icon: Music, name: "DJ/Music Area" },
    { icon: Gamepad2, name: "Indoor & Outdoor Games" },
    { icon: Flame, name: "Bonfire Space" },
    { icon: TreePine, name: "Large Green Lawn" },
    { icon: Car, name: "Ample Parking" },
  ];

  const carouselImages = [
    {
      src: "/lovable-uploads/844045a3-bfdd-4f32-be83-ad710f2bbb88.png",
      alt: "Verde Vista Farmhouse at Sunset",
      title: "Stunning Evening Views",
      description: "Beautiful architecture illuminated in golden hour"
    },
    {
      src: "/lovable-uploads/121aeb57-8ca2-4ec3-9041-4b7eaf324fe3.png",
      alt: "Aerial Pool View",
      title: "Infinity Pool Paradise",
      description: "Aerial view of our luxurious pool area with dining"
    },
    {
      src: "/lovable-uploads/b202403e-1b95-4280-9e6d-683d3ea526ee.png",
      alt: "Luxury Pool Experience",
      title: "Ultimate Relaxation",
      description: "Enjoy floating breakfast and poolside service"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-verde-gold/20 text-verde-gold border-verde-gold/30">
            Premium Nature Retreat
          </Badge>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Verde Vista Farmhouse
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            A luxurious, peaceful retreat perfect for weekend stays, parties, and unforgettable moments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-verde-primary hover:bg-verde-primary-light text-white" asChild>
              <Link to="/booking">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Stay
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-verde-primary" asChild>
              <Link to="/virtual-tour">
                <Eye className="w-5 h-5 mr-2" />
                360° Virtual Tour
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-verde-primary" asChild>
              <a href="https://wa.me/919111177785" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Indore, Madhya Pradesh</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 fill-current text-verde-gold" />
              <span>Premium Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images Carousel */}
      <section className="py-20 bg-gradient-to-b from-verde-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-verde-primary">
              Discover Our Paradise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in the beauty and luxury of Verde Vista Farmhouse
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="font-playfair text-3xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg text-white/90">{image.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-verde-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-verde-primary">
              Why Choose Verde Vista?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of luxury and nature in our premium farmhouse retreat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-gradient-to-b from-card to-verde-secondary/10">
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-verde-primary" />
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-verde-primary">
              Experience Verde Vista
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the beauty and luxury that awaits you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="/lovable-uploads/05824d68-c4e2-473d-a2e6-9e3e36b38843.png" 
                alt="Infinity Pool with Heart Decoration" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Infinity Pool</h3>
                <p className="text-sm text-white/80">Relax by the stunning pool</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="/lovable-uploads/eb874b60-7128-4555-86b6-0462c8ee0fbc.png" 
                alt="Luxury Suite Room" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Luxury Rooms</h3>
                <p className="text-sm text-white/80">Comfortable & elegant suites</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="/lovable-uploads/db1d9e6a-e7ac-487d-9b1e-01c0c137fa49.png" 
                alt="Outdoor Seating Area" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Outdoor Seating</h3>
                <p className="text-sm text-white/80">Relax in nature's embrace</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/gallery">
                View Full Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-20 bg-verde-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-verde-primary">
              Premium Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a perfect getaway
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <amenity.icon className="w-8 h-8 mb-3 text-verde-primary" />
                <span className="text-sm font-medium">{amenity.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/amenities">
                Explore All Amenities
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-verde-primary to-verde-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Perfect Getaway?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book your stay at Verde Vista Farmhouse and create unforgettable memories
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/booking">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-verde-primary" asChild>
              <a href="tel:9111177785">
                Call: +91 91111 77785
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
