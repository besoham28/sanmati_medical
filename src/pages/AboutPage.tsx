import { Shield, Award, Users, Heart } from "lucide-react";
import pharmacistHelping from "@/assets/pharmacist-helping.jpg";
import pharmacyStore from "@/assets/pharmacy-store.png";

const values = [
  { icon: Shield, title: "Quality Assurance", desc: "Every medicine is sourced from licensed distributors and stored under proper conditions." },
  { icon: Award, title: "Licensed Pharmacy", desc: "Fully licensed under the Drugs and Cosmetics Act with qualified pharmacists on staff." },
  { icon: Users, title: "Community First", desc: "We know our customers by name and treat every person with dignity and respect." },
  { icon: Heart, title: "Affordable Healthcare", desc: "Competitive pricing and generic alternatives to make healthcare accessible to all." },
];

const AboutPage = () => (
  <div>
    <section className="gradient-medical section-padding text-primary-foreground text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Sanmati Medical</h1>
        <p className="opacity-80 text-lg max-w-2xl mx-auto">Serving the people of Bhose with genuine medicines and heartfelt care since 2007.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src={pharmacistHelping} alt="Our pharmacist" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
        <div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
          <h2 className="section-title mt-2">A Legacy of Trust</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sanmati Medical Stores was founded in 2007 with a simple mission: to provide the people of Bhose and surrounding villages with access to genuine, affordable medicines and healthcare products.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            What started as a small pharmacy has grown into one of the most trusted medical stores in the region. Our founder believed that every family deserves access to quality healthcare without having to travel to distant towns.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, we stock over 2,000 products from 200+ trusted pharmaceutical brands, and our team of qualified pharmacists is always ready to provide expert guidance on medications and health concerns.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container mx-auto text-center">
        <h2 className="section-title">Our Values</h2>
        <p className="section-subtitle mx-auto mb-10">The principles that guide everything we do.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="medical-card text-center">
              <div className="w-14 h-14 rounded-2xl gradient-medical flex items-center justify-center mx-auto mb-4">
                <v.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">Our Pharmacy</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Located in Bhose, our store is designed for your convenience. With well-organised shelves, a dedicated prescription counter, and a comfortable waiting area, we ensure a pleasant experience every time you visit.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <span className="text-2xl font-bold text-primary block">18+</span>
              <span className="text-xs text-muted-foreground">Years of Service</span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-primary block">10K+</span>
              <span className="text-xs text-muted-foreground">Happy Families</span>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-primary block">2000+</span>
              <span className="text-xs text-muted-foreground">Products</span>
            </div>
          </div>
        </div>
        <img src={pharmacyStore} alt="Sanmati Medical Store front" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
      </div>
    </section>
  </div>
);

export default AboutPage;
