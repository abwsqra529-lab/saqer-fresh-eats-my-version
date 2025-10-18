export const GoogleMap = () => {
  const isArabic = document.documentElement.lang === "ar";
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "موقعنا" : "Our Location"}
          </h2>
          <p className={`text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "تفضل بزيارتنا" : "Visit us"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-card animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462564.7065148949!2d46.35644324999999!3d24.774265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={isArabic ? "موقع المطعم" : "Restaurant Location"}
          />
        </div>

        <div className="text-center mt-6">
          <p className={`text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
          </p>
        </div>
      </div>
    </section>
  );
};
