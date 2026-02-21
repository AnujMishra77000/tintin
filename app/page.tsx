import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import {
  Heart,
  Shield,
  Users,
  Sparkles,
  Baby,
  Clock,
  Utensils,
  MessageSquare,
  Star,
  Calendar,
  MapPin,
  ArrowRight,
  Trophy,
  Sun,
  Cloud,
  Rainbow,
} from "lucide-react";
import { 
  HappyKid, 
  ReadingKid, 
  PlayingKid, 
  SleepingKid, 
  EatingKid,
  ArtKid,
  MusicKid,
  SportsKid,
  SafetyKid,
  StarKid,
  FloatingKid,
  BouncingKid 
} from "@/components/shared/CartoonKids";

const features = [
  {
    icon: Shield,
    kid: SafetyKid,
    title: "CCTV Monitored",
    description: "24/7 surveillance for complete peace of mind",
    color: "from-[#FF6B6B] to-[#EE5A5A]",
    bgColor: "bg-red-50",
  },
  {
    icon: Users,
    kid: HappyKid,
    title: "Trained Caregivers",
    description: "Certified & experienced staff members",
    color: "from-[#45B7D1] to-[#3AA8C2]",
    bgColor: "bg-blue-50",
  },
  {
    icon: Sparkles,
    kid: StarKid,
    title: "Hygienic Environment",
    description: "Clean & sanitized facilities daily",
    color: "from-[#95E1D3] to-[#7DD4C3]",
    bgColor: "bg-green-50",
  },
  {
    icon: Baby,
    kid: PlayingKid,
    title: "Low Child Ratio",
    description: "Personalized attention for every child",
    color: "from-[#FFE66D] to-[#F7D794]",
    bgColor: "bg-yellow-50",
  },
  {
    icon: MessageSquare,
    kid: ReadingKid,
    title: "Daily Updates",
    description: "Regular communication with parents",
    color: "from-[#A29BFE] to-[#B8B0FF]",
    bgColor: "bg-purple-50",
  },
  {
    icon: Utensils,
    kid: EatingKid,
    title: "Nutritious Meals",
    description: "Healthy & balanced diet plans",
    color: "from-[#FF9F43] to-[#FFA94D]",
    bgColor: "bg-orange-50",
  },
];

