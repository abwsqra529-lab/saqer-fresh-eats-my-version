import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const SubscriptionPlans = () => {
  const isArabic = document.documentElement.lang === "ar";

  const plans = [
    {
      name: { en: "Weekly Plan", ar: "الباقة الأسبوعية" },
      price: 280,
      duration: { en: "per week", ar: "في الأسبوع" },
      features: [
        { en: "5 meals per week", ar: "5 وجبات أسبوعياً" },
        { en: "Free delivery 🚚", ar: "توصيل مجاني 🚚" },
        { en: "Calorie tracking 🔢", ar: "تتبع السعرات 🔢" },
        { en: "Cancel anytime", ar: "إلغاء في أي وقت" },
      ],
      popular: false,
    },
    {
      name: { en: "Monthly Plan", ar: "الباقة الشهرية" },
      price: 950,
      duration: { en: "per month", ar: "في الشهر" },
      features: [
        { en: "20 meals per month", ar: "20 وجبة شهرياً" },
        { en: "Free delivery 🚚", ar: "توصيل مجاني 🚚" },
        { en: "Calorie tracking 🔢", ar: "تتبع السعرات 🔢" },
        { en: "Full customization 🥦", ar: "تخصيص كامل 🥦" },
        { en: "Nutrition consultation", ar: "استشارة غذائية" },
      ],
      popular: true,
    },
    {
      name: { en: "Custom Plan", ar: "الباقة المخصصة" },
      price: null,
      duration: { en: "flexible", ar: "مرنة" },
      features: [
        { en: "Choose your meals", ar: "اختر وجباتك" },
        { en: "Flexible schedule", ar: "جدول مرن" },
        { en: "Free delivery 🚚", ar: "توصيل مجاني 🚚" },
        { en: "Calorie tracking 🔢", ar: "تتبع السعرات 🔢" },
        { en: "Full customization 🥦", ar: "تخصيص كامل 🥦" },
        { en: "Priority support", ar: "دعم أولوية" },
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "اشترك في باقاتنا الصحية" : "Subscribe to Our Meal Plans"}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "اختر الباقة التي تناسب احتياجاتك وأهدافك الصحية"
              : "Choose the plan that fits your needs and health goals"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl shadow-card hover:shadow-soft transition-smooth p-8 hover-scale animate-fade-in ${
                plan.popular ? "border-2 border-primary" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className={`bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? "الأكثر شعبية" : "Most Popular"}
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? plan.name.ar : plan.name.en}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  {plan.price ? (
                    <>
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className={`text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                        {isArabic ? "ريال" : "SAR"}
                      </span>
                    </>
                  ) : (
                    <span className={`text-3xl font-bold text-primary ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "مخصص" : "Custom"}
                    </span>
                  )}
                </div>
                <p className={`text-sm text-muted-foreground mt-1 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? plan.duration.ar : plan.duration.en}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? feature.ar : feature.en}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full hover-scale ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                <span className={isArabic ? "font-tajawal" : ""}>
                  {isArabic ? "اشترك الآن" : "Subscribe Now"}
                </span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
