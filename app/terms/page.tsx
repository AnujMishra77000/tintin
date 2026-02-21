import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF5F7] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-[#FFB6C1]/20 text-[#FF9AA2] hover:bg-[#FFB6C1]/30 border-0">
              <FileText className="w-3 h-3 mr-1" />
              Legal
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#4A4A4A] mb-6">
              Terms & Conditions
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
              <CardContent className="p-8">
                <div className="space-y-8 text-[#4A4A4A]">
                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">1. Acceptance of Terms</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      By accessing or using the TinTin Paradies website and services, you agree to be bound by these Terms and Conditions. 
                      If you do not agree to these terms, please do not use our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">2. Services Description</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      TinTin Paradies provides childcare services including infant care, toddler programs, preschool, 
                      and after-school care. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">3. Admission and Enrollment</h2>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Admission is subject to availability and completion of all required documentation.</li>
                      <li>Parents must provide accurate and complete information about their child.</li>
                      <li>We reserve the right to refuse admission if we cannot meet the child&apos;s needs safely.</li>
                      <li>A non-refundable registration fee is required to secure a spot.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">4. Fees and Payments</h2>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Fees are payable monthly in advance by the 5th of each month.</li>
                      <li>Late payments may incur a penalty fee.</li>
                      <li>A 30-day notice is required for withdrawal from the program.</li>
                      <li>No refunds will be given for absences or holidays.</li>
                      <li>Annual fee payments are eligible for a discount as specified in the fee structure.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">5. Attendance and Pickup</h2>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Children must be dropped off and picked up within operating hours.</li>
                      <li>Late pickup fees apply after a 15-minute grace period.</li>
                      <li>Only authorized persons listed on the registration form may pick up the child.</li>
                      <li>Photo ID is required for pickup if the staff member is unfamiliar with the person.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">6. Health and Safety</h2>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Children must be in good health to attend. Sick children will not be accepted.</li>
                      <li>Parents must inform us of any medical conditions, allergies, or special needs.</li>
                      <li>Emergency medical treatment may be sought if parents cannot be reached.</li>
                      <li>We follow strict hygiene and safety protocols as outlined in our Safety Policy.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">7. Parent Responsibilities</h2>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Provide accurate emergency contact information and update as needed.</li>
                      <li>Inform staff of any changes in the child&apos;s routine, health, or family circumstances.</li>
                      <li>Respect staff and other families.</li>
                      <li>Collect the child promptly at the agreed time.</li>
                      <li>Provide necessary supplies (diapers, change of clothes, etc.) as requested.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">8. Termination</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      We reserve the right to terminate services if:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-[#6B6B6B]">
                      <li>Fees remain unpaid for more than 15 days</li>
                      <li>Parents repeatedly violate center policies</li>
                      <li>The child&apos;s behavior poses a danger to others</li>
                      <li>False information was provided during enrollment</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">9. Liability</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      While we take every precaution to ensure the safety of children in our care, TinTin Paradies 
                      is not liable for injuries or incidents that occur despite our reasonable care and supervision. 
                      Parents agree to hold us harmless for such incidents, except in cases of gross negligence.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">10. Changes to Terms</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      We may update these Terms and Conditions from time to time. Parents will be notified of any 
                      significant changes. Continued use of our services constitutes acceptance of the updated terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-[#4A4A4A] mb-4">11. Contact Information</h2>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      For questions about these Terms and Conditions, please contact us:
                    </p>
                    <div className="mt-4 p-4 bg-[#FFF5F7] rounded-xl">
                      <p className="text-[#4A4A4A]"><strong>TinTin Paradies</strong></p>
                      <p className="text-[#6B6B6B]">123 Happy Street, Rainbow Colony</p>
                      <p className="text-[#6B6B6B]">Mumbai, Maharashtra - 400001</p>
                      <p className="text-[#6B6B6B]">Email: info@tintinparadies.com</p>
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
