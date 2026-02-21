"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  Utensils,
  Moon,
  Droplets,
  Activity,
  Sun,
  BookOpen,
  Palette,
  Music,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  Heart
} from "lucide-react";
import { FloatingKid, HappyKid, EatingKid, SleepingKid, ArtKid, MusicKid, SportsKid } from "@/components/shared/CartoonKids";

const dailyLog = {
  date: "Thursday, February 20, 2026",
  arrival: {
    time: "8:00 AM",
    mood: "Happy",
    notes: "Aarav arrived smiling and waved goodbye to mom easily."
  },
  meals: [
    { time: "8:15 AM", type: "Breakfast", food: "Oatmeal porridge with banana", amount: "Ate all", icon: Utensils },
    { time: "10:30 AM", type: "Snack", food: "Milk and whole wheat biscuits", amount: "Ate well", icon: Utensils },
    { time: "12:30 PM", type: "Lunch", food: "Rice, dal, mixed vegetables, curd", amount: "In progress", icon: Utensils },
  ],
  activities: [
    { time: "9:00 AM", name: "Morning Circle", description: "Sang songs, learned about colors", icon: Music },
    { time: "10:00 AM", name: "Art Activity", description: "Finger painting with red and blue", icon: Palette },
    { time: "11:00 AM", name: "Outdoor Play", description: "Played on slides and sandbox", icon: Sun },
  ],
  nap: {
    start: "1:30 PM",
    end: "3:00 PM",
    quality: "Good",
    notes: "Fell asleep within 10 minutes"
  },
  hygiene: [
    { time: "9:45 AM", type: "Diaper Change", notes: "Normal" },
    { time: "11:30 AM", type: "Hand Washing", notes: "Before lunch" },
    { time: "1:15 PM", type: "Diaper Change", notes: "Normal" },
  ],
  health: {
    temperature: "98.6°F",
    mood: "Happy & Active",
    notes: "No health concerns today"
  }
};

const previousDays = [
  { date: "Feb 19", mood: "Happy", activities: 5, meals: 4 },
  { date: "Feb 18", mood: "Playful", activities: 6, meals: 4 },
  { date: "Feb 17", mood: "Calm", activities: 5, meals: 3 },
  { date: "Feb 14", mood: "Excited", activities: 7, meals: 4 },
  { date: "Feb 13", mood: "Happy", activities: 5, meals: 4 },
  { date: "Feb 12", mood: "Tired", activities: 4, meals: 3 },
];

export default function DailyUpdates() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <FloatingKid>
              <HappyKid className="w-12 h-12" />
            </FloatingKid>
            Daily Updates
          </h1>
          <p className="text-gray-600 mt-1">Track Aarav&apos;s daily activities and progress</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div className="px-4 py-2 bg-white rounded-lg border-2 border-red-200 font-medium">
            {dailyLog.date}
          </div>
          <Button variant="outline" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-100 to-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Mood</p>
                <p className="text-lg font-bold text-green-600">{dailyLog.arrival.mood}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center">
                <Activity className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Activities</p>
                <p className="text-lg font-bold text-blue-600">{dailyLog.activities.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-100 to-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <Utensils className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Meals</p>
                <p className="text-lg font-bold text-yellow-600">{dailyLog.meals.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center">
                <Moon className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Nap</p>
                <p className="text-lg font-bold text-purple-600">{dailyLog.nap.quality}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white border-2 border-red-100 p-1">
          <TabsTrigger value="timeline" className="data-[state=active]:bg-red-400 data-[state=active]:text-white">Daily Timeline</TabsTrigger>
          <TabsTrigger value="meals" className="data-[state=active]:bg-green-400 data-[state=active]:text-white">Meals & Health</TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-blue-400 data-[state=active]:text-white">Past Days</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="mt-6 space-y-6">
          {/* Arrival */}
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">Arrival</h3>
                    <Badge className="bg-green-100 text-green-700">{dailyLog.arrival.time}</Badge>
                  </div>
                  <p className="text-gray-600">{dailyLog.arrival.notes}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-sm text-gray-500">Mood:</span>
                    <Badge variant="outline" className="border-green-300 text-green-600">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {dailyLog.arrival.mood}
                    </Badge>
                  </div>
                </div>
                <FloatingKid>
                  <HappyKid className="w-16 h-16" />
                </FloatingKid>
              </div>
            </CardContent>
          </Card>

          {/* Activities Timeline */}
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-500" />
                </div>
                Activities & Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dailyLog.activities.map((activity, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
                      <activity.icon className="w-6 h-6 text-white" />
                    </div>
                    {index < dailyLog.activities.length - 1 && (
                      <div className="w-0.5 h-full bg-blue-200 my-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="border-blue-300 text-blue-600">
                        {activity.time}
                      </Badge>
                    </div>
                    <h4 className="font-bold text-gray-900">{activity.name}</h4>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Nap Time */}
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                  <Moon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Nap Time</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{dailyLog.nap.start} - {dailyLog.nap.end}</span>
                    </div>
                    <Badge className="bg-purple-100 text-purple-700">{dailyLog.nap.quality}</Badge>
                  </div>
                  <p className="text-gray-600">{dailyLog.nap.notes}</p>
                </div>
                <FloatingKid>
                  <SleepingKid className="w-16 h-16" />
                </FloatingKid>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meals" className="mt-6 space-y-6">
          {/* Meals */}
          <Card className="border-2 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-yellow-600" />
                </div>
                Meals Today
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dailyLog.meals.map((meal, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <meal.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-gray-900">{meal.type}</h4>
                      <Badge variant="outline" className="border-yellow-400 text-yellow-700">
                        {meal.time}
                      </Badge>
                    </div>
                    <p className="text-gray-700">{meal.food}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600">{meal.amount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Health Check */}
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-red-500" />
                </div>
                Health Check
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-sm text-gray-600 mb-1">Temperature</p>
                  <p className="text-2xl font-bold text-red-600">{dailyLog.health.temperature}</p>
                  <Badge className="mt-2 bg-green-100 text-green-700">Normal</Badge>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-sm text-gray-600 mb-1">Overall Mood</p>
                  <p className="text-xl font-bold text-red-600">{dailyLog.health.mood}</p>
                  <div className="flex gap-1 mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                  <p className="text-sm text-gray-600 mb-1">Notes</p>
                  <p className="text-sm text-gray-700">{dailyLog.health.notes}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hygiene Log */}
          <Card className="border-2 border-teal-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-teal-600" />
                </div>
                Hygiene Log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dailyLog.hygiene.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-teal-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center">
                        <Droplets className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.type}</p>
                        <p className="text-sm text-gray-500">{item.notes}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-teal-300 text-teal-600">
                      {item.time}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-500" />
                Previous Days
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {previousDays.map((day, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
                        <span className="text-white font-bold">{day.date}</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{day.date} Feb 2026</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="border-green-300 text-green-600 text-xs">
                            <Heart className="w-3 h-3 mr-1" />
                            {day.mood}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="text-center">
                        <p className="font-bold text-blue-600">{day.activities}</p>
                        <p className="text-gray-500">Activities</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-green-600">{day.meals}</p>
                        <p className="text-gray-500">Meals</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
