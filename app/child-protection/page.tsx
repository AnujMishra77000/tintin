import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Download, Heart, AlertTriangle, Users, FileCheck, Phone } from "lucide-react";

export default function ChildProtectionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              <Shield className="w-3 h-3 mr-1" />
              Legal
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Child Protection Policy
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              At TinTin Paradies, the safety and well-being of children is our highest priority. 
              This policy outlines our commitment to protecting children from harm.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-[#FFE4E8] mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#4A4A4A]">Our Commitment</h2>
                    <p className="text-[#6B6B6B]">Safeguarding every child in our care</p>
                  </div>
                </div>

                <div className="prose max-w-none text-[#6B6B6B]">
                  <p className="leading-relaxed mb-4">
                    TinTin Paradies is committed to creating and maintaining a safe and positive environment 
                    for all children. We believe that every child has the right to protection from harm, 
                    regardless of age, gender, ethnicity, disability, sexual orientation, or religious beliefs.
                  </p>
                  <p className="leading-relaxed">
                    This policy applies to all staff, volunteers, contractors, and anyone working on behalf 
                    of TinTin Paradies. All individuals are expected to adhere to this policy and report 
                    any concerns immediately.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-[#FFE4E8]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B5EAD7] to-[#9EDAC5] flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">Child&apos;s Best Interest</h3>
                  <p className="text-[#6B6B6B]">
                    The welfare of the child is paramount in all decisions and actions. We prioritize 
                    the child&apos;s physical and emotional well-being above all else.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#FFE4E8]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C7CEEA] to-[#B5BCE0] flex items-center justify-center mb-4">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">Zero Tolerance</h3>
                  <p className="text-[#6B6B6B]">
                    We have zero tolerance for any form of child abuse, neglect, or exploitation. 
                    Any such behavior results in immediate termination and legal action.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#FFE4E8]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFDAC1] to-[#FFC9A8] flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">Prevention First</h3>
                  <p className="text-[#6B6B6B]">
                    We implement proactive measures to prevent harm, including thorough staff vetting, 
                    training, and clear protocols for all activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#FFE4E8]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB6C1] to-[#FF9AA2] flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4A4A4A] mb-2">Open Communication</h3>
                  <p className="text-[#6B6B6B]">
                    We encourage children, parents, and staff to speak up about any concerns. 
                    All reports are taken seriously and handled confidentially.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Policy Sections */}
            <Card className="border-[#FFE4E8] mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#4A4A4A] mb-6">Policy Details</h2>
                
                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">1. Staff Recruitment and Vetting</h3>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>All staff undergo comprehensive background checks including police verification</li>
                      <li>Reference checks from previous employers are mandatory</li>
                      <li>Regular re-verification every 2 years</li>
                      <li>Detailed interviews to assess suitability for working with children</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">2. Training and Awareness</h3>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>All staff complete child protection training before starting work</li>
                      <li>Annual refresher training on recognizing and reporting abuse</li>
                      <li>Training on appropriate behavior and professional boundaries</li>
                      <li>Emergency response and first aid certification</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">3. Supervision and Ratios</h3>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Strict adherence to staff-to-child ratios at all times</li>
                      <li>Never leaving children unsupervised</li>
                      <li>Clear sight and sound supervision policies</li>
                      <li>Regular head counts throughout the day</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">4. Physical Contact Guidelines</h3>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Physical contact limited to necessary care and comfort</li>
                      <li>Age-appropriate physical interaction only</li>
                      <li>No physical punishment or harsh handling</li>
                      <li>Respect for children&apos;s personal boundaries</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">5. Reporting Concerns</h3>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Clear reporting procedures for any concerns about child welfare</li>
                      <li>Designated Child Protection Officer (CPO) appointed</li>
                      <li>Immediate reporting to authorities when required by law</li>
                      <li>Documentation and record-keeping of all incidents</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-[#4A4A4A] mb-3">6. Photography and Media</h3>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Parental consent required for all photos and videos</li>
                      <li>Photos used only for intended purposes as specified</li>
                      <li>No identifying information shared with images</li>
                      <li>Secure storage of all media</li>
                    </ul>
                  </section>
                </div>
              </CardContent>
            </Card>

            {/* Reporting */}
            <Card className="border-[#FFE4E8] bg-gradient-to-br from-[#FFF5F7] to-white mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">How to Report Concerns</h2>
                <p className="text-[#6B6B6B] mb-6">
                  If you have any concerns about a child&apos;s welfare or witness any behavior that 
                  violates this policy, please report it immediately:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-[#FFE4E8]">
                    <p className="font-semibold text-[#4A4A4A] mb-1">Child Protection Officer</p>
                    <p className="text-[#6B6B6B]">Dr. Meera Sharma</p>
                    <p className="text-[#FF9AA2]">cpo@tintinparadies.com</p>
                    <p className="text-[#6B6B6B]">+91 98765 43212</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#FFE4E8]">
                    <p className="font-semibold text-[#4A4A4A] mb-1">Emergency Contact</p>
                    <p className="text-[#6B6B6B]">24/7 Helpline</p>
                    <p className="text-[#FF9AA2]">+91 98765 43210</p>
                    <p className="text-[#6B6B6B]">emergency@tintinparadies.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download */}
            <div className="text-center">
              <Button className="bg-gradient-to-r from-[#FFB6C1] to-[#FF9AA2] hover:from-[#FF9AA2] hover:to-[#FFB6C1] text-white rounded-full">
                <Download className="mr-2 w-4 h-4" />
                Download Full Policy PDF
              </Button>
              <p className="text-sm text-[#6B6B6B] mt-4">
                Last updated: February 20, 2026 | Version 2.0
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
