import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  School, 
  Gamepad2, 
  TreePine, 
  Bed, 
  BookOpen, 
  ChefHat,
  Heart,
  Sparkles,
  Shield,
  Users
} from "lucide-react";

const facilities = [
  {
    icon: School,
    title: "Classrooms",
    description: "Bright, spacious classrooms designed for different age groups with child-friendly furniture and learning materials.",
    features: [
      "Age-appropriate furniture",
      "Interactive whiteboards",
      "Learning corners for different activities",
      "Natural lighting and ventilation",
      "Air-conditioned environment",
    ],
    benefits: "Stimulates learning and creativity in a comfortable setting",
    color: "from-[#FFB6C1] to-[#FF9AA2]",
  },
  {
    icon: Gamepad2,
    title: "Indoor Play Zone",
    description: "A safe indoor play area with soft flooring and age-appropriate toys for active play during all weather conditions.",
    features: [
      "Soft rubber flooring",
      "Ball pit and slides",
      "Building blocks and puzzles",
      "Role-play areas",
      "Sensory play stations",
    ],
    benefits: "Promotes physical development and social interaction year-round",
    color: "from-[#B5EAD7] to-[#9EDAC5]",
  },
  {
    icon: TreePine,
    title: "Outdoor Play Area",
    description: "Secure outdoor playground with modern equipment for physical activities and nature exploration.",
    features: [
      "Jungle gym and slides",
      "Sand play area",
      "Garden and nature corner",
      "Cycling track",
      "Shaded seating areas",
    ],
    benefits: "Encourages outdoor play, motor skills, and connection with nature",
    color: "from-[#C7CEEA] to-[#B5BCE0]",
  },
  {
    icon: Bed,
    title: "Resting Area",
    description: "Quiet, comfortable nap rooms with individual cots for children to rest and recharge during the day.",
    features: [
      "Individual cots/beds",
      "Soft, clean bedding",
      "Dimmed lighting",
      "Soothing music",
      "Temperature controlled",
    ],
    benefits: "Ensures children get adequate rest for healthy development",
    color: "from-[#FFDAC1] to-[#FFC9A8]",
  },
  {
    icon: BookOpen,
    title: "Learning Materials",
    description: "A wide variety of educational toys, books, and materials to support development across all domains.",
    features: [
      "Age-appropriate books library",
      "Educational toys and games",
      "Art and craft supplies",
      "Musical instruments",
      "STEM learning kits",
    ],
    benefits: "Supports cognitive, creative, and motor skill development",
    color: "from-[#FFB6C1] to-[#FF9AA2]",
  },
  {
    icon: ChefHat,
    title: "Kitchen & Dining",
    description: "Hygienic kitchen preparing nutritious meals and snacks, with a child-friendly dining area.",
    features: [
      "Professional kitchen setup",
      "Nutritious meal preparation",
      "Child-height dining tables",
      "Allergy management protocols",
      "Filtered drinking water",
    ],
    benefits: "Promotes healthy eating habits and ensures food safety",
    color: "from-[#B5EAD7] to-[#9EDAC5]",
  },
];

const highlights = [
  { icon: Shield, title: "Child-Safe Design", description: "Rounded corners, non-toxic materials" },
  { icon: Sparkles, title: "Hygienic Environment", description: "Daily sanitization protocols" },
  { icon: Heart, title: "Comfort First", description: "Temperature controlled, well-ventilated" },
  { icon: Users, title: "Spacious Layout", description: "Ample space for activities and movement" },
];

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              Our Facilities
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              World-Class Facilities for Your Child
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Our center is designed with children in mind - safe, stimulating, and comfortable 
              spaces that encourage learning, play, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="border-[#FFE4E8] bg-[#FFF5F7]">
                <CardContent className="p-4 text-center">
                  <item.icon className="w-8 h-8 text-[#FF9AA2] mx-auto mb-2" />
                  <h3 className="font-semibold text-[#4A4A4A] text-sm">{item.title}</h3>
                  <p className="text-[#6B6B6B] text-xs">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-[#FFE4E8] overflow-hidden hover:shadow-xl transition-all group">
                <div className={`h-2 bg-gradient-to-r ${facility.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <facility.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#4A4A4A] mb-2">{facility.title}</h2>
                      <p className="text-[#6B6B6B]">{facility.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-[#4A4A4A] mb-3 text-sm uppercase tracking-wide">Features</h3>
                      <ul className="space-y-2">
                        {facility.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB6C1] mt-1.5 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-[#FFF5F7] to-white rounded-xl p-4">
                      <h3 className="font-semibold text-[#4A4A4A] mb-2 text-sm uppercase tracking-wide">Benefit</h3>
                      <p className="text-[#6B6B6B] text-sm">{facility.benefits}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Visit Us and See For Yourself
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                We invite you to schedule a tour of our facilities. See firsthand the safe, 
                nurturing environment we&apos;ve created for your child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/admissions" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#FF9AA2] rounded-full font-semibold hover:bg-white/90 transition-colors"
                >
                  Schedule a Tour
                </a>
                <a 
                  href="/gallery" 
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
