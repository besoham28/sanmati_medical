import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Clock, MapPin, ChevronDown } from "lucide-react";
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
                <button className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted ${location.pathname.startsWith("/products") || location.pathname.startsWith("/categories") || location.pathname.startsWith("/health-products") ? "text-primary bg-muted" : "text-foreground"}`}>
                  {link.label} <ChevronDown size={14} />
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
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted ${location.pathname === link.path ? "text-primary bg-muted" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            )
          )}
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
              <Link key={link.path} to={link.path} className={`block px-3 py-2 text-sm rounded-md ${location.pathname === link.path ? "text-primary bg-muted font-medium" : "text-foreground hover:bg-muted"}`} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
