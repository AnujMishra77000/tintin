"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Baby,
  Utensils,
  Moon,
  Activity,
  Sun,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  Heart,
  Image,
  MessageSquare,
  ChevronRight,
  Star,
  BookOpen,
  Palette
} from "lucide-react";
import Link from "next/link";
import { FloatingKid, HappyKid, EatingKid, SleepingKid, ArtKid } from "@/components/shared/CartoonKids";

const todayActivities = [
  { time: "8:00 AM", activity: "Arrival & Breakfast", status: "completed", icon: Utensils },
  { time: "9:30 AM", activity: "Circle Time & Songs", status: "completed", icon: Star },
  { time: "10:00 AM", activity: "Art & Craft Activity", status: "in-progress", icon: Palette },
  { time: "11:30 AM", activity: "Outdoor Play", status: "upcoming", icon: Sun },
  { time: "12:30 PM", activity: "Lunch Time", status: "upcoming", icon: Utensils },
  { time: "1:30 PM", activity: "Nap Time", status: "upcoming", icon: Moon },
];

const recentPhotos = [
  { id: 1, caption: "Morning circle time", color: "bg-red-200" },
  { id: 2, caption: "Painting activity", color: "bg-blue-200" },
  { id: 3, caption: "Snack time fun", color: "bg-yellow-200" },
  { id: 4, caption: "Outdoor play", color: "bg-green-200" },
];

const announcements = [
  { id: 1, title: "Parent-Teacher Meeting", date: "Feb 25, 2026", type: "event", urgent: false },
  { id: 2, title: "Annual Day Celebration", date: "Mar 15, 2026", type: "event", urgent: true },
  { id: 3, title: "New Art Supplies Needed", date: "Feb 22, 2026", type: "notice", urgent: false },
];

export default function ParentDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Good Morning, Priya! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Here&apos;s what&apos;s happening with Aarav today
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-700 px-3 py-1">
            <CheckCircle className="w-4 h-4 mr-1" />
            Aarav is at center
          </Badge>
          <span className="text-sm text-gray-500">
            <Clock className="w-4 h-4 inline mr-1" />
            Since 8:00 AM
          </span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-red-100 to-red-50 border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Attendance</p>
                <p className="text-2xl font-bold text-red-500">95%</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-400/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Activities</p>
                <p className="text-2xl font-bold text-blue-500">12</p>
                <p className="text-xs text-gray-500">This week</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New Photos</p>
                <p className="text-2xl font-bold text-yellow-600">8</p>
                <p className="text-xs text-gray-500">Today</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <Image className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Messages</p>
                <p className="text-2xl font-bold text-green-600">3</p>
                <p className="text-xs text-gray-500">Unread</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2 border-2 border-red-100">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-red-500" />
                </div>
                Today&apos;s Schedule
              </CardTitle>
              <Badge variant="outline" className="border-red-300 text-red-600">
                Feb 20, 2026
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todayActivities.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                    item.status === "in-progress"
                      ? "bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-300"
                      : item.status === "completed"
                      ? "bg-gray-50 opacity-70"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.status === "in-progress"
                      ? "bg-green-400"
                      : item.status === "completed"
                      ? "bg-gray-300"
                      : "bg-red-100"
                  }`}>
                    <item.icon className={`w-5 h-5 ${
                      item.status === "in-progress"
                        ? "text-white"
                        : item.status === "completed"
                        ? "text-gray-500"
                        : "text-red-500"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-semibold ${
                      item.status === "completed" ? "text-gray-500 line-through" : "text-gray-900"
                    }`}>
                      {item.activity}
                    </p>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                  {item.status === "in-progress" && (
                    <Badge className="bg-green-500 text-white">Happening Now</Badge>
                  )}
                  {item.status === "completed" && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Summary */}
        <div className="space-y-6">
          {/* Mood & Health */}
          <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Today&apos;s Mood
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <FloatingKid>
                  <HappyKid className="w-16 h-16" />
                </FloatingKid>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Happy & Playful</p>
                  <p className="text-sm text-gray-600">Aarav is having a great day!</p>
                  <div className="flex gap-1 mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Meals */}
          <Card className="border-2 border-green-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Utensils className="w-5 h-5 text-green-500" />
                Meals Today
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Breakfast</p>
                  <p className="text-xs text-gray-500">Porridge & Fruits - Ate well</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Lunch</p>
                  <p className="text-xs text-gray-500">Rice, Dal, Vegetables - Upcoming</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nap Status */}
          <Card className="border-2 border-blue-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Moon className="w-5 h-5 text-blue-500" />
                Nap Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Scheduled</p>
                  <p className="text-xs text-gray-500">1:30 PM - 3:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Photos & Announcements */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Photos */}
        <Card className="border-2 border-purple-200">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Image className="w-4 h-4 text-purple-500" />
                </div>
                Recent Photos
              </CardTitle>
              <Link href="/parent/media">
                <Button variant="ghost" size="sm" className="text-purple-600">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {recentPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className={`${photo.color} rounded-xl aspect-square flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer`}
                >
                  <ArtKid className="w-12 h-12 mb-2" />
                  <p className="text-xs text-center font-medium text-gray-700">{photo.caption}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                </div>
                Announcements
              </CardTitle>
              <Link href="/parent/messages">
                <Button variant="ghost" size="sm" className="text-orange-600">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {announcements.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 p-3 rounded-xl bg-orange-50 border border-orange-200 hover:bg-orange-100 transition-colors cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.urgent ? "bg-red-100" : "bg-orange-100"
                  }`}>
                    {item.urgent ? (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    ) : (
                      <Calendar className="w-5 h-5 text-orange-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      {item.urgent && (
                        <Badge className="bg-red-500 text-white text-xs">Urgent</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Progress */}
      <Card className="border-2 border-teal-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-teal-600" />
            </div>
            Learning Progress - February 2026
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Motor Skills</span>
                <span className="text-sm font-bold text-green-600">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Language</span>
                <span className="text-sm font-bold text-blue-600">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Social Skills</span>
                <span className="text-sm font-bold text-purple-600">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
