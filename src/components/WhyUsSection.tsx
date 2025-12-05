import { motion } from "framer-motion";
import { CheckCircle2, Users, Headphones, TrendingUp, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "ضمان شامل",
    description: "نضمن سلامة جميع ممتلكاتك مع تعويض كامل في حالة أي ضرر",
  },
  {
    icon: Users,
    title: "فريق محترف",
    description: "عمال مدربون ذوو خبرة عالية في التعامل مع جميع أنواع الأثاث",
  },
  {
    icon: Zap,
    title: "سرعة التنفيذ",
    description: "نلتزم بالمواعيد المحددة ونضمن إنجاز النقل في الوقت المتفق عليه",
  },
  {
    icon: TrendingUp,
    title: "أسعار تنافسية",
    description: "أفضل الأسعار في السوق مع الحفاظ على جودة الخدمة العالية",
  },
  {
    icon: Headphones,
    title: "دعم متواصل",
    description: "فريق خدمة عملاء متاح على مدار الساعة للرد على استفساراتكم",
  },
  {
    icon: CheckCircle2,
    title: "معدات حديثة",
    description: "نستخدم أحدث الشاحنات والمعدات لضمان نقل آمن وسريع",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
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
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
            لماذا تختارنا
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            نتميز <span className="text-gradient-gold">بالاحترافية</span> والموثوقية
          </h2>
          <p className="text-lg text-primary-foreground/70">
            نفتخر بتقديم أفضل خدمات نقل الأثاث في الرياض مع التزام كامل بالجودة والأمانة
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
