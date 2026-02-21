"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  IndianRupee, 
  CheckCircle,
  Heart,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Upload
} from "lucide-react";

const benefits = [
  { icon: Heart, title: "Health Insurance", description: "Comprehensive coverage for you and your family" },
  { icon: Users, title: "Supportive Team", description: "Work with passionate childcare professionals" },
  { icon: BookOpen, title: "Training & Development", description: "Regular workshops and certification programs" },
  { icon: Award, title: "Career Growth", description: "Clear progression paths and promotion opportunities" },
];

const jobOpenings = [
  {
    id: 1,
    title: "Preschool Teacher",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹25,000 - ₹35,000/month",
    description: "We're looking for passionate preschool teachers to join our growing team. You'll be responsible for creating engaging learning experiences for children aged 3-5 years.",
    requirements: [
      "B.Ed or Diploma in Early Childhood Education",
      "2+ years experience in preschool teaching",
      "Excellent communication skills",
      "Patient, creative, and nurturing personality",
    ],
  },
  {
    id: 2,
    title: "Infant Care Specialist",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹20,000 - ₹28,000/month",
    description: "Join our infant care team and provide loving care to babies aged 6-18 months. This role requires patience, attentiveness, and a genuine love for infants.",
    requirements: [
      "Diploma in Nursing or Childcare",
      "Experience with infant care preferred",
      "Knowledge of infant CPR and first aid",
      "Ability to work in shifts",
    ],
  },
  {
    id: 3,
    title: "After-School Coordinator",
    location: "Mumbai",
    type: "Part-time",
    salary: "₹15,000 - ₹20,000/month",
    description: "Lead our after-school program for children aged 5-10. You'll supervise homework, organize activities, and ensure a safe, fun environment.",
    requirements: [
      "Graduate in any discipline",
      "Experience working with school-age children",
      "Strong organizational skills",
      "Available 2:00 PM - 7:00 PM",
    ],
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
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
              <Briefcase className="w-3 h-3 mr-1" />
              Careers
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Join Our Team
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Be part of a team that makes a difference in children&apos;s lives. 
              We&apos;re always looking for passionate, caring professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-4">Why Work With Us?</h2>
            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              We offer a rewarding work environment where you can grow professionally while making a positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-[#FFE4E8] text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#4A4A4A] mb-2">{benefit.title}</h3>
                  <p className="text-[#6B6B6B] text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-4">Current Openings</h2>
            <p className="text-[#6B6B6B]">Find your perfect role and apply today</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="border-[#FFE4E8] hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-[#4A4A4A]">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary" className="bg-[#FFF5F7] text-[#6B6B6B]">
                          <MapPin className="w-3 h-3 mr-1" />
                          {job.location}
                        </Badge>
                        <Badge variant="secondary" className="bg-[#FFF5F7] text-[#6B6B6B]">
                          <Clock className="w-3 h-3 mr-1" />
                          {job.type}
                        </Badge>
                        <Badge variant="secondary" className="bg-[#FFF5F7] text-[#6B6B6B]">
                          <IndianRupee className="w-3 h-3 mr-1" />
                          {job.salary}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6B6B6B] mb-4">{job.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#4A4A4A] mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                          <CheckCircle className="w-4 h-4 text-[#B5EAD7] mt-0.5 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    onClick={() => setSelectedJob(job.id)}
                    className="w-full bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] hover:from-[#FF9AA2] hover:to-[#FFB6C1] text-white rounded-full"
                  >
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#4A4A4A] mb-4">Apply Now</h2>
              <p className="text-[#6B6B6B]">Fill out the form below and we&apos;ll get back to you soon</p>
            </div>

            {formSubmitted ? (
              <Card className="border-[#FFE4E8] bg-[#FFF5F7]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#B5EAD7] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4A4A4A] mb-2">Application Submitted!</h3>
                  <p className="text-[#6B6B6B]">
                    Thank you for your interest. Our HR team will review your application and contact you within 5-7 business days.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-[#FFE4E8]">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required className="border-[#FFE4E8]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required className="border-[#FFE4E8]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required className="border-[#FFE4E8]" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" required className="border-[#FFE4E8]" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Position Applied For *</Label>
                      <Input 
                        id="position" 
                        required 
                        className="border-[#FFE4E8]"
                        defaultValue={selectedJob ? jobOpenings.find(j => j.id === selectedJob)?.title : ""}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input id="experience" required className="border-[#FFE4E8]" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Cover Letter / Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us why you'd be a great fit for this role..."
                        className="border-[#FFE4E8] min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume">Resume/CV *</Label>
                      <div className="border-2 border-dashed border-[#FFE4E8] rounded-xl p-6 text-center">
                        <Upload className="w-8 h-8 text-[#FFB6C1] mx-auto mb-2" />
                        <p className="text-sm text-[#6B6B6B]">Click to upload or drag and drop</p>
                        <p className="text-xs text-[#6B6B6B]">PDF, DOC, DOCX up to 5MB</p>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] hover:from-[#FF9AA2] hover:to-[#FFB6C1] text-white rounded-full"
                    >
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
