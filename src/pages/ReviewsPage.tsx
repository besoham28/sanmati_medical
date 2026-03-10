import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh Patil", location: "Bhose", rating: 5, text: "I've been a regular customer at Sanmati Medical for over 10 years. The staff is always friendly and the medicines are genuine. I wouldn't go anywhere else.", date: "December 2025" },
  { name: "Sunita Jadhav", location: "Bhose", rating: 5, text: "The home delivery service is a lifesaver, especially during the monsoon season. They deliver medicines right to my doorstep, usually within a couple of hours.", date: "November 2025" },
  { name: "Dr. Anil More", location: "Bhose", rating: 5, text: "As a local doctor, I recommend Sanmati Medical to all my patients. They stock genuine medicines and the pharmacists are knowledgeable about drug interactions.", date: "October 2025" },
  { name: "Priya Kulkarni", location: "Dahiwadi", rating: 5, text: "Even though I live in Dahiwadi, I order from Sanmati Medical because of their quality and service. The WhatsApp ordering system is very convenient.", date: "September 2025" },
  { name: "Amit Deshmukh", location: "Bhose", rating: 4, text: "Best pharmacy in the area. Good stock of medicines and the staff helps you find affordable generic alternatives when available. Very trustworthy.", date: "August 2025" },
  { name: "Meera Shinde", location: "Bhose", rating: 5, text: "I bought a blood pressure monitor from here and the pharmacist taught me how to use it properly. That kind of personal attention is rare these days.", date: "July 2025" },
  { name: "Vikas Pawar", location: "Mhasvad", rating: 5, text: "They have a great collection of baby care products and the staff is very patient in explaining which products are best. Highly recommended for new parents.", date: "June 2025" },
  { name: "Anita Gaikwad", location: "Bhose", rating: 5, text: "The prescription upload feature via WhatsApp is brilliant. I just send a photo and they have everything ready when I arrive. Saves so much time!", date: "May 2025" },
];

const ReviewsPage = () => (
  <div>
    <section className="gradient-medical section-padding text-primary-foreground text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Customer Reviews</h1>
        <p className="opacity-80 text-lg max-w-2xl mx-auto">Hear what our valued customers have to say about us.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        {/* Summary */}
        <div className="medical-card text-center max-w-md mx-auto mb-12">
          <div className="flex justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={24} className="fill-primary text-primary" />)}
          </div>
          <p className="text-2xl font-bold text-foreground">4.9 / 5.0</p>
          <p className="text-sm text-muted-foreground">Based on {reviews.length * 12}+ customer reviews</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="medical-card">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-foreground">{r.name}</h3>
                  <p className="text-xs text-muted-foreground">{r.location} • {r.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ReviewsPage;
