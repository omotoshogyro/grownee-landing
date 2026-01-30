"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const sections = [
  { id: "registration", title: "Registration and Account Security" },
  { id: "fees", title: "Fees and Payments" },
  { id: "intellectual", title: "Intellectual Property (including Copyright)" },
  { id: "warranties", title: "No Warranties" },
  { id: "testimonials", title: "Testimonials Disclaimer" },
  { id: "earnings", title: "Earnings & Results Disclaimer" },
  { id: "advertisement", title: "Advertisement Disclaimer" },
  { id: "limitation", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "privacy", title: "Privacy" },
  { id: "publicity", title: "Publicity" },
  { id: "availability", title: "Availability & Web Access" },
  { id: "malicious", title: "Malicious Code" },
  { id: "third-party", title: "Third Party Links" },
  { id: "security", title: "Security" },
  { id: "governing", title: "Governing Law" },
  { id: "waiver", title: "No Waiver" },
  { id: "interpretation", title: "Interpretation and Severability" },
  { id: "rights", title: "All Rights Reserved" },
  { id: "contact", title: "Contact Information" },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("registration");
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section with Coins */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/background-pattern.png)',
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto',
              backgroundPosition: '0 -200px',
            }}
          />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="text-4xl sm:text-5xl font-medium text-foreground mb-4">
                Terms of use
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                By visiting and using grownee.com (the &quot;website&quot;), you accept and agree to be bound by
                these Website Terms of Use, including our Privacy Policy (which is part of these Website
                Terms of Use).
              </p>
            </div>

            {/* Coins Image */}
            <div className="relative max-w-2xl mx-auto h-32 flex items-end justify-center">
              <Image
                src="/hero-coin.svg"
                alt=""
                width={600}
                height={200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Sidebar Navigation */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 text-[15px] transition-all rounded-lg ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </aside>

              {/* Main Content */}
              <div ref={contentRef} className="lg:col-span-3">
                <div className="space-y-12">
                  {/* Introductory Content */}
                  <div className="mb-12">
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      By visiting and using grownee.com (the &quot;website&quot;), you accept and agree to be bound by
                      these Website Terms of Use, including our Privacy Policy (which is part of these Website
                      Terms of Use).
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Grownee Capital Limited (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), as owner of the website, reserves the right to
                      amend or modify these Website Terms of Use at any time and without notice. The latest
                      version of these Website Terms of Use will always be posted on the website.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                      The terms &quot;you&quot; and &quot;your&quot; refer to anyone who:
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-1">
                      (a) uses, visits, and/or views the website,
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-1">
                      (b) accesses any of our content, or
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      (c) purchases any content, product(s), or service(s) from us.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      By using our website, you agree to our Website Terms of Use at the time you access the
                      website (including any changes since you last visited the site). You must not access or use
                      the website if you do not wish to be bound by these Website Terms of Use.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-8">
                      You must be at least 18 years old or of the necessary age in your country of residence in
                      order to use our website.
                    </p>
                  </div>

                  <div id="registration" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Registration and Account Security
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      You agree to provide accurate and complete information during registration and to keep your account credentials secure. You are responsible for all activities under your account.
                    </p>
                  </div>

                  <div id="fees" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Fees and Payments
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Fees for our services are outlined at the point of engagement or subscription. All payments must be made in the currency they appear, unless otherwise agreed. We reserve the right to change our pricing with prior notice.
                    </p>
                  </div>

                  <div id="intellectual" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Intellectual Property (including Copyright)
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We reserve all rights in and to our common law and registered trademarks, service marks, copyrights, and other intellectual property rights that exist on our website and in all viewable and downloadable content (including: text, images, video, music, sounds, layout, designs, source code, and any other protectable content) which belongs to us or any of our partners (“Intellectual Property”).

You cannot use, copy, modify, adapt, reproduce, store, distribute, print, display, perform, or publish any of our Intellectual Property except in the ways we specifically allow you to in these Website Terms of Use or with prior written consent from us.

For all purchased products and services, please also refer to any Terms & Conditions for that specific product or service.

In short, we own all the legal rights to our free and paid content. We give you some limited rights to use our stuff only in certain ways (even if you paid for it). You cannot do anything you want with our content, only what is allowed in these Website Terms of Use and any Terms & Conditions for anything you’ve purchased. So even if you love our stuff, you are not allowed to share it with your friends (they need to buy their own)!
                    </p>
                  </div>

                  <div id="warranties" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      No Warranties
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      ALL OF OUR CONTENT, INFORMATION, PRODUCTS, AND/OR SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND, INCLUDING THE WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PURPOSE, EXPRESS OR IMPLIED TO THE FULL EXTENT PERMISSIBLE BY LAW. WE MAKE NO REPRESENTATIONS OR WARRANTIES AS TO THE CONTENT, INFORMATION, MATERIALS, PRODUCTS, AND/OR SERVICES PROVIDED ON THIS WEBSITE. WE MAKE NO WARRANTIES THAT THE WEBSITE WILL PERFORM OR OPERATE TO MEET YOUR REQUIREMENTS OR THAT THE INFORMATION PRESENTED HERE WILL BE COMPLETE, CURRENT, OR ERROR-FREE. WE DISCLAIM ALL WARRANTIES, IMPLIED AND EXPRESS, FOR ANY PURPOSE TO THE FULL EXTENT PERMITTED BY LAW.
                    </p>
                  </div>

                  <div id="testimonials" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Testimonials Disclaimer
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                     Any testimonials included on our website(s), programs, products, and/or services are real-world examples and stories of other people’s experiences with our content, programs, products, and/or services. These testimonials are NOT intended to serve as a guarantee that you will achieve the same or similar results. Each individual’s performance is different, and your results will vary accordingly.
                    </p>
                  </div>

                  <div id="earnings" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Earnings & Results Disclaimer
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We make no income/financial claims, nor guarantee of any kind regarding the potential income or savings that can be generated through your use of any of our free or paid content, products, and/or services.

Any income reports, product reviews, and testimonials we may publish from our business or our current or former customers are strictly for informational purposes only.

Past results are not an indication or promise of your results. There is no guarantee you will earn any money or save any money using any of our materials, and your revenue and liabilities are dependent solely on you and your actions or non-actions.
                    </p>
                  </div>

                  <div id="advertisement" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Advertisement Disclaimer
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      You may have ended up on our website by clicking on an advertisement from a different site, social platform, or app. This is because we occasionally pay for advertising in order to reach people who would most benefit from our offers, and one of these advertisements may have been shown to you. We do not have direct control over who exactly is shown our advertisements.

Our website is independent and belongs to us. All of the content, products, and/or services available on it are our own. We do not claim to be endorsed by, or affiliated with, any other site, platform, or advertising provider.
                    </p>
                  </div>

                  <div id="limitation" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Limitation of Liability
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      You agree that we (and/or our officers, employees, successors, shareholders, joint venture partners or anyone else working with us) shall NOT be liable for any direct, indirect, incidental, consequential, equitable, special, punitive, exemplary or any other damages resulting from your use of this website including but not limited to all the content, information, products, services and graphics presented here.

You expressly agree that your use of the website is at your sole risk and that you are solely responsible for the accuracy of any information you provide, the outcome of your actions or non-actions, personal and/or business results, and for all other use in connection with our website, content, products, and/or services.

You also expressly agree that we and/or our officers, employees, successors, shareholders, joint venture partners or anyone else working with us shall not be liable to you for any damages, even if foreseeable, resulting from 1) any errors or omissions on the website, delay or denial of any products or services, failure of performance of any kind, interruption in the operation and your use of the website, website attacks including computer virus, hacking of information, and any other system failures; 2) any loss of income, use, data, revenue, profits, business or any goodwill related to the website, our products, or our services; 3) any theft or unauthorized access by third party of your information from the website regardless of our negligence; and 4) any use or misuse of the content, information, products and/or services offered here.

