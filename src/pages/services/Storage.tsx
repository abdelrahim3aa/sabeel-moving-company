import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Warehouse, CheckCircle, ArrowLeft, Phone, Shield, Thermometer, Camera, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import slideStorage from "@/assets/slide-storage.jpg";

const features = [
  "مستودعات مكيفة ومؤمنة",
  "مراقبة بالكاميرات 24/7",
  "حراسة أمنية على مدار الساعة",
  "تأمين شامل على المحتويات",
  "تخزين قصير وطويل المدى",
  "سهولة الوصول لممتلكاتك",
];

const benefits = [
  { icon: Thermometer, title: "تحكم بالحرارة", desc: "حماية من الرطوبة والحرارة" },
  { icon: Camera, title: "مراقبة مستمرة", desc: "كاميرات عالية الدقة" },
  { icon: Lock, title: "أمان عالي", desc: "أنظمة قفل حديثة" },
  { icon: Shield, title: "تأمين شامل", desc: "تعويض في حالة الضرر" },
];

const Storage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={slideStorage} alt="تخزين آمن" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-accent mb-4">
              <Link to="/" className="hover:underline">الرئيسية</Link>
              <span>/</span>
              <span>تخزين آمن</span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-service-storage/20 flex items-center justify-center mb-6">
              <Warehouse className="w-8 h-8 text-service-storage" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              <span className="text-gradient-gold">تخزين آمن</span> ومكيف
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              مستودعات حديثة ومكيفة لتخزين أثاثك لأي فترة مع مراقبة على مدار الساعة وتأمين شامل.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+966500000000">
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل الآن
                </Button>
              </a>
              <Link to="/#contact">
                <Button variant="heroOutline" size="xl">
                  احصل على عرض سعر
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">ماذا تشمل الخدمة؟</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-service-storage/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-service-storage" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">لماذا تختارنا؟</h2>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-card rounded-2xl border border-border/50 text-center"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-service-storage/20 flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-service-storage" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 p-6 bg-primary rounded-2xl"
              >
                <h3 className="text-xl font-bold text-primary-foreground mb-4">الأسعار تبدأ من</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-accent">300</span>
                  <span className="text-primary-foreground/70">ريال / شهر</span>
                </div>
                <p className="text-primary-foreground/70 text-sm mb-4">* السعر يعتمد على حجم التخزين</p>
                <a href="tel:+966500000000">
                  <Button variant="gold" size="lg" className="w-full">احصل على سعر دقيق</Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Storage;
