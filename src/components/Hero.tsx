import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-meal.jpg";

export const Hero = () => {
  const isArabic = document.documentElement.lang === "ar";

  return (
    <section className="relative min-h-[600px] bg-gradient-hero pattern-bg overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left animate-fade-in">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${isArabic ? "font-tajawal" : ""}`}>
              <span className="text-primary">
                {isArabic ? "وجبات صحية" : "Healthy Meals"}
              </span>
              <br />
              <span className="text-foreground">
                {isArabic ? "بطابع سعودي" : "Inspired by Saudi"}
              </span>
              <br />
              <span className="text-secondary">
                {isArabic ? "من أحمد صقر" : "Wellness"}
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 ${isArabic ? "font-tajawal" : ""}`}>
              {isArabic
                ? "اكتشف تشكيلة واسعة من الوجبات الصحية المتوازنة، المصممة خصيصاً لنمط حياتك النشط"
                : "Discover a wide range of balanced healthy meals, specially designed for your active lifestyle"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in [animation-delay:300ms]">
              <Button
                asChild
                variant="order"
                size="lg"
                className="text-lg px-8"
              >
                <Link to="/menu" className={`flex items-center gap-2 ${isArabic ? "font-tajawal" : ""}`}>
                  <span className="flex flex-col items-start">
                    <span>{isArabic ? "اطلب الآن" : "Order Now"}</span>
                    {isArabic && <span className="text-xs font-normal">قائمة الطلبات</span>}
                  </span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 border-2 hover-scale"
              >
                <Link to="/menu" className={isArabic ? "font-tajawal" : ""}>
                  {isArabic ? "عرض القائمة" : "View Menu"}
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "وجبة صحية" : "Healthy Meals"}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-secondary">5K+</div>
                <div className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "عميل سعيد" : "Happy Customers"}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "رضا العملاء" : "Satisfaction"}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src={heroImage}
                alt="Healthy meals"
                className="w-full h-auto object-cover hover-scale"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-soft p-4 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="text-4xl">🥗</div>
                <div>
                  <div className={`font-semibold ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? "طازج يومياً" : "Fresh Daily"}
                  </div>
                  <div className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? "من مطبخنا إلى بابك" : "From our kitchen"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
