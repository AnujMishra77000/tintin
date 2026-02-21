"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  CreditCard,
  Receipt,
  Download,
  CheckCircle,
  AlertCircle,
  Calendar,
  IndianRupee,
  Clock,
  FileText,
  ChevronRight,
  Wallet,
  History,
  QrCode,
  Banknote
} from "lucide-react";
import { FloatingKid, HappyKid } from "@/components/shared/CartoonKids";

const currentBill = {
  month: "February 2026",
  dueDate: "Feb 28, 2026",
  amount: 8500,
  status: "pending",
  breakdown: [
    { item: "Tuition Fee", amount: 6000 },
    { item: "Meals & Snacks", amount: 1500 },
    { item: "Activity Fee", amount: 800 },
    { item: "Transportation", amount: 200 },
  ]
};

const paymentHistory = [
  { id: 1, month: "January 2026", amount: 8500, date: "Jan 25, 2026", status: "paid", method: "UPI" },
  { id: 2, month: "December 2025", amount: 8500, date: "Dec 28, 2025", status: "paid", method: "Bank Transfer" },
  { id: 3, month: "November 2025", amount: 8500, date: "Nov 26, 2025", status: "paid", method: "UPI" },
  { id: 4, month: "October 2025", amount: 8500, date: "Oct 27, 2025", status: "paid", method: "Credit Card" },
  { id: 5, month: "September 2025", amount: 8500, date: "Sep 25, 2025", status: "paid", method: "UPI" },
];

const paymentMethods = [
  { id: "upi", name: "UPI Payment", icon: QrCode, description: "Pay using any UPI app" },
  { id: "card", name: "Credit/Debit Card", icon: CreditCard, description: "Visa, Mastercard, RuPay" },
  { id: "netbanking", name: "Net Banking", icon: Banknote, description: "All major banks supported" },
  { id: "wallet", name: "Digital Wallet", icon: Wallet, description: "Paytm, PhonePe, Google Pay" },
];

export default function BillingPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
            <FloatingKid>
              <HappyKid className="w-12 h-12" />
            </FloatingKid>
            Billing & Payments
          </h1>
          <p className="text-gray-600 mt-1">Manage fees, view invoices, and make payments</p>
        </div>
        <Badge className="bg-green-100 text-green-700 px-4 py-2 text-base">
          <CheckCircle className="w-4 h-4 mr-2" />
          Account in Good Standing
        </Badge>
      </div>

      {/* Current Bill Card */}
      <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left - Bill Summary */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-400 flex items-center justify-center">
                  <Receipt className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Current Bill</h2>
                  <p className="text-gray-600">{currentBill.month}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {currentBill.breakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-red-200/50">
                    <span className="text-gray-700">{item.item}</span>
                    <span className="font-medium text-gray-900 flex items-center gap-1">
                      <IndianRupee className="w-4 h-4" />
                      {item.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-3 bg-red-100/50 rounded-lg px-4">
                  <span className="font-bold text-gray-900">Total Amount</span>
                  <span className="text-2xl font-bold text-red-600 flex items-center gap-1">
                    <IndianRupee className="w-6 h-6" />
                    {currentBill.amount.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-amber-600">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Due: {currentBill.dueDate}</span>
                </div>
                <Badge className="bg-amber-100 text-amber-700">Pending</Badge>
              </div>
            </div>

            {/* Right - Payment Options */}
            <div className="lg:w-80 bg-white rounded-2xl p-6 border-2 border-red-100">
              <h3 className="font-bold text-gray-900 mb-4">Pay Now</h3>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    className="w-full flex items-center gap-3 p-3 rounded-xl border-2 border-gray-200 hover:border-red-400 hover:bg-red-50 transition-all text-left"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{method.name}</p>
                      <p className="text-xs text-gray-500">{method.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white border-2 border-red-100 p-1">
          <TabsTrigger value="history" className="data-[state=active]:bg-blue-400 data-[state=active]:text-white">
            <History className="w-4 h-4 mr-2" />
            Payment History
          </TabsTrigger>
          <TabsTrigger value="invoices" className="data-[state=active]:bg-purple-400 data-[state=active]:text-white">
            <FileText className="w-4 h-4 mr-2" />
            Invoices & Receipts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="mt-6">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <History className="w-5 h-5 text-blue-500" />
                </div>
                Past Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {paymentHistory.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{payment.month}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Paid on {payment.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-blue-600 flex items-center gap-1 justify-end">
                        <IndianRupee className="w-5 h-5" />
                        {payment.amount.toLocaleString()}
                      </p>
                      <Badge className="bg-green-100 text-green-700 mt-1">
                        {payment.method}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="mt-6">
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-500" />
                </div>
                Download Invoices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {paymentHistory.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-400/20 flex items-center justify-center">
                        <Receipt className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Invoice #{202500 + payment.id}</p>
                        <p className="text-sm text-gray-500">{payment.month}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-purple-300 text-purple-600">
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Fee Structure Info */}
      <Card className="border-2 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-green-600" />
            </div>
            Fee Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-sm text-gray-600 mb-1">Monthly Tuition</p>
              <p className="text-2xl font-bold text-green-600 flex items-center gap-1">
                <IndianRupee className="w-5 h-5" />
                6,000
              </p>
              <p className="text-xs text-gray-500 mt-1">Core program fee</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">Meals & Snacks</p>
              <p className="text-2xl font-bold text-blue-600 flex items-center gap-1">
                <IndianRupee className="w-5 h-5" />
                1,500
              </p>
              <p className="text-xs text-gray-500 mt-1">Breakfast, lunch, snacks</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <p className="text-sm text-gray-600 mb-1">Activities</p>
              <p className="text-2xl font-bold text-yellow-600 flex items-center gap-1">
                <IndianRupee className="w-5 h-5" />
                800
              </p>
              <p className="text-xs text-gray-500 mt-1">Art, music, sports</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <p className="text-sm text-gray-600 mb-1">Transportation</p>
              <p className="text-2xl font-bold text-purple-600 flex items-center gap-1">
                <IndianRupee className="w-5 h-5" />
                200
              </p>
              <p className="text-xs text-gray-500 mt-1">Optional service</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Support */}
      <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help with Payments?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about fees, need to set up a payment plan, or require assistance with payments, 
                our accounts team is here to help.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  Contact Accounts Team
                </Button>
                <Button variant="outline" className="border-amber-300 text-amber-700">
                  Request Payment Plan
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
