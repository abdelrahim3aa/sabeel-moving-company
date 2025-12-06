import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "201015366195";

const contactInfo = [
  {
    icon: Phone,
    label: "اتصل بنا",
    value: "966+ 50 000 0000",
    href: "tel:+966500000000",
  },
  {
    icon: MessageCircle,
    label: "واتساب",
    value: "تواصل فوري",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "info@sabeel.sa",
    href: "mailto:info@sabeel.sa",
  },
  {
    icon: Clock,
    label: "ساعات العمل",
    value: "24 ساعة / 7 أيام",
    href: "#",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.service || !formData.message) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message card
    const whatsappMessage = `
━━━━━━━━━━━━━━━━━
🏠 *طلب خدمة نقل جديد*
━━━━━━━━━━━━━━━━━

👤 *الاسم:* ${formData.name}
📱 *الجوال:* ${formData.phone}
${formData.email ? `📧 *البريد:* ${formData.email}` : ""}
🏙️ *المدينة:* ${formData.city || "غير محدد"}
🔧 *الخدمة:* ${formData.service === "home" ? "نقل أثاث منزلي" : formData.service === "office" ? "نقل مكاتب وشركات" : formData.service === "packing" ? "تغليف وتعبئة" : formData.service === "storage" ? "تخزين آمن" : formData.service === "intercity" ? "نقل بين المدن" : formData.service}

📝 *التفاصيل:*
${formData.message}

━━━━━━━━━━━━━━━━━
_تم الإرسال من موقع سبيل_
    `.trim();

    // Open WhatsApp with the message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");

    toast({
      title: "تم فتح واتساب!",
      description: "يرجى إرسال الرسالة للتواصل معنا",
    });

    setFormData({ name: "", phone: "", email: "", service: "", city: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-muted/30 to-transparent" />
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
            تواصل معنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            احصل على <span className="text-gradient-gold">عرض سعر</span> مجاني
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر يناسب احتياجاتك
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg border border-border/50">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الاسم الكامل *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="أدخل اسمك"
                    required
                    className="h-11 md:h-12 rounded-xl text-sm md:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    رقم الجوال *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05X XXX XXXX"
                    required
                    className="h-11 md:h-12 rounded-xl text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    المدينة
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-11 md:h-12 rounded-xl border border-input bg-background px-3 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">اختر المدينة</option>
                    <option value="الرياض">الرياض</option>
                    <option value="جدة">جدة</option>
                    <option value="مكة المكرمة">مكة المكرمة</option>
                    <option value="المدينة المنورة">المدينة المنورة</option>
                    <option value="الدمام">الدمام</option>
                    <option value="الخبر">الخبر</option>
                    <option value="الطائف">الطائف</option>
                    <option value="تبوك">تبوك</option>
                    <option value="القصيم">القصيم</option>
                    <option value="أبها">أبها</option>
                    <option value="خميس مشيط">خميس مشيط</option>
                    <option value="حائل">حائل</option>
                    <option value="نجران">نجران</option>
                    <option value="جازان">جازان</option>
                    <option value="الجبيل">الجبيل</option>
                    <option value="ينبع">ينبع</option>
                    <option value="أخرى">مدينة أخرى</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    نوع الخدمة *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full h-11 md:h-12 rounded-xl border border-input bg-background px-3 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="home">نقل أثاث منزلي</option>
                    <option value="office">نقل مكاتب وشركات</option>
                    <option value="packing">تغليف وتعبئة</option>
                    <option value="storage">تخزين آمن</option>
                    <option value="intercity">نقل بين المدن</option>
                  </select>
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني (اختياري)
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  className="h-11 md:h-12 rounded-xl text-sm md:text-base"
                />
              </div>

              <div className="mb-6 md:mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  تفاصيل طلبك *
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="اكتب تفاصيل طلبك هنا... (الحي الحالي، الحي الجديد، عدد الغرف، التاريخ المفضل)"
                  required
                  className="min-h-[100px] md:min-h-[130px] rounded-xl resize-none text-sm md:text-base"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full text-sm md:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    إرسال عبر واتساب
                    <MessageCircle className="w-5 h-5 mr-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-5 bg-card rounded-xl md:rounded-2xl border border-border/50 hover:border-accent/50 transition-all group text-center"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <info.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 md:mb-1">{info.label}</p>
                    <p className="font-semibold text-foreground text-xs md:text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-xl md:rounded-2xl overflow-hidden border border-border/50 shadow-lg"
            >
              <div className="bg-card p-3 md:p-4 flex items-center gap-3 border-b border-border/50">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm md:text-base">نغطي جميع مناطق المملكة</p>
                  <p className="text-xs md:text-sm text-muted-foreground">الرياض، جدة، مكة، المدينة، والمزيد</p>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7429406.277779426!2d39.87566835!3d23.88592335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="نغطي جميع مناطق المملكة العربية السعودية"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Trust Badges */}
            <div className="bg-primary rounded-xl md:rounded-2xl p-4 md:p-6">
              <h4 className="text-base md:text-lg font-bold text-primary-foreground mb-3 md:mb-4">
                لماذا تتصل بنا؟
              </h4>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {[
                  "استشارة مجانية",
                  "رد خلال 30 دقيقة",
                  "لا رسوم مخفية",
                  "ضمان أفضل سعر",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90 text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
