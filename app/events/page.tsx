import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, PartyPopper, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Day Celebration",
    date: "March 15, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "TinTin Paradies Main Hall",
    description: "Join us for a day of performances, awards, and celebration of our children's achievements throughout the year.",
    category: "Celebration",
    attendees: 200,
    color: "from-[#FFB6C1] to-[#FF9AA2]",
  },
  {
    id: 2,
    title: "Parent Workshop: Positive Discipline",
    date: "March 22, 2026",
    time: "11:00 AM - 1:00 PM",
    location: "Conference Room",
    description: "Learn effective positive discipline techniques from child psychologist Dr. Meera Sharma.",
    category: "Workshop",
    attendees: 50,
    color: "from-[#B5EAD7] to-[#9EDAC5]",
  },
  {
    id: 3,
    title: "Holi Celebration",
    date: "March 14, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Outdoor Play Area",
    description: "A colorful celebration with organic colors, music, and traditional sweets for the whole family.",
    category: "Festival",
    attendees: 150,
    color: "from-[#C7CEEA] to-[#B5BCE0]",
  },
  {
    id: 4,
    title: "Science Fair",
    date: "April 5, 2026",
    time: "10:00 AM - 3:00 PM",
    location: "Activity Center",
    description: "Children showcase their science projects and experiments. Open to all parents and families.",
    category: "Learning",
    attendees: 120,
    color: "from-[#FFDAC1] to-[#FFC9A8]",
  },
];

const pastEvents = [
  {
    id: 5,
    title: "Republic Day Celebration",
    date: "January 26, 2026",
    category: "Festival",
    color: "from-[#FFB6C1] to-[#FF9AA2]",
  },
  {
    id: 6,
    title: "Parent-Teacher Meeting",
    date: "January 15, 2026",
    category: "Meeting",
    color: "from-[#B5EAD7] to-[#9EDAC5]",
  },
  {
    id: 7,
    title: "Sports Day",
    date: "December 20, 2025",
    category: "Sports",
    color: "from-[#C7CEEA] to-[#B5BCE0]",
  },
  {
    id: 8,
    title: "Christmas Party",
    date: "December 24, 2025",
    category: "Celebration",
    color: "from-[#FFDAC1] to-[#FFC9A8]",
  },
];

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              <PartyPopper className="w-3 h-3 mr-1" />
              Events
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Upcoming Events
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Join us for workshops, celebrations, and special events throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A4A4A] mb-8 text-center">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-[#FFE4E8] overflow-hidden hover:shadow-lg transition-all">
                <div className={`h-2 bg-gradient-to-r ${event.color}`} />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-[#FFF5F7] text-[#FF9AA2]">
                      {event.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm text-[#6B6B6B]">
                      <Users className="w-4 h-4" />
                      {event.attendees} attending
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">{event.title}</h3>
                  <p className="text-[#6B6B6B] mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-[#6B6B6B] mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#FF9AA2]" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FF9AA2]" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#FF9AA2]" />
                      {event.location}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] hover:from-[#FF9AA2] hover:to-[#FFB6C1] text-white rounded-full">
                    RSVP Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar View Placeholder */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-8 text-center">Event Calendar</h2>
            <Card className="border-[#FFE4E8]">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-[#FFB6C1]/20 to-[#B5EAD7]/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 text-[#FF9AA2] mx-auto mb-4" />
                    <p className="text-[#4A4A4A] font-semibold">Interactive Calendar</p>
                    <p className="text-[#6B6B6B] text-sm">Coming Soon - View all events in a calendar format</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A4A4A] mb-8 text-center">Past Events</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pastEvents.map((event) => (
              <Card key={event.id} className="border-[#FFE4E8] hover:shadow-lg transition-all">
                <div className={`h-24 bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                  <PartyPopper className="w-10 h-10 text-white/70" />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-[#FFF5F7] text-[#FF9AA2] text-xs">
                    {event.category}
                  </Badge>
                  <h3 className="font-semibold text-[#4A4A4A] text-sm mb-1">{event.title}</h3>
                  <p className="text-xs text-[#6B6B6B]">{event.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-[#FFB6C1] text-[#FF9AA2] hover:bg-[#FFF5F7] rounded-full">
              View Gallery <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
