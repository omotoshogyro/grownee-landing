"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const sections = [
  { id: "role", title: "Our Role in Your Privacy" },
  { id: "collect", title: "When and How We Collect Data" },
  { id: "types", title: "Types of Data We Collect" },
  { id: "use", title: "How and Why We Use Your Data" },
  { id: "rights", title: "Your Privacy Choices and Rights" },
  { id: "security", title: "How Do We Secure Your Data?" },
  { id: "transfer", title: "Where Is Your Data Transferred and Processed?" },
  { id: "retention", title: "How Long Do We Store Your Data?" },
  { id: "cookies", title: "Cookies and How We Use Them" },
];

const collectionRows = [
  { give: false, collect: true, activity: "You browse any page of our website" },
  { give: true, collect: true, activity: "You download any of our free resources (“freebies”)" },
  { give: true, collect: false, activity: "You contact us (using our contact form, by email, or on social media)" },
  { give: true, collect: false, activity: "You opt-in to marketing messages" },
  { give: false, collect: true, activity: "You receive emails from us" },
  { give: true, collect: true, activity: "You make a purchase from us" },
  { give: false, collect: true, activity: "You attend one of our live sessions" },
  { give: false, collect: true, activity: "You watch a pre-recorded session or course" },
  { give: true, collect: false, activity: "You provide feedback or testimonials" },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("role");
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
              backgroundImage: "url(/background-pattern.png)",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
              backgroundPosition: "0 -200px",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="text-4xl sm:text-5xl font-medium text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600 text-base leading-relaxed">
                We care about your digital privacy. This Privacy Policy explains what information we
                collect, why we collect it, how we process it, and the rights you have over your data.
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
                      We are <strong className="text-foreground">GROWNEE CAPITAL LIMITED</strong>, the
                      owner of www.grownee.com and the <strong className="text-foreground">Grownee
                      brand</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), and we care about your digital
                      privacy. We will process and use your data securely and in accordance with data
                      protection regulations around the world that may apply to you.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We are registered as a data controller with the regulatory body in Nigeria.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      The NDPA requires Data Controllers to register with the NDPC within six (6) months
                      after the commencement of the NDPA or on becoming Data Controllers. The NDPA was
                      passed into law on 14 June 2023.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      This Privacy Policy explains what information we collect from you, the purposes we
                      collect that information, and how we process it. This Privacy Policy also explains
                      your rights that apply to data we have about you, and how to use those rights.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                      The terms &quot;you&quot; and &quot;your&quot; refer to anyone who:
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-1">
                      1. uses, visits and/or views our website,
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-1">
                      2. accesses any of our content, or
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      3. purchases any content, product(s), or service(s) from us.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      By visiting and using the website, or making a purchase from us, you accept and
                      agree to be bound by this Privacy Policy.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We may change or update this Privacy Policy without notifying you. The latest
                      version can always be found on our website.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Your continued use of the website after posting of any changes to our Privacy
                      Policy means you accept the changes. You must not access or use the website if you
                      do not wish to be bound by this Privacy Policy.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-8">
                      If you have questions about this Privacy Policy, you can contact us at{" "}
                      <a href="mailto:hello@grownee.com" className="text-primary hover:underline">
                        hello@grownee.com
                      </a>
                    </p>
                  </div>

                  <div id="role" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Our Role in Your Privacy
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      If you are a <strong className="text-foreground">Grownee</strong> customer or
                      user, access or download any of our free content, or you&apos;re just visiting our
                      website, this policy applies to you.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      Our Responsibilities:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px] mb-4">
                      <li>
                        Whether you are a registered user or just a visitor to our website, we act as a
                        &quot;data controller&quot; of your personal data. This means that we determine how and
                        why we collect and process your data.
                      </li>
                      <li>
                        We will collect, store, and process your data in accordance with this Privacy
                        Policy and applicable laws.
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      Your Responsibilities:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px]">
                      <li>
                        You should read this Privacy Policy and check it again from time to time, as we
                        may change or update it.
                      </li>
                      <li>
                        If you are a customer or subscriber, you should also check any contracts between
                        us (including Terms &amp; Conditions, which are a contract). Our contracts may
                        include further details on how we collect and process your data.
                      </li>
                      <li>
                        You will only provide us with personal information about other people if you
                        have the right to authorise us to process it on your behalf in accordance with
                        this Privacy Policy.
                      </li>
                    </ul>
                  </div>

                  <div id="collect" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      When and How We Collect Data
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Any time you interact with <strong className="text-foreground">Grownee</strong>,
                      we are collecting data. Sometimes you provide us with data, and sometimes data
                      about you is collected automatically. Here&apos;s when and how we do this:
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                      <table className="w-full text-left text-[14px] text-gray-600">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-4 py-3 font-semibold text-foreground whitespace-nowrap w-[120px]">
                              You give data
                            </th>
                            <th className="px-4 py-3 font-semibold text-foreground whitespace-nowrap w-[130px]">
                              We collect data
                            </th>
                            <th className="px-4 py-3 font-semibold text-foreground">Activity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {collectionRows.map((row, i) => (
                            <tr key={i} className="border-b border-gray-100 last:border-b-0">
                              <td className="px-4 py-3 text-center text-primary font-semibold">
                                {row.give ? "✓" : ""}
                              </td>
                              <td className="px-4 py-3 text-center text-primary font-semibold">
                                {row.collect ? "✓" : ""}
                              </td>
                              <td className="px-4 py-3">{row.activity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div id="types" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Types of Data We Collect
                    </h2>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Contact details</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Your name, address, phone number, email address, social media handles, and any
                      alternative contact details you may provide.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      Financial information
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Your bank details, credit/debit card details, PayPal account details, or any other
                      payment methods.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      Data that identifies you
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Your IP address, login information, browser type and version, device type, time
                      zone settings, browser plug-ins, geolocation information about where you might be,
                      operating system and version, and other information that is collected automatically
                      about your activity on our website.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      Data on how you use our website
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Your URL clickstreams (the path you take through our site), products/services
                      viewed or placed into cart, page response times, error messages, how long you stay
                      on our pages, what you do on those pages, how often, and other actions you take on
                      our website.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      What about really sensitive data?
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We don&apos;t collect any &quot;sensitive data&quot; about you (like race, ethnicity,
                      political opinions, religious/philosophical beliefs, union membership, genetic
                      data, biometric data, data about your sexual life or preferences, or any
                      alleged/actual offences) except when we have your specific consent or when we have
                      to in order to comply with the law.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      What about children&apos;s data?
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We are a business that provides content, products, and services to other
                      businesses and individuals, which are directed to and intended for use by
                      individuals over the legal age of adulthood (which happens to be 18 years old in
                      most places in the world).
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Nothing we provide is targeted at children, and we do not knowingly collect any
                      personal data from any person under the legal age of adulthood. If you believe that
                      personal information was collected without parental or guardian consent from a
                      child, please contact us to have that information deleted.
                    </p>
                  </div>

                  <div id="use" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      How and Why We Use Your Data
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Data protection laws restrict us in how we can use your data. These laws only allow
                      us to use your data for certain reasons, which we must have a legal basis for. Here
                      are the reasons why we process your data:
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      Running our business
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-1">
                      Managing your requests (like creating and managing your account, answering your
                      questions, processing your purchases), login and authentication, remembering your
                      settings and preferences, processing payments, hosting and back-end infrastructure.
                    </p>
                    <p className="text-gray-500 text-[14px] italic mb-4">
                      Legal basis: contract, legitimate interest
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      Improving our content, products, and services
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-1">
                      Testing features, interacting with feedback, managing landing pages, heatmapping
                      our site, traffic optimisation, data analysis and research, profiling, and using
                      machine learning techniques to analyse data. This may be done by us or by an
                      external person/company that we use to provide services to us.
                    </p>
                    <p className="text-gray-500 text-[14px] italic mb-4">
                      Legal basis: contract, legitimate interest
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Customer support</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-1">
                      Providing essential information and updates on any product or service which you are
                      signed up for or have access to (including free challenges/events) and resolving
                      issues (technical, financial, or otherwise). This may be by phone, email, chat,
                      social media, or in a community group hosted on our website or another platform we
                      use.
                    </p>
                    <p className="text-gray-500 text-[14px] italic mb-4">
                      Legal basis: contract, consent
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      Advertising and marketing
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-1">
                      Sending you emails and messages about new features, offers, products, and services,
                      as well as informational content. We may also run targeted advertising campaigns on
                      other platforms.
                    </p>
                    <p className="text-gray-500 text-[14px] italic mb-6">Legal basis: consent</p>

                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Here is an explanation for each of the legal bases we use:
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Consent</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                      You have given us clear consent to process your personal data for a specific
                      purpose.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                      You can change your mind! If you have previously given your consent, you can freely
                      withdraw that consent at any time. All you have to do is let us know at{" "}
                      <a href="mailto:hello@grownee.com" className="text-primary hover:underline">
                        hello@grownee.com
                      </a>{" "}
                      (we&apos;re not mind readers, after all).
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      If you withdraw your consent, we will immediately stop processing your data unless
                      we have another legal basis to process the data. If we do have another legal basis
                      to process your data, we may continue to do so as long as that legal basis remains
                      valid.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Contract</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                      Processing your data is necessary as part of a contract you have with us, or if we
                      have asked you to take specific steps before entering into a contract with us.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      Please remember that Terms &amp; Conditions are a type of contract. If you&apos;ve
                      ticked a box agreeing to our Terms &amp; Conditions (for example, as part of a
                      purchase), you&apos;ve effectively &quot;signed&quot; a contract with us.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      Legitimate Interests
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                      Processing your data is necessary for our legitimate business interests or the
                      legitimate business interests of another person/company we work closely. Examples
                      of legitimate interests include:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-[15px] mb-2">
                      <li>Gaining insights from your behaviour on our website or any platforms we use;</li>
                      <li>Delivering, developing, and improving our content, products, and services;</li>
                      <li>Enabling us to improve, customise, or modify our content and communications;</li>
                      <li>Determining whether marketing and advertising campaigns are effective;</li>
                      <li>Verifying and enhancing data security.</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      In each case, our legitimate interest is only valid if it is not outweighed by your
                      rights and interests. We respect your rights, and we carefully evaluate if a
                      legitimate interest is strong enough to justify processing your data.
                    </p>
                  </div>

                  <div id="rights" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Your Privacy Choices and Rights
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      You have choices and rights when it comes to your data. To exercise your rights,
                      you can email us at{" "}
                      <a href="mailto:hello@grownee.com" className="text-primary hover:underline">
                        hello@grownee.com
                      </a>
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      You can choose not to provide us with personal data
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      If you choose to do this, you can continue to use our website and the content you
                      see on it. However, you may be unable to download, access, or purchase additional
                      content, such as PDF &quot;freebies&quot;, webinars, events, or paid products/services.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      You can choose to turn off cookies in your browser by changing the browser settings
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      You can block cookies by activating a setting in your browser that refuses all
                      cookies. You can also delete cookies through your browser settings. If you turn off
                      cookies, you can continue to try to use our website, but it may not load/function
                      effectively (or at all).
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      You can choose to tell us not to use your data for marketing
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We will inform you before collecting your data if we intend to use that data for
                      marketing. If you&apos;ve previously opted in to marketing, you can change your
                      preferences by using the &quot;unsubscribe&quot; button in any marketing email you&apos;ve
                      received from us, or just let us know by email at{" "}
                      <a href="mailto:hello@grownee.com" className="text-primary hover:underline">
                        hello@grownee.com
                      </a>
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      You have the right to access information we hold about you
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                      You can ask us for additional information about:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-[15px] mb-2">
                      <li>The categories of data we&apos;re processing;</li>
                      <li>The purposes for data processing;</li>
                      <li>The categories of third parties to whom we disclose data;</li>
                      <li>How long we store data (or the criteria we use to decide storage times);</li>
                      <li>Your other rights regarding our use of your data.</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      If you make a request, we will respond to your request within one month, unless we
                      have a valid reason to deny your request (for example, if responding to your
                      request would negatively affect the rights and freedoms of others, including the
                      right to confidentiality or intellectual property rights).
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      You have the right to make us correct any inaccurate personal data about you
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      You can contact us at any time to let us know your most up-to-date information
                      (changed your name, moved to a new address, or anything else).
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      You can object to us using your data for profiling you or making automated
                      decisions about you
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We may use your data to determine whether we should let you know information that
                      may be relevant to you (for example, you may receive some emails and not others
                      based on your past behaviour). Otherwise, the only circumstances in which we do
                      this is to provide our products/services to you (the nature of what we&apos;re
                      providing may require some customisation to benefit you).
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      You have the right to be &apos;forgotten&apos; by us
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      You can do this by asking us to delete any personal data we have about you. However,
                      please understand that where we have contractual, regulatory, legal, or other
                      essential reasons to hold on to your data, we may keep some of your data (only what
                      we actually need and only as long as we actually need it).
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      You have the right to file a complaint about our use of your data
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      If you have a complaint, please let us know and give us a chance to address it and
                      ease your concerns first. If we fail at this, you can submit your complaint to the
                      regulatory body that deals with data privacy in your country.
                    </p>
                  </div>

                  <div id="security" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      How Do We Secure Your Data?
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We have physical, electronic, and managerial processes to ensure your data is
                      secure. However, there are people with bad intentions in the world, and no data is
                      ever 100% secure. Please also understand that we are a small business, and we
                      don&apos;t have the budget, systems, or expertise that large businesses do, so we do
                      the best we can with what we have.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-2">A few reminders:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 text-[15px]">
                      <li>
                        Providing your personal data is at your own risk, because unfortunately, no data
                        transfer can be guaranteed as secure.
                      </li>
                      <li>
                        You are responsible for keeping your login details (username, password) secret
                        and safe.
                      </li>
                      <li>
                        If you believe your privacy has been breached, please let us know as soon as
                        possible.
                      </li>
                    </ul>
                  </div>

                  <div id="transfer" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Where Is Your Data Transferred and Processed?
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      As a small business, we rely on third parties (aka other people/businesses) to
                      provide services to us that are essential to the day-to-day operation of the
                      business. This includes website hosting, video conferencing, legal and accounting
                      services, email service, social media scheduling, freelancers, payment providers,
                      technology providers, and many, many more. We simply wouldn&apos;t be able to run
                      Grownee without these third-party services.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      When we use these third-party services, it is necessary for us to share your data,
                      specifically your contact and payment details, with them in order to receive the
                      services. Because our online presence provides the possibility to reach customers
                      anywhere in the world, it is not practical for us to even attempt to use
                      third-party services that store and process data locally (based on each
                      individual&apos;s location when they share data with us). Therefore, we partner with
                      third parties who we believe are the best providers, while balancing service levels,
                      cost, and respect for data privacy.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      When we transfer your data to a third party and they process it, we have very little
                      control over the location of the data&apos;s storage and processing. Often, this means
                      that your data is transferred to other places in the world and processed there. We
                      know for a fact that some of our third-party providers transfer and process your
                      data in the United States and other locations outside the EEA (European Economic
                      Area).
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      By sharing your personal data with us, you explicitly agree to this transfer,
                      storage, and processing by us and our third parties anywhere in the world,
                      including in countries that are not approved by the European Commission as having an
                      adequate level of protection for personal data.
                    </p>
                  </div>

                  <div id="retention" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      How Long Do We Store Your Data?
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We only store your data as long as it is required to fulfil the purpose for which it
                      was collected. For example, we keep a record of your email address and
                      &quot;unsubscribe&quot; preference to ensure we respect your choice not to receive
                      marketing messages from us.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We will also store your data for as long as reasonably necessary to comply with
                      legal and tax requirements.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      If we no longer have any need to continue to store your data, we will delete it.
                    </p>
                  </div>

                  <div id="cookies" className="scroll-mt-24">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Cookies and How We Use Them (Not Eat Them)
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      We use cookies on our website (not the fresh-baked kind, sadly).
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      You can control your cookie preferences through the cookie banner that appears when
                      you visit our website.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      However, the cookie banner does not allow you to disable essential cookies, which
                      are required for our website to function. Unless you adjust your browser settings to
                      refuse cookies, we (and third parties that provide services to us) will activate
                      some cookies when you interact with our website.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      These may be &apos;session&apos; cookies, meaning they delete themselves when you leave
                      our site, or &apos;persistent&apos; cookies, which do not delete themselves and help us
                      recognise you when you return so we can provide a tailored service.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      These cookies, while not very tasty, do serve a purpose. And not just for us – for
                      you too! Some cookies are essential, meaning they are needed to make our website
                      work. And some are simply convenient, like the cookie that is activated when you
                      tick the box for &quot;Remember my password&quot;.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      How can you block cookies?
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                      You can block cookies by activating a setting on your browser that blocks the
                      creation of cookies. You can also delete cookies through your browser settings. If
                      you use your browser to disable, reject, or block cookies (including essential
                      cookies), certain parts of our website will not function properly. In some cases,
                      the website may not work at all.
                    </p>

                    <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                      Third-party cookies
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                      &quot;Third party&quot; refers to a person/business that is not you or us. We use third
                      parties to provide services that help us run our business and deliver great products
                      and services. These third parties use cookies too.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px] mb-2">
                      If you access a third-party website or platform where we have some of our content,
                      products, or services, that third party has its own privacy policy and cookie
                      policy, which may differ from ours.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      Please note that where third parties use cookies, we have no control over how those
                      third parties actually use those cookies.
                    </p>
                  </div>

                  <p className="text-gray-500 text-[14px] italic pt-4 border-t border-gray-100">
                    This Privacy Policy was last updated on 1st of June 2026.
                  </p>
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
