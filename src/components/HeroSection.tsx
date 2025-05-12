import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import imgbg from "../img/img.jpg";
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center md:pt-20 pt-0">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgbg}
          alt="Hero background"
          className="w-full h-full object-cover block lg:hidden relative top-[-10px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium mb-6"
            >
              Abdulloh Sayfuddinov bilan
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">SMM'ni </span>
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-text-gradient">
                0 dan
              </span>
              <span className="text-foreground"> o'rganing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 max-w-xl"
            >
              Zamonaviy ijtimoiy tarmoqlar marketingi bo'yicha eng to'liq
              kurslar va amaliy ko'nikmalar. 5000+ dan ortiq talabalar
              allaqachon o'z bizneslarini yo'lga qo'yishdi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/courses" className="btn btn-primary">
                <span>Kurslarni ko'rish</span>
                <ChevronRight size={16} className="ml-1" />
              </Link>

              <button className="btn btn-outline group">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 mr-2 group-hover:bg-primary/20 transition-colors">
                  <Play size={14} className="text-primary ml-0.5" />
                </span>
                <span>Tanishuv videosi</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <img
                      src={`https://randomuser.me/api/portraits/${
                        i % 2 === 0 ? "women" : "men"
                      }/${i + 10}.jpg`}
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border-2 border-background text-xs font-bold text-primary-foreground">
                  5k+
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium">5000+ o'quvchilar</div>
                <div className="text-muted-foreground">100+ mamlakatlardan</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-border shadow-xl">
              <img
                src={imgbg}
                alt="SMM Expert"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Abdulloh Sayfuddinov
                </h3>
                <p className="text-muted-foreground">
                  SMM Ekspert & Marketing Konsultant
                </p>
              </div>
            </div>

            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl border border-border shadow-lg w-56">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">7+</span>
                </div>
                <div>
                  <h4 className="font-medium">Yillik tajriba</h4>
                  <p className="text-sm text-muted-foreground">
                    Marketing sohasida
                  </p>
                </div>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
                <div className="h-full bg-primary w-[85%]"></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Isbot qilingan</span>
                <span>85%</span>
              </div>
            </div>

            {/* Experience card */}
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl border border-border shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-sm font-bold">100+</span>
                </div>
                <div>
                  <h4 className="font-medium">Loyihalar</h4>
                  <p className="text-xs text-muted-foreground">
                    Muvaffaqiyatli
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
