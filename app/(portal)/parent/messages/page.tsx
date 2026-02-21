"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageSquare,
  Send,
  Bell,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Paperclip,
  Search,
  Star,
  Users,
  FileText
} from "lucide-react";
import { useState } from "react";
import { FloatingKid, HappyKid } from "@/components/shared/CartoonKids";

const announcements = [
  {
    id: 1,
    title: "Annual Day Celebration 2026",
    content: "We are excited to announce our Annual Day Celebration on March 15, 2026. All parents are invited to witness their children's wonderful performances!",
    date: "Feb 18, 2026",
    time: "10:00 AM",
    category: "event",
    urgent: true,
    author: "Principal's Office"
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting",
    content: "The quarterly PTM is scheduled for February 25, 2026. Please book your preferred time slot through the portal.",
    date: "Feb 15, 2026",
    time: "2:30 PM",
    category: "meeting",
    urgent: false,
    author: "Class Teacher"
  },
  {
    id: 3,
    title: "New Art Supplies Collection",
    content: "We are collecting recyclable materials for our upcoming art project. Please send any cardboard boxes, bottle caps, or fabric scraps with your child.",
    date: "Feb 12, 2026",
    time: "9:00 AM",
    category: "notice",
    urgent: false,
    author: "Art Department"
  },
  {
    id: 4,
    title: "Holiday Notice - Holi",
    content: "The center will remain closed on March 14, 2026 for Holi celebrations. Wishing everyone a colorful and safe Holi!",
    date: "Feb 10, 2026",
    time: "11:00 AM",
    category: "holiday",
    urgent: false,
    author: "Admin Office"
  },
];

const conversations = [
  {
    id: 1,
    with: "Ms. Priya (Class Teacher)",
    role: "Preschool Teacher",
    lastMessage: "Aarav did really well in today's art class!",
    time: "10:30 AM",
    unread: 2,
    online: true
  },
  {
    id: 2,
    with: "Nurse Anjali",
    role: "Medical Staff",
    lastMessage: "Aarav's temperature is normal today.",
    time: "Yesterday",
    unread: 0,
    online: false
  },
  {
    id: 3,
    with: "Transport Coordinator",
    role: "Transportation",
    lastMessage: "The bus will arrive 10 minutes early tomorrow.",
    time: "Feb 18",
    unread: 0,
    online: true
  },
];

