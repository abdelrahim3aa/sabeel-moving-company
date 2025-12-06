import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Shield, Clock, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const stats = [
  { icon: Truck, value: "10,000+", label: "عملية نقل ناجحة" },
  { icon: Award, value: "15+", label: "سنة خبرة" },
  { icon: Shield, value: "100%", label: "ضمان السلامة" },
  { icon: Clock, value: "24/7", label: "خدمة متواصلة" },
];

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
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements - Hidden on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-card/20 backdrop-blur-md border border-border/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-primary transition-all duration-300 group"
        aria-label="الشريحة السابقة"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-card/20 backdrop-blur-md border border-border/30 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-primary transition-all duration-300 group"
        aria-label="الشريحة التالية"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 md:bottom-40 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`الانتقال إلى الشريحة ${index + 1}`}
            className={`relative h-2 rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-8 md:w-10 bg-accent" : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 rounded-full bg-accent"
                layoutId="activeSlide"
              />
            )}
          </button>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16 md:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${slide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 md:px-6 py-1.5 md:py-2 mb-4 md:mb-8"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-medium text-xs md:text-sm">{slide.badge}</span>
            </motion.div>
          </AnimatePresence>

          {/* Main Heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight mb-2">
                {slide.title}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-4 md:mb-6">
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
              className="text-sm sm:text-base md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed px-4"
            >
              {slide.description}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-16 px-4"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto group text-sm md:text-base">
                احصل على عرض سعر مجاني
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm md:text-base">
                تعرف على خدماتنا
              </Button>
            </a>
          </motion.div>

          {/* Stats - Responsive grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 px-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card rounded-xl md:rounded-2xl p-3 md:p-5 text-center cursor-default"
              >
                <div className="w-9 h-9 md:w-11 md:h-11 mx-auto mb-2 md:mb-3 rounded-lg md:rounded-xl bg-accent/20 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div className="text-lg sm:text-xl md:text-3xl font-bold text-primary-foreground mb-0.5 md:mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
