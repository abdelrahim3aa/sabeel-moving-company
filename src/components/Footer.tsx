import { motion } from "framer-motion";
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "خدماتنا", href: "#services" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "تواصل معنا", href: "#contact" },
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
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-foreground">نقل الرياض</h3>
                <p className="text-xs text-primary-foreground/60">خدمات نقل احترافية</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              نقدم خدمات نقل أثاث احترافية في الرياض منذ أكثر من 15 عاماً. نلتزم بالجودة والأمانة في كل عملية نقل.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground group-hover:text-primary transition-colors" />
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
            <h4 className="text-lg font-bold text-primary-foreground mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
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
            <h4 className="text-lg font-bold text-primary-foreground mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70">{service}</span>
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
            <h4 className="text-lg font-bold text-primary-foreground mb-6">تواصل معنا</h4>
            <div className="space-y-4">
              <a href="tel:+966500000000" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                <span>966+ 50 000 0000</span>
              </a>
              <a href="mailto:info@riyadhmoving.sa" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@riyadhmoving.sa</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 نقل الرياض. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
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
