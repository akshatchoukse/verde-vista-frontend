import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TreePine, Users, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-verde-gold/20 text-verde-gold border-verde-gold/30">
            Our Story
          </Badge>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-verde-primary">
            About Verde Vista
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nestled in the heart of Madhya Pradesh, Verde Vista Farmhouse offers a perfect escape from city life, 
            combining luxury with the tranquility of nature.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-6 text-verde-primary">
              A Peaceful Retreat
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Verde Vista Farmhouse was created with a vision to provide a serene escape where families, 
              couples, and groups can reconnect with nature while enjoying modern luxury amenities.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Located on Ujjain State Highway behind Aurobindo Hospital in Reoti Range, our farmhouse 
              offers easy accessibility while maintaining the peaceful atmosphere of a countryside retreat.
            </p>
            <p className="text-lg text-muted-foreground">
              We specialize in pure vegetarian dining experiences, ensuring that every meal is both 
              delicious and aligned with our commitment to wholesome, healthy living.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <TreePine className="w-12 h-12 mx-auto mb-4 text-verde-primary" />
                <h3 className="font-semibold text-lg mb-2">Natural Setting</h3>
                <p className="text-muted-foreground text-sm">Surrounded by lush greenery and peaceful landscapes</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-verde-primary" />
                <h3 className="font-semibold text-lg mb-2">Perfect for Groups</h3>
                <p className="text-muted-foreground text-sm">Ideal for families, couples, and event celebrations</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 mx-auto mb-4 text-verde-primary" />
                <h3 className="font-semibold text-lg mb-2">Pure Veg Experience</h3>
                <p className="text-muted-foreground text-sm">Committed to healthy, vegetarian dining</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 mx-auto mb-4 text-verde-primary" />
                <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
                <p className="text-muted-foreground text-sm">Luxury amenities and exceptional service</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-verde-secondary/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6 text-verde-primary">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            To provide a premium, peaceful retreat where guests can escape the hustle and bustle of city life, 
            enjoy quality time with loved ones, and create lasting memories in a beautiful natural setting. 
            We are committed to offering exceptional hospitality, maintaining the highest standards of cleanliness 
            and comfort, and providing a pure vegetarian dining experience that nourishes both body and soul.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-semibold text-xl mb-3 text-verde-primary">Quality</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in all our services and amenities
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3 text-verde-primary">Sustainability</h3>
              <p className="text-muted-foreground">
                Committed to eco-friendly practices and preserving natural beauty
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3 text-verde-primary">Hospitality</h3>
              <p className="text-muted-foreground">
                Exceptional service that makes every guest feel welcomed and valued
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;