import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Globe } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const location = useLocation();

  const navItems = [
    { en: "Home", ar: "الرئيسية", path: "/" },
    { en: "Menu", ar: "القائمة", path: "/menu" },
    { en: "Plans", ar: "الباقات", path: "/plans" },
    { en: "About", ar: "من نحن", path: "/about" },
    { en: "Contact", ar: "تواصل معنا", path: "/contact" },
  ];

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    document.documentElement.dir = !isArabic ? "rtl" : "ltr";
    document.documentElement.lang = !isArabic ? "ar" : "en";
  };

  return (
    <nav className="sticky top-0 z-50 bg-card shadow-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-primary">Ahmed Saqer</span>
              {isArabic && <span className="text-primary mr-2">أحمد صقر</span>}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                } ${isArabic ? "font-tajawal" : ""}`}
              >
                {isArabic ? item.ar : item.en}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="transition-smooth"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Link to="/menu">
              <Button variant="order" size="lg">
                {isArabic ? "اطلب الآن" : "Order Now"}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    location.pathname === item.path ? "text-primary" : "text-foreground"
                  } ${isArabic ? "font-tajawal" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {isArabic ? item.ar : item.en}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {isArabic ? "English" : "العربية"}
                </Button>
                <Link to="/menu" onClick={() => setIsOpen(false)}>
                  <Button variant="order" size="sm">
                    {isArabic ? "اطلب الآن" : "Order Now"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
