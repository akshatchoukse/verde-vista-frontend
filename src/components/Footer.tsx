import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-verde-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair font-bold text-2xl mb-4">Verde Vista</h3>
            <p className="text-primary-foreground/80 mb-4">
              A luxurious, peaceful retreat perfect for weekend stays, parties, and small events.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/verdevistaindore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919111177785" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/virtual-tour" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">360° Virtual Tour</Link></li>
              <li><Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gallery</Link></li>
              <li><Link to="/amenities" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Amenities</Link></li>
              <li><Link to="/booking" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Amenities */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Amenities</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Infinity Swimming Pool</li>
              <li>Luxury Rooms & Suites</li>
              <li>Pure Veg Restaurant</li>
              <li>Indoor & Outdoor Games</li>
              <li>DJ/Music Area</li>
              <li>Bonfire Space</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/80" />
                <p className="text-primary-foreground/80 text-sm">
                  Ujjain State Highway, behind Aurobindo Hospital, Reoti Range, Indore, Madhya Pradesh 452007
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/80" />
                <a href="tel:9111177785" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +91 91111 77785
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/80" />
                <a href="mailto:anirudh1804@icloud.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  anirudh1804@icloud.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Verde Vista Farmhouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;