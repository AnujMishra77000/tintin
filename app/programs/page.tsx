import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Baby, 
  Footprints, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Utensils, 
  Moon, 
  Palette, 
  Music, 
  Gamepad2,
  ArrowRight,
  IndianRupee
} from "lucide-react";

const programs = [
  {
    id: "infant",
    title: "Infant Care",
    icon: Baby,
    age: "6 months - 1.5 years",
    color: "from-[#FFB6C1] to-[#FF9AA2]",
    objective: "Provide a nurturing, safe environment that supports sensory development and builds trust.",
    benefits: [
      "Individualized care routines",
      "Sensory stimulation activities",
      "Tummy time and motor development",
      "Language exposure through songs and stories",
      "Safe sleep practices",
    ],
    routine: [
      { time: "8:00 AM", activity: "Welcome & Health Check", icon: CheckCircle },
      { time: "8:30 AM", activity: "Feeding Time", icon: Utensils },
      { time: "9:30 AM", activity: "Sensory Play", icon: Palette },
      { time: "10:30 AM", activity: "Nap Time", icon: Moon },
      { time: "12:00 PM", activity: "Lunch & Feeding", icon: Utensils },
      { time: "1:00 PM", activity: "Outdoor Stroller Time", icon: Footprints },
      { time: "2:00 PM", activity: "Nap Time", icon: Moon },
      { time: "4:00 PM", activity: "Music & Movement", icon: Music },
      { time: "5:00 PM", activity: "Parent Pickup", icon: CheckCircle },
    ],
    learningAreas: [
      { title: "Motor Skills", description: "Tummy time, grasping, rolling, crawling support" },
      { title: "Sensory Development", description: "Textures, sounds, visual stimulation" },
      { title: "Language", description: "Babbling, cooing, first words encouragement" },
      { title: "Social-Emotional", description: "Bonding, trust building, emotional security" },
    ],
    fees: {
      monthly: "₹12,000",
      registration: "₹5,000",
      annual: "₹1,30,000",
    },
  },
  {
    id: "toddler",
    title: "Toddler Program",
    icon: Footprints,
    age: "1.5 - 3 years",
    color: "from-[#B5EAD7] to-[#9EDAC5]",
    objective: "Encourage exploration, independence, and early social skills through play-based learning.",
    benefits: [
      "Potty training support",
      "Language development focus",
      "Art and sensory activities",
      "Social interaction opportunities",
      " gross motor skill development",
    ],
    routine: [
      { time: "8:00 AM", activity: "Arrival & Free Play", icon: Gamepad2 },
      { time: "9:00 AM", activity: "Circle Time & Songs", icon: Music },
      { time: "9:30 AM", activity: "Snack Time", icon: Utensils },
      { time: "10:00 AM", activity: "Learning Centers", icon: BookOpen },
      { time: "11:00 AM", activity: "Outdoor Play", icon: Footprints },
      { time: "12:00 PM", activity: "Lunch Time", icon: Utensils },
      { time: "12:45 PM", activity: "Story Time", icon: BookOpen },
      { time: "1:00 PM", activity: "Nap Time", icon: Moon },
      { time: "3:00 PM", activity: "Wake Up & Snack", icon: Utensils },
      { time: "3:30 PM", activity: "Art & Craft", icon: Palette },
      { time: "4:30 PM", activity: "Free Play", icon: Gamepad2 },
      { time: "5:00 PM", activity: "Parent Pickup", icon: CheckCircle },
    ],
    learningAreas: [
      { title: "Language", description: "Vocabulary building, simple sentences, communication" },
      { title: "Motor Skills", description: "Walking, running, climbing, fine motor activities" },
      { title: "Cognitive", description: "Problem-solving, cause and effect, matching" },
      { title: "Social Skills", description: "Sharing, taking turns, making friends" },
    ],
    fees: {
      monthly: "₹10,000",
      registration: "₹5,000",
      annual: "₹1,10,000",
    },
  },
  {
    id: "preschool",
    title: "Preschool Readiness",
    icon: BookOpen,
    age: "3 - 5 years",
    color: "from-[#C7CEEA] to-[#B5BCE0]",
    objective: "Prepare children for school with structured learning while maintaining play-based approach.",
    benefits: [
      "Pre-reading and writing skills",
      "Basic math concepts",
      "Science exploration",
      "Creative arts and music",
      "School readiness skills",
    ],
    routine: [
      { time: "8:00 AM", activity: "Arrival & Morning Work", icon: BookOpen },
      { time: "9:00 AM", activity: "Circle Time & Calendar", icon: CheckCircle },
      { time: "9:30 AM", activity: "Literacy Activity", icon: BookOpen },
      { time: "10:15 AM", activity: "Snack Time", icon: Utensils },
      { time: "10:30 AM", activity: "Math Centers", icon: CheckCircle },
      { time: "11:15 AM", activity: "Outdoor Play", icon: Footprints },
      { time: "12:00 PM", activity: "Lunch Time", icon: Utensils },
      { time: "12:45 PM", activity: "Quiet Reading", icon: BookOpen },
      { time: "1:15 PM", activity: "Rest Time", icon: Moon },
      { time: "2:30 PM", activity: "Science/Art Activity", icon: Palette },
      { time: "3:30 PM", activity: "Music & Movement", icon: Music },
      { time: "4:15 PM", activity: "Free Play & Centers", icon: Gamepad2 },
      { time: "5:00 PM", activity: "Parent Pickup", icon: CheckCircle },
    ],
    learningAreas: [
      { title: "Literacy", description: "Letter recognition, phonics, pre-writing, storytelling" },
      { title: "Mathematics", description: "Numbers, counting, shapes, patterns, sorting" },
      { title: "Science", description: "Nature exploration, experiments, observation" },
      { title: "Creative Arts", description: "Drawing, painting, crafts, dramatic play" },
    ],
    fees: {
      monthly: "₹9,000",
      registration: "₹5,000",
      annual: "₹1,00,000",
    },
  },
  {
    id: "afterschool",
    title: "After-School Care",
    icon: Clock,
    age: "5 - 10 years",
    color: "from-[#FFDAC1] to-[#FFC9A8]",
    objective: "Provide a safe, engaging environment for school-age children with homework support and activities.",
    benefits: [
      "Homework assistance",
      "Enrichment activities",
      "Physical activities",
      "Social development",
      "Safe supervision",
    ],
    routine: [
      { time: "2:00 PM", activity: "School Pickup / Arrival", icon: CheckCircle },
      { time: "2:30 PM", activity: "Snack Time", icon: Utensils },
      { time: "3:00 PM", activity: "Homework Hour", icon: BookOpen },
      { time: "4:00 PM", activity: "Outdoor Sports", icon: Footprints },
      { time: "5:00 PM", activity: "Enrichment Activity", icon: Palette },
      { time: "6:00 PM", activity: "Free Play", icon: Gamepad2 },
      { time: "7:00 PM", activity: "Parent Pickup", icon: CheckCircle },
    ],
    learningAreas: [
      { title: "Academic Support", description: "Homework help, reading, math practice" },
      { title: "Physical", description: "Sports, outdoor games, fitness activities" },
      { title: "Creative", description: "Art projects, music, drama, crafts" },
      { title: "Life Skills", description: "Responsibility, independence, time management" },
    ],
    fees: {
      monthly: "₹7,000",
      registration: "₹3,000",
      annual: "₹75,000",
    },
  },
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              Our Programs
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Programs for Every Age
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              From infants to school-age children, we offer age-appropriate programs designed 
              to nurture development, encourage learning, and provide a safe, loving environment.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="infant" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-8 bg-[#FFF5F7] p-2 rounded-2xl h-auto">
              {programs.map((program) => (
                <TabsTrigger 
                  key={program.id} 
                  value={program.id}
                  className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-full px-6 py-3"
                >
                  <program.icon className="w-4 h-4 mr-2" />
                  {program.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {programs.map((program) => (
              <TabsContent key={program.id} value={program.id}>
                <div className="space-y-12">
                  {/* Program Header */}
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center mx-auto mb-6`}>
                      <program.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-[#4A4A4A] mb-2">{program.title}</h2>
                    <Badge className="bg-[#FFF5F7] text-[#FF9AA2]">{program.age}</Badge>
                  </div>

                  {/* Objective & Benefits */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="border-[#FFE4E8]">
                      <CardHeader>
                        <CardTitle className="text-[#4A4A4A]">Program Overview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#6B6B6B] mb-6">{program.objective}</p>
                        <h4 className="font-semibold text-[#4A4A4A] mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {program.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2 text-[#6B6B6B]">
                              <CheckCircle className="w-4 h-4 text-[#B5EAD7] mt-0.5 shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-[#FFE4E8]">
                      <CardHeader>
                        <CardTitle className="text-[#4A4A4A]">Daily Routine</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {program.routine.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FFF5F7] transition-colors">
                              <span className="text-sm font-semibold text-[#FF9AA2] w-16">{item.time}</span>
                              <item.icon className="w-4 h-4 text-[#6B6B6B]" />
                              <span className="text-[#4A4A4A]">{item.activity}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Learning Areas */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#4A4A4A] text-center mb-8">Learning Areas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {program.learningAreas.map((area, index) => (
                        <Card key={index} className="border-[#FFE4E8] hover:shadow-lg transition-all">
                          <CardContent className="p-6 text-center">
                            <h4 className="font-bold text-[#4A4A4A] mb-2">{area.title}</h4>
                            <p className="text-[#6B6B6B] text-sm">{area.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Fees */}
                  <Card className="border-[#FFE4E8] bg-gradient-to-br from-[#FFF5F7] to-white">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-[#4A4A4A] text-center mb-8">Fee Structure</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                          <IndianRupee className="w-8 h-8 text-[#FFB6C1] mx-auto mb-2" />
                          <p className="text-3xl font-bold text-[#4A4A4A]">{program.fees.monthly}</p>
                          <p className="text-[#6B6B6B]">per month</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                          <IndianRupee className="w-8 h-8 text-[#B5EAD7] mx-auto mb-2" />
                          <p className="text-3xl font-bold text-[#4A4A4A]">{program.fees.registration}</p>
                          <p className="text-[#6B6B6B]">one-time registration</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                          <IndianRupee className="w-8 h-8 text-[#C7CEEA] mx-auto mb-2" />
                          <p className="text-3xl font-bold text-[#4A4A4A]">{program.fees.annual}</p>
                          <p className="text-[#6B6B6B]">annual fee (save 10%)</p>
                        </div>
                      </div>
                      <p className="text-center text-sm text-[#6B6B6B] mt-6">
                        * Additional charges may apply for meals, transport, and special activities
                      </p>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <div className="text-center">
                    <Link href="/admissions">
                      <Button size="lg" className="bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] hover:from-[#FF9AA2] hover:to-[#FFB6C1] text-white rounded-full px-8">
                        Enroll in {program.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
