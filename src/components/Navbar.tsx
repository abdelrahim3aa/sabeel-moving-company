import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Compass, ChevronDown, MapPin, Sparkles, Home, Briefcase, Package, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "الرئيسية", href: "#home", icon: Home },
  { label: "خدماتنا", href: "#services", icon: Briefcase },
  { label: "أعمالنا", href: "#gallery", icon: Package },
  { label: "آراء العملاء", href: "#testimonials", icon: Warehouse },
  { label: "تواصل معنا", href: "#contact", icon: Phone },
];

const cities = [
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

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/98 backdrop-blur-xl shadow-xl border-b border-accent/20"
            : "bg-gradient-to-b from-primary/90 via-primary/60 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4">
          <nav className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 md:gap-3 group"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <div className={`relative w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  isScrolled 
                    ? "bg-gradient-gold shadow-gold" 
                    : "bg-accent/20 backdrop-blur-sm border border-accent/30"
                }`}>
                  <Compass className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition-colors ${
                    isScrolled ? "text-primary" : "text-accent"
                  }`} />
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`text-lg sm:text-xl md:text-2xl font-black transition-colors ${
                    isScrolled ? "text-foreground" : "text-primary-foreground"
                  }`}>
                    سبيل
                  </span>
                  <span className={`text-[8px] sm:text-[9px] md:text-xs font-medium transition-colors ${
                    isScrolled ? "text-accent" : "text-accent/90"
                  }`}>
                    نقل أثاث في كل السعودية
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex items-center"
            >
              <div className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? "bg-muted/50" 
                  : "bg-primary-foreground/10 backdrop-blur-sm"
              }`}>
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:bg-accent/10 ${
                      isScrolled 
                        ? "text-foreground/80 hover:text-accent" 
                        : "text-primary-foreground/90 hover:text-accent"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                {/* Cities Dropdown */}
                <div className="relative">
                  <motion.button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:bg-accent/10 ${
                      isScrolled 
                        ? "text-foreground/80 hover:text-accent" 
                        : "text-primary-foreground/90 hover:text-accent"
                    }`}
                    onClick={() => setShowCities(!showCities)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <MapPin className="w-4 h-4" />
                    المدن
                    <ChevronDown className={`w-3 h-3 transition-transform ${showCities ? "rotate-180" : ""}`} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {showCities && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-card/98 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50 overflow-hidden z-50"
                      >
                        {cities.map((city) => (
                          <Link
                            key={city.slug}
                            to={`/city/${city.slug}`}
                            className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors border-b border-border/20 last:border-0"
                            onClick={() => setShowCities(false)}
                          >
                            {city.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4 mr-6">
                <a 
                  href="tel:+966500000000" 
                  className={`flex items-center gap-2 transition-colors text-sm font-medium ${
                    isScrolled ? "text-muted-foreground hover:text-accent" : "text-primary-foreground/80 hover:text-accent"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isScrolled ? "bg-accent/10" : "bg-accent/20"
                  }`}>
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                </a>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="gold" size="default" className="shadow-gold btn-hover-effect">
                    <Sparkles className="w-4 h-4 ml-2" />
                    احجز الآن
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className={`lg:hidden relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 touch-feedback ${
                isScrolled 
                  ? "bg-muted text-foreground" 
                  : "bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm"
              }`}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/70 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Menu Panel - Full width on mobile for better touch */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-full sm:w-[85%] sm:max-w-sm bg-gradient-to-b from-background via-background to-muted/30 z-50 lg:hidden shadow-2xl safe-area-inset-bottom"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header with Close Button */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold"
                      whileTap={{ scale: 0.95 }}
                    >
                      <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-foreground">سبيل</h3>
                      <p className="text-[10px] sm:text-xs text-accent">نقل أثاث في كل السعودية</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={closeMobileMenu}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-foreground touch-feedback"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Menu Links */}
                <div className="flex-1 overflow-y-auto py-4 sm:py-6 px-3 sm:px-4 smooth-scroll">
                  <nav className="space-y-1 sm:space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 sm:gap-4 px-4 py-3.5 sm:py-4 rounded-xl text-foreground/80 hover:text-accent hover:bg-accent/10 font-semibold text-base sm:text-lg transition-all touch-feedback active:bg-accent/20"
                      >
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                        </div>
                        {link.label}
                      </motion.a>
                    ))}
                  </nav>

                  {/* Cities in Mobile - Scrollable Grid */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/50">
                    <h4 className="text-xs sm:text-sm font-bold text-muted-foreground mb-3 px-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      المدن الرئيسية
                    </h4>
                    <div className="grid grid-cols-2 gap-2 px-2">
                      {cities.map((city, index) => (
                        <motion.div
                          key={city.slug}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.03 }}
                        >
                          <Link
                            to={`/city/${city.slug}`}
                            onClick={closeMobileMenu}
                            className="block px-3 py-2.5 sm:py-3 rounded-xl bg-muted/50 text-sm text-foreground/70 hover:bg-accent/10 hover:text-accent transition-colors text-center font-medium touch-feedback active:bg-accent/20"
                          >
                            {city.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Menu Footer */}
                <div className="p-4 sm:p-6 border-t border-border/50 space-y-3 sm:space-y-4 bg-background/80 backdrop-blur-sm">
                  <motion.a 
                    href="tel:+966500000000" 
                    className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-muted/50 text-foreground hover:bg-accent/10 transition-colors touch-feedback"
                    onClick={closeMobileMenu}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-bold text-sm sm:text-base">966+ 50 000 0000</span>
                  </motion.a>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button variant="gold" size="lg" className="w-full shadow-gold btn-hover-effect touch-feedback" onClick={closeMobileMenu}>
                      <Sparkles className="w-5 h-5 ml-2" />
                      احجز الآن
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
