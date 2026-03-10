import { Heart, Droplets, Apple, Moon, Dumbbell, Shield } from "lucide-react";

const tips = [
  { icon: Heart, title: "Monitor Your Blood Pressure Regularly", date: "March 2026", category: "Heart Health", content: "High blood pressure often has no symptoms but can lead to serious health issues. Adults over 30 should check their BP at least once a month. Visit Sanmati Medical for free BP checks during store hours.", tips: ["Reduce salt intake", "Exercise for 30 minutes daily", "Avoid smoking and excess alcohol", "Take prescribed medicines regularly"] },
  { icon: Apple, title: "Boost Your Immunity This Season", date: "February 2026", category: "Immunity", content: "A strong immune system is your first line of defence against infections. Incorporate immunity-boosting foods and supplements into your daily routine.", tips: ["Take Vitamin C and Zinc supplements", "Include turmeric and ginger in your diet", "Get 7-8 hours of sleep", "Stay hydrated with warm water"] },
  { icon: Droplets, title: "Diabetes Management Tips", date: "January 2026", category: "Diabetes", content: "Managing diabetes requires a combination of medication, diet, and lifestyle changes. Regular monitoring and consistency are key.", tips: ["Check blood sugar levels regularly", "Take medicines at the same time daily", "Choose whole grains over refined flour", "Walk for at least 20 minutes after meals"] },
  { icon: Moon, title: "Improve Your Sleep Quality", date: "December 2025", category: "Wellness", content: "Poor sleep affects your immune system, mental health, and overall well-being. Simple changes to your routine can dramatically improve sleep quality.", tips: ["Maintain a fixed sleep schedule", "Avoid screens 1 hour before bed", "Keep your bedroom cool and dark", "Avoid caffeine after 4 PM"] },
  { icon: Dumbbell, title: "Stay Active, Stay Healthy", date: "November 2025", category: "Fitness", content: "Regular physical activity reduces the risk of chronic diseases and improves mental health. Even moderate exercise makes a significant difference.", tips: ["Start with 15 minutes of walking", "Take stairs instead of the lift", "Do stretching exercises every morning", "Join a local yoga or exercise group"] },
  { icon: Shield, title: "Monsoon Health Precautions", date: "October 2025", category: "Seasonal", content: "The monsoon season brings an increase in waterborne and mosquito-borne diseases. Simple precautions can keep your family safe.", tips: ["Drink only boiled or filtered water", "Use mosquito repellents and nets", "Keep your surroundings clean", "Stock ORS and basic medicines at home"] },
];

const BlogPage = () => (
  <div>
    <section className="gradient-medical section-padding text-primary-foreground text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Health Tips & Blog</h1>
        <p className="opacity-80 text-lg max-w-2xl mx-auto">Practical health advice from our pharmacy team to help you and your family stay healthy.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <article key={tip.title} className="medical-card group">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{tip.category}</span>
                <span className="text-xs text-muted-foreground">{tip.date}</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg gradient-medical flex items-center justify-center shrink-0">
                  <tip.icon size={20} className="text-primary-foreground" />
                </div>
                <h2 className="font-bold text-foreground leading-snug">{tip.title}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{tip.content}</p>
              <ul className="space-y-1.5">
                {tip.tips.map((t) => (
                  <li key={t} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default BlogPage;
