import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Calendar, Clock, ArrowRight, Search, User } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Child is Ready for Preschool",
    excerpt: "Discover the key developmental milestones that indicate your little one is prepared for the exciting journey of preschool education.",
    category: "School Readiness",
    author: "Dr. Meera Sharma",
    date: "Feb 15, 2026",
    readTime: "5 min read",
    color: "from-[#FFB6C1] to-[#FF9AA2]",
  },
  {
    id: 2,
    title: "Nutritious Snack Ideas for Toddlers",
    excerpt: "Healthy, easy-to-prepare snacks that your toddler will love. Packed with essential nutrients for growing bodies and minds.",
    category: "Nutrition",
    author: "Priya Patel",
    date: "Feb 10, 2026",
    readTime: "4 min read",
    color: "from-[#B5EAD7] to-[#9EDAC5]",
  },
  {
    id: 3,
    title: "The Power of Play-Based Learning",
    excerpt: "Why play is essential for child development and how it builds the foundation for academic success and social skills.",
    category: "Child Development",
    author: "Anita Gupta",
    date: "Feb 5, 2026",
    readTime: "6 min read",
    color: "from-[#C7CEEA] to-[#B5BCE0]",
  },
  {
    id: 4,
    title: "Managing Separation Anxiety",
    excerpt: "Helpful strategies for parents and children to cope with separation anxiety during the early days of daycare or preschool.",
    category: "Parenting Tips",
    author: "Sunita Rao",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    color: "from-[#FFDAC1] to-[#FFC9A8]",
  },
  {
    id: 5,
    title: "Building Emotional Intelligence in Children",
    excerpt: "Practical ways to help your child recognize, understand, and manage their emotions effectively.",
    category: "Child Development",
    author: "Dr. Meera Sharma",
    date: "Jan 20, 2026",
    readTime: "7 min read",
    color: "from-[#FFB6C1] to-[#FF9AA2]",
  },
  {
    id: 6,
    title: "Screen Time Guidelines for Young Children",
    excerpt: "Expert recommendations on healthy screen time limits and quality content choices for different age groups.",
    category: "Parenting Tips",
    author: "Priya Patel",
    date: "Jan 15, 2026",
    readTime: "4 min read",
    color: "from-[#B5EAD7] to-[#9EDAC5]",
  },
];

const categories = [
  "All",
  "Child Development",
  "Parenting Tips",
  "Nutrition",
  "School Readiness",
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              <BookOpen className="w-3 h-3 mr-1" />
              Parenting Resources
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Blog & Resources
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Expert advice, tips, and insights on child development, parenting, and early education.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-white border-b border-[#FFE4E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6B6B]" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 border-[#FFE4E8] rounded-full"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full ${
                    index === 0
                      ? "bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] text-white border-0"
                      : "border-[#FFB6C1] text-[#FF9AA2] hover:bg-[#FFF5F7]"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-[#FFF5F7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-[#FFE4E8] overflow-hidden hover:shadow-lg transition-all group">
                {/* Featured Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center`}>
                  <BookOpen className="w-16 h-16 text-white/50" />
                </div>
                
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-[#FFF5F7] text-[#FF9AA2] hover:bg-[#FFE4E8]">
                    {post.category}
                  </Badge>
                  
                  <h2 className="text-xl font-bold text-[#4A4A4A] mb-3 group-hover:text-[#FF9AA2] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-[#6B6B6B] text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-[#6B6B6B] mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Button variant="ghost" className="p-0 text-[#FF9AA2] hover:text-[#FF9AA2] hover:bg-transparent">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-[#FFB6C1] text-[#FF9AA2] hover:bg-[#FFF5F7] rounded-full px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#4A4A4A] mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-[#6B6B6B] mb-8">
              Get the latest parenting tips and resources delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 border-[#FFE4E8] rounded-full"
              />
              <Button className="bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] hover:from-[#FF9AA2] hover:to-[#FFB6C1] text-white rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
