import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import ContactForm from "../components/ContactForm";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../img/img.jpg";

const HomePage = () => {
  useEffect(() => {
    // Update page title
    document.title = "Abdulloh SMM - SMM sohasini 0 dan o'rganing";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />

      <FeaturedCourses />

      {/* About section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-xl"
              >
                <img
                  src={img}
                  alt="About Abdulloh"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Experience card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl border border-border shadow-lg max-w-xs"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">50+</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Muvaffaqiyatli o'quvchilar</h4>
                    <p className="text-sm text-muted-foreground">
                      Yuqori natijalar bilan
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
                  <div className="h-full bg-primary w-[95%]"></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Tasdiqlanhan</span>
                  <span>95%</span>
                </div>
              </motion.div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Abdulloh Sayfuddinov haqida
              </h2>

              <p className="text-muted-foreground mb-6">
                7+ yillik SMM sohasidagi tajribaga ega mutaxassis va marketing
                konsultant. 50+ dan ortiq kompaniyalar uchun samarali SMM
                strategiyalarni ishlab chiqqan va 100+ dan ortiq muvaffaqiyatli
                loyihalarni amalga oshirgan.
              </p>

              <p className="text-muted-foreground mb-6">
                Men Instagram, Facebook, YouTube, TikTok kabi ijtimoiy
                tarmoqlarda professional SMM kampaniyalarini boshqarish,
                mijozlarni jalb qilish va sotuvlarni oshirishda sizga yordam
                beraman.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      Ijtimoiy tarmoq marketing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Barcha mashhur platformalarda strategik SMM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Kontent marketing</h4>
                    <p className="text-sm text-muted-foreground">
                      Ta'sirli va konversiya qiluvchi kontent yaratish
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Targetlangan reklama</h4>
                    <p className="text-sm text-muted-foreground">
                      To'g'ri auditoriyaga yo'naltirilgan reklamalar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Analytics va KPI</h4>
                    <p className="text-sm text-muted-foreground">
                      SMM kampaniyalar samaradorligini o'lchash
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/courses" className="btn btn-primary">
                <span>Kurslar bilan tanishing</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <FaqSection />

      {/* Contact section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-3">Bog'lanish</h2>
            <p className="text-muted-foreground">
              Savollaringiz bormi? Bizga xabar yuboring va tez orada javob
              beramiz
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  Bizning ma'lumotlar
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a
                        href="mailto:info@abdullohsmm.uz"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@abdullohsmm.uz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Telefon</h4>
                      <a
                        href="tel:+998901234567"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +998 90 123 45 67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Manzil</h4>
                      <p className="text-muted-foreground">
                        Toshkent, O'zbekiston
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <div className="card p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={img}
                      alt="Abdulloh"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">Abdulloh Sayfuddinov</h4>
                      <p className="text-sm text-muted-foreground">
                        SMM Ekspert
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    "Har bir o'quvchiga individual yondashib, ularning
                    maqsadlariga erishishiga yordam berishdan mamnunman.
                    Savollaringiz bo'lsa, menga xabar yuboring."
                  </p>

                  <a
                    href="https://t.me/abdulloh_sayfuddinov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    Telegramda yozish
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
