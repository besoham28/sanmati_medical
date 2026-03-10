import { Pill, Heart, Baby, Leaf, Scissors, Droplets, ShieldCheck, Package } from "lucide-react";
import medicineShelves from "@/assets/medicine-shelves.jpg";
import healthProducts from "@/assets/health-products.jpg";

const products = [
  { icon: Pill, title: "Prescription Medicines", desc: "Tablets, capsules, syrups, injections, and more from top pharmaceutical companies.", items: ["Antibiotics", "Pain relievers", "Cardiac medicines", "Diabetes medicines", "Blood pressure drugs"] },
  { icon: Heart, title: "OTC Medicines", desc: "Over-the-counter medicines for common ailments without a prescription.", items: ["Cough & cold", "Digestive aids", "Pain balms", "Antacids", "Eye & ear drops"] },
  { icon: Leaf, title: "Ayurvedic & Herbal", desc: "Traditional remedies and herbal supplements from trusted brands.", items: ["Chyawanprash", "Herbal teas", "Ayurvedic oils", "Immunity boosters", "Digestive herbs"] },
  { icon: Baby, title: "Baby & Mother Care", desc: "Everything for newborns, infants, and expecting mothers.", items: ["Baby food", "Diapers", "Baby skincare", "Prenatal vitamins", "Feeding bottles"] },
  { icon: Scissors, title: "Surgical & Medical Supplies", desc: "Surgical items and medical devices for home and clinical use.", items: ["Bandages", "Syringes", "BP monitors", "Thermometers", "Glucometers"] },
  { icon: Droplets, title: "Personal Care", desc: "Skin care, hair care, and hygiene products from leading brands.", items: ["Moisturisers", "Sunscreens", "Shampoos", "Hand sanitisers", "Oral care"] },
  { icon: ShieldCheck, title: "Vitamins & Supplements", desc: "Nutritional supplements to support your daily health needs.", items: ["Multivitamins", "Calcium", "Iron supplements", "Omega-3", "Protein powders"] },
];

const ProductsPage = () => (
  <div>
    <section className="gradient-medical section-padding text-primary-foreground text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Products</h1>
        <p className="opacity-80 text-lg max-w-2xl mx-auto">5,000+ genuine products from 200+ trusted brands — all under one roof.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="section-title">Quality You Can Trust</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Every product on our shelves is sourced directly from authorised distributors. We maintain proper cold-chain storage for temperature-sensitive medicines and regularly check expiry dates to ensure you always receive fresh, effective products.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={medicineShelves} alt="Medicine shelves" className="rounded-xl shadow-md w-full h-44 object-cover" />
            <img src={healthProducts} alt="Health products" className="rounded-xl shadow-md w-full h-44 object-cover mt-6" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.title} className="medical-card">
              <div className="w-12 h-12 rounded-xl gradient-medical-light flex items-center justify-center mb-4">
                <p.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
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

export default ProductsPage;
