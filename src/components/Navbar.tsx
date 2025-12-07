import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "خدماتنا", href: "#services" },
  { label: "أعمالنا", href: "#gallery" },
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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  
  // Define common class segments
  const linkColorClass = isScrolled 
    ? "text-foreground/80 hover:text-accent" 
    : "text-primary-foreground/90 hover:text-accent";
  const logoTextColor = isScrolled ? "text-foreground" : "text-primary-foreground";
  const logoMutedColor = isScrolled ? "text-muted-foreground" : "text-primary-foreground/70";
  const ctaTextColor = isScrolled ? "text-muted-foreground hover:text-accent" : "text-primary-foreground/80 hover:text-accent";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50 h-16 md:h-18"
          : "bg-gradient-to-b from-primary/80 via-primary/40 to-transparent backdrop-blur-sm h-20 md:h-24"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <nav className="flex items-center justify-between h-full">
          
          {/* Logo (Centered and Prominent) */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 md:gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
              <Compass className="w-5 h-5 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-extrabold transition-colors ${logoTextColor}`}>
                سبيل
              </span>
              <span className={`text-[10px] md:text-xs transition-colors ${logoMutedColor}`}>
                لنقل الأثاث في السعودية
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation & CTAs Block */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`hidden lg:flex items-center p-3 rounded-full transition-all duration-500 ${
                isScrolled 
                ? "bg-background/80 shadow-lg border border-border/50" 
                : "bg-primary-foreground/10"
            }`}
          >
            {/* Navigation Links */}
            <div className="flex gap-6 xl:gap-8 mx-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors relative group text-sm xl:text-base ${linkColorClass}`}
                  whileHover={{ y: -1 }}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* Separator */}
            <div className={`h-6 w-px mx-2 transition-colors ${isScrolled ? "bg-border" : "bg-primary-foreground/30"}`} />

            {/* CTA Elements */}
            <div className="flex items-center gap-4 ml-2">
                <a 
                    href="tel:+966500000000" 
                    className={`flex items-center gap-2 transition-colors text-sm ${ctaTextColor}`}
                >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium hidden xl:inline">966+ 50 000 0000</span>
                </a>
                <Button variant="gold" size="default">
                    احجز الآن
                </Button>
            </div>
          </motion.div>

          {/* Mobile Menu Button (Right-aligned) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? "text-foreground hover:bg-muted" 
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu (Kept Clean and Animated) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/50 shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={closeMobileMenu}
                  className="text-foreground/80 hover:text-accent font-medium py-3 px-4 rounded-xl hover:bg-muted/50 transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 mt-2 border-t border-border/50 space-y-3">
                <a 
                  href="tel:+966500000000" 
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">966+ 50 000 0000</span>
                </a>
                <Button variant="gold" size="lg" className="w-full" onClick={closeMobileMenu}>
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