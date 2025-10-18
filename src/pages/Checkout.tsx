import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { trackBeginCheckout, trackPurchase } from "@/lib/analytics";

const Checkout = () => {
  const isArabic = document.documentElement.lang === "ar";
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const cartTotal = 150; // Mock cart total
  const cartItems = [
    { id: "1", name: "Grilled Chicken Salad", price: 75, quantity: 2 },
  ];

  // Track checkout initiation
  useState(() => {
    trackBeginCheckout(cartTotal, cartItems);
  });

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const orderId = `ORD-${Date.now()}`;
      trackPurchase(orderId, cartTotal, cartItems);
      
      toast({
        title: isArabic ? "تم الدفع بنجاح!" : "Payment Successful!",
        description: isArabic
          ? "شكراً لطلبك. سنقوم بتوصيل وجبتك قريباً."
          : "Thank you for your order. We'll deliver your meal soon.",
      });
      
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-12 bg-gradient-hero pattern-bg">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 animate-fade-in ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic ? "إتمام الطلب" : "Checkout"}
          </h1>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isArabic ? "font-tajawal" : ""}`}>
            {isArabic
              ? "أكمل معلومات الدفع لتأكيد طلبك"
              : "Complete your payment information to confirm your order"}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Order Summary */}
            <div className="bg-card rounded-2xl p-6 shadow-card animate-fade-in">
              <h2 className={`text-2xl font-bold mb-6 ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic ? "ملخص الطلب" : "Order Summary"}
              </h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <div className={`font-medium ${isArabic ? "font-tajawal" : ""}`}>{item.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {isArabic ? "الكمية" : "Quantity"}: {item.quantity}
                      </div>
                    </div>
                    <div className="font-semibold">
                      {item.price} {isArabic ? "ريال" : "SAR"}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span className={isArabic ? "font-tajawal" : ""}>
                    {isArabic ? "المجموع الفرعي" : "Subtotal"}
                  </span>
                  <span>{cartTotal} {isArabic ? "ريال" : "SAR"}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span className={isArabic ? "font-tajawal" : ""}>
                    {isArabic ? "التوصيل" : "Delivery"}
                  </span>
                  <span className="text-green-600">{isArabic ? "مجاناً" : "Free"}</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-3 border-t">
                  <span className={isArabic ? "font-tajawal" : ""}>
                    {isArabic ? "الإجمالي" : "Total"}
                  </span>
                  <span>{cartTotal} {isArabic ? "ريال" : "SAR"}</span>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-card rounded-2xl p-6 shadow-card animate-fade-in [animation-delay:200ms]">
              <h2 className={`text-2xl font-bold mb-6 ${isArabic ? "font-tajawal" : ""}`}>
                {isArabic ? "معلومات الدفع" : "Payment Information"}
              </h2>

              <div className="mb-6 p-4 bg-accent/30 rounded-lg text-center">
                <p className={`text-sm text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic
                    ? "لتفعيل الدفع الإلكتروني، يرجى تمكين النظام الخلفي للموقع"
                    : "To enable online payments, please activate the backend system"}
                </p>
              </div>

              <form onSubmit={handleCheckout} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className={isArabic ? "font-tajawal" : ""}>
                    {isArabic ? "الاسم الكامل" : "Full Name"}
                  </Label>
                  <Input 
                    id="name" 
                    placeholder={isArabic ? "أدخل اسمك الكامل" : "Enter your full name"}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={isArabic ? "font-tajawal" : ""}>
                    {isArabic ? "البريد الإلكتروني" : "Email"}
                  </Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder={isArabic ? "البريد الإلكتروني" : "your@email.com"}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className={isArabic ? "font-tajawal" : ""}>
                    {isArabic ? "رقم الجوال" : "Phone Number"}
                  </Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder={isArabic ? "05XXXXXXXX" : "05XXXXXXXX"}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className={isArabic ? "font-tajawal" : ""}>
                    {isArabic ? "عنوان التوصيل" : "Delivery Address"}
                  </Label>
                  <Input 
                    id="address" 
                    placeholder={isArabic ? "أدخل عنوان التوصيل" : "Enter delivery address"}
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full hover-scale" 
                  size="lg"
                  disabled={isProcessing}
                >
                  <span className={isArabic ? "font-tajawal" : ""}>
                    {isProcessing
                      ? (isArabic ? "جاري المعالجة..." : "Processing...")
                      : (isArabic ? "تأكيد الطلب" : "Confirm Order")
                    }
                  </span>
                </Button>

                <p className={`text-xs text-center text-muted-foreground ${isArabic ? "font-tajawal" : ""}`}>
                  {isArabic
                    ? "جميع المعاملات آمنة ومشفرة"
                    : "All transactions are secure and encrypted"}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
