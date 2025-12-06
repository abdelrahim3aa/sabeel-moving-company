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
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="تواصل عبر واتساب"
    >
      <motion.div
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Pulse rings */}
        <div className="absolute inset-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp/30 animate-ping" />
        <div className="absolute inset-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp/20 animate-pulse" />
        
        {/* Main button */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group-hover:scale-110 duration-300">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground fill-primary-foreground" />
        </div>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute left-full mr-3 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <div className="bg-card px-4 py-2 rounded-lg shadow-lg border border-border/50 whitespace-nowrap">
            <span className="text-sm font-medium text-foreground">تواصل معنا الآن</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.button>
  );
};
