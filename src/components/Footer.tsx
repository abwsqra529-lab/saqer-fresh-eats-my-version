import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Camera, Video } from "lucide-react";

export const Footer = () => {
  const isArabic = document.documentElement.lang === "ar";

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold text-primary ${isArabic ? "font-tajawal" : ""}`}>
              {isArabic ? "أحمد صقر" : "Ahmed Saqer"}
            </h3>
            <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
              {isArabic
                ? "وجبات صحية بطابع سعودي"
                : "Healthy meals inspired by Saudi wellness"}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-2xl">🇸🇦</span>
              <span className={`text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic ? "صنع بفخر في السعودية" : "Proudly made in Saudi Arabia"}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/menu"
                  className={`text-sm text-muted-foreground hover:text-primary transition-smooth ${
                    isArabic ? "font-tajawal" : ""
                  }`}
                >
                  {isArabic ? "القائمة" : "Menu"}
                </Link>
              </li>
              <li>
                <Link
                  to="/plans"
                  className={`text-sm text-muted-foreground hover:text-primary transition-smooth ${
                    isArabic ? "font-tajawal" : ""
                  }`}
                >
                  {isArabic ? "الباقات" : "Plans"}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`text-sm text-muted-foreground hover:text-primary transition-smooth ${
                    isArabic ? "font-tajawal" : ""
                  }`}
                >
                  {isArabic ? "من نحن" : "About"}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`text-sm text-muted-foreground hover:text-primary transition-smooth ${
                    isArabic ? "font-tajawal" : ""
                  }`}
                >
                  {isArabic ? "تواصل معنا" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-semibold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className={isArabic ? "font-tajawal" : ""}>0594813665</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>abwsqra529@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className={isArabic ? "font-tajawal" : ""}>
                  {isArabic ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className={`font-semibold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
              {isArabic ? "تابعنا" : "Follow Us"}
            </h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/saqerfresh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth hover-scale"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://snapchat.com/add/saqerfresh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth hover-scale"
                aria-label="Snapchat"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@saqerfresh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-smooth hover-scale"
                aria-label="TikTok"
              >
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
          <p>
            © 2025 Ahmed Saqer. {isArabic ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};
