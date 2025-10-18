import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

export const Testimonials = () => {
  const isArabic = document.documentElement.lang === "ar";

  const testimonials = [
    {
      name: { en: "Fatima Al-Rashid", ar: "فاطمة الراشد" },
      role: { en: "Fitness Enthusiast", ar: "عاشقة اللياقة" },
      image: testimonial1,
      rating: 5,
      text: {
        en: "The meals are delicious and helped me stick to my diet plan. Ahmed Saqer makes healthy eating easy!",
        ar: "الوجبات لذيذة وساعدتني ألتزم بنظامي الغذائي. أحمد صقر جعل الأكل الصحي سهلاً!",
      },
    },
    {
      name: { en: "Mohammed Al-Otaibi", ar: "محمد العتيبي" },
      role: { en: "Busy Professional", ar: "محترف مشغول" },
      image: testimonial2,
      rating: 5,
      text: {
        en: "Perfect for my busy lifestyle. Fresh ingredients, great portions, and delivery is always on time.",
        ar: "مثالي لنمط حياتي المزدحم. مكونات طازجة، حصص رائعة، والتوصيل دائماً في الوقت المحدد.",
      },
    },
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "ماذا يقول عملاؤنا" : "What Our Customers Say"}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "آراء عملائنا السعداء الذين غيروا نمط حياتهم"
              : "Reviews from our happy customers who transformed their lifestyle"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-card hover:shadow-soft transition-smooth p-8 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={isArabic ? testimonial.name.ar : testimonial.name.en}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className={`font-semibold ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? testimonial.name.ar : testimonial.name.en}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                    {isArabic ? testimonial.role.ar : testimonial.role.en}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className={`text-muted-foreground leading-relaxed ${isArabic ? "font-tajawal text-right" : ""}`}>
                "{isArabic ? testimonial.text.ar : testimonial.text.en}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
