import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedMeals } from "@/components/FeaturedMeals";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";
import { GoogleMap } from "@/components/GoogleMap";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedMeals />
      <SubscriptionPlans />
      <Testimonials />
      <BookingForm />
      <GoogleMap />
      <InstagramFeed />
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
