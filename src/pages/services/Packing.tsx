import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Package, CheckCircle, ArrowLeft, Phone, Shield, Layers, Box, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import slidePacking from "@/assets/slide-packing.jpg";

const features = [
  "تغليف بأجود مواد الحماية",
  "صناديق بأحجام متنوعة",
  "تغليف خاص للقطع الهشة",
  "حماية الزوايا والأسطح",
  "ترقيم وتوثيق المحتويات",
  "فك التغليف في الموقع الجديد",
];

const benefits = [
  { icon: Shield, title: "حماية قصوى", desc: "مواد تغليف عالية الجودة" },
  { icon: Layers, title: "طبقات متعددة", desc: "حماية من الصدمات" },
  { icon: Box, title: "صناديق متينة", desc: "تحمل الأوزان الثقيلة" },
  { icon: Sparkles, title: "عناية فائقة", desc: "اهتمام بأدق التفاصيل" },
];

const Packing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={slidePacking} alt="تغليف وتعبئة" className="w-full h-full object-cover" />
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
              <span>تغليف وتعبئة</span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-service-packing/20 flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-service-packing" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              خدمات <span className="text-gradient-gold">التغليف والتعبئة</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              تغليف احترافي بأجود المواد لحماية أثاثك وممتلكاتك الثمينة من أي أضرار أثناء النقل.
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
                    <div className="w-10 h-10 rounded-lg bg-service-packing/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-service-packing" />
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
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-service-packing/20 flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-service-packing" />
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
                  <span className="text-4xl font-bold text-accent">200</span>
                  <span className="text-primary-foreground/70">ريال سعودي</span>
                </div>
                <p className="text-primary-foreground/70 text-sm mb-4">* السعر يعتمد على كمية الأثاث</p>
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

export default Packing;
