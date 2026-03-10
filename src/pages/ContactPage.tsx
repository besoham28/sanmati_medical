import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Visit Us", lines: ["A/P Bhose", "Tal Miraj, Dist Sangli", "Pin 416422"] },
  { icon: Phone, title: "Call Us", lines: ["+91 99751 76097"] },
  { icon: Mail, title: "Email Us", lines: ["info@sanmatimedical.com"] },
  { icon: Clock, title: "Store Hours", lines: ["8:00 AM – 10:00 PM", "Open Every Day"] },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello, new message from website contact form:
*Name:* ${form.name}
*Phone:* ${form.phone}
${form.email ? `*Email:* ${form.email}\n` : ''}
*Message:* ${form.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919975176097?text=${encodedText}`, '_blank');

    toast.success("Redirecting to WhatsApp...");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      <section className="gradient-medical section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
          <p className="opacity-80 text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out with any questions or feedback.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((c) => (
                <div key={c.title} className="medical-card flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-medical flex items-center justify-center shrink-0">
                    <c.icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm">{c.title}</h3>
                    {c.lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
                  </div>
                </div>
              ))}
              <a href="https://wa.me/919975176097" target="_blank" rel="noopener noreferrer" className="medical-card flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg gradient-medical flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                </div>
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="medical-card">
                <h2 className="font-bold text-lg text-foreground mb-4">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                      <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                      <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com (optional)" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                    <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="How can we help you?" rows={5} />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="section-title text-center mb-6">Store Location</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.573176508205!2d74.716357!3d16.9522277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc13bc1ce5a5e8d%3A0xab514d4f554cd340!2sSanmati%20Medicals!5e0!3m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sanmati Medical Store Location - Bhose, Maharashtra"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
