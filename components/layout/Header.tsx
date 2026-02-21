"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Heart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/safety", label: "Safety" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b-2 border-red-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              TinTin Paradies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#4A4A4A] hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/parent/dashboard">
              <Button variant="ghost" size="sm" className="text-[#4A4A4A] hover:text-green-500 hover:bg-green-50">
                Parent Portal
              </Button>
            </Link>
            <Link href="tel:+919876543210">
              <Button variant="ghost" size="sm" className="text-[#4A4A4A] hover:text-blue-500 hover:bg-blue-50">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </Link>
            <Link href="/admissions">
              <Button size="sm" className="bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white shadow-md hover:shadow-lg transition-all rounded-full">
                Book a Visit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#4A4A4A]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-gradient-to-b from-red-50 to-yellow-50 border-red-100">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">TinTin Paradies</span>
                </Link>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-[#4A4A4A] hover:text-red-500 hover:bg-white rounded-xl transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 mt-4">
                  <Link href="/parent/dashboard" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-2 border-green-400 text-green-500 hover:bg-green-50 rounded-full">
                      Parent Portal
                    </Button>
                  </Link>
                  <Link href="tel:+919876543210" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full border-2 border-blue-400 text-blue-500 hover:bg-blue-50 rounded-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                  </Link>
                  <Link href="/admissions" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white rounded-full">
                      Book a Visit
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
