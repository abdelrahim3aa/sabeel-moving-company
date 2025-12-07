import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Home, Building, Package, Truck, MapPin, ArrowLeft, Sparkles, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceTypes = [
  { id: "home", label: "نقل منزلي", icon: Home, basePrice: 500 },
  { id: "office", label: "نقل مكاتب", icon: Building, basePrice: 800 },
  { id: "packing", label: "تغليف فقط", icon: Package, basePrice: 300 },
  { id: "storage", label: "تخزين", icon: Truck, basePrice: 400 },
];

const homeSizes = [
  { id: "studio", label: "استوديو", rooms: "غرفة واحدة", multiplier: 1 },
  { id: "small", label: "صغير", rooms: "2-3 غرف", multiplier: 1.5 },
  { id: "medium", label: "متوسط", rooms: "4-5 غرف", multiplier: 2 },
  { id: "large", label: "كبير", rooms: "6+ غرف", multiplier: 2.8 },
  { id: "villa", label: "فيلا", rooms: "فيلا كاملة", multiplier: 3.5 },
];

const distances = [
  { id: "same-city", label: "نفس المدينة", km: "داخل المدينة", multiplier: 1 },
  { id: "nearby", label: "مدينة قريبة", km: "50-150 كم", multiplier: 1.5 },
  { id: "medium", label: "مسافة متوسطة", km: "150-400 كم", multiplier: 2 },
  { id: "far", label: "مسافة بعيدة", km: "400-800 كم", multiplier: 2.8 },
  { id: "very-far", label: "عبر المملكة", km: "+800 كم", multiplier: 3.5 },
];

