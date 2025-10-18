import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const BookingForm = () => {
  const isArabic = document.documentElement.lang === "ar";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: isArabic ? "شكراً لك!" : "Thank you!",
        description: isArabic
          ? "سنتواصل معك قريباً"
          : "We'll contact you soon.",
      });
      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-card animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
              {isArabic ? "احجز طاولة أو تواصل معنا" : "Book a Table or Contact Us"}
            </h2>
            <p className={`text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
              {isArabic
                ? "املأ النموذج أدناه وسنتواصل معك في أقرب وقت"
                : "Fill out the form below and we'll get back to you soon"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-card">
            <div className="space-y-2">
              <Label htmlFor="name" className={isArabic ? "font-tajawal" : ""}>
                {isArabic ? "الاسم" : "Name"}
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className={isArabic ? "font-tajawal text-right" : ""}
                placeholder={isArabic ? "أدخل اسمك" : "Enter your name"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className={isArabic ? "font-tajawal" : ""}>
                {isArabic ? "رقم الجوال" : "Phone Number"}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder={isArabic ? "أدخل رقم الجوال" : "Enter your phone number"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className={isArabic ? "font-tajawal" : ""}>
                {isArabic ? "الرسالة أو تفاصيل الحجز" : "Message or Reservation Details"}
              </Label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className={`flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                  isArabic ? "font-tajawal text-right" : ""
                }`}
                placeholder={isArabic ? "أخبرنا عن احتياجاتك..." : "Tell us about your needs..."}
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[hsl(var(--order-green))] hover:bg-[hsl(var(--order-green))]/90 text-white font-bold py-6 text-lg"
            >
              {isSubmitting
                ? isArabic
                  ? "جاري الإرسال..."
                  : "Sending..."
                : isArabic
                ? "إرسال"
                : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
