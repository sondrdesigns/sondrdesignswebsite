import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export function PrivacyPolicyPage() {
  return (
    <>
      <SEO 
        title="Privacy Policy - Sondr Designs"
        description="Privacy Policy for Sondr Designs. Learn how we collect, use, and protect your personal information when you interact with our services."
        keywords="privacy policy, data protection, Sondr Designs privacy, website privacy"
        url="https://www.sondrdesigns.com/privacy-policy"
      />
      <div className="pt-20">
        <section className="px-8 md:px-12 py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-xl text-foreground/60 mb-12">
                Sondr Designs
              </p>
              <p className="text-sm text-foreground/50 mb-16">
                Last Updated: January 3, 2026
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="prose prose-lg max-w-none space-y-12"
            >
              <section>
                <h2 className="text-2xl md:text-3xl mb-6 tracking-tight font-semibold">
                  Information We Collect
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  When you submit our contact form, we collect the information you provide, which may include your name, email address, phone number, business name, and website URL.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl mb-6 tracking-tight font-semibold">
                  How We Use Your Information
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We use the information you submit solely to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 leading-relaxed ml-4">
                  <li>Evaluate whether our web design services are a good fit for your business</li>
                  <li>Contact you regarding your inquiry</li>
                  <li>Deliver your free homepage mockup (if applicable)</li>
                </ul>
                <p className="text-foreground/70 leading-relaxed mt-4">
                  We do not sell, rent, or share your personal information with third parties for their marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl mb-6 tracking-tight font-semibold">
                  Data Storage
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  Your information is stored securely in our customer relationship management system and is accessible only to Sondr Designs team members involved in responding to your inquiry.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl mb-6 tracking-tight font-semibold">
                  Third-Party Services
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  We may use third-party tools (such as form processors, CRM software, and email platforms) to manage and respond to inquiries. These services are bound by their own privacy policies and are used only to facilitate communication with you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl mb-6 tracking-tight font-semibold">
                  Your Rights
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  You may request to view, update, or delete your information at any time by contacting us at{' '}
                  <a 
                    href="mailto:studio@sondrdesigns.com"
                    className="text-foreground hover:text-foreground/70 underline transition-colors"
                  >
                    studio@sondrdesigns.com
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl mb-6 tracking-tight font-semibold">
                  Contact
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  If you have questions about this policy, contact us at:
                </p>
                <div className="space-y-2 text-foreground/70 leading-relaxed">
                  <p className="font-medium">Sondr Designs</p>
                  <p>
                    <a 
                      href="mailto:studio@sondrdesigns.com"
                      className="hover:text-foreground underline transition-colors"
                    >
                      studio@sondrdesigns.com
                    </a>
                  </p>
                  <p>
                    <a 
                      href="tel:+18087219350"
                      className="hover:text-foreground underline transition-colors"
                    >
                      (808) 721-9350
                    </a>
                  </p>
                </div>
              </section>

              <section className="pt-8 border-t border-border">
                <p className="text-foreground/60 italic leading-relaxed">
                  By submitting our form, you acknowledge that you have read and understood this privacy policy.
                </p>
              </section>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
