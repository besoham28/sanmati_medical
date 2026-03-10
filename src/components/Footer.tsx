import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-heading text-lg font-bold mb-4">Sanmati Medical Stores</h3>
          <p className="text-sm opacity-80 leading-relaxed">Your trusted neighbourhood pharmacy in Bhose, providing genuine medicines and healthcare products since 2007. Licensed and committed to your well-being.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { label: "About Us", path: "/about" },
              { label: "Our Products", path: "/products" },
              { label: "Services", path: "/services" },
              { label: "Order Medicine", path: "/order" },
              { label: "FAQ", path: "/faq" },
              { label: "Contact Us", path: "/contact" },
            ].map((l) => (
              <li key={l.path}><Link to={l.path} className="hover:opacity-100 transition-opacity">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> A/P Bhose, Tal Miraj, Dist Sangli, Pin 416422</li>
            <li className="flex items-center gap-2"><Phone size={16} className="shrink-0" /> +91 99751 76097</li>
            <li className="flex items-center gap-2"><Mail size={16} className="shrink-0" /> info@sanmatimedical.com</li>
            <li className="flex items-center gap-2"><Clock size={16} className="shrink-0" /> 8:00 AM – 10:00 PM (Every Day)</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-heading font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link></li>
            <li><Link to="/reviews" className="hover:opacity-100 transition-opacity">Customer Reviews</Link></li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Instagram size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Sanmati Medical Stores, Bhose. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
