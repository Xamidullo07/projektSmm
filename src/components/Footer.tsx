import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card  pt-16 pb-8 pl-[10px] pr-[10px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <span className="text-primary font-montserrat font-bold text-lg">
                  A
                </span>
              </div>
              <span className="font-montserrat font-bold text-xl">
                Abdulloh<span className="text-primary">SMM</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              SMM sohasida professional mutaxassis bo'lishingiz uchun eng yaxshi
              kurslar va tajriba
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Sahifalar</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kurslar
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Aloqa
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kirish
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Ro'yxatdan o'tish
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Kurslar</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/courses/1"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  SMM asoslari
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/2"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/3"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Facebook reklama
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/4"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontent marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/5"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  SMM strategiya
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Aloqa</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Toshkent, O'zbekiston</li>
              <li>
                <a
                  href="tel:+998901234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +998 90 123 45 67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@abdullohsmm.uz"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@abdullohsmm.uz
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">
                Yangiliklardan xabardor bo'ling
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email manzilingiz"
                  className="flex-grow bg-muted text-foreground px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Abdulloh Sayfuddinov. Barcha
            huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
