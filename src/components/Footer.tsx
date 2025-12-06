import { motion } from "framer-motion";
import { Compass, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "خدماتنا", href: "#services" },
  { label: "أعمالنا", href: "#gallery" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "تواصل معنا", href: "#contact" },
];

const cities = [
  "الرياض",
  "جدة",
  "مكة المكرمة",
  "المدينة المنورة",
  "الدمام",
  "الخبر",
  "الطائف",
  "تبوك",
];

const services = [
  "نقل أثاث منزلي",
  "نقل مكاتب وشركات",
  "تغليف وتعبئة",
  "تخزين آمن",
  "نقل بين المدن",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent flex items-center justify-center">
                <Compass className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-primary-foreground">سبيل</h3>
                <p className="text-[10px] md:text-xs text-primary-foreground/60">لنقل الأثاث في السعودية</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed mb-4 md:mb-6">
              نقدم خدمات نقل أثاث احترافية في جميع أنحاء المملكة العربية السعودية منذ أكثر من 15 عاماً.
            </p>
            <div className="flex gap-2 md:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground group-hover:text-primary transition-colors" />
                </a>
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
            <h4 className="text-base md:text-lg font-bold text-primary-foreground mb-4 md:mb-6">روابط سريعة</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-base md:text-lg font-bold text-primary-foreground mb-4 md:mb-6">مدن الخدمة</h4>
            <ul className="space-y-2 md:space-y-3">
              {cities.map((city) => (
                <li key={city}>
                  <span className="text-sm md:text-base text-primary-foreground/70">{city}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-base md:text-lg font-bold text-primary-foreground mb-4 md:mb-6">تواصل معنا</h4>
            <div className="space-y-3 md:space-y-4">
              <a href="tel:+966500000000" className="flex items-center gap-3 text-sm md:text-base text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>966+ 50 000 0000</span>
              </a>
              <a href="mailto:info@sabeel.sa" className="flex items-center gap-3 text-sm md:text-base text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span>info@sabeel.sa</span>
              </a>
              <div className="flex items-start gap-3 text-sm md:text-base text-primary-foreground/70">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                <span>جميع مناطق المملكة العربية السعودية</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-primary-foreground/60 text-xs md:text-sm text-center md:text-right">
              © 2024 سبيل لنقل الأثاث. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
