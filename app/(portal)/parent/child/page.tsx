"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Baby,
  Calendar,
  Ruler,
  Weight,
  Heart,
  AlertCircle,
  Edit,
  Save,
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  Activity,
  Star,
  CheckCircle,
  Clock,
  Droplets,
  Thermometer
} from "lucide-react";
import { useState } from "react";
import { FloatingKid, HappyKid } from "@/components/shared/CartoonKids";

const childProfile = {
  name: "Aarav Sharma",
  age: "3 years 4 months",
  dateOfBirth: "October 15, 2022",
  gender: "Male",
  bloodGroup: "B+",
  enrollmentDate: "January 5, 2025",
  program: "Preschool Program",
  class: "Nursery B",
  teacher: "Ms. Priya Sharma",
  height: "98 cm",
  weight: "15.5 kg",
  allergies: ["Peanuts", "Shellfish"],
  medications: ["None"],
  emergencyContact: {
    name: "Rahul Sharma",
    relation: "Father",
    phone: "+91 98765 43210"
  },
  mother: {
    name: "Priya Sharma",
    phone: "+91 98765 43211",
    email: "priya.sharma@email.com",
    occupation: "Software Engineer"
  },
  father: {
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@email.com",
    occupation: "Business Owner"
  },
  address: "123 Park Avenue, Green Valley, Mumbai - 400001"
};

const developmentMilestones = [
  { area: "Motor Skills", progress: 85, status: "On Track", color: "bg-green-500" },
  { area: "Language", progress: 78, status: "On Track", color: "bg-blue-500" },
  { area: "Cognitive", progress: 82, status: "On Track", color: "bg-purple-500" },
  { area: "Social Skills", progress: 92, status: "Advanced", color: "bg-yellow-500" },
  { area: "Emotional", progress: 88, status: "On Track", color: "bg-red-500" },
];

const recentAssessments = [
  { date: "Feb 15, 2026", type: "Monthly Assessment", overall: "Excellent", notes: "Shows great improvement in group activities" },
  { date: "Jan 15, 2026", type: "Monthly Assessment", overall: "Good", notes: "Needs encouragement in art activities" },
  { date: "Dec 15, 2025", type: "Quarterly Review", overall: "Very Good", notes: "Excellent progress in all areas" },
];

const immunizationRecords = [
  { vaccine: "MMR (Measles, Mumps, Rubella)", date: "Jan 10, 2025", status: "Completed", nextDue: "Booster at 4 years" },
  { vaccine: "DTP (Diphtheria, Tetanus, Pertussis)", date: "Jan 10, 2025", status: "Completed", nextDue: "Booster at 4 years" },
  { vaccine: "Polio (OPV)", date: "Jan 10, 2025", status: "Completed", nextDue: "Booster at 4 years" },
  { vaccine: "Hepatitis B", date: "Jan 10, 2025", status: "Completed", nextDue: "Complete" },
  { vaccine: "Varicella (Chickenpox)", date: "Feb 5, 2026", status: "Upcoming", nextDue: "Due this month" },
];

