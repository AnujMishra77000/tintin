import Link from "next/link";
import { Heart, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/safety", label: "Safety" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/admissions", label: "Admissions" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/child-protection", label: "Child Protection Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-red-50 border-t-2 border-red-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 flex items-center justify-center shadow-md">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">TinTin Paradies</span>
            </Link>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              Safe. Caring. Learning Every Day. Trusted daycare for children 6 months to 10 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#4A4A4A] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#6B6B6B] hover:text-red-500 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-[#4A4A4A] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-[#6B6B6B]">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span>123 Happy Street, Rainbow Colony,<br />Mumbai, India - 400001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-blue-500 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                <Mail className="w-4 h-4 text-green-400 shrink-0" />
                <a href="mailto:hello@tintinparadies.com" className="hover:text-green-500 transition-colors">hello@tintinparadies.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#6B6B6B]">
                <Clock className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Legal & Parent Portal */}
          <div>
            <h3 className="font-bold text-[#4A4A4A] mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#6B6B6B] hover:text-red-500 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link 
              href="/parent/dashboard" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-full text-sm font-medium hover:from-green-500 hover:to-teal-500 transition-colors shadow-md"
            >
              Parent Portal
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-red-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6B6B6B]">
            © {new Date().getFullYear()} TinTin Paradies. All rights reserved.
          </p>
          <p className="text-sm text-[#6B6B6B] flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for little ones
          </p>
        </div>
      </div>
    </footer>
  );
}
