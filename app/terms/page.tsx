"use client";

import { m } from "framer-motion";

export default function TermsOfService() {
  return (
    <>
      {/* HEADER SECTION */}
      <section className="pt-32 pb-16 bg-muted/30">
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
            Last Updated: June 30, 2026. Please read these terms carefully before using our digital systems.
          </m.p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20">
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
                By accessing this website, purchasing licensing options, or requesting custom deployment for systems within the Indelible Technologies ecosystem (including MsikaPos, EduPayTrack, and Teachers Bank), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Licensing and System Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                All software systems provided by Indelible Technologies are licensed on a subscription, per-branch, or per-institution basis, and are not sold outright. You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the software systems solely for your internal business or institutional operations.
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
                While we strive to ensure 99.9% uptime for cloud-hosted deployments, Indelible Technologies is not liable for temporary service interruptions caused by maintenance updates, hardware failures, local internet provider outages, or factors beyond our control. Scheduled maintenance is typically performed during low-traffic periods.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All source code, design systems, algorithms, graphics, databases, and structural assets within our software systems are the exclusive intellectual property of Indelible Technologies. You may not copy, reverse-engineer, modify, or distribute any code, trademarks, or proprietary elements without explicit written permission from JEF Investment or Indelible Technologies management.
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
