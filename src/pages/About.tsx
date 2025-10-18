import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  const isArabic = document.documentElement.lang === "ar";

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-12 bg-gradient-hero pattern-bg">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "من نحن" : "About Us"}
          </h1>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "قصتنا في تقديم وجبات صحية بطابع سعودي"
              : "Our story of delivering healthy meals with Saudi authenticity"}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">🇸🇦</div>
              <h2 className={`text-3xl font-bold ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic ? "صنع بفخر في السعودية" : "Proudly Made in Saudi Arabia"}
              </h2>
              <p className={`text-lg text-muted-foreground leading-relaxed ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic
                  ? "أحمد صقر هو علامة تجارية سعودية متخصصة في تقديم وجبات صحية متوازنة تناسب نمط الحياة العصري. نؤمن بأن الطعام الصحي لا يجب أن يكون مملاً، بل يمكن أن يكون لذيذاً ومغذياً في آن واحد."
                  : "Ahmed Saqer is a Saudi brand specialized in providing balanced healthy meals that suit the modern lifestyle. We believe that healthy food doesn't have to be boring; it can be delicious and nutritious at the same time."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className={`text-xl font-semibold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "طازج" : "Fresh"}
                </h3>
                <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic
                    ? "مكونات طازجة يومياً من أجود المصادر"
                    : "Daily fresh ingredients from the finest sources"}
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-5xl mb-4">💪</div>
                <h3 className={`text-xl font-semibold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "نشيط" : "Energetic"}
                </h3>
                <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic
                    ? "وجبات مصممة لدعم حياتك النشطة"
                    : "Meals designed to support your active life"}
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className={`text-xl font-semibold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "أصيل" : "Authentic"}
                </h3>
                <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic
                    ? "وصفات بنكهة سعودية أصيلة"
                    : "Recipes with authentic Saudi flavors"}
                </p>
              </div>
            </div>

            <div className="bg-accent/30 rounded-2xl p-8">
              <h3 className={`text-2xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic ? "مهمتنا" : "Our Mission"}
              </h3>
              <p className={`text-lg text-muted-foreground leading-relaxed ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic
                  ? "نسعى لجعل الأكل الصحي متاحاً وسهلاً للجميع في المملكة العربية السعودية. نقدم وجبات متوازنة ومغذية تدعم أهدافك الصحية دون التضحية بالطعم أو الجودة. كل وجبة يتم إعدادها بعناية فائقة لضمان أعلى معايير النظافة والجودة."
                  : "We strive to make healthy eating accessible and easy for everyone in Saudi Arabia. We provide balanced and nutritious meals that support your health goals without sacrificing taste or quality. Each meal is carefully prepared to ensure the highest standards of cleanliness and quality."}
              </p>
            </div>

            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-6 ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic ? "قيمنا" : "Our Values"}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { en: "Quality", ar: "الجودة", icon: "⭐" },
                  { en: "Health", ar: "الصحة", icon: "💚" },
                  { en: "Trust", ar: "الثقة", icon: "🤝" },
                  { en: "Innovation", ar: "الابتكار", icon: "💡" },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl px-6 py-4 shadow-card flex items-center gap-3"
                  >
                    <span className="text-2xl">{value.icon}</span>
                    <span className={`font-semibold ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? value.ar : value.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
