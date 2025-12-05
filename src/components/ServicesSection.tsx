import { motion } from "framer-motion";
import { Home, Building2, Package, Warehouse, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "نقل أثاث منزلي",
    description: "خدمة نقل شاملة للمنازل والشقق مع فك وتركيب الأثاث بكل احترافية وعناية فائقة بممتلكاتك.",
    features: ["فك وتركيب كامل", "تغليف احترافي", "ضمان السلامة"],
    color: "from-primary to-navy-light",
  },
  {
    icon: Building2,
    title: "نقل مكاتب وشركات",
    description: "حلول متكاملة لنقل المكاتب والشركات مع تقليل فترة التوقف وضمان استمرارية العمل.",
    features: ["تنسيق مسبق", "نقل سريع", "تركيب فوري"],
    color: "from-secondary to-gold-light",
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
    <section id="services" className="py-24 bg-background relative overflow-hidden">
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            خدماتنا المتميزة
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            حلول <span className="text-gradient-gold">نقل شاملة</span> تناسب احتياجاتك
          </h2>
          <p className="text-lg text-muted-foreground">
            نقدم مجموعة متكاملة من خدمات النقل والتغليف والتخزين لضمان تجربة نقل سلسة ومريحة
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-card rounded-3xl p-8 border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-lg overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-muted rounded-lg text-sm text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" className="group/btn text-accent hover:text-accent p-0">
                  اطلب الخدمة
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
