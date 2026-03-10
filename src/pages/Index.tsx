import { Link } from "react-router-dom";
import { Shield, Truck, Clock, Heart, Star, Pill, Stethoscope, Package, Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import logo from "@/assets/logo.png";
import pharmacistHelping from "@/assets/pharmacist-helping.jpg";
import medicineShelves from "@/assets/medicine-shelves.jpg";
import healthProducts from "@/assets/health-products.jpg";

const features = [
  { icon: Shield, title: "100% Genuine Medicines", desc: "All medicines sourced directly from authorised distributors with proper licensing." },
  { icon: Truck, title: "Home Delivery", desc: "Free delivery within Bhose and nearby villages for orders above ₹200." },
  { icon: Clock, title: "Open Everyday", desc: "Open daily from 8:00 AM to 10:00 PM to serve you better." },
  { icon: Heart, title: "Trusted Since 2007", desc: "Serving the Bhose community with care and dedication for nearly two decades." },
];

const categories = [
  { icon: Pill, title: "Prescription Medicines", desc: "Complete range of prescribed medicines from trusted brands." },
  { icon: Stethoscope, title: "OTC & First Aid", desc: "Over-the-counter remedies, bandages, and first-aid essentials." },
  { icon: Package, title: "Health & Wellness", desc: "Vitamins, supplements, and personal care products." },
  { icon: Upload, title: "Upload Prescription", desc: "Send your prescription and we'll prepare your order.", link: "/prescription" },
];

const reviews = [
  { name: "Rajesh Patil", text: "Sanmati Medical always has the medicines I need. The staff is extremely helpful.", rating: 5 },
  { name: "Sunita Jadhav", text: "I've been a loyal customer for 10 years. They even deliver to my doorstep. Very reliable!", rating: 5 },
  { name: "Amit Deshmukh", text: "Best pharmacy in Bhose. Genuine medicines and great service every time.", rating: 5 },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Sanmati Medical Store, Bhose" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-xl animate-fade-up">
            <img src={logo} alt="Sanmati Medical Stores Logo" className="h-20 w-auto mb-6 object-contain bg-white/90 p-2 rounded-xl" />
            <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">Trusted Pharmacy in Bhose</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-heading">
              Your Health, Our Priority
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Sanmati Medical Stores — your neighbourhood pharmacy providing genuine medicines, healthcare products, and personalised care to the people of Bhose since 2007.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/order">Order Medicine</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
                <Link to="/prescription">Upload Prescription</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding gradient-medical-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className={`medical-card flex items-start gap-4 animate-fade-up stagger-${i + 1}`} style={{ opacity: 0, animationFillMode: 'forwards' }}>
                <div className="w-12 h-12 rounded-xl gradient-medical flex items-center justify-center shrink-0">
                  <f.icon size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src={pharmacistHelping} alt="Pharmacist assisting customer at Sanmati Medical" className="w-full h-80 object-cover" />
            </div>
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="section-title mt-2">Caring for Bhose's Health Since 2007</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Sanmati Medical Stores, we believe healthcare should be accessible, affordable, and trustworthy. Our licensed pharmacists are always ready to guide you with the right medicines and health advice.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We stock a complete range of prescription medicines, OTC drugs, ayurvedic products, baby care, surgical items, and daily essentials — all sourced from authorised distributors.
              </p>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/about">Learn More About Us <ArrowRight size={16} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="section-title mt-2 mx-auto">Product Categories</h2>
          <p className="section-subtitle mx-auto mb-10">Browse our wide range of healthcare products and medicines.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <Link to={c.link || "/categories"} key={c.title} className="medical-card text-center group">
                <div className="w-14 h-14 rounded-2xl gradient-medical-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <c.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Store</span>
              <h2 className="section-title mt-2">Well-Stocked for Every Need</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From daily vitamins to critical prescription medicines, our shelves are always stocked with products from leading pharmaceutical brands. We maintain strict quality checks and proper storage conditions to ensure the efficacy of every product.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="medical-card text-center py-4">
                  <span className="text-2xl font-bold text-primary">5000+</span>
                  <p className="text-xs text-muted-foreground mt-1">Products Available</p>
                </div>
                <div className="medical-card text-center py-4">
                  <span className="text-2xl font-bold text-primary">200+</span>
                  <p className="text-xs text-muted-foreground mt-1">Trusted Brands</p>
                </div>
              </div>
              <Button asChild className="rounded-full">
                <Link to="/products">View All Products <ArrowRight size={16} /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={medicineShelves} alt="Medicine shelves" className="rounded-xl shadow-md w-full h-48 object-cover" />
              <img src={healthProducts} alt="Health products" className="rounded-xl shadow-md w-full h-48 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding gradient-medical-light">
        <div className="container mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="section-title mt-2 mx-auto">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {reviews.map((r) => (
              <div key={r.name} className="medical-card text-left">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">"{r.text}"</p>
                <p className="font-semibold text-foreground text-sm">{r.name}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" className="rounded-full mt-8">
            <Link to="/reviews">Read All Reviews</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="gradient-medical rounded-2xl p-10 md:p-16 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Need Medicines Delivered?</h2>
            <p className="opacity-80 mb-8 max-w-lg mx-auto">Upload your prescription or call us directly. We offer free home delivery within Bhose and nearby areas.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full text-foreground">
                <Link to="/order">Order Now</Link>
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
};

export default Index;
