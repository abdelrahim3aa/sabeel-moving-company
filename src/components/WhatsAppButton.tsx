import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "201015366195";

export const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات نقل الأثاث");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 group touch-feedback"
      aria-label="تواصل عبر واتساب"
    >
      <motion.div
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Pulse rings */}
        <motion.div 
          className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-whatsapp/30"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-whatsapp/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
        
        {/* Main button */}
        <motion.div 
          className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground fill-primary-foreground" />
        </motion.div>
        
        {/* Tooltip */}
        <div className="absolute left-full mr-3 top-1/2 -translate-y-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-card px-4 py-2 rounded-lg shadow-lg border border-border/50 whitespace-nowrap">
            <span className="text-sm font-medium text-foreground">تواصل معنا الآن</span>
          </div>
        </div>
      </motion.div>
    </motion.button>
  );
};
