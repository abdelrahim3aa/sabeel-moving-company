import { motion } from "framer-motion";
import { Compass, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Truck, Package, Home, Building, Lock } from "lucide-react";

// --- Data Arrays (Kept the same) ---
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

// Enhanced services list with associated icon and Tailwind class for coloring
const services = [
  { label: "نقل أثاث منزلي", icon: Home, colorClass: "text-[--service-home]" },
  { label: "نقل مكاتب وشركات", icon: Building, colorClass: "text-[--service-office]" },
  { label: "تغليف وتعبئة", icon: Package, colorClass: "text-[--service-packing]" },
  { label: "تخزين آمن", icon: Lock, colorClass: "text-[--service-storage]" },
  { label: "نقل بين المدن", icon: Truck, colorClass: "text-accent" }, // Using accent for inter-city
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
];
// --- End Data Arrays ---

// Custom component for a contact item for cleaner rendering
const ContactItem = ({ href, icon: Icon, text, className = "" }) => (
  <a href={href} className={`flex items-center gap-3 text-sm md:text-base text-primary-foreground/70 hover:text-accent transition-colors ${className}`}>
    <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
    <span>{text}</span>
  </a>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4">
        {/* Main Columns Grid (Increased to 5 for Services) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-12">

          {/* Column 1: Brand & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent flex items-center justify-center shadow-gold"> {/* Shadow-gold added */}
                <Compass className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-primary-foreground">سبيل</h3> {/* Extrabold for emphasis */}
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
                  // Enhanced hover effect for social icons
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-all group hover:scale-105"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-base md:text-lg font-bold text-primary-foreground mb-4 md:mb-6 border-b border-accent/30 pb-2">روابط سريعة</h4> {/* Added separator */}
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-primary-foreground/70 hover:text-accent transition-colors relative pr-4 before:content-['•'] before:absolute before:right-0 before:text-accent" // Added bullet point
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services (New Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-base md:text-lg font-bold text-primary-foreground mb-4 md:mb-6 border-b border-accent/30 pb-2">خدماتنا الرئيسية</h4>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a href="#services" className="flex items-center gap-2 text-sm md:text-base text-primary-foreground/70 hover:text-accent transition-colors">
                    <service.icon className={`w-4 h-4 ${service.colorClass}`} /> {/* Icon with service-specific color */}
                    <span>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Cities (Shifted from 3 to 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-base md:text-lg font-bold text-primary-foreground mb-4 md:mb-6 border-b border-accent/30 pb-2">مدن الخدمة</h4>
            <ul className="space-y-2 md:space-y-3 columns-2"> {/* Added columns-2 for better city list layout */}
              {cities.map((city) => (
                <li key={city} className="break-inside-avoid">
                  <span className="text-sm md:text-base text-primary-foreground/70 hover:text-secondary transition-colors relative pr-4 before:content-['•'] before:absolute before:right-0 before:text-secondary">
                    {city}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 5: Contact (Shifted from 4 to 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-base md:text-lg font-bold text-primary-foreground mb-4 md:mb-6 border-b border-accent/30 pb-2">تواصل معنا</h4>
            <div className="space-y-3 md:space-y-4">
              {/* WhatsApp Link - Prominent using custom CSS color */}
              <ContactItem
                href="https://wa.me/966500000000"
                icon={Phone}
                text="966+ 50 000 0000 (WhatsApp)"
                className="bg-whatsapp text-primary-foreground font-semibold rounded-lg p-2 justify-center hover:bg-whatsapp/90 hover:text-primary-foreground"
              />

              <ContactItem
                href="tel:+966500000000"
                icon={Phone}
                text="966+ 50 000 0000"
              />
              <ContactItem
                href="mailto:info@sabeel.sa"
                icon={Mail}
                text="info@sabeel.sa"
              />
              <div className="flex items-start gap-3 text-sm md:text-base text-primary-foreground/70">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 text-accent" />
                <span>جميع مناطق المملكة العربية السعودية</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-primary-foreground/60 text-xs md:text-sm text-center md:text-right">
              © {currentYear} سبيل لنقل الأثاث. جميع الحقوق محفوظة. {/* Dynamic Year */}
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