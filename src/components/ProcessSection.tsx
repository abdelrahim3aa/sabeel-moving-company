import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Truck, Home, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "اتصل بنا",
    description: "تواصل معنا عبر الهاتف أو النموذج للحصول على استشارة مجانية وعرض سعر",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "المعاينة والتقييم",
    description: "نرسل فريقاً متخصصاً لمعاينة الأثاث وتحديد متطلبات النقل بدقة",
  },
  {
    icon: Truck,
    step: "03",
    title: "التغليف والنقل",
    description: "نقوم بتغليف كل قطعة باحترافية ونقلها بأمان تام إلى الموقع الجديد",
  },
  {
    icon: Home,
    step: "04",
    title: "التركيب والترتيب",
    description: "نقوم بفك التغليف وتركيب الأثاث في أماكنه المحددة حسب رغبتك",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            كيف نعمل
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            خطوات بسيطة <span className="text-gradient-gold">لنقل مريح</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            نجعل عملية النقل سهلة وسلسة من البداية حتى النهاية
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 right-0 left-0 h-1 bg-gradient-to-l from-accent via-accent/50 to-accent -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-3xl p-8 text-center border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group h-full">
                  {/* Step Number */}
                  <div className="absolute -top-5 right-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold shadow-gold">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 mt-4 rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center shadow-navy group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-accent rounded-full items-center justify-center shadow-gold">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
