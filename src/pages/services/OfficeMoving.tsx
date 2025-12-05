import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, CheckCircle, ArrowLeft, Phone, Shield, Clock, Users, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import slideOffice from "@/assets/slide-office.jpg";

const features = [
  "نقل المكاتب والأجهزة الإلكترونية",
  "فك وتركيب الأثاث المكتبي",
  "تغليف خاص للمعدات الحساسة",
  "تنسيق مسبق لتقليل فترة التوقف",
  "نقل في أوقات غير العمل (ليلاً/عطلات)",
  "ترتيب المكتب الجديد حسب المخطط",
];

const benefits = [
  { icon: Clock, title: "تقليل التوقف", desc: "نقل سريع لاستمرار أعمالك" },
  { icon: Shield, title: "حماية المعدات", desc: "تغليف خاص للإلكترونيات" },
  { icon: Users, title: "فريق متخصص", desc: "خبرة في نقل الشركات" },
  { icon: Truck, title: "أسطول متنوع", desc: "شاحنات بأحجام مختلفة" },
];

const OfficeMoving = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={slideOffice} alt="نقل مكاتب" className="w-full h-full object-cover" />
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
              <span>نقل مكاتب وشركات</span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              نقل <span className="text-gradient-gold">مكاتب وشركات</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              حلول نقل متكاملة للشركات والمؤسسات مع تقليل فترة التوقف وضمان سلامة المعدات والأثاث المكتبي.
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
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-secondary" />
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
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary to-gold-light flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-primary" />
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
                  <span className="text-4xl font-bold text-accent">1,500</span>
                  <span className="text-primary-foreground/70">ريال سعودي</span>
                </div>
                <p className="text-primary-foreground/70 text-sm mb-4">* السعر يعتمد على حجم المكتب والمعدات</p>
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

export default OfficeMoving;
