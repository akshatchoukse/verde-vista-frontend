import { useState, useEffect } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const Gallery = () => {
  const [allImage, setAllImage] = useState([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    getAllImage();
  }, []);

  const getAllImage = () => {
    axios
      .get("https://verde-vista-backend.onrender.com/api/gallery")
      .then((res) => setAllImage(res.data))
      .catch((err) => alert("Failed to load images"));
  };

  const categories = ["All", "Exterior", "Pool Area", "Accommodation", "Dining", "Outdoor"];

  const filteredImages =
    activeCategory === "All"
      ? allImage
      : allImage.filter((img) => img.category === activeCategory);

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
            Discover the beauty and luxury of our farmhouse through our comprehensive photo
            gallery. From stunning outdoor spaces to elegant interiors, see what makes Verde Vista
            special.
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
                src={image.image}
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
                  src={filteredImages[selectedImage].image}
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
