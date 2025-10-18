import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { trackViewItem, trackAddToCart } from "@/lib/analytics";
import { useToast } from "@/hooks/use-toast";
import meal1 from "@/assets/meal-1.jpg";

const MealDetails = () => {
  const { id } = useParams();
  const isArabic = document.documentElement.lang === "ar";
  const { toast } = useToast();

  // Mock data - in a real app, this would be fetched based on the id
  const meal = {
    id: 1,
    name: { en: "Grilled Shrimp Bowl", ar: "وعاء الروبيان المشوي" },
    image: meal1,
    description: {
      en: "A healthy and satisfying meal, rich in protein and perfect for an active lifestyle. Fresh grilled shrimp served with quinoa, roasted vegetables, and a light lemon herb dressing.",
      ar: "وجبة صحية مشبعة، غنية بالبروتين ومناسبة لنمط الحياة النشط. روبيان مشوي طازج يقدم مع الكينوا والخضار المشوية وصلصة الليمون والأعشاب الخفيفة.",
    },
    calories: 420,
    protein: 35,
    carbs: 42,
    fats: 12,
    price: 45,
    badge: { en: "High Protein", ar: "عالي البروتين" },
    allergens: { en: "Shellfish", ar: "محار" },
    ingredients: [
      { en: "Fresh Shrimp", ar: "روبيان طازج", icon: "🦐" },
      { en: "Quinoa", ar: "كينوا", icon: "🌾" },
      { en: "Mixed Vegetables", ar: "خضار مشكلة", icon: "🥦" },
      { en: "Olive Oil", ar: "زيت زيتون", icon: "🫒" },
      { en: "Lemon", ar: "ليمون", icon: "🍋" },
      { en: "Fresh Herbs", ar: "أعشاب طازجة", icon: "🌿" },
    ],
  };

  useEffect(() => {
    trackViewItem({
      id: meal.id.toString(),
      name: isArabic ? meal.name.ar : meal.name.en,
      price: meal.price,
      category: isArabic ? meal.badge.ar : meal.badge.en,
    });
  }, [id]);

  const handleAddToCart = () => {
    trackAddToCart({
      id: meal.id.toString(),
      name: isArabic ? meal.name.ar : meal.name.en,
      price: meal.price,
      category: isArabic ? meal.badge.ar : meal.badge.en,
    });
    
    toast({
      title: isArabic ? "تمت الإضافة للسلة" : "Added to Cart",
      description: isArabic
        ? "تم إضافة الوجبة إلى سلة التسوق"
        : "Meal has been added to your cart",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/menu" className={`flex items-center gap-2 ${isArabic ? "font-tajawal" : ""}`}>
              <ArrowLeft className="h-4 w-4" />
              {isArabic ? "العودة للقائمة" : "Back to Menu"}
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-soft animate-fade-in">
              <img
                src={meal.image}
                alt={isArabic ? meal.name.ar : meal.name.en}
                className="w-full h-full object-cover hover-scale"
              />
              <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                {isArabic ? meal.badge.ar : meal.badge.en}
              </Badge>
            </div>

            {/* Details */}
            <div className="space-y-6 animate-fade-in [animation-delay:200ms]">
              <div>
                <h1 className={`text-4xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? meal.name.ar : meal.name.en}
                </h1>
                <p className={`text-lg text-muted-foreground leading-relaxed ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? meal.description.ar : meal.description.en}
                </p>
              </div>

              {/* Nutrition Info */}
              <div className="bg-accent/30 rounded-xl p-6">
                <h3 className={`text-lg font-semibold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "المعلومات الغذائية" : "Nutrition Information"}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">🔥 {meal.calories}</div>
                    <div className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "سعرة" : "Calories"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{meal.protein}g</div>
                    <div className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "بروتين" : "Protein"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">{meal.carbs}g</div>
                    <div className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "كربوهيدرات" : "Carbs"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-warm-orange mb-1">{meal.fats}g</div>
                    <div className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                      {isArabic ? "دهون" : "Fats"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "المكونات" : "Ingredients"}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {meal.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-card rounded-lg p-3 shadow-card"
                    >
                      <span className="text-2xl">{ingredient.icon}</span>
                      <span className={`text-sm ${isArabic ? "font-tajawal" : ""}`}>
                        {isArabic ? ingredient.ar : ingredient.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Allergens */}
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic ? "المواد المسببة للحساسية" : "Allergens"}
                </h3>
                <Badge variant="outline">
                  {isArabic ? meal.allergens.ar : meal.allergens.en}
                </Badge>
              </div>

              {/* Price and Add to Cart */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="text-3xl font-bold text-primary">
                  {meal.price} {isArabic ? "ريال" : "SAR"}
                </div>
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 hover-scale"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className={`h-5 w-5 ${isArabic ? "ml-2" : "mr-2"}`} />
                  <span className={isArabic ? "font-tajawal" : ""}>
                    {isArabic ? "أضف للسلة" : "Add to Cart"}
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Meals */}
          <div className="mt-20">
            <h2 className={`text-3xl font-bold mb-8 ${isArabic ? "font-tajawal" : ""}`}>
              {isArabic ? "قد يعجبك أيضاً" : "You May Also Like"}
            </h2>
            {/* This would show related meals - for now just a placeholder */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MealDetails;
