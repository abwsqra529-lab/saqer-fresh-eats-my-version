import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "966594813665"; // WhatsApp format: country code + number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[hsl(var(--whatsapp-green))] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};
