import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { id: 1, image: gallery1, title: "تحميل الأثاث", category: "نقل منزلي" },
  { id: 2, image: gallery2, title: "تغليف احترافي", category: "تغليف" },
  { id: 3, image: gallery3, title: "تركيب الأثاث", category: "فك وتركيب" },
  { id: 4, image: gallery4, title: "أسطول الشاحنات", category: "معداتنا" },
  { id: 5, image: gallery5, title: "نقل القطع الثمينة", category: "قطع خاصة" },
  { id: 6, image: gallery6, title: "فريق العمل", category: "فريقنا" },
];

const categories = ["الكل", "نقل منزلي", "تغليف", "فك وتركيب", "معداتنا", "قطع خاصة", "فريقنا"];

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredItems = selectedCategory === "الكل" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            معرض أعمالنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            شاهد <span className="text-gradient-gold">أعمالنا السابقة</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground px-4">
            نفتخر بتقديم خدمات نقل احترافية لآلاف العملاء الراضين في جميع أنحاء المملكة
          </p>
        </motion.div>

        {/* Category Filter - Scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 mb-8 md:mb-12 scrollbar-hide"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                selectedCategory === category
                  ? "bg-accent text-primary shadow-gold"
                  : "bg-card text-muted-foreground hover:bg-accent/10 hover:text-accent border border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center mb-2 md:mb-4 shadow-gold"
                  >
                    <ZoomIn className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-sm md:text-xl font-bold text-primary-foreground mb-1">{item.title}</h3>
                  <span className="text-xs md:text-sm text-accent">{item.category}</span>
                </div>

                <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 left-2 md:left-4 opacity-100 group-hover:opacity-0 transition-opacity">
                  <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-accent/90 text-primary text-xs md:text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 md:top-6 left-4 md:left-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/20 backdrop-blur-md flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-primary transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/20 backdrop-blur-md flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-primary transition-colors"
              aria-label="الصورة السابقة"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/20 backdrop-blur-md flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-primary transition-colors"
              aria-label="الصورة التالية"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[currentImage]?.image}
                alt={filteredItems[currentImage]?.title}
                className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain rounded-xl md:rounded-2xl"
              />
              <div className="text-center mt-4 md:mt-6">
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-1 md:mb-2">
                  {filteredItems[currentImage]?.title}
                </h3>
                <span className="text-accent text-sm md:text-base">{filteredItems[currentImage]?.category}</span>
              </div>
            </motion.div>

            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
              {filteredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentImage(index); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage ? "w-6 md:w-8 bg-accent" : "bg-primary-foreground/40"
                  }`}
                  aria-label={`الانتقال إلى الصورة ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
