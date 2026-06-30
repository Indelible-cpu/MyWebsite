"use client";

import { m } from "framer-motion";

export default function PrivacyPolicy() {
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
            Privacy <span className="text-secondary">Policy</span>
          </m.h1>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Last Updated: June 30, 2026. Your privacy and security are our highest priorities.
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
              <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information directly from you when you submit a message through our contact form, request a custom solution quote, or subscribe to our newsletter. This information may include your name, email address, phone number, and any other details you provide in your messages.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information we collect is used to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Respond to your direct inquiries, comments, or technical questions.</li>
                <li>Process requests for system quotes and consultations.</li>
                <li>Send updates, newsletters, and promotional materials (only if you have voluntarily subscribed).</li>
                <li>Improve our website, digital solutions, and overall user experience.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Information Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement robust physical, technical, and administrative security measures designed to protect your personal data from unauthorized access, loss, misuse, or alteration. All database connections and data transmission paths are fully encrypted using industry-standard protocols.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Sharing Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Indelible Technologies does not sell, trade, rent, or otherwise disclose your personal identification information to third parties. We may only share anonymized analytical data or share information when legally required by Malawian law enforcement or governing regulations.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to request access to the personal data we hold about you, request corrections to any inaccuracies, or request the complete deletion of your data from our active marketing lists (such as unsubscribing from our newsletter). To exercise these rights, please contact us directly at <a href="mailto:indelibletechnologiesmw@gmail.com" className="text-secondary hover:underline">indelibletechnologiesmw@gmail.com</a>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Changes to this Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update this Privacy Policy at any time. Any changes will be posted immediately on this page with the updated date at the top. We encourage you to check this page periodically to stay informed about how we protect your personal information.
              </p>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
