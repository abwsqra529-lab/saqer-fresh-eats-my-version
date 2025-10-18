import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import meal1 from "@/assets/meal-1.jpg";
import meal2 from "@/assets/meal-2.jpg";
import meal3 from "@/assets/meal-3.jpg";
import ketoMeal from "@/assets/meal-keto.jpg";
import dietMeal from "@/assets/meal-diet.jpg";
import veganMeal from "@/assets/meal-vegan.jpg";

export const FeaturedMeals = () => {
  const isArabic = document.documentElement.lang === "ar";

  const meals = [
    {
      id: 1,
      name: { en: "Grilled Shrimp Bowl", ar: "وعاء الروبيان المشوي" },
      image: meal1,
      calories: 420,
      protein: 35,
      carbs: 42,
      fats: 12,
      price: 45,
      badge: { en: "High Protein", ar: "عالي البروتين" },
    },
    {
      id: 2,
      name: { en: "Mediterranean Chicken", ar: "دجاج متوسطي" },
      image: meal2,
      calories: 480,
      protein: 40,
      carbs: 38,
      fats: 15,
      price: 42,
      badge: { en: "Balanced", ar: "متوازن" },
    },
    {
      id: 3,
      name: { en: "Beef Stir Fry", ar: "لحم بقري مقلي" },
      image: meal3,
      calories: 520,
      protein: 45,
      carbs: 35,
      fats: 18,
      price: 48,
      badge: { en: "High Protein", ar: "عالي البروتين" },
    },
    {
      id: 4,
      name: { en: "Keto Salmon Plate", ar: "صحن سلمون كيتو" },
      image: ketoMeal,
      calories: 380,
      protein: 38,
      carbs: 8,
      fats: 24,
      price: 52,
      badge: { en: "Keto", ar: "كيتو" },
    },
    {
      id: 5,
      name: { en: "Diet Buddha Bowl", ar: "وعاء بوذا دايت" },
      image: dietMeal,
      calories: 390,
      protein: 22,
      carbs: 48,
      fats: 12,
      price: 38,
      badge: { en: "Diet", ar: "دايت" },
    },
    {
      id: 6,
      name: { en: "Vegan Power Bowl", ar: "وعاء القوة النباتي" },
      image: veganMeal,
      calories: 410,
      protein: 18,
      carbs: 52,
      fats: 14,
      price: 36,
      badge: { en: "Vegan", ar: "نباتي" },
    },
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "الوجبات المميزة" : "Featured Meals"}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "وجباتنا الأكثر شعبية، طازجة ومغذية كل يوم"
              : "Our most popular meals, fresh and nutritious every day"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal, index) => (
            <div
              key={meal.id}
              className="bg-card rounded-2xl shadow-card hover:shadow-soft transition-smooth overflow-hidden group hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={meal.image}
                  alt={isArabic ? meal.name.ar : meal.name.en}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                  {isArabic ? meal.badge.ar : meal.badge.en}
                </Badge>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? meal.name.ar : meal.name.en}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>🔥</span>
                    <span>{meal.calories} kcal</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-accent/50 rounded-lg p-2">
                    <div className="text-sm font-semibold text-primary">{meal.protein}g</div>
                    <div className={`text-xs text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "بروتين" : "Protein"}
                    </div>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-2">
                    <div className="text-sm font-semibold text-secondary">{meal.carbs}g</div>
                    <div className={`text-xs text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "كربوهيدرات" : "Carbs"}
                    </div>
                  </div>
                  <div className="bg-accent/50 rounded-lg p-2">
                    <div className="text-sm font-semibold text-warm-orange">{meal.fats}g</div>
                    <div className={`text-xs text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "دهون" : "Fats"}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-2xl font-bold text-primary">
                    {meal.price} {isArabic ? "ريال" : "SAR"}
                  </div>
                  <Button asChild size="sm" className="hover-scale">
                    <Link to={`/meal/${meal.id}`} className={isArabic ? "font-tajawal" : ""}>
                      {isArabic ? "عرض التفاصيل" : "View Details"}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in [animation-delay:600ms]">
          <Button asChild size="lg" variant="outline" className="hover-scale">
            <Link to="/menu" className={isArabic ? "font-tajawal" : ""}>
              {isArabic ? "عرض جميع الوجبات" : "View All Meals"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
