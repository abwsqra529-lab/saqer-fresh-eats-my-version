import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturedMeals } from "@/components/FeaturedMeals";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Menu = () => {
  const isArabic = document.documentElement.lang === "ar";
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", en: "All", ar: "الكل" },
    { id: "keto", en: "Keto", ar: "كيتو" },
    { id: "diet", en: "Diet", ar: "دايت" },
    { id: "vegan", en: "Vegan", ar: "نباتي" },
    { id: "protein", en: "High Protein", ar: "عالي البروتين" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-12 bg-gradient-hero pattern-bg">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "قائمة الوجبات" : "Our Menu"}
          </h1>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "اكتشف مجموعتنا الكاملة من الوجبات الصحية والطازجة"
              : "Discover our complete selection of healthy and fresh meals"}
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={isArabic ? "font-tajawal" : ""}
              >
                {isArabic ? category.ar : category.en}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <FeaturedMeals />
      
      <Footer />
    </div>
  );
};

export default Menu;
