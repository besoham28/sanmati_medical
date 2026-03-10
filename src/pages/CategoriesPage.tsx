import { Pill, Heart, Baby, Leaf, Scissors, Droplets, ShieldCheck, Package } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: Pill, title: "Prescription Medicines", count: "2000+", desc: "Complete range of prescribed medicines from all major pharmaceutical brands.", color: "from-primary to-medical-teal" },
  { icon: Heart, title: "OTC & First Aid", count: "500+", desc: "Over-the-counter medicines and first-aid essentials." },
  { icon: Leaf, title: "Ayurvedic & Herbal", count: "300+", desc: "Traditional and herbal remedies from trusted Ayurvedic brands." },
  { icon: Baby, title: "Baby & Mother Care", count: "400+", desc: "Products for newborns, infants, and expecting mothers." },
  { icon: Scissors, title: "Surgical Supplies", count: "200+", desc: "Medical devices, surgical items, and diagnostic equipment." },
  { icon: Droplets, title: "Personal Care", count: "800+", desc: "Skin care, hair care, oral care, and hygiene products." },
  { icon: ShieldCheck, title: "Vitamins & Supplements", count: "350+", desc: "Nutritional supplements, multivitamins, and protein powders." },
  { icon: Package, title: "General Store", count: "500+", desc: "Daily essentials, snacks, beverages, and household items." },
];

const CategoriesPage = () => (
  <div>
    <section className="gradient-medical section-padding text-primary-foreground text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Product Categories</h1>
        <p className="opacity-80 text-lg max-w-2xl mx-auto">Explore our well-organized product categories to find exactly what you need.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <Link to="/products" key={c.title} className="medical-card group text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl gradient-medical-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <c.icon size={30} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
              <span className="text-primary font-semibold text-sm">{c.count} products</span>
              <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default CategoriesPage;
