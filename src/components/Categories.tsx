import { Link } from "react-router-dom";
import ketoImage from "@/assets/meal-keto.jpg";
import dietImage from "@/assets/meal-diet.jpg";
import veganImage from "@/assets/meal-vegan.jpg";
import proteinImage from "@/assets/meal-protein.jpg";

export const Categories = () => {
  const isArabic = document.documentElement.lang === "ar";

  const categories = [
    {
      title: { en: "Keto", ar: "كيتو" },
      icon: "🥑",
      description: { en: "Low carb, high fat", ar: "منخفض الكربوهيدرات" },
      calories: "300-500 kcal",
      image: ketoImage,
      color: "from-green-500/10 to-green-600/20",
    },
    {
      title: { en: "Diet", ar: "دايت" },
      icon: "🥗",
      description: { en: "Balanced nutrition", ar: "تغذية متوازنة" },
      calories: "400-600 kcal",
      image: dietImage,
      color: "from-blue-500/10 to-blue-600/20",
    },
    {
      title: { en: "Vegan", ar: "نباتي" },
      icon: "🌿",
      description: { en: "Plant-based meals", ar: "وجبات نباتية" },
      calories: "350-550 kcal",
      image: veganImage,
      color: "from-emerald-500/10 to-emerald-600/20",
    },
    {
      title: { en: "High Protein", ar: "عالي البروتين" },
      icon: "🍗",
      description: { en: "Muscle building", ar: "بناء العضلات" },
      calories: "500-700 kcal",
      image: proteinImage,
      color: "from-orange-500/10 to-orange-600/20",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "فئات الوجبات" : "Meal Categories"}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "اختر من بين مجموعة متنوعة من الوجبات المصممة لتناسب أهدافك الصحية"
              : "Choose from a variety of meals designed to match your health goals"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/menu"
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-2xl shadow-card hover:shadow-soft transition-smooth overflow-hidden h-full hover-scale">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={isArabic ? category.title.ar : category.title.en}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color}`} />
                  <div className="absolute top-4 right-4 text-5xl">
                    {category.icon}
                  </div>
                </div>
                
                <div className="p-6 space-y-2">
                  <h3 className={`text-xl font-semibold ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? category.title.ar : category.title.en}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? category.description.ar : category.description.en}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <span>🔥</span>
                    <span>{category.calories}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
