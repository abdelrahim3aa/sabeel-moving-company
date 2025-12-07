import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { 
  Home, Building2, Package, Warehouse, Phone, MapPin, 
  CheckCircle, ArrowLeft, Star, Truck, Shield, Clock, Users 
} from "lucide-react";

const cityData: Record<string, {
  name: string;
  nameEn: string;
  region: string;
  description: string;
  nearCities: string[];
  keywords: string[];
}> = {
  riyadh: {
    name: "الرياض",
    nameEn: "Riyadh",
    region: "منطقة الرياض",
    description: "عاصمة المملكة العربية السعودية وأكبر مدنها",
    nearCities: ["الخرج", "الدرعية", "الدلم", "الزلفي", "المجمعة", "وادي الدواسر"],
    keywords: ["نقل عفش الرياض", "شركة نقل اثاث الرياض", "افضل شركة نقل عفش بالرياض"],
  },
  jeddah: {
    name: "جدة",
    nameEn: "Jeddah",
    region: "منطقة مكة المكرمة",
    description: "عروس البحر الأحمر والبوابة إلى الحرمين الشريفين",
    nearCities: ["رابغ", "الليث", "خليص", "ينبع", "مكة المكرمة"],
    keywords: ["نقل عفش جدة", "شركة نقل اثاث جدة", "افضل شركة نقل عفش بجدة"],
  },
  makkah: {
    name: "مكة المكرمة",
    nameEn: "Makkah",
    region: "منطقة مكة المكرمة",
    description: "أقدس مدينة في الإسلام وقبلة المسلمين",
    nearCities: ["جدة", "الطائف", "الجموم", "رابغ"],
    keywords: ["نقل عفش مكة", "شركة نقل اثاث مكة المكرمة", "افضل شركة نقل عفش بمكة"],
  },
  madinah: {
    name: "المدينة المنورة",
    nameEn: "Madinah",
    region: "منطقة المدينة المنورة",
    description: "ثاني أقدس مدينة في الإسلام ومهاجر النبي ﷺ",
    nearCities: ["ينبع", "العلا", "خيبر", "بدر"],
    keywords: ["نقل عفش المدينة المنورة", "شركة نقل اثاث المدينة", "افضل شركة نقل عفش بالمدينة"],
  },
  dammam: {
    name: "الدمام",
    nameEn: "Dammam",
    region: "المنطقة الشرقية",
    description: "عاصمة المنطقة الشرقية ومركز صناعة النفط",
    nearCities: ["الخبر", "الظهران", "القطيف", "الجبيل", "الأحساء"],
    keywords: ["نقل عفش الدمام", "شركة نقل اثاث الدمام", "افضل شركة نقل عفش بالدمام"],
  },
  khobar: {
    name: "الخبر",
    nameEn: "Khobar",
    region: "المنطقة الشرقية",
    description: "مدينة ساحلية حديثة ومركز تجاري رئيسي",
    nearCities: ["الدمام", "الظهران", "القطيف", "الأحساء"],
    keywords: ["نقل عفش الخبر", "شركة نقل اثاث الخبر", "افضل شركة نقل عفش بالخبر"],
  },
  taif: {
    name: "الطائف",
    nameEn: "Taif",
    region: "منطقة مكة المكرمة",
    description: "مدينة الورد ومصيف العرب",
    nearCities: ["مكة المكرمة", "جدة", "تربة", "الباحة"],
    keywords: ["نقل عفش الطائف", "شركة نقل اثاث الطائف", "افضل شركة نقل عفش بالطائف"],
  },
  tabuk: {
    name: "تبوك",
    nameEn: "Tabuk",
    region: "منطقة تبوك",
    description: "بوابة الشمال ومدينة الورود",
    nearCities: ["العلا", "ضبا", "الوجه", "حقل"],
    keywords: ["نقل عفش تبوك", "شركة نقل اثاث تبوك", "افضل شركة نقل عفش بتبوك"],
  },
  abha: {
    name: "أبها",
    nameEn: "Abha",
    region: "منطقة عسير",
    description: "عاصمة السياحة السعودية وجوهرة الجنوب",
    nearCities: ["خميس مشيط", "النماص", "محايل عسير", "سراة عبيدة"],
    keywords: ["نقل عفش أبها", "شركة نقل اثاث ابها", "افضل شركة نقل عفش بأبها"],
  },
  qassim: {
    name: "القصيم",
    nameEn: "Qassim",
    region: "منطقة القصيم",
    description: "سلة غذاء المملكة ومدينة التمور",
    nearCities: ["بريدة", "عنيزة", "الرس", "البكيرية", "المذنب"],
    keywords: ["نقل عفش القصيم", "شركة نقل اثاث القصيم", "افضل شركة نقل عفش بالقصيم"],
  },
};

