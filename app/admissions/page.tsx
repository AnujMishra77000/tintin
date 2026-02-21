"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ClipboardList, 
  FileText, 
  IndianRupee, 
  Calendar, 
  CheckCircle,
  ArrowRight,
  Phone,
  Baby,
  Users,
  FileCheck,
  Upload
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const admissionSteps = [
  {
    icon: Phone,
    step: "01",
    title: "Enquiry",
    description: "Contact us via phone, WhatsApp, or fill out the enquiry form. Our team will answer all your questions.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Centre Visit",
    description: "Schedule a tour of our facility. Meet our staff, see the classrooms, and experience our environment.",
  },
  {
    icon: Users,
    step: "03",
    title: "Child Interaction",
    description: "We conduct a friendly interaction with your child to understand their needs and ensure a good fit.",
  },
  {
    icon: FileCheck,
    step: "04",
    title: "Registration",
    description: "Complete the registration formalities, submit documents, and pay the registration fee.",
  },
  {
    icon: Baby,
    step: "05",
    title: "Start Date",
    description: "Your child begins their journey at TinTin Paradies! We ensure a smooth settling-in period.",
  },
];

const requiredDocuments = [
  "Child's Birth Certificate (copy)",
  "Child's Aadhaar Card (if available)",
  "Parent's ID Proof (Aadhaar/PAN/Passport)",
  "Address Proof (Utility Bill/Rent Agreement)",
  "Passport Size Photos (4 each - child & parents)",
  "Medical Certificate & Vaccination Record",
  "Emergency Contact Information",
  "Pickup Authorization Form",
];

const feeStructure = [
  {
    program: "Infant Care",
    monthly: "₹12,000",
    registration: "₹5,000",
    annual: "₹1,30,000",
    includes: ["Meals", "Diapers", "Activities"],
  },
  {
    program: "Toddler Program",
    monthly: "₹10,000",
    registration: "₹5,000",
    annual: "₹1,10,000",
    includes: ["Meals", "Learning Materials", "Activities"],
  },
  {
    program: "Preschool",
    monthly: "₹9,000",
    registration: "₹5,000",
    annual: "₹1,00,000",
    includes: ["Meals", "Books & Materials", "Activities"],
  },
  {
    program: "After-School Care",
    monthly: "₹7,000",
    registration: "₹3,000",
    annual: "₹75,000",
    includes: ["Evening Snacks", "Homework Help", "Activities"],
  },
];

export default function AdmissionsPage() {
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
              <ClipboardList className="w-3 h-3 mr-1" />
              Admissions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Begin Your Child&apos;s Journey With Us
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Join the TinTin Paradies family. Our simple admission process ensures a smooth start 
              for you and your child.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#B5EAD7]/40 text-[#4A4A4A] hover:bg-[#B5EAD7]/50 border-0">
              Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Admission Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-[#FFE4E8] h-full hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-[#FFB6C1]/30">{step.step}</span>
                    <h3 className="text-lg font-bold text-[#4A4A4A] mt-2 mb-2">{step.title}</h3>
                    <p className="text-[#6B6B6B] text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#FFB6C1]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-[#C7CEEA]/40 text-[#4A4A4A] hover:bg-[#C7CEEA]/50 border-0">
                <FileText className="w-3 h-3 mr-1" />
                Documents
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-6">
                Required Documents
              </h2>
              <p className="text-[#6B6B6B] mb-8">
                Please keep these documents ready for a smooth admission process. 
                All documents should be self-attested.
              </p>

              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#FFE4E8]">
                    <CheckCircle className="w-5 h-5 text-[#B5EAD7] shrink-0" />
                    <span className="text-[#4A4A4A]">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Badge className="mb-4 bg-[#FFDAC1]/40 text-[#4A4A4A] hover:bg-[#FFDAC1]/50 border-0">
                <IndianRupee className="w-3 h-3 mr-1" />
                Fees
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-6">
                Fee Structure
              </h2>

              <div className="space-y-4">
                {feeStructure.map((fee, index) => (
                  <Card key={index} className="border-[#FFE4E8]">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-[#4A4A4A]">{fee.program}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-[#FFF5F7] rounded-lg">
                          <p className="text-xl font-bold text-[#FF9AA2]">{fee.monthly}</p>
                          <p className="text-xs text-[#6B6B6B]">Monthly</p>
                        </div>
                        <div className="text-center p-3 bg-[#FFF5F7] rounded-lg">
                          <p className="text-xl font-bold text-[#B5EAD7]">{fee.registration}</p>
                          <p className="text-xs text-[#6B6B6B]">Registration</p>
                        </div>
                        <div className="text-center p-3 bg-[#FFF5F7] rounded-lg">
                          <p className="text-xl font-bold text-[#C7CEEA]">{fee.annual}</p>
                          <p className="text-xs text-[#6B6B6B]">Annual</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {fee.includes.map((item, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#FFF5F7] text-[#6B6B6B]">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white rounded-xl border border-[#FFE4E8]">
                <h4 className="font-semibold text-[#4A4A4A] mb-2">Additional Information:</h4>
                <ul className="text-sm text-[#6B6B6B] space-y-1">
                  <li>• 10% discount on annual fee payment</li>
                  <li>• Sibling discount: 10% off for second child</li>
                  <li>• Transport available at additional cost</li>
                  <li>• Registration fee is one-time and non-refundable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Booking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
                <Calendar className="w-3 h-3 mr-1" />
                Book a Visit
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
                Schedule a Centre Visit
              </h2>
              <p className="text-[#6B6B6B]">
                Fill out the form below and we&apos;ll get back to you to confirm your visit.
              </p>
            </div>

            {formSubmitted ? (
              <Card className="border-[#FFE4E8] bg-[#FFF5F7]">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#B5EAD7] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4A4A4A] mb-2">Thank You!</h3>
                  <p className="text-[#6B6B6B]">
                    We&apos;ve received your enquiry. Our team will contact you within 24 hours to confirm your visit.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-[#FFE4E8]">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="parentName">Parent&apos;s Name *</Label>
                        <Input id="parentName" placeholder="Enter your name" required className="border-[#FFE4E8]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="border-[#FFE4E8]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="border-[#FFE4E8]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="childName">Child&apos;s Name *</Label>
                        <Input id="childName" placeholder="Enter child's name" required className="border-[#FFE4E8]" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="childAge">Child&apos;s Age *</Label>
                        <Input id="childAge" placeholder="e.g., 2 years 3 months" required className="border-[#FFE4E8]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program">Interested Program *</Label>
                      <Select required>
                        <SelectTrigger className="border-[#FFE4E8]">
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="infant">Infant Care (6 months - 1.5 years)</SelectItem>
                          <SelectItem value="toddler">Toddler Program (1.5 - 3 years)</SelectItem>
                          <SelectItem value="preschool">Preschool (3 - 5 years)</SelectItem>
                          <SelectItem value="afterschool">After-School Care (5 - 10 years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Visit Date</Label>
                      <Input id="preferredDate" type="date" className="border-[#FFE4E8]" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your requirements or any questions you have..."
                        className="border-[#FFE4E8] min-h-[100px]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] hover:from-[#FF9AA2] hover:to-[#FFB6C1] text-white rounded-full"
                    >
                      Submit Enquiry
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>

                    <p className="text-xs text-center text-[#6B6B6B]">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy" className="text-[#FF9AA2] hover:underline">Privacy Policy</Link>
                      {" "}and{" "}
                      <Link href="/terms" className="text-[#FF9AA2] hover:underline">Terms of Service</Link>.
                    </p>
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
