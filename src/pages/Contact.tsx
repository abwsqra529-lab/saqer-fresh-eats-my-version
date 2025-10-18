import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const isArabic = document.documentElement.lang === "ar";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-12 bg-gradient-hero pattern-bg">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "تواصل معنا" : "Contact Us"}
          </h1>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "نحن هنا للإجابة على أسئلتك ومساعدتك"
              : "We're here to answer your questions and help you"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "معلومات التواصل" : "Contact Information"}
                </h2>
                <p className={`text-muted-foreground mb-8 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic
                    ? "تواصل معنا عبر أي من الطرق التالية وسنكون سعداء بخدمتك"
                    : "Contact us through any of the following methods and we'll be happy to serve you"}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "الهاتف" : "Phone"}
                    </h3>
                    <p className="text-muted-foreground">0594813665</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "البريد الإلكتروني" : "Email"}
                    </h3>
                    <p className="text-muted-foreground">abwsqra529@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "العنوان" : "Address"}
                    </h3>
                    <p className={`text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "واتساب" : "WhatsApp"}
                    </h3>
                    <Button variant="link" className="p-0 h-auto text-muted-foreground">
                      {isArabic ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-accent/30 rounded-xl p-6">
                <h3 className={`font-semibold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "ساعات العمل" : "Working Hours"}
                </h3>
                <p className={`text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "السبت - الخميس: 8:00 صباحاً - 10:00 مساءً" : "Saturday - Thursday: 8:00 AM - 10:00 PM"}
                </p>
                <p className={`text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "الجمعة: 2:00 مساءً - 10:00 مساءً" : "Friday: 2:00 PM - 10:00 PM"}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-card p-8">
              <h2 className={`text-2xl font-bold mb-6 ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic ? "أرسل لنا رسالة" : "Send Us a Message"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? "الاسم" : "Name"}
                  </label>
                  <Input
                    type="text"
                    placeholder={isArabic ? "اسمك الكامل" : "Your full name"}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? "البريد الإلكتروني" : "Email"}
                  </label>
                  <Input
                    type="email"
                    placeholder={isArabic ? "بريدك الإلكتروني" : "Your email"}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? "رقم الهاتف" : "Phone Number"}
                  </label>
                  <Input
                    type="tel"
                    placeholder={isArabic ? "رقم هاتفك" : "Your phone number"}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? "الرسالة" : "Message"}
                  </label>
                  <Textarea
                    placeholder={isArabic ? "اكتب رسالتك هنا..." : "Write your message here..."}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <span className={isArabic ? "font-tajawal" : ""}>
                    {isArabic ? "إرسال الرسالة" : "Send Message"}
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
