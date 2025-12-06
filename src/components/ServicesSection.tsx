import { motion } from "framer-motion";
import { Home, Building2, Package, Warehouse, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "نقل أثاث منزلي",
    description: "خدمة نقل شاملة للمنازل والشقق مع فك وتركيب الأثاث بكل احترافية وعناية فائقة بممتلكاتك.",
    features: ["فك وتركيب كامل", "تغليف احترافي", "ضمان السلامة"],
    color: "from-primary to-primary/70",
  },
  {
    icon: Building2,
    title: "نقل مكاتب وشركات",
    description: "حلول متكاملة لنقل المكاتب والشركات مع تقليل فترة التوقف وضمان استمرارية العمل.",
    features: ["تنسيق مسبق", "نقل سريع", "تركيب فوري"],
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Package,
    title: "تغليف وتعبئة",
    description: "خدمات تغليف احترافية بأجود المواد لحماية أثاثك وممتلكاتك الثمينة أثناء النقل.",
    features: ["مواد عالية الجودة", "تغليف خاص للهشاشة", "ترقيم وتوثيق"],
    color: "from-service-packing/80 to-service-packing",
  },
  {
    icon: Warehouse,
    title: "تخزين آمن",
    description: "مستودعات مؤمنة ومكيفة لتخزين أثاثك لأي فترة مع مراقبة على مدار الساعة.",
    features: ["مستودعات مكيفة", "حراسة 24/7", "تأمين شامل"],
    color: "from-service-storage/80 to-service-storage",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background relative overflow-hidden">
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
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            خدماتنا المتميزة
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            حلول <span className="text-gradient-gold">نقل شاملة</span> تناسب احتياجاتك
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            نقدم مجموعة متكاملة من خدمات النقل والتغليف والتخزين لضمان تجربة نقل سلسة ومريحة في جميع مدن المملكة
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-lg overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>

                <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-muted rounded-lg text-xs md:text-sm text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" className="group/btn text-accent hover:text-accent p-0 h-auto text-sm md:text-base">
                  اطلب الخدمة
                  <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 group-hover/btn:-translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
