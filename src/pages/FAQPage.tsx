import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What are your store timings?", a: "We are open every day from 8:00 AM to 10:00 PM, including Sundays." },
  { q: "Do you offer home delivery?", a: "Yes! We provide free home delivery within Bhose and nearby villages for orders above ₹200. Delivery is usually within 2-3 hours for orders placed before 6 PM." },
  { q: "How can I order medicines?", a: "You can order in several ways: visit our store, call/WhatsApp us at +91 99751 76097, message us your medicine list or prescription, or use our website's order form." },
  { q: "Do you accept prescriptions via WhatsApp?", a: "Absolutely! Just take a clear photo of your doctor's prescription and send it to our WhatsApp number. We'll verify it, prepare your medicines, and let you know when they're ready." },
  { q: "Are all your medicines genuine?", a: "Yes, 100%. We source all medicines directly from authorised distributors and manufacturers. Every product comes with proper batch numbers and manufacturing details for verification." },
  { q: "Do you have generic medicines?", a: "Yes, we stock a wide range of affordable generic alternatives. Our pharmacists can help you find generic versions of your prescribed medicines that are equally effective." },
  { q: "What payment methods do you accept?", a: "We accept cash, all major UPI apps (Google Pay, PhonePe, Paytm), debit/credit cards, and also offer monthly credit facilities for regular customers." },
  { q: "Can I return medicines?", a: "Due to pharmaceutical regulations, we cannot accept returns on medicines once sold. However, if you receive a damaged or wrong product, we'll replace it immediately." },
  { q: "Do you provide health advice?", a: "Our qualified pharmacists are always available to guide you on medicine usage, dosage, potential side effects, and drug interactions. For medical diagnosis, please consult a doctor." },
  { q: "Do you stock surgical and medical equipment?", a: "Yes, we carry BP monitors, glucometers, thermometers, nebulisers, and other medical devices along with surgical supplies like bandages and syringes." },
];

const FAQPage = () => (
  <div>
    <section className="gradient-medical section-padding text-primary-foreground text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Frequently Asked Questions</h1>
        <p className="opacity-80 text-lg max-w-2xl mx-auto">Find answers to common questions about our products, services, and policies.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="medical-card border-none">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline px-0">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-0">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </div>
);

export default FAQPage;
