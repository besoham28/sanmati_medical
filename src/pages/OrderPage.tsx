import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ShoppingCart, Phone } from "lucide-react";

const OrderPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", address: "", medicines: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order request submitted! We'll contact you shortly to confirm.");
    setForm({ name: "", phone: "", address: "", medicines: "" });
  };

  return (
    <div>
      <section className="gradient-medical section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Order Medicine</h1>
          <p className="opacity-80 text-lg max-w-2xl mx-auto">Send us your medicine list and we'll arrange delivery or pickup.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <div className="medical-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-medical flex items-center justify-center">
                <ShoppingCart size={22} className="text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground">Medicine Order Form</h2>
                <p className="text-sm text-muted-foreground">Fill in your details and medicine list below</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                  <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Delivery Address</label>
                <Input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Your address in Bhose (optional for pickup)" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Medicine List *</label>
                <Textarea value={form.medicines} onChange={(e) => setForm({ ...form, medicines: e.target.value })} required placeholder="List the medicines you need, one per line. Include dosage if known." rows={6} />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full">Submit Order Request</Button>
            </form>

            <div className="mt-6 p-4 rounded-xl bg-muted/50 flex items-start gap-3">
              <Phone size={18} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">Prefer to order by WhatsApp? Message us at <a href="https://wa.me/919975176097" target="_blank" rel="noopener noreferrer" className="text-primary font-medium">+91 99751 76097</a> or call us.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
