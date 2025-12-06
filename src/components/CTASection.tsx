import { motion } from "framer-motion";
import { Phone, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "201015366195";

export const CTASection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات نقل الأثاث والحصول على عرض سعر");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-40 md:w-64 h-40 md:h-64 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-52 md:w-80 h-52 md:h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4 md:mb-6">
              عرض خاص لفترة محدودة
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary-foreground mb-4 md:mb-6">
              احصل على <span className="text-gradient-gold">خصم 20%</span> على
              <br className="hidden md:block" /> خدمة النقل الأولى
            </h2>
            <p className="text-base md:text-xl text-primary-foreground/80 mb-6 md:mb-10 max-w-2xl mx-auto px-4">
              اتصل بنا الآن واحصل على عرض سعر مجاني مع خصم حصري للعملاء الجدد في جميع مدن المملكة
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
          >
            <a href="tel:+966500000000" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                اتصل الآن
              </Button>
            </a>
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="group w-full sm:w-auto text-sm md:text-base"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              واتساب
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary-foreground/60 text-xs md:text-sm mt-6 md:mt-8"
          >
            * العرض ساري حتى نهاية الشهر الحالي
          </motion.p>
        </div>
      </div>
    </section>
  );
};
