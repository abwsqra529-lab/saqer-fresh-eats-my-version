import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const isArabic = document.documentElement.lang === "ar";

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in-right">
      <div className="bg-card border-t shadow-elegant mx-auto max-w-7xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center md:text-left">
              <h3 className={`font-semibold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic ? "نستخدم ملفات تعريف الارتباط" : "We Use Cookies"}
              </h3>
              <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic
                  ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل استخدام الموقع. يمكنك قبول جميع الملفات أو رفضها."
                  : "We use cookies to improve your experience and analyze site usage. You can accept all cookies or reject them."}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={rejectCookies}
                className="hover-scale"
              >
                <span className={isArabic ? "font-tajawal" : ""}>
                  {isArabic ? "رفض" : "Reject"}
                </span>
              </Button>
              <Button
                size="sm"
                onClick={acceptCookies}
                className="hover-scale"
              >
                <span className={isArabic ? "font-tajawal" : ""}>
                  {isArabic ? "قبول الكل" : "Accept All"}
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={rejectCookies}
                className="hover-scale"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