export default function ChildProfile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <FloatingKid>
              <HappyKid className="w-12 h-12" />
            </FloatingKid>
            Child Profile
          </h1>
          <p className="text-gray-600 mt-1">View and manage your child&apos;s information</p>
        </div>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          className={isEditing ? "bg-green-500 hover:bg-green-600" : "bg-gradient-to-r from-red-400 to-orange-400"}
        >
          {isEditing ? (
            <><Save className="w-4 h-4 mr-2" /> Save Changes</>
          ) : (
            <><Edit className="w-4 h-4 mr-2" /> Edit Profile</>
          )}
        </Button>
      </div>

      {/* Profile Header Card */}
      <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                <AvatarFallback className="bg-gradient-to-br from-red-400 to-orange-400 text-white text-4xl font-bold">
                  {childProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white">
                <CheckCircle className="w-3 h-3 mr-1" />
                Active
              </Badge>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900">{childProfile.name}</h2>
              <p className="text-lg text-gray-600 mt-1">{childProfile.program}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                <Badge variant="outline" className="border-red-300 text-red-600">
                  <Baby className="w-3 h-3 mr-1" />
                  {childProfile.age}
                </Badge>
                <Badge variant="outline" className="border-blue-300 text-blue-600">
                  {childProfile.class}
                </Badge>
                <Badge variant="outline" className="border-green-300 text-green-600">
                  Blood: {childProfile.bloodGroup}
                </Badge>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">Class Teacher</p>
              <p className="font-semibold text-gray-900">{childProfile.teacher}</p>
              <p className="text-sm text-gray-500 mt-2">Enrolled Since</p>
              <p className="font-semibold text-gray-900">{childProfile.enrollmentDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-white border-2 border-red-100 p-1">
          <TabsTrigger value="info" className="data-[state=active]:bg-red-400 data-[state=active]:text-white">Basic Info</TabsTrigger>
          <TabsTrigger value="health" className="data-[state=active]:bg-green-400 data-[state=active]:text-white">Health</TabsTrigger>
          <TabsTrigger value="development" className="data-[state=active]:bg-blue-400 data-[state=active]:text-white">Development</TabsTrigger>
          <TabsTrigger value="family" className="data-[state=active]:bg-purple-400 data-[state=active]:text-white">Family</TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="mt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-500" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-500">Full Name</Label>
                    <p className="font-medium text-gray-900">{childProfile.name}</p>
                  </div>
                  <div>
                    <Label className="text-gray-500">Date of Birth</Label>
                    <p className="font-medium text-gray-900">{childProfile.dateOfBirth}</p>
                  </div>
                  <div>
                    <Label className="text-gray-500">Gender</Label>
                    <p className="font-medium text-gray-900">{childProfile.gender}</p>
                  </div>
                  <div>
                    <Label className="text-gray-500">Blood Group</Label>
                    <p className="font-medium text-gray-900">{childProfile.bloodGroup}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-500" />
                  Physical Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-xl text-center">
                    <Ruler className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">{childProfile.height}</p>
                    <p className="text-sm text-gray-500">Height</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-xl text-center">
                    <Weight className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">{childProfile.weight}</p>
                    <p className="text-sm text-gray-500">Weight</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Last updated: Feb 1, 2026
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="health" className="mt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Allergies & Medical Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-500 mb-2 block">Known Allergies</Label>
                  <div className="flex flex-wrap gap-2">
                    {childProfile.allergies.map((allergy, index) => (
                      <Badge key={index} className="bg-red-100 text-red-700 px-3 py-1">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-gray-500 mb-2 block">Current Medications</Label>
                  <p className="text-gray-900">{childProfile.medications.join(", ")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-500" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-blue-50 rounded-xl">
                  <p className="font-bold text-gray-900 text-lg">{childProfile.emergencyContact.name}</p>
                  <p className="text-gray-600">{childProfile.emergencyContact.relation}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <p className="font-medium text-blue-600">{childProfile.emergencyContact.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Immunization Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {immunizationRecords.map((record, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        record.status === "Completed" ? "bg-green-400" : "bg-amber-400"
                      }`}>
                        {record.status === "Completed" ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <Clock className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{record.vaccine}</p>
                        <p className="text-sm text-gray-500">{record.nextDue}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={record.status === "Completed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}>
                        {record.status}
                      </Badge>
                      <p className="text-sm text-gray-500 mt-1">{record.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="development" className="mt-6 space-y-6">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-500" />
                Development Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {developmentMilestones.map((milestone, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{milestone.area}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">{milestone.progress}%</span>
                        <Badge className={milestone.status === "Advanced" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}>
                          {milestone.status}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={milestone.progress} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-500" />
                Recent Assessments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAssessments.map((assessment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200"
                  >
                    <div>
                      <p className="font-bold text-gray-900">{assessment.type}</p>
                      <p className="text-sm text-gray-600">{assessment.notes}</p>
                      <p className="text-xs text-gray-500 mt-1">{assessment.date}</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-700">
                      {assessment.overall}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="family" className="mt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-pink-500" />
                  Mother&apos;s Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-500">Name</Label>
                  <p className="font-medium text-gray-900">{childProfile.mother.name}</p>
                </div>
                <div>
                  <Label className="text-gray-500">Phone</Label>
                  <p className="font-medium text-gray-900 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-pink-500" />
                    {childProfile.mother.phone}
                  </p>
                </div>
                <div>
                  <Label className="text-gray-500">Email</Label>
                  <p className="font-medium text-gray-900 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-pink-500" />
                    {childProfile.mother.email}
                  </p>
                </div>
                <div>
                  <Label className="text-gray-500">Occupation</Label>
                  <p className="font-medium text-gray-900">{childProfile.mother.occupation}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-500" />
                  Father&apos;s Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-500">Name</Label>
                  <p className="font-medium text-gray-900">{childProfile.father.name}</p>
                </div>
                <div>
                  <Label className="text-gray-500">Phone</Label>
                  <p className="font-medium text-gray-900 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    {childProfile.father.phone}
                  </p>
                </div>
                <div>
                  <Label className="text-gray-500">Email</Label>
                  <p className="font-medium text-gray-900 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    {childProfile.father.email}
                  </p>
                </div>
                <div>
                  <Label className="text-gray-500">Occupation</Label>
                  <p className="font-medium text-gray-900">{childProfile.father.occupation}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-500" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-green-50 rounded-xl flex items-start gap-3">
                <MapPin className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="font-medium text-gray-900">{childProfile.address}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
