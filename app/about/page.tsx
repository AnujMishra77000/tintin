import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, Target, Lightbulb, Users, Award, BookOpen, Clock, Shield } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Meera Sharma",
    role: "Founder & Director",
    qualification: "Ph.D. in Child Psychology",
    experience: "15+ years",
    certifications: ["Early Childhood Education", "Child Development Specialist"],
    initials: "MS",
  },
  {
    name: "Priya Patel",
    role: "Head Caregiver",
    qualification: "M.A. in Child Care",
    experience: "10+ years",
    certifications: ["First Aid Certified", "Montessori Trained"],
    initials: "PP",
  },
  {
    name: "Anita Gupta",
    role: "Preschool Coordinator",
    qualification: "B.Ed. in Early Education",
    experience: "8+ years",
    certifications: ["Play-Based Learning", "Special Needs Care"],
    initials: "AG",
  },
  {
    name: "Sunita Rao",
    role: "Infant Care Specialist",
    qualification: "Diploma in Nursing",
    experience: "12+ years",
    certifications: ["Pediatric First Aid", "Infant CPR"],
    initials: "SR",
  },
];

const ratios = [
  { age: "Infants (6-18 months)", ratio: "1:3", description: "Individual attention for every baby" },
  { age: "Toddlers (1.5-3 years)", ratio: "1:5", description: "Guided exploration and care" },
  { age: "Preschool (3-5 years)", ratio: "1:8", description: "Structured learning environment" },
  { age: "After-School (5-10 years)", ratio: "1:10", description: "Supervised activities and homework help" },
];

const certifications = [
  { icon: Shield, title: "ISO 9001:2015 Certified", description: "Quality management standards" },
  { icon: Award, title: "Ministry of WCD Registered", description: "Government recognized center" },
  { icon: BookOpen, title: "Early Education Alliance", description: "Member of national association" },
  { icon: Users, title: "Safe Kids Worldwide", description: "Child safety certified" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Our Story
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              TinTin Paradies was founded with a simple mission: to create a safe, nurturing environment 
              where children can learn, play, and grow. What started as a small home daycare in 2015 
              has grown into a trusted childcare center serving hundreds of families.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#FFE4E8] bg-gradient-to-br from-white to-[#FFF5F7]">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">Our Mission</h2>
                <p className="text-[#6B6B6B] leading-relaxed">
                  To provide exceptional childcare that nurtures each child&apos;s unique potential through 
                  safe, stimulating, and loving environments. We partner with parents to build a strong 
                  foundation for lifelong learning and success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#FFE4E8] bg-gradient-to-br from-white to-[#B5EAD7]/20">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B5EAD7] to-[#9EDAC5] flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">Our Vision</h2>
                <p className="text-[#6B6B6B] leading-relaxed">
                  To be the most trusted name in childcare, known for our commitment to safety, 
                  excellence in early education, and genuine care for every child. We envision 
                  a world where every child has access to quality early childhood care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#C7CEEA]/40 text-[#4A4A4A] hover:bg-[#C7CEEA]/50 border-0">
              Our Approach
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Our Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">Child-Centered Care</h3>
              <p className="text-[#6B6B6B]">
                Every child is unique. We tailor our approach to meet individual needs, 
                interests, and developmental stages.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B5EAD7] to-[#9EDAC5] flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">Play-Based Learning</h3>
              <p className="text-[#6B6B6B]">
                Children learn best through play. Our activities are designed to be fun, 
                engaging, and educational.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C7CEEA] to-[#B5BCE0] flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">Safety & Security</h3>
              <p className="text-[#6B6B6B]">
                A safe environment is essential for learning. We maintain the highest 
                safety standards in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              Our Team
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Meet Our Caregivers
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Our dedicated team of professionals is passionate about early childhood education
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-[#FFE4E8] hover:shadow-lg transition-all group">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <AvatarFallback className="bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] text-white text-xl font-bold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold text-[#4A4A4A]">{member.name}</h3>
                  <p className="text-[#FF9AA2] font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-[#6B6B6B] text-sm mb-1">{member.qualification}</p>
                  <p className="text-[#6B6B6B] text-sm mb-3">{member.experience} experience</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.certifications.map((cert, i) => (
                      <Badge key={i} variant="secondary" className="bg-[#FFF5F7] text-[#6B6B6B] text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher-Child Ratio */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#B5EAD7]/40 text-[#4A4A4A] hover:bg-[#B5EAD7]/50 border-0">
              <Users className="w-3 h-3 mr-1" />
              Individual Attention
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Teacher-Child Ratios
            </h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              We maintain low ratios to ensure every child receives personalized care and attention
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ratios.map((item, index) => (
              <Card key={index} className="border-[#FFE4E8] text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.ratio}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#4A4A4A] mb-2">{item.age}</h3>
                  <p className="text-[#6B6B6B] text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#FFDAC1]/40 text-[#4A4A4A] hover:bg-[#FFDAC1]/50 border-0">
              <Award className="w-3 h-3 mr-1" />
              Recognitions
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Certifications & Affiliations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-[#FFE4E8] hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#4A4A4A] mb-2">{cert.title}</h3>
                  <p className="text-[#6B6B6B] text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
