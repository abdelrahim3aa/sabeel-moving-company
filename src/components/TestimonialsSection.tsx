import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "محمد العتيبي",
    role: "صاحب منزل - الرياض",
    content: "تجربة ممتازة! الفريق كان محترفاً جداً وتم نقل كل شيء بسلامة تامة. أنصح بهم بشدة.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "خالد الحربي",
    role: "مدير شركة - جدة",
    content: "نقلنا مكتبنا بالكامل في يوم واحد دون أي مشاكل. الالتزام بالمواعيد والأسعار المعقولة أكثر ما أعجبني.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "عبدالله القحطاني",
    role: "رجل أعمال - الدمام",
    content: "خدمة التخزين ممتازة ومنظمة. احتجت تخزين أثاثي لمدة شهرين وكان كل شيء في حالة ممتازة عند الاستلام.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
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
            آراء عملائنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            ماذا يقول <span className="text-gradient-gold">عملاؤنا</span> عنا
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            نفتخر بثقة عملائنا وآرائهم الإيجابية التي تدفعنا للتميز دائماً
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative bg-card rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 md:-top-4 right-6 md:right-8">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-accent flex items-center justify-center shadow-gold">
                  <Quote className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 md:gap-1 mb-4 md:mb-6 mt-3 md:mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 md:mb-8 text-sm md:text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 md:w-14 md:h-14 rounded-full object-cover border-2 border-accent/30"
                />
                <div>
                  <h4 className="font-bold text-foreground text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
