"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  CalendarDays,
  Image,
  CreditCard,
  MessageSquare,
  UserCircle,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  Baby,
  Heart
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/parent/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/parent/updates", label: "Daily Updates", icon: CalendarDays },
  { href: "/parent/media", label: "Photos & Videos", icon: Image },
  { href: "/parent/billing", label: "Billing & Payments", icon: CreditCard },
  { href: "/parent/messages", label: "Messages", icon: MessageSquare },
  { href: "/parent/child", label: "Child Profile", icon: UserCircle },
  { href: "/parent/settings", label: "Settings", icon: Settings },
];

export default function ParentPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-red-100 shadow-sm">
        <div className="flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Logo */}
          <Link href="/parent/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 flex items-center justify-center shadow-md">
              <Baby className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Parent Portal
              </span>
              <p className="text-xs text-gray-500">TinTin Paradies</p>
            </div>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
            
            <div className="hidden sm:flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Priya Sharma</p>
                <p className="text-xs text-gray-500">Aarav&apos;s Mom</p>
              </div>
              <Avatar className="w-10 h-10 border-2 border-red-200">
                <AvatarFallback className="bg-gradient-to-br from-red-400 to-orange-400 text-white font-bold">
                  PS
                </AvatarFallback>
              </Avatar>
            </div>

            <Link href="/">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-red-500">
                <LogOut className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside
          className={`fixed lg:sticky top-16 left-0 z-40 w-64 h-[calc(100vh-4rem)] bg-white border-r-2 border-red-100 transform transition-transform duration-300 ease-in-out lg:transform-none ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-4">
            {/* Child Quick Info */}
            <div className="mb-6 p-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center">
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Aarav Sharma</p>
                  <Badge className="bg-green-100 text-green-700 text-xs">At Center</Badge>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-red-200">
                <p className="text-xs text-gray-600">Preschool Program</p>
                <p className="text-xs text-gray-500">Age: 3 years 4 months</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-red-400 to-orange-400 text-white shadow-md"
                        : "text-gray-700 hover:bg-red-50 hover:text-red-500"
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
                    <span className="font-medium">{item.label}</span>
                    {item.label === "Messages" && (
                      <Badge className="ml-auto bg-red-500 text-white text-xs">3</Badge>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Quick Actions</p>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-2 border-blue-400 text-blue-500 hover:bg-blue-50 rounded-xl">
                  Contact Staff
                </Button>
              </Link>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </div>
  );
}
