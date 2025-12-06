import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

// Constants for easy adjustment
const SCROLL_THRESHOLD = 60;
const TEL_NUMBER = "+966500000000";
const DISPLAY_PHONE = "966+ 50 000 0000";

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

  // Helper function to get text color based on scroll state
  const getTextColor = (baseColor: string, scrolledColor: string) =>
    isScrolled ? scrolledColor : baseColor;

  // Use useCallback to memoize the toggle function
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Checks against a constant threshold
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-border/50"
          : "bg-gradient-to-b from-primary/80 via-primary/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className="flex items-center justify-between h-16 md:h-20"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 md:gap-3 group"
            whileHover={{ scale: 1.05 }}
            aria-label="سبيل - الصفحة الرئيسية"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold transition-all group-hover:rotate-6">
              <Compass
                className={getTextColor("text-primary-foreground", "text-primary")}
                style={{
                  filter: isScrolled ? "none" : "drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))",
                }}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg md:text-xl font-extrabold transition-colors ${getTextColor(
                  "text-primary-foreground",
                  "text-foreground"
                )}`}
              >
                سبيل
              </span>
              <span
                className={`text-[10px] md:text-xs transition-colors ${getTextColor(
                  "text-primary-foreground/70",
                  "text-muted-foreground"
                )}`}
              >
                لنقل الأثاث في السعودية
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8" role="menubar">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors relative group text-sm xl:text-base p-1 ${getTextColor(
                  "text-primary-foreground/90 hover:text-accent-gold",
                  "text-foreground/80 hover:text-accent-gold"
                )}`}
                whileHover={{ y: -2 }}
                role="menuitem"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button and Phone */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href={`tel:${TEL_NUMBER}`}
              className={`flex items-center gap-2 transition-colors text-sm font-medium rounded-full p-2 ${getTextColor(
                "text-primary-foreground/80 hover:text-accent-gold hover:bg-primary-foreground/10",
                "text-muted-foreground hover:text-accent-gold hover:bg-muted"
              )}`}
              aria-label={`اتصل بنا على ${DISPLAY_PHONE}`}
            >
              <Phone className="w-4 h-4" />
              <span>{DISPLAY_PHONE}</span>
            </a>
            <Button variant="gold" size="default" className="shadow-md hover:shadow-lg transition-shadow">
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${getTextColor(
              "text-primary-foreground hover:bg-primary-foreground/10",
              "text-foreground hover:bg-muted"
            )}`}
            aria-label={isMobileMenuOpen ? "إغلاق قائمة الجوال" : "فتح قائمة الجوال"}
            aria-expanded={isMobileMenuOpen}
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/50 shadow-2xl absolute w-full"
            role="menu"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={toggleMobileMenu}
                  className="text-foreground/80 hover:text-accent-gold font-semibold py-3 px-4 rounded-xl hover:bg-muted/50 transition-all text-base"
                  role="menuitem"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 mt-2 border-t border-border/50 space-y-3">
                <a
                  href={`tel:${TEL_NUMBER}`}
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent-gold transition-colors py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{DISPLAY_PHONE}</span>
                </a>
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

// Note: This code assumes that `variant="gold"` and `text-accent-gold`
// are defined within your component library and Tailwind configuration.    };
    
    // **Enhancement:** Optionally, implement a throttle utility here for performance
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // **Enhancement:** Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smoother transition duration
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${ // Higher z-index for safety
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-2xl border-b border-border/50" // Stronger shadow
          : "bg-gradient-to-b from-primary/80 via-primary/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav 
          className="flex items-center justify-between h-16 md:h-20"
          // **A11Y Enhancement:** aria-label for clear navigation context
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 md:gap-3 group"
            whileHover={{ scale: 1.05 }} // More noticeable hover
            aria-label="سبيل - الصفحة الرئيسية"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold transition-all group-hover:rotate-6">
              <Compass 
                className={getTextColor("text-primary-foreground", "text-primary")} // Icon color adapts
                style={{ filter: isScrolled ? 'none' : 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))' }} // Subtle shadow when not scrolled
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-extrabold transition-colors ${getTextColor("text-primary-foreground", "text-foreground")}`}>
                سبيل
              </span>
              <span className={`text-[10px] md:text-xs transition-colors ${getTextColor("text-primary-foreground/70", "text-muted-foreground")}`}>
                لنقل الأثاث في السعودية
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8" role="menubar">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors relative group text-sm xl:text-base p-1 ${
                  getTextColor("text-primary-foreground/90 hover:text-accent-gold", "text-foreground/80 hover:text-accent-gold")
                }`}
                whileHover={{ y: -2 }}
                role="menuitem"
              >
                {link.label}
                {/* **Enhancement:** Stronger indicator color (assuming accent-gold exists) */}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button and Phone */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a 
              href={`tel:${TEL_NUMBER}`} 
              className={`flex items-center gap-2 transition-colors text-sm font-medium rounded-full p-2 ${
                getTextColor("text-primary-foreground/80 hover:text-accent-gold hover:bg-primary-foreground/10", "text-muted-foreground hover:text-accent-gold hover:bg-muted")
              }`}
              aria-label={`اتصل بنا على ${DISPLAY_PHONE}`}
            >
              <Phone className="w-4 h-4" />
              <span>{DISPLAY_PHONE}</span>
            </a>
            <Button 
              variant="gold" 
              size="default" 
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu} // Using the memoized callback
            className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
              getTextColor("text-primary-foreground hover:bg-primary-foreground/10", "text-foreground hover:bg-muted")
            }`}
            aria-label={isMobileMenuOpen ? "إغلاق قائمة الجوال" : "فتح قائمة الجوال"}
            aria-expanded={isMobileMenuOpen}
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
            transition={{ duration: 0.3 }} // Faster transition
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/50 shadow-2xl absolute w-full"
            role="menu"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }} // Slightly faster stagger
                  onClick={toggleMobileMenu}
                  className="text-foreground/80 hover:text-accent-gold font-semibold py-3 px-4 rounded-xl hover:bg-muted/50 transition-all text-base"
                  role="menuitem"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 mt-2 border-t border-border/50 space-y-3">
                <a 
                  href={`tel:${TEL_NUMBER}`} 
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent-gold transition-colors py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{DISPLAY_PHONE}</span>
                </a>
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

// **Note:** This code assumes that `variant="gold"` and `text-accent-gold` 
// are defined within your component library and Tailwind configuration.
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2 md:gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
              <Compass className="w-5 h-5 md:w-7 md:h-7 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-bold transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                سبيل
              </span>
              <span className={`text-[10px] md:text-xs transition-colors ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
                لنقل الأثاث في السعودية
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors relative group text-sm xl:text-base ${
                  isScrolled 
                    ? "text-foreground/80 hover:text-accent" 
                    : "text-primary-foreground/90 hover:text-accent"
                }`}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a 
              href="tel:+966500000000" 
              className={`flex items-center gap-2 transition-colors text-sm ${
                isScrolled ? "text-muted-foreground hover:text-accent" : "text-primary-foreground/80 hover:text-accent"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">966+ 50 000 0000</span>
            </a>
            <Button variant="gold" size="default">
              احجز الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
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
                  onClick={() => setIsMobileMenuOpen(false)}
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
