import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import heroImage from "@/assets/hero-farmhouse.jpg";
import poolImage from "@/assets/infinity-pool.jpg";
import roomImage from "@/assets/luxury-room.jpg";
import restaurantImage from "@/assets/restaurant.jpg";

const outdoorSeatingImage = "/lovable-uploads/db1d9e6a-e7ac-487d-9b1e-01c0c137fa49.png";
const luxuryBedroomImage = "/lovable-uploads/eb874b60-7128-4555-86b6-0462c8ee0fbc.png";
const heartPoolImage = "/lovable-uploads/05824d68-c4e2-473d-a2e6-9e3e36b38843.png";
const sunsetPoolImage = "/lovable-uploads/488615d8-17db-4c0e-a77b-8db326f2cd1b.png";
const aerialViewImage = "/lovable-uploads/dc4af127-8ac6-4ace-9cf6-54007240aa7f.png";
const outdoorPicnicImage = "/lovable-uploads/011f8a2f-75d3-43be-803b-f6b92eaf5745.png";
const mainBuildingImage = "/lovable-uploads/05e840e1-68ad-4a65-8265-60b282063fa6.png";
const rusticSetupImage = "/lovable-uploads/27b0d835-f113-43d0-9ca1-eaa2e8e9e5cc.png";
const sunriseViewImage = "/lovable-uploads/e994d9eb-4ad7-4e55-b1c6-b1b895adb2fe.png";
const rainyDayImage = "/lovable-uploads/8874c912-23a3-4ae0-ad62-1e43f5b79b90.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: aerialViewImage,
      title: "Verde Vista Farmhouse - Aerial View",
      category: "Exterior"
    },
    {
      src: mainBuildingImage,
      title: "Main Building & Pool Complex",
      category: "Exterior"
    },
    {
      src: heartPoolImage,
      title: "Infinity Swimming Pool with Heart Decoration",
      category: "Pool Area"
    },
    {
      src: sunsetPoolImage,
      title: "Sunset View from Infinity Pool",
      category: "Pool Area"
    },
    {
      src: luxuryBedroomImage,
      title: "Luxury Suite Room with Garden View",
      category: "Accommodation"
    },
    {
      src: outdoorSeatingImage,
      title: "Outdoor Seating Area",
      category: "Outdoor"
    },
    {
      src: outdoorPicnicImage,
      title: "Outdoor Picnic Setup",
      category: "Outdoor"
    },
    {
      src: rusticSetupImage,
      title: "Traditional Rustic Setup",
      category: "Outdoor"
    },
    {
      src: sunriseViewImage,
      title: "Sunrise View from Property",
      category: "Outdoor"
    },
    {
      src: rainyDayImage,
      title: "Monsoon Beauty with Farm Animals",
      category: "Outdoor"
    },
    {
      src: poolImage,
      title: "Pool Area Details",
      category: "Pool Area"
    },
    {
      src: roomImage,
      title: "Interior Room Details",
      category: "Accommodation"
    },
    {
      src: restaurantImage,
      title: "Pure Veg Restaurant",
      category: "Dining"
    },
    {
      src: heroImage,
      title: "Farmhouse Overview",
      category: "Exterior"
    }
  ];

  const categories = ["All", "Exterior", "Pool Area", "Accommodation", "Dining", "Outdoor"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-verde-gold/20 text-verde-gold border-verde-gold/30">
            <Camera className="w-4 h-4 mr-2" />
            Photo Gallery
          </Badge>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-verde-primary">
            Explore Verde Vista
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the beauty and luxury of our farmhouse through our comprehensive photo gallery. 
            From stunning outdoor spaces to elegant interiors, see what makes Verde Vista special.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <Camera className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">{image.title}</p>
                  <p className="text-xs text-white/80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black border-0">
            {selectedImage !== null && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{filteredImages[selectedImage].title}</h3>
                  <p className="text-sm text-white/80">{filteredImages[selectedImage].category}</p>
                </div>

                {filteredImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-4 right-4 text-white text-sm">
                  {selectedImage + 1} / {filteredImages.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <div className="text-center bg-verde-secondary/20 rounded-2xl p-8">
          <h2 className="font-playfair text-2xl font-bold mb-4 text-verde-primary">
            Ready to Experience It Yourself?
          </h2>
          <p className="text-muted-foreground mb-6">
            Book your stay and enjoy all these beautiful spaces in person
          </p>
          <Button size="lg" asChild>
            <a href="/booking">Book Your Stay Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;