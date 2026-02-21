"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Image,
  Video,
  Heart,
  Download,
  Share2,
  Calendar,
  Filter,
  Search,
  Play,
  Camera,
  Star,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { FloatingKid, HappyKid, ArtKid, MusicKid, SportsKid, EatingKid } from "@/components/shared/CartoonKids";

const photoAlbums = [
  { id: 1, title: "Art & Craft Day", date: "Feb 20, 2026", count: 12, color: "from-pink-400 to-rose-400", icon: ArtKid },
  { id: 2, title: "Music Time", date: "Feb 19, 2026", count: 8, color: "from-purple-400 to-violet-400", icon: MusicKid },
  { id: 3, title: "Outdoor Play", date: "Feb 18, 2026", count: 15, color: "from-green-400 to-emerald-400", icon: SportsKid },
  { id: 4, title: "Birthday Celebration", date: "Feb 15, 2026", count: 24, color: "from-yellow-400 to-orange-400", icon: HappyKid },
  { id: 5, title: "Lunch Time Fun", date: "Feb 14, 2026", count: 6, color: "from-blue-400 to-cyan-400", icon: EatingKid },
  { id: 6, title: "Circle Time", date: "Feb 13, 2026", count: 10, color: "from-red-400 to-pink-400", icon: HappyKid },
];

const recentPhotos = [
  { id: 1, album: "Art & Craft Day", caption: "Finger painting fun!", likes: 5, time: "2 hours ago", color: "bg-red-200" },
  { id: 2, album: "Art & Craft Day", caption: "Showing his artwork", likes: 8, time: "2 hours ago", color: "bg-blue-200" },
  { id: 3, album: "Music Time", caption: "Playing the drums", likes: 6, time: "Yesterday", color: "bg-yellow-200" },
  { id: 4, album: "Music Time", caption: "Singing with friends", likes: 4, time: "Yesterday", color: "bg-green-200" },
  { id: 5, album: "Outdoor Play", caption: "On the slide", likes: 12, time: "2 days ago", color: "bg-purple-200" },
  { id: 6, album: "Outdoor Play", caption: "Sandbox fun", likes: 7, time: "2 days ago", color: "bg-orange-200" },
  { id: 7, album: "Birthday Celebration", caption: "Blowing candles", likes: 15, time: "5 days ago", color: "bg-pink-200" },
  { id: 8, album: "Birthday Celebration", caption: "Birthday boy!", likes: 20, time: "5 days ago", color: "bg-teal-200" },
];

const videos = [
  { id: 1, title: "Aarav's First Performance", duration: "2:34", views: 45, date: "Feb 10, 2026", thumbnail: "bg-gradient-to-br from-purple-200 to-pink-200" },
  { id: 2, title: "Dance Competition Practice", duration: "1:45", views: 32, date: "Feb 8, 2026", thumbnail: "bg-gradient-to-br from-blue-200 to-cyan-200" },
  { id: 3, title: "Story Time - The Lion King", duration: "5:12", views: 67, date: "Feb 5, 2026", thumbnail: "bg-gradient-to-br from-yellow-200 to-orange-200" },
];

export default function MediaGallery() {
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedPhotos(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <FloatingKid>
              <HappyKid className="w-12 h-12" />
            </FloatingKid>
            Photos & Videos
          </h1>
          <p className="text-gray-600 mt-1">Capture and relive precious moments</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-red-100 text-red-700 px-3 py-1">
            <Camera className="w-4 h-4 mr-1" />
            156 Photos
          </Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1">
            <Video className="w-4 h-4 mr-1" />
            12 Videos
          </Badge>
        </div>
      </div>

      {/* Search & Filter */}
      <Card className="border-2 border-red-100">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search photos and videos..." 
                className="pl-10 border-2 border-red-200 focus:border-red-400"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-2 border-red-200">
                <Calendar className="w-4 h-4 mr-2" />
                Date
              </Button>
              <Button variant="outline" className="border-2 border-red-200">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="albums" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white border-2 border-red-100 p-1">
          <TabsTrigger value="albums" className="data-[state=active]:bg-red-400 data-[state=active]:text-white">
            <Image className="w-4 h-4 mr-2" />
            Albums
          </TabsTrigger>
          <TabsTrigger value="photos" className="data-[state=active]:bg-blue-400 data-[state=active]:text-white">
            <Camera className="w-4 h-4 mr-2" />
            All Photos
          </TabsTrigger>
          <TabsTrigger value="videos" className="data-[state=active]:bg-purple-400 data-[state=active]:text-white">
            <Video className="w-4 h-4 mr-2" />
            Videos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="albums" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoAlbums.map((album) => (
              <Card 
                key={album.id} 
                className="group overflow-hidden border-2 border-transparent hover:border-red-300 transition-all cursor-pointer"
              >
                <div className={`h-40 bg-gradient-to-br ${album.color} flex items-center justify-center relative`}>
                  <album.icon className="w-20 h-20 text-white/80" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-3 right-3 bg-white/90 px-2 py-1 rounded-lg text-sm font-medium">
                    {album.count} photos
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-900 group-hover:text-red-500 transition-colors">
                    {album.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {album.date}
                    </p>
                    <Button variant="ghost" size="sm" className="text-red-500">
                      View <Play className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="photos" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recentPhotos.map((photo) => (
              <div 
                key={photo.id} 
                className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-red-300 transition-all"
              >
                <div className={`${photo.color} w-full h-full flex flex-col items-center justify-center p-4`}>
                  <ArtKid className="w-16 h-16 mb-2 opacity-80" />
                  <p className="text-xs text-center font-medium text-gray-700 line-clamp-2">{photo.caption}</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-white font-medium text-sm mb-2">{photo.caption}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => toggleLike(photo.id)}
                        className="flex items-center gap-1 text-white hover:text-red-400 transition-colors"
                      >
                        <Heart 
                          className={`w-5 h-5 ${likedPhotos.includes(photo.id) ? "fill-red-500 text-red-500" : ""}`} 
                        />
                        <span className="text-sm">{photo.likes + (likedPhotos.includes(photo.id) ? 1 : 0)}</span>
                      </button>
                      <button className="text-white hover:text-blue-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    <button className="text-white hover:text-green-400 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Album Badge */}
                <div className="absolute top-2 left-2">
                  <Badge className="bg-white/90 text-gray-700 text-xs">{photo.album}</Badge>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-gradient-to-r from-red-400 to-orange-400 text-white rounded-full px-8">
              Load More Photos
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden border-2 border-purple-200 group cursor-pointer">
                <div className={`h-48 ${video.thumbnail} flex items-center justify-center relative`}>
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-purple-500 ml-1" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {video.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      {video.views} views
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm" className="flex-1 border-purple-300 text-purple-600">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-purple-300 text-purple-600">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Storage Info */}
      <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Storage Status</h3>
                <p className="text-gray-600">You have unlimited storage for all your child&apos;s memories</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">2.4 GB</p>
              <p className="text-sm text-gray-500">Used storage</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
