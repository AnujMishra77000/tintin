import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileText, Lock } from "lucide-react";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-[#6B6B6B]">
              Last updated: February 20, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-[#FFE4E8]">
              <CardContent className="p-8 prose prose-pink max-w-none">
                <div className="space-y-8 text-[#4A4A4A]">
                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">1. Introduction</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      TinTin Paradies (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and the privacy of your children. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                      or use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">2. Information We Collect</h2>
                    <p className="text-[#6B6B6B] leading-relaxed mb-4">
                      We may collect the following types of information:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li><strong>Personal Information:</strong> Name, address, phone number, email address, and identification documents.</li>
                      <li><strong>Child Information:</strong> Name, date of birth, medical history, dietary requirements, and developmental information.</li>
                      <li><strong>Emergency Contact Information:</strong> Names and contact details of authorized emergency contacts.</li>
                      <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through third-party providers).</li>
                      <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">3. How We Use Your Information</h2>
                    <p className="text-[#6B6B6B] leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Provide childcare services and communicate with you about your child</li>
                      <li>Process payments and maintain financial records</li>
                      <li>Ensure the safety and well-being of children in our care</li>
                      <li>Send updates, newsletters, and promotional materials (with your consent)</li>
                      <li>Comply with legal obligations and regulatory requirements</li>
                      <li>Improve our services and website functionality</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">4. Child Photo Usage</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      We may take photos and videos of children during activities for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Daily updates shared with parents through our parent portal</li>
                      <li>Internal training and documentation</li>
                      <li>Marketing materials (only with explicit parental consent)</li>
                    </ul>
                    <p className="text-[#6B6B6B] leading-relaxed mt-4">
                      Parents can opt-out of photo usage for marketing purposes at any time by contacting us.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">5. Information Sharing</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      We do not sell or rent your personal information. We may share information with:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Authorized staff members who need access to perform their duties</li>
                      <li>Emergency services when necessary for child safety</li>
                      <li>Service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                      <li>Legal authorities when required by law</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">6. Data Security</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information 
                      against unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
                      access controls, and regular security assessments.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">7. Your Rights</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      You have the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Access your personal information</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your information (subject to legal requirements)</li>
                      <li>Withdraw consent for photo usage</li>
                      <li>Opt-out of marketing communications</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">8. Contact Us</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="mt-4 p-4 bg-[#FFF5F7] rounded-xl">
                      <p className="text-[#4A4A4A]"><strong>TinTin Paradies</strong></p>
                      <p className="text-[#6B6B6B]">123 Happy Street, Rainbow Colony</p>
                      <p className="text-[#6B6B6B]">Mumbai, Maharashtra - 400001</p>
                      <p className="text-[#6B6B6B]">Email: privacy@tintinparadies.com</p>
                      <p className="text-[#6B6B6B]">Phone: +91 98765 43210</p>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
