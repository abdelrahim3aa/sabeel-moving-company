import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Shield, Clock, Award, Truck, Users, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

import heroBg from "@/assets/hero-bg.jpg";
import slidePacking from "@/assets/slide-packing.jpg";
import slideOffice from "@/assets/slide-office.jpg";
import slideStorage from "@/assets/slide-storage.jpg";

const slides = [
  {
    id: 1,
    image: heroBg,
    badge: "الأفضل في المملكة العربية السعودية",
    title: "نقل أثاث احترافي",
    subtitle: "في جميع أنحاء المملكة",
    description: "خدمة نقل أثاث شاملة وآمنة في جميع مدن السعودية. الرياض، جدة، مكة، المدينة، الدمام وجميع المناطق.",
  },
  {
    id: 2,
    image: slidePacking,
    badge: "تغليف احترافي",
    title: "حماية كاملة",
    subtitle: "لممتلكاتك الثمينة",
    description: "نستخدم أجود مواد التغليف لحماية أثاثك من أي خدوش أو أضرار. تغليف خاص للقطع الهشة والثمينة.",
  },
  {
    id: 3,
    image: slideOffice,
    badge: "نقل الشركات",
    title: "حلول متكاملة",
    subtitle: "للمكاتب والشركات",
    description: "نقدم خدمات نقل متخصصة للشركات مع تقليل فترة التوقف وضمان استمرارية أعمالك.",
  },
  {
    id: 4,
    image: slideStorage,
    badge: "تخزين آمن",
    title: "مستودعات مؤمنة",
    subtitle: "ومكيفة",
    description: "مستودعات حديثة ومكيفة لتخزين أثاثك لأي فترة مع مراقبة على مدار الساعة وتأمين شامل.",
  },
];

const StatCard = ({ icon: Icon, endValue, suffix, label, delay }: {
  icon: any;
  endValue: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const { count, ref } = useCountUp(endValue, 2500);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-center cursor-default group relative overflow-hidden touch-feedback"
    >
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          animate={{ x: ["-200%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
      </div>
      
      <div className="relative z-10">
        <motion.div 
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 md:mb-3 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-accent" />
        </motion.div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary-foreground mb-1">
          <motion.span 
            className="tabular-nums inline-block"
            key={count}
          >
            {count.toLocaleString()}
          </motion.span>
          <span className="text-accent">{suffix}</span>
        </div>
        <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-primary-foreground/70 font-medium leading-tight">{label}</div>
      </div>
    </motion.div>
  );
};

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <motion.img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          
          {/* Animated Overlay Pattern */}
          <motion.div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              background: `hsl(var(--accent) / ${0.2 + Math.random() * 0.3})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Decorative Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.15, 0.35, 0.15],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1], 
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Slider Controls - Mobile Optimized */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-card/20 backdrop-blur-md border border-accent/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-primary transition-all duration-300 group touch-feedback"
        aria-label="الشريحة السابقة"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-card/20 backdrop-blur-md border border-accent/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-primary transition-all duration-300 group touch-feedback"
        aria-label="الشريحة التالية"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* Slide Indicators - Enhanced */}
      <div className="absolute bottom-24 sm:bottom-28 md:bottom-40 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`الانتقال إلى الشريحة ${index + 1}`}
            className={`relative h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-500 touch-feedback ${
              index === currentSlide 
                ? "w-8 sm:w-10 md:w-12 bg-accent shadow-gold" 
                : "w-2 sm:w-2.5 md:w-3 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          >
            {index === currentSlide && (
              <motion.div 
                className="absolute inset-0 bg-accent rounded-full"
                layoutId="activeSlide"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10 pt-16 sm:pt-20 md:pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Rating Badge - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-4"
          >
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
                </motion.div>
              ))}
            </div>
            <span className="text-primary-foreground/70 text-xs sm:text-sm">4.9 من 5 - أكثر من 10,000 تقييم</span>
          </motion.div>

          {/* Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${slide.id}`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 mb-4 sm:mb-6 md:mb-8"
            >
              <motion.div
                className="flex items-center gap-1"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              </motion.div>
              <span className="text-accent font-semibold text-[10px] sm:text-xs md:text-sm">{slide.badge}</span>
            </motion.div>
          </AnimatePresence>

          {/* Main Heading - Enhanced Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary-foreground leading-tight mb-1 sm:mb-2">
                {slide.title}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gradient-gold mb-3 sm:mb-4 md:mb-6">
                {slide.subtitle}
              </h2>
            </motion.div>
          </AnimatePresence>

          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${slide.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed px-2 sm:px-4"
            >
              {slide.description}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons - Enhanced Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4"
          >
            <motion.a 
              href="#contact" 
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="lg" className="w-full sm:w-auto group text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 btn-hover-effect touch-feedback">
                <span>احصل على عرض سعر مجاني</span>
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </Button>
            </motion.a>
            <motion.a 
              href="#services" 
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 touch-feedback">
                تعرف على خدماتنا
              </Button>
            </motion.a>
          </motion.div>

          {/* Stats with Dynamic Counting - Mobile Optimized */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-5 px-1 sm:px-2">
            <StatCard icon={Truck} endValue={10000} suffix="+" label="عملية نقل ناجحة" delay={0.6} />
            <StatCard icon={Award} endValue={15} suffix="+" label="سنة خبرة" delay={0.7} />
            <StatCard icon={Users} endValue={50000} suffix="+" label="عميل راضي" delay={0.8} />
            <StatCard icon={Clock} endValue={24} suffix="/7" label="خدمة متواصلة" delay={0.9} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-accent/50 rounded-full flex justify-center pt-1.5 sm:pt-2"
        >
          <motion.div 
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
