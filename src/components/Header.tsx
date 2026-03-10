import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Clock, MapPin, ChevronDown, User } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Products",
    path: "/products",
    children: [
      { label: "Our Products", path: "/products" },
      { label: "Product Categories", path: "/categories" },
      { label: "Health Products", path: "/health-products" },
    ],
  },
  { label: "Services", path: "/services" },
  { label: "Order Medicine", path: "/order" },
  { label: "Upload Prescription", path: "/prescription" },
  { label: "Health Tips", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Marquee Announcement Bar */}
      <div className="bg-primary/10 overflow-hidden whitespace-nowrap py-1.5 flex items-center border-b border-primary/20">
        <div className="animate-marquee flex text-primary font-bold uppercase tracking-wider text-xs flex-none">
          <span className="px-4 shrink-0">• Sanmati Medical Stores • Trusted Pharmacy in Bhose • Genuine Medicines • 8:00 AM to 10:00 PM • Order via WhatsApp</span>
          <span className="px-4 shrink-0">• Sanmati Medical Stores • Trusted Pharmacy in Bhose • Genuine Medicines • 8:00 AM to 10:00 PM • Order via WhatsApp</span>
          <span className="px-4 shrink-0">• Sanmati Medical Stores • Trusted Pharmacy in Bhose • Genuine Medicines • 8:00 AM to 10:00 PM • Order via WhatsApp</span>
          <span className="px-4 shrink-0">• Sanmati Medical Stores • Trusted Pharmacy in Bhose • Genuine Medicines • 8:00 AM to 10:00 PM • Order via WhatsApp</span>
        </div>
      </div>

      {/* Top bar */}
      <div className="gradient-medical">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 text-sm text-primary-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> +91 99751 76097</span>
            <span className="hidden sm:flex items-center gap-1"><Clock size={14} /> 8:00 AM – 10:00 PM</span>
          </div>
          <span className="hidden md:flex items-center gap-1"><MapPin size={14} /> Bhose, Sangli</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Sanmati Medical Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-200 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5`}>
                  {link.label} <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px] animate-fade-in">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-200 mx-0.5 bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/login"
            className="px-3 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-200 mx-0.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-1 ml-2"
          >
            <User size={16} /> Login
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-card border-t border-border px-4 py-4 space-y-1 animate-fade-in">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <span className="block px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{link.label}</span>
                {link.children.map((child) => (
                  <Link key={child.path} to={child.path} className="block px-6 py-2 text-sm text-foreground hover:bg-muted rounded-md" onClick={() => setMobileOpen(false)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2.5 my-1 text-sm rounded-lg font-medium transition-colors bg-primary text-primary-foreground shadow-sm hover:bg-primary/90`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/login"
            className="block px-4 py-2.5 my-1 text-sm rounded-lg font-medium transition-colors bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <User size={16} /> Login / Register
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
