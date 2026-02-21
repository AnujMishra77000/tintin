"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  Camera, 
  Palette, 
  PartyPopper, 
  GraduationCap, 
  Building2,
  X
} from "lucide-react";

const categories = [
  { id: "all", label: "All Photos", icon: Camera },
  { id: "activities", label: "Daily Activities", icon: Palette },
  { id: "events", label: "Events", icon: PartyPopper },
  { id: "learning", label: "Learning", icon: GraduationCap },
  { id: "infrastructure", label: "Infrastructure", icon: Building2 },
];

const galleryItems = [
  { id: 1, category: "activities", title: "Art Time", color: "bg-[#FFB6C1]" },
  { id: 2, category: "activities", title: "Outdoor Play", color: "bg-[#B5EAD7]" },
  { id: 3, category: "activities", title: "Music Class", color: "bg-[#C7CEEA]" },
  { id: 4, category: "activities", title: "Story Time", color: "bg-[#FFDAC1]" },
  { id: 5, category: "events", title: "Annual Day", color: "bg-[#FF9AA2]" },
  { id: 6, category: "events", title: "Birthday Celebration", color: "bg-[#9EDAC5]" },
  { id: 7, category: "events", title: "Sports Day", color: "bg-[#B5BCE0]" },
  { id: 8, category: "events", title: "Festival Celebration", color: "bg-[#FFC9A8]" },
  { id: 9, category: "learning", title: "Science Experiment", color: "bg-[#FFB6C1]" },
  { id: 10, category: "learning", title: "Reading Corner", color: "bg-[#B5EAD7]" },
  { id: 11, category: "learning", title: "Math Activity", color: "bg-[#C7CEEA]" },
  { id: 12, category: "learning", title: "Group Discussion", color: "bg-[#FFDAC1]" },
  { id: 13, category: "infrastructure", title: "Classroom", color: "bg-[#FF9AA2]" },
  { id: 14, category: "infrastructure", title: "Play Area", color: "bg-[#9EDAC5]" },
  { id: 15, category: "infrastructure", title: "Dining Hall", color: "bg-[#B5BCE0]" },
  { id: 16, category: "infrastructure", title: "Garden", color: "bg-[#FFC9A8]" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              <Camera className="w-3 h-3 mr-1" />
              Gallery
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Moments at TinTin Paradies
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Glimpses of the joy, learning, and growth that happen every day at our center.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-[#FFE4E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] text-white border-0"
                    : "border-[#FFB6C1] text-[#FF9AA2] hover:bg-[#FFF5F7]"
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                {/* Placeholder for actual image */}
                <div className={`w-full h-full ${item.color} flex items-center justify-center`}>
                  <Camera className="w-12 h-12 text-white/50" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-semibold">{item.title}</p>
                  <p className="text-white/80 text-sm capitalize">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-[#FFE4E8] mx-auto mb-4" />
              <p className="text-[#6B6B6B]">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#4A4A4A] hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <div className="relative">
              <div className={`w-full aspect-video ${selectedImage.color} rounded-2xl flex items-center justify-center`}>
                <Camera className="w-24 h-24 text-white/50" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                <p className="text-white/80 capitalize">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#C7CEEA]/40 text-[#4A4A4A] hover:bg-[#C7CEEA]/50 border-0">
              Videos
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Watch Us in Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <Camera className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="font-semibold">Virtual Tour</p>
                <p className="text-sm opacity-80">Coming Soon</p>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-[#B5EAD7] to-[#9EDAC5] rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <PartyPopper className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="font-semibold">Annual Day Highlights</p>
                <p className="text-sm opacity-80">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