const chatMessages = [
  { id: 1, sender: "teacher", text: "Good morning! Just wanted to share that Aarav participated very actively in today's circle time.", time: "9:30 AM" },
  { id: 2, sender: "parent", text: "That's wonderful to hear! He's been practicing the songs at home.", time: "9:35 AM" },
  { id: 3, sender: "teacher", text: "You can tell! He was leading the group in 'Twinkle Twinkle' today 🌟", time: "9:40 AM" },
  { id: 4, sender: "teacher", text: "Also, he finished all his lunch today - the new vegetable curry was a hit!", time: "10:30 AM", attachment: "photo" },
];

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <FloatingKid>
              <HappyKid className="w-12 h-12" />
            </FloatingKid>
            Messages & Announcements
          </h1>
          <p className="text-gray-600 mt-1">Stay connected with teachers and staff</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-red-100 text-red-700 px-3 py-1">
            <Bell className="w-4 h-4 mr-1" />
            2 Unread Messages
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="announcements" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white border-2 border-red-100 p-1">
          <TabsTrigger value="announcements" className="data-[state=active]:bg-red-400 data-[state=active]:text-white">
            <Bell className="w-4 h-4 mr-2" />
            Announcements
          </TabsTrigger>
          <TabsTrigger value="messages" className="data-[state=active]:bg-blue-400 data-[state=active]:text-white">
            <MessageSquare className="w-4 h-4 mr-2" />
            Direct Messages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="announcements" className="mt-6 space-y-4">
          {announcements.map((announcement) => (
            <Card 
              key={announcement.id} 
              className={`border-2 transition-all hover:shadow-md ${
                announcement.urgent ? "border-red-200 bg-gradient-to-r from-red-50 to-white" : "border-gray-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                    announcement.urgent ? "bg-red-400" : "bg-blue-400"
                  }`}>
                    {announcement.urgent ? (
                      <AlertCircle className="w-7 h-7 text-white" />
                    ) : (
                      <Bell className="w-7 h-7 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{announcement.title}</h3>
                      {announcement.urgent && (
                        <Badge className="bg-red-500 text-white">Urgent</Badge>
                      )}
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        {announcement.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{announcement.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {announcement.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {announcement.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {announcement.time}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600">
                        Read More <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="messages" className="mt-6">
          <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
            {/* Conversations List */}
            <Card className="lg:col-span-1 border-2 border-blue-200 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    placeholder="Search conversations..." 
                    className="pl-9 border-2 border-blue-200"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {conversations.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`w-full flex items-start gap-3 p-4 text-left hover:bg-blue-50 transition-colors ${
                        selectedChat === chat.id ? "bg-blue-50 border-l-4 border-blue-400" : ""
                      }`}
                    >
                      <div className="relative">
                        <Avatar className="w-12 h-12 border-2 border-blue-200">
                          <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-400 text-white font-bold">
                            {chat.with.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-semibold text-gray-900 truncate">{chat.with}</p>
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">{chat.role}</p>
                        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                      </div>
                      {chat.unread > 0 && (
                        <Badge className="bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                          {chat.unread}
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Area */}
            <Card className="lg:col-span-2 border-2 border-blue-200 flex flex-col">
              {selectedChat ? (
                <>
                  {/* Chat Header */}
                  <CardHeader className="pb-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12 border-2 border-blue-200">
                          <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-400 text-white font-bold">
                            PP
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-gray-900">Ms. Priya</h3>
                          <p className="text-sm text-green-600 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            Online
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <FileText className="w-5 h-5 text-gray-500" />
                      </Button>
                    </div>
                  </CardHeader>

                  {/* Messages */}
                  <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === "parent" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-2xl p-4 ${
                            msg.sender === "parent"
                              ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-br-md"
                              : "bg-gray-100 text-gray-900 rounded-bl-md"
                          }`}
                        >
                          <p>{msg.text}</p>
                          {msg.attachment && (
                            <div className="mt-2 p-3 bg-white/20 rounded-xl flex items-center gap-2">
                              <div className="w-10 h-10 bg-red-200 rounded-lg flex items-center justify-center">
                                <Star className="w-5 h-5 text-red-500" />
                              </div>
                              <span className="text-sm">Photo attachment</span>
                            </div>
                          )}
                          <p className={`text-xs mt-2 ${msg.sender === "parent" ? "text-blue-100" : "text-gray-500"}`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>

                  {/* Input Area */}
                  <CardContent className="p-4 border-t border-gray-100">
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" className="border-2 border-gray-200">
                        <Paperclip className="w-5 h-5 text-gray-500" />
                      </Button>
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1 border-2 border-gray-200 focus:border-blue-400"
                      />
                      <Button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white">
                        <Send className="w-5 h-5 mr-1" />
                        Send
                      </Button>
                    </div>
                  </CardContent>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Contact */}
      <Card className="border-2 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            Quick Contact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-xl border border-green-200 text-center">
              <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <p className="font-bold text-gray-900">Class Teacher</p>
              <p className="text-sm text-gray-600 mb-3">Ms. Priya Sharma</p>
              <Button variant="outline" size="sm" className="w-full border-green-400 text-green-600">
                Message
              </Button>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <p className="font-bold text-gray-900">Medical Staff</p>
              <p className="text-sm text-gray-600 mb-3">Nurse Anjali</p>
              <Button variant="outline" size="sm" className="w-full border-blue-400 text-blue-600">
                Message
              </Button>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="font-bold text-gray-900">Center Director</p>
              <p className="text-sm text-gray-600 mb-3">Mrs. Gupta</p>
              <Button variant="outline" size="sm" className="w-full border-purple-400 text-purple-600">
                Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
