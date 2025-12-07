import { motion } from "framer-motion";
import { Compass, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Truck, Package, Home, Building, Lock, ArrowUp, Sparkles, Shield, Clock, Star, Heart, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "خدماتنا", href: "#services" },
  { label: "أعمالنا", href: "#gallery" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "تواصل معنا", href: "#contact" },
];

const mainCities = [
  { name: "الرياض", slug: "riyadh" },
  { name: "جدة", slug: "jeddah" },
  { name: "مكة المكرمة", slug: "makkah" },
  { name: "المدينة المنورة", slug: "madinah" },
  { name: "الدمام", slug: "dammam" },
  { name: "الخبر", slug: "khobar" },
  { name: "الطائف", slug: "taif" },
  { name: "تبوك", slug: "tabuk" },
  { name: "أبها", slug: "abha" },
  { name: "القصيم", slug: "qassim" },
];

const services = [
  { label: "نقل أثاث منزلي", icon: Home, href: "/services/home-moving" },
  { label: "نقل مكاتب وشركات", icon: Building, href: "/services/office-moving" },
  { label: "تغليف وتعبئة", icon: Package, href: "/services/packing" },
  { label: "تخزين آمن", icon: Lock, href: "/services/storage" },
  { label: "نقل بين المدن", icon: Truck, href: "#services" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Youtube, href: "#", label: "Youtube", color: "hover:bg-red-600" },
];

const features = [
  { icon: Shield, label: "ضمان شامل" },
  { icon: Truck, label: "شحن سريع" },
  { icon: Clock, label: "24/7 متاح" },
];

const stats = [
  { icon: Award, value: 15, suffix: "+", label: "سنة خبرة" },
  { icon: Truck, value: 50000, suffix: "+", label: "عملية نقل" },
  { icon: Star, value: 4.9, suffix: "", label: "تقييم العملاء", decimals: 1 },
  { icon: Heart, value: 99, suffix: "%", label: "رضا العملاء" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const years = useCountUp(15, 2000);
  const moves = useCountUp(50000, 2500);
  const rating = useCountUp(49, 1500);
  const satisfaction = useCountUp(99, 2000);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-primary via-primary to-primary/95 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
        {/* Animated particles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent/30 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-3 h-3 bg-secondary/30 rounded-full"
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Stats Section */}
      <div className="relative border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
          >
            <div className="text-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center border border-accent/20"
              >
                <Award className="w-8 h-8 text-accent" />
              </motion.div>
              <div ref={years.ref} className="text-3xl md:text-4xl font-black text-accent mb-1">
                {years.count}+
              </div>
              <p className="text-primary-foreground/70 text-sm">سنة خبرة</p>
            </div>
            <div className="text-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center border border-secondary/20"
              >
                <Truck className="w-8 h-8 text-secondary" />
              </motion.div>
              <div ref={moves.ref} className="text-3xl md:text-4xl font-black text-secondary mb-1">
                {moves.count.toLocaleString()}+
              </div>
              <p className="text-primary-foreground/70 text-sm">عملية نقل ناجحة</p>
            </div>
            <div className="text-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center border border-accent/20"
              >
                <Star className="w-8 h-8 text-accent" />
              </motion.div>
              <div ref={rating.ref} className="text-3xl md:text-4xl font-black text-accent mb-1">
                {(rating.count / 10).toFixed(1)}
              </div>
              <p className="text-primary-foreground/70 text-sm">تقييم العملاء</p>
            </div>
            <div className="text-center group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center border border-secondary/20"
              >
                <Heart className="w-8 h-8 text-secondary" />
              </motion.div>
              <div ref={satisfaction.ref} className="text-3xl md:text-4xl font-black text-secondary mb-1">
                {satisfaction.count}%
              </div>
              <p className="text-primary-foreground/70 text-sm">رضا العملاء</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pre-Footer CTA */}
      <div className="relative border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
          >
            <div className="text-center md:text-right">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                جاهز لنقل أثاثك؟
              </h3>
              <p className="text-primary-foreground/70 text-sm md:text-base">
                احصل على عرض سعر مجاني الآن واستمتع بخصم 20%
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="gold" size="lg" className="shadow-gold">
                <Sparkles className="w-5 h-5 ml-2" />
                احصل على عرض سعر
              </Button>
              <a href="https://wa.me/201015366195" target="_blank" rel="noopener noreferrer">
                <Button variant="heroOutline" size="lg" className="w-full">
                  <Phone className="w-5 h-5 ml-2" />
                  تواصل واتساب
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8"
          >
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-2 text-primary-foreground/70">
                <feature.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 pt-12 md:pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 mb-12">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-3 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <Compass className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-primary-foreground">سبيل</h3>
                <p className="text-xs text-accent font-medium">نقل أثاث في كل السعودية</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              نقدم خدمات نقل أثاث احترافية في جميع أنحاء المملكة العربية السعودية منذ أكثر من 15 عاماً بأعلى معايير الجودة والأمان.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center transition-all group ${social.color}`}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-base font-bold text-primary-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-base font-bold text-primary-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded-full" />
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <service.icon className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-base font-bold text-primary-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              مدن الخدمة
            </h4>
            <ul className="space-y-2">
              {mainCities.slice(0, 6).map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/city/${city.slug}`}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <MapPin className="w-3 h-3 text-accent/50 group-hover:text-accent transition-colors" />
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-xs text-accent/80">+ جميع مدن المملكة</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-base font-bold text-primary-foreground mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded-full" />
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/201015366195"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-whatsapp/20 hover:bg-whatsapp/30 transition-colors group"
              >
                <Phone className="w-5 h-5 text-whatsapp" />
                <span className="text-sm font-semibold text-primary-foreground">WhatsApp</span>
              </a>

              <a href="tel:+966500000000" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span>966+ 50 000 0000</span>
              </a>
              <a href="mailto:info@sabeel.sa" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@sabeel.sa</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>جميع مناطق المملكة العربية السعودية</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-xs md:text-sm text-center md:text-right">
              © {currentYear} سبيل لنقل الأثاث. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-xs">
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  سياسة الخصوصية
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                  الشروط والأحكام
                </a>
              </div>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
              >
                <ArrowUp className="w-5 h-5 text-accent" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};