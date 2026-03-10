import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Upload, FileImage, CheckCircle, AlertCircle } from "lucide-react";

const PrescriptionPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", notes: "" });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) { toast.error("Please upload a prescription image."); return; }
    toast.success("Prescription uploaded! We'll review it and contact you within 30 minutes.");
    setForm({ name: "", phone: "", notes: "" });
    setFile(null);
  };

  return (
    <div>
      <section className="gradient-medical section-padding text-primary-foreground text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Upload Prescription</h1>
          <p className="opacity-80 text-lg max-w-2xl mx-auto">Upload a photo of your doctor's prescription and we'll prepare your medicines.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <div className="medical-card">
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

              {/* Upload area */}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Prescription Image *</label>
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-colors">
                  {file ? (
                    <div className="flex items-center gap-2 text-primary">
                      <FileImage size={24} />
                      <span className="font-medium text-sm">{file.name}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-muted-foreground">
                      <Upload size={32} className="mb-2" />
                      <span className="text-sm font-medium">Click to upload prescription</span>
                      <span className="text-xs mt-1">JPG, PNG or PDF (max 5MB)</span>
                    </div>
                  )}
                  <input type="file" className="hidden" accept="image/*,.pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                </label>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Notes</label>
                <Input value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any specific instructions (optional)" />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">Upload Prescription</Button>
            </form>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">We'll verify your prescription and contact you within 30 minutes.</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">You can also WhatsApp your prescription to +91 99751 76097.</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <AlertCircle size={16} className="text-destructive mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Prescription medicines will only be dispensed with a valid doctor's prescription.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrescriptionPage;
