"use client";

import { m } from "framer-motion";

export default function TermsOfService() {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="bg-muted/30 pt-32 pb-14 sm:pt-36 sm:pb-16">
        <div className="container mx-auto px-4 text-center">
          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Terms of <span className="text-secondary">Service</span>
          </m.h1>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Last Updated: October 28, 2026. Please read these terms carefully before using our digital systems.
          </m.p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-slate dark:prose-invert max-w-none space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing this website or using a product or service offered by Indelible Technologies, you agree to these terms where applicable. Project-specific proposals, licences, purchase agreements and service contracts may set additional terms or override these general terms for the relevant project. If you do not agree, do not use the applicable service.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Licensing and System Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pricing and usage rights depend on the particular product and written agreement. A project may be provided under a licence, subscription, custom-development agreement or sale, where expressly agreed in writing. Before payment or deployment, the applicable agreement should state what is included, who owns the deliverables, permitted use, fees, support and any renewal or cancellation terms. Do not assume that access to a product transfers ownership of its source code.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. User Accounts and Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                To use certain software features, you may be required to register or deploy accounts. You are solely responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Maintaining the strict confidentiality of your system usernames, passwords, and API credentials.</li>
                <li>All activities that occur under your institutional user accounts.</li>
                <li>Notifying Indelible Technologies immediately of any unauthorized system usage or security breach.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. System Uptime and Maintenance</h2>
              <p className="text-muted-foreground leading-relaxed">
                We aim to keep hosted services available and maintain them responsibly, but we do not promise a specific uptime level unless it is expressly stated in a written service-level agreement. Availability may be affected by maintenance, hosting providers, connectivity, device issues or other factors outside our reasonable control. Any agreed maintenance and support arrangements will be described in the applicable project agreement.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Intellectual-property ownership and usage rights depend on the relevant product, third-party licences and any written client agreement. Unless a written agreement says otherwise, you may not copy, redistribute or misuse proprietary materials, branding or software beyond the permission granted to you. Third-party tools and open-source components remain subject to their own licences. For custom projects, ownership, source-code handover and reuse rights should be agreed in writing before work begins.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by Malawian law, Indelible Technologies shall not be liable for any indirect, incidental, special, or consequential damages (including loss of profits, records, or business interruptions) arising out of the use or inability to use our systems.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by, construed, and enforced in accordance with the laws of the Republic of Malawi. Any legal disputes arising out of the use of our services shall be subject to the exclusive jurisdiction of the competent courts of Malawi.
              </p>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
