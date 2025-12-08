import { motion } from "framer-motion";
import { Home, Building2, Package, Warehouse, ArrowLeft, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "نقل منزلي",
    shortDesc: "فك وتركيب وتغليف احترافي",
    features: ["فك وتركيب", "تغليف", "ضمان"],
    color: "from-primary to-primary/70",
    bgColor: "bg-primary/10",
    href: "/services/home-moving",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
  },
  {
    icon: Building2,
    title: "نقل مكاتب",
    shortDesc: "حلول متكاملة للشركات",
    features: ["تنسيق مسبق", "نقل سريع", "تركيب"],
    color: "from-secondary to-secondary/70",
    bgColor: "bg-secondary/10",
    href: "/services/office-moving",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  },
  {
    icon: Package,
    title: "تغليف احترافي",
    shortDesc: "حماية كاملة لممتلكاتك",
    features: ["مواد فاخرة", "تغليف هش", "توثيق"],
    color: "from-service-packing/80 to-service-packing",
    bgColor: "bg-service-packing/10",
    href: "/services/packing",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    icon: Warehouse,
    title: "تخزين آمن",
    shortDesc: "مستودعات مكيفة ومؤمنة",
    features: ["مكيف", "حراسة 24/7", "تأمين"],
    color: "from-service-storage/80 to-service-storage",
    bgColor: "bg-service-storage/10",
    href: "/services/storage",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl opacity-5"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary rounded-full blur-3xl opacity-5"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-20"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-accent/20"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            خدماتنا المتميزة
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-foreground mb-3 sm:mb-4 md:mb-6">
            حلول <span className="text-gradient-gold">نقل شاملة</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2 sm:px-4">
            خدمات نقل احترافية في جميع مدن المملكة
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-card rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-xl card-hover touch-feedback"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 blur-xl`} />
              </div>

              {/* Image */}
              <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                
                {/* Icon Badge */}
                <motion.div 
                  className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
                </motion.div>

                {/* Shimmer Effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-6 relative z-10">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  {service.shortDesc}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {service.features.map((feature, i) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full"
                    >
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent" />
                      {feature}
                    </motion.span>
                  ))}
                </div>

                <Link to={service.href}>
                  <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="ghost" className="group/btn text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto text-xs sm:text-sm touch-feedback">
                      تفاصيل الخدمة
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 group-hover/btn:-translate-x-2 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 sm:mt-12 md:mt-16"
        >
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="gold" size="lg" className="shadow-gold btn-hover-effect touch-feedback text-sm sm:text-base px-6 sm:px-8">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              احصل على عرض سعر مجاني
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
