import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Shield, 
  Video, 
  Lock, 
  Users, 
  FileCheck, 
  Stethoscope, 
  Sparkles, 
  AlertTriangle,
  Phone,
  Download,
  CheckCircle,
  Heart
} from "lucide-react";

const infrastructureSafety = [
  {
    icon: Video,
    title: "CCTV Coverage",
    description: "24/7 surveillance cameras in all classrooms, play areas, corridors, and entry points. Live monitoring and recorded footage stored for 30 days.",
  },
  {
    icon: Lock,
    title: "Secure Entry System",
    description: "Biometric access control for staff. Parents receive unique pickup codes. Visitor management system with ID verification.",
  },
  {
    icon: Users,
    title: "Child Pickup Authorization",
    description: "Strict pickup protocols with photo ID verification. Authorized pickup list maintained for each child. Emergency contact verification.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Exits",
    description: "Clearly marked emergency exits on all floors. Regular fire drills conducted monthly. Emergency lighting and signage.",
  },
];

const staffProtocols = [
  {
    icon: FileCheck,
    title: "Background Verification",
    description: "Comprehensive police verification for all staff members. Reference checks from previous employers. Regular re-verification every 2 years.",
  },
  {
    icon: Stethoscope,
    title: "First Aid Training",
    description: "All staff certified in pediatric first aid and CPR. Annual refresher training. Emergency response drills conducted quarterly.",
  },
  {
    icon: Heart,
    title: "Child Handling Training",
    description: "Training on positive discipline techniques. Child psychology workshops. Sensitivity training for special needs care.",
  },
];

const healthHygiene = [
  {
    icon: Sparkles,
    title: "Sanitization Schedule",
    description: "Daily deep cleaning of all areas. Toys and equipment sanitized after each use. Weekly professional pest control. Monthly deep sanitization.",
  },
  {
    icon: Stethoscope,
    title: "Illness Policy",
    description: "Daily health check at entry. Sick children isolated and parents notified immediately. Doctor on call for emergencies. Medication administration protocols.",
  },
  {
    icon: Shield,
    title: "Food Safety",
    description: "Nutritious meals prepared in hygienic kitchen. Allergy management protocols. Food handlers certified. Regular kitchen inspections.",
  },
];

const emergencyPreparedness = [
  {
    title: "Medical Response Plan",
    items: [
      "First aid kits in every room",
      "Trained first aid responders on site",
      "Tie-up with nearby hospitals",
      "Ambulance service on speed dial",
      "Emergency medication stock",
    ],
  },
  {
    title: "Fire Safety",
    items: [
      "Fire extinguishers on every floor",
      "Smoke detectors installed",
      "Monthly fire drills",
      "Evacuation plans displayed",
      "Fire safety trained staff",
    ],
  },
  {
    title: "Parent Notification",
    items: [
      "Immediate SMS/Call for emergencies",
      "Incident reporting within 2 hours",
      "Daily activity updates via app",
      "Monthly safety reports",
      "Parent-teacher meetings",
    ],
  },
];

const faqs = [
  {
    question: "What is your staff-to-child ratio?",
    answer: "We maintain low ratios as per government guidelines: 1:3 for infants, 1:5 for toddlers, 1:8 for preschoolers, and 1:10 for after-school children.",
  },
  {
    question: "How do you handle medical emergencies?",
    answer: "We have trained first aid responders, a well-equipped first aid room, tie-ups with nearby hospitals, and an ambulance on speed dial. Parents are notified immediately.",
  },
  {
    question: "What security measures are in place?",
    answer: "Our facility has 24/7 CCTV coverage, biometric entry for staff, unique pickup codes for parents, and strict visitor management with ID verification.",
  },
  {
    question: "How do you ensure food safety?",
    answer: "All meals are prepared in our hygienic kitchen by certified food handlers. We follow strict allergy management protocols and regular kitchen inspections.",
  },
  {
    question: "What is your illness policy?",
    answer: "We conduct daily health checks. Sick children are isolated and parents are notified immediately. Children must be fever-free for 24 hours before returning.",
  },
];

export default function SafetyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              <Shield className="w-3 h-3 mr-1" />
              Safety First
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Your Child&apos;s Safety is Our Priority
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              We maintain the highest safety and hygiene standards, exceeding government regulations 
              to ensure your child is protected in a clean, secure environment.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Safety */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#C7CEEA]/40 text-[#4A4A4A] hover:bg-[#C7CEEA]/50 border-0">
              Infrastructure
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Infrastructure Safety
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infrastructureSafety.map((item, index) => (
              <Card key={index} className="border-[#FFE4E8] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#4A4A4A] mb-2">{item.title}</h3>
                      <p className="text-[#6B6B6B] text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Protocols */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#B5EAD7]/40 text-[#4A4A4A] hover:bg-[#B5EAD7]/50 border-0">
              Staff
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Staff Safety Protocols
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staffProtocols.map((item, index) => (
              <Card key={index} className="border-[#FFE4E8] hover:shadow-lg transition-all bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B5EAD7] to-[#9EDAC5] flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#4A4A4A] mb-2">{item.title}</h3>
                  <p className="text-[#6B6B6B] text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Hygiene */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#FFDAC1]/40 text-[#4A4A4A] hover:bg-[#FFDAC1]/50 border-0">
              Health
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Health & Hygiene
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthHygiene.map((item, index) => (
              <Card key={index} className="border-[#FFE4E8] hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFDAC1] to-[#FFC9A8] flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#4A4A4A] mb-2">{item.title}</h3>
                  <p className="text-[#6B6B6B] text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Preparedness */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Emergency Preparedness
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Emergency Preparedness
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyPreparedness.map((section, index) => (
              <Card key={index} className="border-[#FFE4E8] bg-white">
                <CardHeader>
                  <CardTitle className="text-[#4A4A4A]">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#6B6B6B]">
                        <CheckCircle className="w-4 h-4 text-[#B5EAD7] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="border-[#FFE4E8] bg-white max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-[#FF9AA2] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">Emergency Contact</h3>
                <p className="text-[#6B6B6B] mb-4">In case of emergency, contact us immediately:</p>
                <a href="tel:+919876543210" className="text-2xl font-bold text-[#FF9AA2] hover:underline">
                  +91 98765 43210
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Child Protection Policy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#C7CEEA]/40 text-[#4A4A4A] hover:bg-[#C7CEEA]/50 border-0">
              <Shield className="w-3 h-3 mr-1" />
              Child Protection
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
              Child Protection Policy
            </h2>
            <p className="text-[#6B6B6B] mb-8">
              We are committed to safeguarding all children in our care. Our comprehensive 
              Child Protection Policy outlines our commitment to creating a safe environment 
              free from abuse, neglect, and exploitation.
            </p>
            <Button className="bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] hover:from-[#FF9AA2] hover:to-[#FFB6C1] text-white rounded-full">
              <Download className="mr-2 w-4 h-4" />
              Download Policy PDF
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
                FAQs
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4A4A] mb-4">
                Safety Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="bg-white rounded-2xl p-6 shadow-sm">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-[#FFE4E8]">
                  <AccordionTrigger className="text-[#4A4A4A] hover:text-[#FF9AA2] text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B6B6B]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