This limitation of liability shall apply whether such liability arises from negligence, breach of contract, tort or any other legal theory of liability. You agree that we provide no express or implied guarantees to you for the content presented here, and you accept that no particular results are being promised to you here.
We do NOT exclude any liability for death or personal injury caused by the use of our website (as unlikely as that is) or any other liability which we legally cannot exclude based on the laws where you are located at the time you use our site.
Our maximum total liability to you shall not exceed the total purchase price of any products and/or services that we have received your payment for.
                    </p>
                  </div>

                  <div id="indemnification" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Indemnification
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Your use of our website and content is voluntary. You shall indemnify us and our affiliates, distributors, licensors, and agents and all of our and their directors, employees, and agents against, holding all harmless from any lawsuits, claims, expenses (including reasonable legal fees), settlements, damages, judgments and the like arising from your use of our websites and content or your failure to maintain the confidentiality or security of your password or access rights.
                    </p>
                  </div>

                  <div id="privacy" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Privacy
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                     We care about your privacy online do everything in our power to respect the privacy of your personal information. Your acceptance of our Privacy Policy is expressly incorporated into these Website Terms of Use. Please review our Privacy Policy for more information.   </p>
                  </div>

                  <div id="publicity" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Publicity
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      If you make or provide a testimonial, or make a public comment about us or any of our content, products, and/or services on any public website or social media platform, we may use any part of that feedback as well as your first name, business name (if applicable), and logo in our marketing materials.

