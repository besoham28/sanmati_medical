import { ShieldCheck, Droplets, Baby, Leaf, Heart, Dumbbell } from "lucide-react";
import healthProductsImg from "@/assets/health-products.jpg";

const products = [
  { icon: ShieldCheck, title: "Vitamins & Supplements", items: ["Multivitamins", "Vitamin C & D", "Calcium tablets", "Iron supplements", "Omega-3 capsules", "B-Complex"] },
  { icon: Droplets, title: "Personal Care", items: ["Moisturisers", "Sunscreen", "Face wash", "Shampoo & conditioner", "Hand sanitiser", "Lip balm"] },
  { icon: Baby, title: "Baby Care", items: ["Baby soap & shampoo", "Diapers", "Baby food", "Teethers", "Baby oil", "Rash cream"] },
  { icon: Leaf, title: "Ayurvedic Products", items: ["Chyawanprash", "Tulsi drops", "Ashwagandha", "Triphala", "Giloy juice", "Herbal tea"] },
  { icon: Heart, title: "Women's Health", items: ["Iron supplements", "Folic acid", "Calcium with Vitamin D", "Evening primrose oil", "Biotin", "Prenatal vitamins"] },
];

const HealthProductsPage = () => (
  <div>
    <section className="gradient-medical section-padding text-primary-foreground text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Health Products</h1>
        <p className="opacity-80 text-lg max-w-2xl mx-auto">Wellness essentials for the whole family — vitamins, personal care, and more.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img src={healthProductsImg} alt="Health products at Sanmati Medical" className="rounded-2xl shadow-lg w-full h-72 object-cover" />
          <div>
            <h2 className="section-title">Beyond Medicines</h2>
            <p className="text-muted-foreground leading-relaxed">At Sanmati Medical, we stock a wide range of health and wellness products to support your daily well-being. From essential vitamins and supplements to personal care and baby products — we have everything your family needs for a healthier life.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.title} className="medical-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-medical-light flex items-center justify-center">
                  <p.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground">{p.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {p.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default HealthProductsPage;
