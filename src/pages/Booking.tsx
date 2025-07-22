import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Calendar as CalendarIcon,
  Phone,
  MessageCircle,
  Mail,
  Users,
  MapPin,
  Clock,
  Star
} from "lucide-react";

const Booking = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        title: "Please select dates",
        description: "Check-in and check-out dates are required",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hello! I would like to book Verde Vista Farmhouse.

Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Check-in: ${format(checkIn, "PPP")}
Check-out: ${format(checkOut, "PPP")}
Number of Guests: ${formData.guests}
Message: ${formData.message}

Please confirm availability and provide booking details.`;

    const whatsappUrl = `https://wa.me/919111177785?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Booking request sent!",
      description: "You will be redirected to WhatsApp to complete your booking.",
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-verde-gold/20 text-verde-gold border-verde-gold/30">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Reservation
          </Badge>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-verde-primary">
            Book Your Stay
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to experience luxury and tranquility at Verde Vista Farmhouse? 
            Fill out the form below and we'll confirm your booking via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Booking Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests">Number of Guests *</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        placeholder="Number of guests"
                      />
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Check-in Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !checkIn && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "PPP") : "Select check-in date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label>Check-out Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !checkOut && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "PPP") : "Select check-out date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <Label htmlFor="message">Special Requests or Messages</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any special requests, dietary requirements, or additional information..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Booking Request via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary & Contact */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-0.5 text-verde-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:9111177785" className="text-muted-foreground hover:text-verde-primary">
                      +91 91111 77785
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 mt-0.5 text-verde-primary" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a 
                      href="https://wa.me/919111177785" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-verde-primary"
                    >
                      +91 91111 77785
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-0.5 text-verde-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:anirudh1804@icloud.com" 
                      className="text-muted-foreground hover:text-verde-primary"
                    >
                      anirudh1804@icloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-verde-primary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">
                      Ujjain State Highway, behind Aurobindo Hospital, Reoti Range, Indore, MP 452007
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:9111177785">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://wa.me/919111177785" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Chat
                  </a>
                </Button>

                <Button variant="outline" className="w-full" asChild>
                  <a href="https://maps.app.goo.gl/osnYQHc1Ztma7KqD7?g_st=ipc" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Booking Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Booking Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-in Time:</span>
                  <span>12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-out Time:</span>
                  <span>11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Booking Confirmation:</span>
                  <span>Via WhatsApp</span>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-xs text-muted-foreground">
                    Booking confirmation and payment details will be shared via WhatsApp after your inquiry.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;