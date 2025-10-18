export const InstagramFeed = () => {
  const isArabic = document.documentElement.lang === "ar";
  
  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "تابعنا على إنستغرام" : "Follow Us on Instagram"}
          </h2>
          <p className={`text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "شاهد أحدث وجباتنا اللذيذة"
              : "See our latest delicious meals"}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Instagram Widget Embed Area */}
          <div
            id="instagram-feed-widget"
            className="bg-card rounded-lg p-8 shadow-card animate-fade-in min-h-[400px] flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <p className={`text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic
                  ? "قريباً: معرض صور إنستغرام"
                  : "Coming Soon: Instagram Photo Gallery"}
              </p>
              <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic
                  ? "يمكنك إضافة كود التضمين من SnapWidget أو LightWidget هنا"
                  : "You can add your embed code from SnapWidget or LightWidget here"}
              </p>
              <a
                href="https://instagram.com/saqerfresh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline transition-smooth"
              >
                <span className={isArabic ? "font-tajawal" : ""}>
                  {isArabic ? "زر حسابنا" : "Visit our Instagram"}
                </span>
                <span>→</span>
              </a>
            </div>
          </div>

          <p className={`text-center text-xs text-muted-foreground mt-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "للإضافة: استخدم SnapWidget.com أو LightWidget.com لإنشاء معرض إنستغرام وألصق الكود أعلاه"
              : "To add: Use SnapWidget.com or LightWidget.com to create an Instagram gallery and paste the code above"}
          </p>
        </div>
      </div>
    </section>
  );
};
