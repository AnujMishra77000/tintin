import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, Quote, Video, MessageSquare } from "lucide-react";
import Link from "next/link";

const writtenTestimonials = [
  {
    name: "Priya Sharma",
    child: "Aarav, 3 years",
    program: "Preschool",
    text: "TinTin Paradies has been a blessing for our family. The staff is incredibly caring and my son loves going there every day. We've seen tremendous growth in his social skills and confidence. The daily updates and photos keep us connected throughout the day.",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rahul Patel",
    child: "Ananya, 2 years",
    program: "Toddler Program",
    text: "As working parents, we were anxious about leaving our daughter in daycare. But TinTin Paradies exceeded all our expectations. The caregivers treat her like their own, and she's always excited to go. The facility is clean, safe, and full of learning opportunities.",
    rating: 5,
    initials: "RP",
  },
  {
    name: "Sneha Gupta",
    child: "Twins - Rohan & Rahul, 4 years",
    program: "Preschool",
    text: "Finding a safe place for twins was challenging until we discovered TinTin Paradies. They handle everything so professionally - from individual attention to managing their different personalities. The teachers are patient and genuinely care about each child's development.",
    rating: 5,
    initials: "SG",
  },
  {
    name: "Amit Kumar",
    child: "Vihaan, 1 year",
    program: "Infant Care",
    text: "The infant care program is exceptional. The caregivers are patient, loving, and highly trained. I appreciate the detailed daily reports about feeding, naps, and activities. It gives us peace of mind knowing our baby is in such good hands.",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Neha Reddy",
    child: "Ishaan, 5 years",
    program: "After-School Care",
    text: "The after-school program has been perfect for our son. He gets help with homework, enjoys various activities, and has made great friends. The pickup service from his school is reliable and the staff ensures he's always safe.",
    rating: 5,
    initials: "NR",
  },
  {
    name: "Vikram Singh",
    child: "Diya, 2.5 years",
    program: "Toddler Program",
    text: "We moved to the city recently and were worried about finding the right daycare. TinTin Paradies made the transition so smooth for our daughter. Within weeks, she settled in and now looks forward to her 'school days'!",
    rating: 5,
    initials: "VS",
  },
];

const videoTestimonials = [
  {
    name: "The Sharma Family",
    title: "Why We Chose TinTin Paradies",
    duration: "2:30",
    color: "from-[#FFB6C1] to-[#FF9AA2]",
  },
  {
    name: "Working Parents Share",
    title: "Peace of Mind While at Work",
    duration: "1:45",
    color: "from-[#B5EAD7] to-[#9EDAC5]",
  },
  {
    name: "First-Time Parents",
    title: "Our Experience with Infant Care",
    duration: "3:00",
    color: "from-[#C7CEEA] to-[#B5BCE0]",
  },
];

const stats = [
  { value: "500+", label: "Happy Families" },
  { value: "4.9", label: "Average Rating" },
  { value: "98%", label: "Parent Satisfaction" },
  { value: "85%", label: "Referral Rate" },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              <Star className="w-3 h-3 mr-1 fill-[#FF9AA2]" />
              Testimonials
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              What Parents Say About Us
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Don&apos;t just take our word for it. Hear from the families who trust us with their most precious ones.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-[#FFE4E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FF9AA2] to-[#FFB6C1] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-[#6B6B6B] text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#C7CEEA]/40 text-[#4A4A4A] hover:bg-[#C7CEEA]/50 border-0">
              <MessageSquare className="w-3 h-3 mr-1" />
              Parent Reviews
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Written Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-[#FFE4E8] bg-white hover:shadow-lg transition-all h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-[#FFB6C1] mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FFDAC1] fill-[#FFDAC1]" />
                    ))}
                  </div>

                  <p className="text-[#4A4A4A] mb-6 flex-1 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#FFE4E8]">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] text-white font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-[#4A4A4A]">{testimonial.name}</p>
                      <p className="text-sm text-[#6B6B6B]">{testimonial.child}</p>
                      <Badge variant="secondary" className="mt-1 bg-[#FFF5F7] text-[#FF9AA2] text-xs">
                        {testimonial.program}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#FFDAC1]/40 text-[#4A4A4A] hover:bg-[#FFDAC1]/50 border-0">
              <Video className="w-3 h-3 mr-1" />
              Video Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Video Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`aspect-video rounded-2xl bg-gradient-to-br ${video.color} flex items-center justify-center mb-4 relative overflow-hidden`}>
                  <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-semibold text-[#4A4A4A] mb-1">{video.title}</h3>
                <p className="text-sm text-[#6B6B6B]">{video.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#6B6B6B] mb-4">More video testimonials coming soon!</p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#B5EAD7]/40 text-[#4A4A4A] hover:bg-[#B5EAD7]/50 border-0">
              Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Parent Success Stories
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-[#FFE4E8] bg-white">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center shrink-0">
                    <span className="text-4xl font-bold text-white">JS</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#4A4A4A] mb-2">The Joshi Family Journey</h3>
                    <p className="text-[#6B6B6B] mb-4">
                      When our son Arjun joined TinTin Paradies at 18 months, he was shy and hesitant to interact with others. 
                      Within 6 months, we saw a remarkable transformation. He became confident, started speaking in sentences, 
                      and made many friends. Now at 4 years old, he&apos;s ready for big school and we couldn&apos;t be happier with 
                      the foundation TinTin Paradies has provided.
                    </p>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-[#FFDAC1] fill-[#FFDAC1]" />
                      <Star className="w-5 h-5 text-[#FFDAC1] fill-[#FFDAC1]" />
                      <Star className="w-5 h-5 text-[#FFDAC1] fill-[#FFDAC1]" />
                      <Star className="w-5 h-5 text-[#FFDAC1] fill-[#FFDAC1]" />
                      <Star className="w-5 h-5 text-[#FFDAC1] fill-[#FFDAC1]" />
                      <span className="ml-2 text-[#6B6B6B]">— The Joshi Family, 3 years with us</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Join Our Happy Families
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the TinTin Paradies difference. Schedule a visit and see why parents love us.
            </p>
            <Link href="/admissions">
              <Button size="lg" className="bg-white text-[#FF9AA2] hover:bg-white/90 rounded-full px-8">
                Book a Visit Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