We will never say or post anything about you that would damage your reputation or your business. You may request that we don’t use this information for marketing by emailing us at hello@grownee.com
                    </p>
                  </div>

                  <div id="availability" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Availability & Web Access
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Your use of our website and any associated services may sometimes be subject to interruption or delay. Due to the nature of the Internet and electronic communications, we and our service providers do not make any warranty that our websites or any associated services will be error-free, without interruption or delay, or free from defects in design. We will not be liable to you should our websites or the services supplied through our websites become unavailable, interrupted, or delayed for any reason.
                    </p>
                  </div>

                  <div id="malicious" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Malicious Code
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Although we try to prevent the introduction of viruses or other malicious code (together, “malicious code”) to our websites, we do not guarantee or warrant that our websites or any data available therein does not contain malicious code. We will not be liable for any damages or harm attributable to malicious code. You are responsible for ensuring that the process you employ for accessing our websites does not expose your computer system to the risk of interference or damage from malicious code.
                    </p>
                  </div>

                  <div id="third-party" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Third Party Links
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We may include links to web addresses that we do not own or have any control over. To the best of our knowledge, these links are safe. However, we do not guarantee or warrant that clicking any third-party link will not include malicious code. We will not be liable for any damages or harm as a result of you clicking any third-party links.
                    </p>
                  </div>

                  <div id="security" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Security
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Although we take care to protect the security of your contact information, you acknowledge the risk of unauthorized access to (or alteration of) your transmissions or data or of the information contained on your computer system or our websites. We do not accept responsibility or liability of any nature for any losses you may sustain as a result of such unauthorized access or alteration. All information transmitted to or from you is transmitted at your own risk, and you assume all responsibility and risks arising in relation to your use of this website and the Internet. We do not accept responsibility for any interference or damage to your own computer system that may arise in connection with your accessing of our websites or any outbound hyperlinks.
                    </p>
                  </div>

                  <div id="governing" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Governing Law
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      You expressly waive any legal claims you may have now or in the future arising from or related to the website and our products/services.

In the event of a dispute, claim, or controversy arising from or relating to your use of this website that cannot be excluded by your express waiver above, these Website Terms of Use shall be construed and interpreted in accordance with the laws of the Federal Republic of Nigeria without regard to conflict of laws principles. Any legal action must be brought in the courts of Lagos State, Nigeria.
                    </p>
                  </div>

                  <div id="waiver" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      No Waiver
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                     Any waiver or delay by us in enforcing any term or right under these Website Terms of Use will not constitute a waiver of any other or subsequent breach or right.
                    </p>
                  </div>

                  <div id="interpretation" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Interpretation and Severability
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                     Headings and images are inserted for convenience and shall not affect the construction of these Website Terms of Use. The singular includes the plural and vice versa. The feminine includes the masculine and vice versa.

If any portion of these Website Terms of Use is held to be invalid or unenforceable, the invalid or unenforceable portion shall be construed in accordance with applicable law to the greatest extent possible to reflect the original intentions of the parties, and the remainder of the provisions shall remain in full force and effect.

If any provision in these Website Terms of Use shall be held by a court of competent jurisdiction to be contrary to law, that provision shall be changed and interpreted so as to best accomplish the objectives of the original provision to the fullest extent allowed by law, and the remaining provisions in these Website Terms of Use will remain in full force and effect.

These Website Terms of Use supersede any existing communications or agreements, and are the full extent of the agreement between the parties relating to this subject matter.
                    </p>
                  </div>

                  <div id="rights" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      All Rights Reserved
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      All rights not expressly granted in these Website Terms of Use are reserved by us. If you do not see a usage scenario here that applies to your intended usage, or for any questions, contact us at hello@grownee.com
                    </p>
                  </div>

                  <div id="contact" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Contact Information
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      If you have any questions about these Terms, please contact us at:
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      Email: <a href="mailto:support@grownee.com" className="text-primary hover:underline">support@grownee.com</a><br />
                      Location: Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}