const services = [
  { icon: Home, title: "نقل منزلي", href: "/services/home-moving" },
  { icon: Building2, title: "نقل مكاتب", href: "/services/office-moving" },
  { icon: Package, title: "تغليف", href: "/services/packing" },
  { icon: Warehouse, title: "تخزين", href: "/services/storage" },
];

const features = [
  "فريق عمل محترف ومدرب",
  "سيارات نقل حديثة ومجهزة",
  "مواد تغليف عالية الجودة",
  "أسعار منافسة وشفافة",
  "ضمان سلامة الأثاث",
  "خدمة عملاء 24/7",
];

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = cityData[citySlug || ""] || cityData.riyadh;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `سبيل لنقل الأثاث - ${city.name}`,
    "description": `أفضل شركة نقل عفش في ${city.name}. خدمات نقل أثاث احترافية مع الفك والتركيب والتغليف.`,
    "url": `https://sabeel.sa/city/${citySlug}`,
    "telephone": "+966500000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.region,
      "addressCountry": "SA"
    },
    "areaServed": [city.name, ...city.nearCities],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1500"
    }
  };

  return (
    <>
      <Helmet>
        <title>نقل عفش {city.name} | سبيل - أفضل شركة نقل أثاث في {city.name}</title>
        <meta name="description" content={`شركة نقل عفش ${city.name} - سبيل أفضل شركة نقل أثاث في ${city.name} و${city.region}. خدمات نقل منزلي ومكاتب مع الفك والتركيب والتغليف. اتصل الآن!`} />
        <meta name="keywords" content={`${city.keywords.join(", ")}, نقل عفش من جدة الى ${city.name}, شركة نقل عفش, نقل اثاث ${city.name}`} />
        <link rel="canonical" href={`https://sabeel.sa/city/${citySlug}`} />
        <meta property="og:title" content={`نقل عفش ${city.name} | سبيل لنقل الأثاث`} />
        <meta property="og:description" content={`أفضل خدمات نقل الأثاث في ${city.name}. فك وتركيب وتغليف احترافي.`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-5 py-2 mb-6"
          >
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm">{city.region}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground mb-4"
          >
            نقل عفش <span className="text-gradient-gold">{city.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8"
          >
            {city.description} - نقدم أفضل خدمات نقل الأثاث بأعلى معايير الجودة والأمان
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://wa.me/201015366195" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="group">
                احصل على عرض سعر مجاني
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
              </Button>
            </a>
            <a href="tel:+966500000000">
              <Button variant="heroOutline" size="lg">
                <Phone className="w-5 h-5 ml-2" />
                اتصل بنا الآن
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
          >
            {[
              { icon: Truck, value: "500+", label: `نقلة في ${city.name}` },
              { icon: Star, value: "4.9", label: "تقييم العملاء" },
              { icon: Shield, value: "100%", label: "ضمان السلامة" },
              { icon: Clock, value: "24/7", label: "خدمة متواصلة" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-xs text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              خدماتنا في <span className="text-gradient-gold">{city.name}</span>
            </h2>
            <p className="text-muted-foreground">نقدم جميع خدمات نقل الأثاث في {city.name} و{city.region}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="block p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg group"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title} في {city.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              لماذا تختار سبيل في {city.name}؟
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-card rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Near Cities */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              نقل عفش من {city.name} إلى المدن المجاورة
            </h2>
            <p className="text-muted-foreground">نوفر خدمة النقل بين المدن بأفضل الأسعار</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {city.nearCities.map((nearCity) => (
              <motion.span
                key={nearCity}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="px-5 py-3 bg-card rounded-full border border-border/50 text-foreground hover:border-accent/50 hover:text-accent transition-colors cursor-default"
              >
                نقل عفش من {city.name} إلى {nearCity}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary to-primary/95">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              جاهز لنقل أثاثك في {city.name}؟
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              تواصل معنا الآن للحصول على عرض سعر مجاني وخصم خاص لعملاء {city.name}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/201015366195" target="_blank" rel="noopener noreferrer">
                <Button variant="gold" size="lg" className="shadow-gold">
                  تواصل واتساب
                  <Phone className="w-5 h-5 mr-2" />
                </Button>
              </a>
              <Link to="/#contact">
                <Button variant="heroOutline" size="lg">
                  املأ نموذج الطلب
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}