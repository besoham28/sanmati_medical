const PrivacyPage = () => (
  <div>
    <section className="gradient-medical section-padding text-primary-foreground text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Privacy Policy</h1>
        <p className="opacity-80 text-lg">Last updated: March 2026</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-3xl prose prose-gray">
        <div className="space-y-8">
          <div>
            <h2 className="section-title text-2xl">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">Sanmati Medical Stores ("we", "us", "our") is committed to protecting the privacy of our customers. This Privacy Policy explains how we collect, use, and safeguard your personal information when you interact with our store and website.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">We may collect the following information:</p>
            <ul className="text-muted-foreground space-y-1 list-disc pl-5">
              <li>Name and contact details (phone number, address)</li>
              <li>Prescription information for order processing</li>
              <li>Order history and preferences</li>
              <li>Feedback and communication records</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">How We Use Your Information</h2>
            <ul className="text-muted-foreground space-y-1 list-disc pl-5">
              <li>To process and deliver your medicine orders</li>
              <li>To verify prescriptions and ensure safe dispensing</li>
              <li>To communicate about your orders and enquiries</li>
              <li>To improve our services and customer experience</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">We take appropriate measures to protect your personal information. Prescription images and personal data are handled with strict confidentiality and are only accessed by authorised pharmacy staff.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Sharing of Information</h2>
            <p className="text-muted-foreground leading-relaxed">We do not sell, trade, or share your personal information with third parties except as required by law or for the purpose of processing your orders (e.g., delivery partners).</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">If you have any questions about this Privacy Policy, please contact us at info@sanmatimedical.com or call +91 99751 76097.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default PrivacyPage;