export const PriceCalculator = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedDistance, setSelectedDistance] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculatePrice = () => {
    const service = serviceTypes.find((s) => s.id === selectedService);
    const size = homeSizes.find((s) => s.id === selectedSize);
    const distance = distances.find((d) => d.id === selectedDistance);

    if (!service || !size || !distance) return { min: 0, max: 0 };

    const basePrice = service.basePrice * size.multiplier * distance.multiplier;
    return {
      min: Math.round(basePrice * 0.85),
      max: Math.round(basePrice * 1.15),
    };
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedSize(null);
    setSelectedDistance(null);
    setShowResult(false);
  };

  const canProceed = () => {
    if (step === 1) return selectedService !== null;
    if (step === 2) return selectedSize !== null;
    if (step === 3) return selectedDistance !== null;
    return false;
  };

  const price = calculatePrice();

  const sendToWhatsApp = () => {
    const service = serviceTypes.find((s) => s.id === selectedService);
    const size = homeSizes.find((s) => s.id === selectedSize);
    const distance = distances.find((d) => d.id === selectedDistance);

    const message = `🏠 طلب عرض سعر من حاسبة الأسعار

━━━━━━━━━━━━━━━━
📦 نوع الخدمة: ${service?.label}
🏡 حجم المنزل: ${size?.label} (${size?.rooms})
📍 المسافة: ${distance?.label} (${distance?.km})
━━━━━━━━━━━━━━━━
💰 السعر التقديري: ${price.min} - ${price.max} ريال
━━━━━━━━━━━━━━━━

أرغب في الحصول على عرض سعر دقيق.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/201015366195?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">حاسبة الأسعار</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            احسب تكلفة <span className="text-accent">النقل</span> الآن
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            احصل على تقدير فوري لتكلفة نقل أثاثك في 3 خطوات بسيطة
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
              <motion.div
                className="h-full bg-gradient-gold"
                initial={{ width: "0%" }}
                animate={{ width: showResult ? "100%" : `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Steps Indicator */}
            {!showResult && (
              <div className="flex justify-center gap-2 pt-8 pb-4">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      s === step
                        ? "bg-accent text-primary"
                        : s < step
                        ? "bg-accent/20 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {s < step ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-current/20 flex items-center justify-center text-xs">
                        {s}
                      </span>
                    )}
                    <span className="hidden sm:inline">
                      {s === 1 ? "نوع الخدمة" : s === 2 ? "حجم المنزل" : "المسافة"}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="p-6 md:p-10">
              <AnimatePresence mode="wait">
                {/* Step 1: Service Type */}
                {step === 1 && !showResult && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-center text-foreground">
                      اختر نوع الخدمة
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {serviceTypes.map((service) => (
                        <motion.button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative p-6 rounded-2xl border-2 transition-all ${
                            selectedService === service.id
                              ? "border-accent bg-accent/10 shadow-lg"
                              : "border-border hover:border-accent/50 bg-muted/30"
                          }`}
                        >
                          <div className={`w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                            selectedService === service.id
                              ? "bg-gradient-gold"
                              : "bg-muted"
                          }`}>
                            <service.icon className={`w-7 h-7 ${
                              selectedService === service.id ? "text-primary" : "text-foreground"
                            }`} />
                          </div>
                          <p className={`font-bold text-sm ${
                            selectedService === service.id ? "text-accent" : "text-foreground"
                          }`}>
                            {service.label}
                          </p>
                          {selectedService === service.id && (
                            <motion.div
                              layoutId="selected-service"
                              className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Home Size */}
                {step === 2 && !showResult && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-center text-foreground">
                      اختر حجم المنزل
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {homeSizes.map((size) => (
                        <motion.button
                          key={size.id}
                          onClick={() => setSelectedSize(size.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative p-5 rounded-2xl border-2 transition-all ${
                            selectedSize === size.id
                              ? "border-accent bg-accent/10 shadow-lg"
                              : "border-border hover:border-accent/50 bg-muted/30"
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center ${
                            selectedSize === size.id
                              ? "bg-gradient-gold"
                              : "bg-muted"
                          }`}>
                            <Home className={`w-6 h-6 ${
                              selectedSize === size.id ? "text-primary" : "text-foreground"
                            }`} />
                          </div>
                          <p className={`font-bold text-sm ${
                            selectedSize === size.id ? "text-accent" : "text-foreground"
                          }`}>
                            {size.label}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{size.rooms}</p>
                          {selectedSize === size.id && (
                            <motion.div
                              layoutId="selected-size"
                              className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Distance */}
                {step === 3 && !showResult && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-center text-foreground">
                      اختر المسافة
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {distances.map((distance) => (
                        <motion.button
                          key={distance.id}
                          onClick={() => setSelectedDistance(distance.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`relative p-5 rounded-2xl border-2 transition-all ${
                            selectedDistance === distance.id
                              ? "border-accent bg-accent/10 shadow-lg"
                              : "border-border hover:border-accent/50 bg-muted/30"
                          }`}
                        >
                          <div className={`w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center ${
                            selectedDistance === distance.id
                              ? "bg-gradient-gold"
                              : "bg-muted"
                          }`}>
                            <MapPin className={`w-6 h-6 ${
                              selectedDistance === distance.id ? "text-primary" : "text-foreground"
                            }`} />
                          </div>
                          <p className={`font-bold text-sm ${
                            selectedDistance === distance.id ? "text-accent" : "text-foreground"
                          }`}>
                            {distance.label}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">{distance.km}</p>
                          {selectedDistance === distance.id && (
                            <motion.div
                              layoutId="selected-distance"
                              className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center"
                            >
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Result */}
                {showResult && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-gold mx-auto flex items-center justify-center shadow-gold">
                      <Sparkles className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        السعر التقديري
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        بناءً على اختياراتك
                      </p>
                    </div>
                    <div className="py-6 px-8 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20 inline-block">
                      <div className="text-4xl md:text-5xl font-black text-accent">
                        {price.min.toLocaleString()} - {price.max.toLocaleString()}
                      </div>
                      <div className="text-lg text-muted-foreground mt-1">ريال سعودي</div>
                    </div>

                    {/* Summary */}
                    <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-sm">
                      <div className="p-3 rounded-xl bg-muted/50">
                        <p className="text-muted-foreground mb-1">الخدمة</p>
                        <p className="font-bold text-foreground">
                          {serviceTypes.find((s) => s.id === selectedService)?.label}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-muted/50">
                        <p className="text-muted-foreground mb-1">الحجم</p>
                        <p className="font-bold text-foreground">
                          {homeSizes.find((s) => s.id === selectedSize)?.label}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-muted/50">
                        <p className="text-muted-foreground mb-1">المسافة</p>
                        <p className="font-bold text-foreground">
                          {distances.find((d) => d.id === selectedDistance)?.label}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground max-w-md mx-auto">
                      * هذا السعر تقديري وقد يختلف حسب التفاصيل الفعلية. للحصول على سعر دقيق، تواصل معنا.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                      <Button variant="gold" size="lg" onClick={sendToWhatsApp} className="shadow-gold">
                        <Phone className="w-5 h-5 ml-2" />
                        احصل على عرض سعر دقيق
                      </Button>
                      <Button variant="outline" size="lg" onClick={handleReset}>
                        احسب مرة أخرى
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              {!showResult && (
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/50">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={step === 1}
                    className={step === 1 ? "invisible" : ""}
                  >
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                    السابق
                  </Button>
                  <Button
                    variant="gold"
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="shadow-gold"
                  >
                    {step === 3 ? "احسب السعر" : "التالي"}
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
