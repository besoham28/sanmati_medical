import { Truck, Clock, Upload, Pill, Stethoscope, Phone, CreditCard, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Truck, title: "Home Delivery", desc: "Free medicine delivery within Bhose and nearby villages for orders above ₹200. Same-day delivery for orders placed before 6 PM." },
  { icon: Upload, title: "Prescription Upload", desc: "Simply upload a photo of your prescription via our website or WhatsApp. We'll prepare your order and deliver or keep it ready for pickup." },
  { icon: Stethoscope, title: "Expert Consultation", desc: "Our qualified pharmacists provide guidance on medicine usage, dosage, side effects, and drug interactions — absolutely free." },
  { icon: Clock, title: "Extended Hours", desc: "Open from 8 AM to 10 PM, Monday through Saturday. Emergency medicines available on Sunday by prior arrangement." },
  { icon: Pill, title: "Generic Medicine Guidance", desc: "We help you find affordable generic alternatives to expensive branded medicines without compromising on quality." },
  { icon: CreditCard, title: "Flexible Payment", desc: "Pay via cash, UPI (Google Pay, PhonePe, Paytm), or card. Monthly credit facility available for regular customers." },
  { icon: Phone, title: "Order via Phone/WhatsApp", desc: "Call or WhatsApp your medicine list. We'll check availability, confirm pricing, and arrange delivery or pickup." },
  { icon: ShieldCheck, title: "Medicine Authenticity", desc: "Every medicine comes with batch number verification. We only stock from authorised distributors with valid drug licences." },
];

const ServicesPage = () => (
  <div>
    <section className="gradient-medical section-padding text-primary-foreground text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Services</h1>
        <p className="opacity-80 text-lg max-w-2xl mx-auto">More than just a pharmacy — we're your complete healthcare partner.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="medical-card">
              <div className="w-12 h-12 rounded-xl gradient-medical flex items-center justify-center mb-4">
                <s.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="gradient-medical rounded-2xl p-10 md:p-16 text-center text-primary-foreground mt-16">
          <h2 className="text-3xl font-bold font-heading mb-4">Need Assistance?</h2>
          <p className="opacity-80 mb-8 max-w-md mx-auto">Our team is always ready to help. Call us or visit our store for personalised healthcare support.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="rounded-full text-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full text-foreground bg-white hover:bg-white/90">
              <a href="https://wa.me/919975176097" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