const programs = [
  {
    title: "Infant Care",
    age: "6 months - 1.5 years",
    color: "from-[#FF6B6B] to-[#EE5A5A]",
    bgColor: "bg-red-100",
    description: "Gentle care for your little ones with focus on sensory development",
    kid: SleepingKid,
    activities: ["Sensory Play", "Nap Time", "Feeding"],
  },
  {
    title: "Toddler Program",
    age: "1.5 - 3 years",
    color: "from-[#45B7D1] to-[#3AA8C2]",
    bgColor: "bg-blue-100",
    description: "Exploration and discovery through play-based learning",
    kid: PlayingKid,
    activities: ["Art & Craft", "Music", "Outdoor Play"],
  },
  {
    title: "Preschool",
    age: "3 - 5 years",
    color: "from-[#95E1D3] to-[#7DD4C3]",
    bgColor: "bg-green-100",
    description: "School readiness with structured learning activities",
    kid: ReadingKid,
    activities: ["Reading", "Math", "Science"],
  },
  {
    title: "After-School Care",
    age: "5 - 10 years",
    color: "from-[#FFE66D] to-[#F7D794]",
    bgColor: "bg-yellow-100",
    description: "Homework help, activities, and safe supervision",
    kid: SportsKid,
    activities: ["Homework Help", "Sports", "Arts"],
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    child: "Mother of Aarav (3 years)",
    text: "TinTin Paradies has been a blessing for our family. The staff is so caring and my son loves going there every day!",
    rating: 5,
  },
  {
    name: "Rahul Patel",
    child: "Father of Ananya (2 years)",
    text: "The daily updates and photos keep us connected. We can see how much our daughter is learning and growing.",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    child: "Mother of twins (4 years)",
    text: "Finding a safe place for twins was challenging until we found TinTin Paradies. They handle everything so professionally.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    child: "Father of Vihaan (1 year)",
    text: "The infant care program is exceptional. The caregivers are patient, loving, and highly trained.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-red-50 to-blue-50">
          {/* Floating Clouds */}
          <div className="absolute top-10 left-10 opacity-60">
            <Cloud className="w-20 h-20 text-blue-200" />
          </div>
          <div className="absolute top-20 right-20 opacity-60">
            <Cloud className="w-16 h-16 text-pink-200" />
          </div>
          <div className="absolute bottom-20 left-1/4 opacity-60">
            <Cloud className="w-24 h-24 text-yellow-200" />
          </div>
          {/* Colorful Blobs */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-20 left-10 w-40 h-40 bg-red-300 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-40 right-20 w-48 h-48 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-20 left-1/3 w-44 h-44 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-green-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          {/* Rainbow */}
          <div className="absolute bottom-0 right-0 opacity-20">
            <Rainbow className="w-64 h-32 text-purple-400" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-red-100 text-red-500 hover:bg-red-200 border-0 px-4 py-1">
                <Star className="w-4 h-4 mr-1 fill-yellow-400" />
                Trusted by 500+ Happy Families
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A4A4A] leading-tight mb-6">
                Where Every Child{" "}
                <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
                  Shines Bright
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#6B6B6B] mb-4">
                Safe. Caring. Learning Every Day.
              </p>
              <p className="text-[#6B6B6B] mb-8">
                Trusted daycare for children 6 months to 10 years. Safe environment, caring staff, structured learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/admissions">
                  <Button size="lg" className="bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white shadow-lg hover:shadow-xl transition-all rounded-full px-8">
                    Book a Visit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button size="lg" variant="outline" className="border-2 border-blue-400 text-blue-500 hover:bg-blue-50 rounded-full px-8">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Cartoon Kids */}
            <div className="hidden lg:flex justify-center items-center relative">
              <FloatingKid delay={0}>
                <HappyKid className="w-48 h-48 drop-shadow-2xl" />
              </FloatingKid>
              <div className="absolute -top-4 -right-4">
                <BouncingKid>
                  <Sun className="w-16 h-16 text-yellow-400" />
                </BouncingKid>
              </div>
              <div className="absolute -bottom-4 -left-4">
                <FloatingKid delay={1}>
                  <Star className="w-12 h-12 text-yellow-400 fill-yellow-400" />
                </FloatingKid>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-20">
          <FloatingKid delay={0.5}>
            <Star className="w-20 h-20 text-yellow-400 fill-yellow-400" />
          </FloatingKid>
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <FloatingKid delay={1.5}>
            <Heart className="w-16 h-16 text-red-400 fill-red-400" />
          </FloatingKid>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-red-100 to-blue-100 text-blue-600 hover:from-red-200 hover:to-blue-200 border-0 px-4 py-1">
              <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
              Why Choose Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              What Makes Us Special
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              We provide a nurturing environment where children can learn, play, and grow
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className={`group border-0 hover:shadow-xl transition-all hover:-translate-y-2 ${feature.bgColor} overflow-hidden`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <FloatingKid delay={index * 0.3}>
                      <feature.kid className="w-16 h-16" />
                    </FloatingKid>
                  </div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">{feature.title}</h3>
                  <p className="text-[#6B6B6B]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden">
        {/* Decorative Kids */}
        <div className="absolute top-20 left-10 opacity-30">
          <FloatingKid delay={0}>
            <ArtKid className="w-24 h-24" />
          </FloatingKid>
        </div>
        <div className="absolute bottom-20 right-10 opacity-30">
          <FloatingKid delay={1}>
            <MusicKid className="w-24 h-24" />
          </FloatingKid>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-green-100 to-yellow-100 text-green-600 hover:from-green-200 hover:to-yellow-200 border-0 px-4 py-1">
              <Baby className="w-4 h-4 mr-1" />
              Our Programs
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Programs for Every Age
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Age-appropriate programs designed to support your child&apos;s development
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 ${program.bgColor}`}>
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className={`${program.bgColor} text-gray-700`}>
                      {program.age}
                    </Badge>
                    <FloatingKid delay={index * 0.2}>
                      <program.kid className="w-16 h-16" />
                    </FloatingKid>
                  </div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">{program.title}</h3>
                  <p className="text-[#6B6B6B] text-sm mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.activities.map((activity, i) => (
                      <span key={i} className="text-xs bg-white/70 px-2 py-1 rounded-full text-gray-600">
                        {activity}
                      </span>
                    ))}
                  </div>
                  <Link href="/programs">
                    <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600 hover:bg-blue-50 p-0">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-20 opacity-20">
          <FloatingKid delay={0.5}>
            <SafetyKid className="w-32 h-32" />
          </FloatingKid>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-green-100 to-teal-100 text-teal-600 hover:from-green-200 hover:to-teal-200 border-0 px-4 py-1">
                <Shield className="w-4 h-4 mr-1" />
                Safety First
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-6">
                Your Child&apos;s Safety is Our Priority
              </h2>
              <div className="space-y-4">
                {[
                  "CCTV surveillance in all areas",
                  "Secure entry/exit system",
                  "Background-verified staff",
                  "Child-safe infrastructure",
                  "Emergency preparedness protocols",
                  "Regular health checkups",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#4A4A4A]">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/safety" className="inline-block mt-8">
                <Button className="bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 text-white rounded-full px-8">
                  View Safety Measures
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-3xl transform rotate-3" />
              <div className="relative bg-gradient-to-br from-green-400 to-teal-400 rounded-3xl p-8 text-white">
                <FloatingKid>
                  <SafetyKid className="w-24 h-24 mb-4" />
                </FloatingKid>
                <h3 className="text-2xl font-bold mb-2">100% Safe Environment</h3>
                <p className="opacity-90">
                  Our facility is designed with child safety as the top priority. Every corner is child-proofed and monitored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 relative overflow-hidden">
        {/* Decorative Stars */}
        <div className="absolute top-10 left-10 opacity-20">
          <BouncingKid>
            <Star className="w-16 h-16 text-yellow-400 fill-yellow-400" />
          </BouncingKid>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <BouncingKid>
            <Star className="w-20 h-20 text-pink-400 fill-pink-400" />
          </BouncingKid>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-yellow-100 to-pink-100 text-pink-600 hover:from-yellow-200 hover:to-pink-200 border-0 px-4 py-1">
              <Star className="w-4 h-4 mr-1 fill-yellow-400" />
              Parent Reviews
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              What Parents Say
            </h2>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-[#4A4A4A] mb-4 italic text-lg">&ldquo;{testimonial.text}&rdquo;</p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-[#4A4A4A]">{testimonial.name}</p>
                          <p className="text-sm text-[#6B6B6B]">{testimonial.child}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 border-2 border-pink-300 text-pink-500 hover:bg-pink-50" />
            <CarouselNext className="hidden sm:flex -right-12 border-2 border-pink-300 text-pink-500 hover:bg-pink-50" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-30">
          <FloatingKid delay={0}>
            <HappyKid className="w-32 h-32" />
          </FloatingKid>
        </div>
        <div className="absolute bottom-20 right-10 opacity-30">
          <FloatingKid delay={1}>
            <PlayingKid className="w-28 h-28" />
          </FloatingKid>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Animated Background Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            <div className="relative z-10">
              <FloatingKid>
                <Star className="w-12 h-12 mx-auto mb-4 text-yellow-200 fill-yellow-200" />
              </FloatingKid>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Ready to Give Your Child the Best Care?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Schedule a visit to our center and see why hundreds of parents trust TinTin Paradies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/admissions">
                  <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book a Visit
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 rounded-full px-8">
                    <MapPin className="mr-2 w-5 h-5" />
                    Get Directions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
