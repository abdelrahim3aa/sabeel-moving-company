import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "خدماتنا", href: "#services" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "تواصل معنا", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
              <Truck className="w-7 h-7 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">نقل الرياض</span>
              <span className="text-xs text-muted-foreground">خدمات نقل احترافية</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-accent font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+966500000000" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">966+ 50 000 0000</span>
            </a>
            <Button variant="gold" size="lg">
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card/98 backdrop-blur-xl border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-accent font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border/50">
                <Button variant="gold" size="lg" className="w-full">
                  احجز الآن
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
