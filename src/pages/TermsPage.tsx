const TermsPage = () => (
  <div>
    <section className="gradient-medical section-padding text-primary-foreground text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Terms & Conditions</h1>
        <p className="opacity-80 text-lg">Last updated: March 2026</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">1. General</h2>
            <p className="text-muted-foreground leading-relaxed">These Terms & Conditions govern your use of the Sanmati Medical Stores website and services. By using our services, you agree to these terms in full.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">2. Prescription Medicines</h2>
            <p className="text-muted-foreground leading-relaxed">Prescription medicines (Schedule H and Schedule H1 drugs) will only be dispensed against a valid prescription from a registered medical practitioner. We reserve the right to verify any prescription before dispensing.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">3. Orders & Delivery</h2>
            <ul className="text-muted-foreground space-y-1 list-disc pl-5">
              <li>Orders are subject to product availability.</li>
              <li>Free delivery within Bhose for orders above ₹200.</li>
              <li>Delivery times are estimates and may vary.</li>
              <li>We reserve the right to cancel orders if prescription verification fails.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">4. Returns & Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">Due to pharmaceutical regulations, medicines cannot be returned once sold. If you receive a damaged or incorrect product, please contact us within 24 hours for a replacement.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">5. Pricing</h2>
            <p className="text-muted-foreground leading-relaxed">All prices are in Indian Rupees (INR) and are subject to change. MRP (Maximum Retail Price) printed on the product is the final price.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">Sanmati Medical Stores provides healthcare products and pharmacy services. We are not liable for misuse of medicines or failure to follow prescribed dosage. Always consult your doctor for medical advice.</p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-3">7. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">For questions about these Terms & Conditions, contact us at info@sanmatimedical.com or visit our store at A/P Bhose.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default TermsPage;
