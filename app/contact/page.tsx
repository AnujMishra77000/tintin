"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "123 Happy Street, Rainbow Colony",
      "Mumbai, Maharashtra - 400001",
      "India"
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+91 98765 43210 (Main)",
      "+91 98765 43211 (Emergency)",
    ],
    action: { label: "Call Now", href: "tel:+919876543210" },
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "hello@tintinparadies.com",
      "admissions@tintinparadies.com",
    ],
    action: { label: "Send Email", href: "mailto:hello@tintinparadies.com" },
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Monday - Saturday: 8:00 AM - 7:00 PM",
      "Sunday: Closed",
      "Parent Support: 24/7",
    ],
  },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#", color: "bg-[#1877F2]" },
  { icon: Instagram, label: "Instagram", href: "#", color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]" },
  { icon: Youtube, label: "YouTube", href: "#", color: "bg-[#FF0000]" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919876543210", color: "bg-[#25D366]" },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              <Send className="w-3 h-3 mr-1" />
              Contact Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Have questions? We&apos;d love to hear from you. Reach out to us through any of the channels below 
              or fill out the contact form.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-[#FFE4E8] hover:shadow-lg transition-all h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#4A4A4A] mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-[#6B6B6B] text-sm">{detail}</p>
                    ))}
                  </div>
                  {info.action && (
                    <a 
                      href={info.action.href}
                      className="text-[#FF9AA2] text-sm font-medium hover:underline"
                    >
                      {info.action.label} →
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#4A4A4A] mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <Card className="border-[#FFE4E8] bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#B5EAD7] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#4A4A4A] mb-2">Message Sent!</h3>
                    <p className="text-[#6B6B6B]">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-[#FFE4E8] bg-white">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name *</Label>
                          <Input id="name" placeholder="John Doe" required className="border-[#FFE4E8]" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required className="border-[#FFE4E8]" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" className="border-[#FFE4E8]" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" placeholder="How can we help?" required className="border-[#FFE4E8]" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your inquiry..."
                          required
                          className="border-[#FFE4E8] min-h-[150px]"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] hover:from-[#FF9AA2] hover:to-[#FFB6C1] text-white rounded-full"
                      >
                        <Send className="mr-2 w-4 h-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Map & Social */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="border-[#FFE4E8] overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#FFB6C1]/20 to-[#B5EAD7]/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#FF9AA2] mx-auto mb-4" />
                    <p className="text-[#4A4A4A] font-semibold">Google Maps Integration</p>
                    <p className="text-[#6B6B6B] text-sm">123 Happy Street, Rainbow Colony, Mumbai</p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="border-[#FFE4E8]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#4A4A4A] mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-[#FFE4E8] bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Need Immediate Assistance?</h3>
                  <p className="text-white/90 mb-4">
                    Our team is available to answer your calls during working hours.
                  </p>
                  <a 
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#FF9AA2] rounded-full font-semibold hover:bg-white/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call +91 98765 43210
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-4">Have More Questions?</h2>
            <p className="text-[#6B6B6B] mb-8">
              Check out our frequently asked questions or reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/safety"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] text-white rounded-full font-semibold hover:shadow-lg transition-all"
              >
                View Safety FAQs
              </a>
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#FFB6C1] text-[#FF9AA2] rounded-full font-semibold hover:bg-[#FFF5F7] transition-all"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
