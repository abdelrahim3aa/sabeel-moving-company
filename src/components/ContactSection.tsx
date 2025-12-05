import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "اتصل بنا",
    value: "966+ 50 000 0000",
    href: "tel:+966500000000",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "info@riyadhmoving.sa",
    href: "mailto:info@riyadhmoving.sa",
  },
  {
    icon: MapPin,
    label: "العنوان",
    value: "الرياض، المملكة العربية السعودية",
    href: "#",
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
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "تم إرسال طلبك بنجاح!",
      description: "سيتواصل معك فريقنا خلال 24 ساعة",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            احصل على <span className="text-gradient-gold">عرض سعر</span> مجاني
          </h2>
          <p className="text-lg text-muted-foreground">
            تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر يناسب احتياجاتك
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="أدخل اسمك"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    رقم الجوال
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05X XXX XXXX"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني (اختياري)
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-2">
                  تفاصيل طلبك
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="اكتب تفاصيل طلبك هنا... (نوع الخدمة، الموقع، التاريخ المفضل)"
                  required
                  className="min-h-[150px] rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">◌</span>
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    إرسال الطلب
                    <Send className="w-5 h-5 mr-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: -10 }}
                className="flex items-center gap-5 p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="font-semibold text-foreground text-lg">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Trust Badges */}
            <div className="bg-primary rounded-2xl p-6 mt-8">
              <h4 className="text-lg font-bold text-primary-foreground mb-4">
                لماذا تتصل بنا؟
              </h4>
              <div className="space-y-3">
                {[
                  "استشارة مجانية وعرض سعر فوري",
                  "لا توجد رسوم مخفية",
                  "ضمان أفضل الأسعار",
                  "رد سريع خلال 30 دقيقة",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
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
