import { motion } from "framer-motion";
import { Home, Building2, Package, Warehouse, ArrowLeft, Check } from "lucide-react";
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
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <span className="inline-block px-5 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 border border-accent/20">
            خدماتنا المتميزة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-foreground mb-4 md:mb-6">
            حلول <span className="text-gradient-gold">نقل شاملة</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            خدمات نقل احترافية في جميع مدن المملكة
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.shortDesc}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-1 text-xs text-muted-foreground"
                    >
                      <Check className="w-3 h-3 text-accent" />
                      {feature}
                    </span>
                  ))}
                </div>

                <Link to={service.href}>
                  <Button variant="ghost" className="group/btn text-accent hover:text-accent p-0 h-auto text-sm">
                    تفاصيل الخدمة
                    <ArrowLeft className="w-4 h-4 mr-1 group-hover/btn:-translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};