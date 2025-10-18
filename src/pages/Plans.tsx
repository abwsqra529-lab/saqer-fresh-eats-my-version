import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";

const Plans = () => {
  const isArabic = document.documentElement.lang === "ar";

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-12 bg-gradient-hero pattern-bg">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "باقات الاشتراك" : "Subscription Plans"}
          </h1>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "اختر الباقة المناسبة لك واستمتع بوجبات صحية يومياً"
              : "Choose the right plan for you and enjoy healthy meals every day"}
          </p>
        </div>
      </section>

      <SubscriptionPlans />

      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className={`text-3xl font-bold ${isArabic ? "font-tajawal" : ""}`}>
              {isArabic ? "لماذا تختار باقاتنا؟" : "Why Choose Our Plans?"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-card rounded-xl p-6 shadow-card">
                <div className="text-4xl mb-3">🚚</div>
                <h3 className={`font-semibold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "توصيل مجاني" : "Free Delivery"}
                </h3>
                <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic
                    ? "نوصل لبابك بدون رسوم إضافية"
                    : "Delivered to your door with no extra fees"}
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <div className="text-4xl mb-3">🔢</div>
                <h3 className={`font-semibold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "تتبع السعرات" : "Calorie Tracking"}
                </h3>
                <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic
                    ? "راقب أهدافك الغذائية بسهولة"
                    : "Track your nutrition goals with ease"}
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <div className="text-4xl mb-3">🥦</div>
                <h3 className={`font-semibold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "تخصيص كامل" : "Full Customization"}
                </h3>
                <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic
                    ? "عدّل وجباتك حسب تفضيلاتك"
                    : "Customize meals to your preferences"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plans;
