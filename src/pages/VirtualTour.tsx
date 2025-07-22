import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const VirtualTour = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-verde-gold/20 text-verde-gold border-verde-gold/30">
            <Eye className="w-4 h-4 mr-2" />
            360° Experience
          </Badge>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-verde-primary">
            Virtual Tour
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Take a immersive 360° virtual tour of Verde Vista Farmhouse from the comfort of your home. 
            Explore our luxury rooms, infinity pool, dining areas, and beautiful landscapes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <a 
                href="https://mediaology.in/VerdeVistaVR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Launch 360° Tour
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/booking">
                <Home className="w-5 h-5 mr-2" />
                Book Your Stay
              </Link>
            </Button>
          </div>
        </div>

        {/* Virtual Tour Embed */}
        <div className="bg-card rounded-2xl p-6 shadow-lg mb-12">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted flex items-center justify-center">
            <iframe
              src="https://mediaology.in/VerdeVistaVR"
              className="w-full h-full border-0"
              allowFullScreen
              title="Verde Vista Farmhouse 360° Virtual Tour"
            />
          </div>
        </div>

        {/* Tour Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-verde-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-verde-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">360° Views</h3>
            <p className="text-muted-foreground">
              Experience every corner of our farmhouse with immersive 360-degree panoramic views
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-verde-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-verde-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Room Tours</h3>
            <p className="text-muted-foreground">
              Walk through our luxury rooms and suites to see the comfort and elegance we offer
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-verde-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-8 h-8 text-verde-primary" />
            </div>
            <h3 className="font-semibold text-xl mb-3">Interactive Experience</h3>
            <p className="text-muted-foreground">
              Navigate freely through different areas and get a real feel of the space
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-verde-secondary/20 rounded-2xl p-8 text-center">
          <h2 className="font-playfair text-2xl font-bold mb-4 text-verde-primary">
            How to Navigate the Tour
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Desktop/Laptop</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Click and drag to look around</li>
                <li>• Use mouse wheel to zoom in/out</li>
                <li>• Click on hotspots to move between rooms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mobile/Tablet</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Touch and drag to look around</li>
                <li>• Pinch to zoom in/out</li>
                <li>• Tap on hotspots to navigate</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back Navigation */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;