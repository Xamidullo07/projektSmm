import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import { FaTelegramPlane } from "react-icons/fa";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Aloqa - Abdulloh SMM";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Aloqa</h1>
          <p className="text-muted-foreground">
            Savollaringiz bormi? Bizga xabar yuboring va tez orada javob beramiz
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Bog'lanish</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a
                    href="mailto:info@abdullohsmm.uz"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@abdullohsmm.uz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Telefon</h3>
                  <a
                    href="tel:+998901234567"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +998 90 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Manzil</h3>
                  <p className="text-muted-foreground">Toshkent, O'zbekiston</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Ish vaqti</h3>
                  <p className="text-muted-foreground">
                    Dushanba - Juma: 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-medium mb-4">Ijtimoiy tarmoqlar</h3>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://t.me/ab_studio_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">
                      <FaTelegramPlane size={24} color="##13443B" />
                    </span>
                  </div>
                  <span>Telegram</span>
                </a>

                <a
                  href="https://www.instagram.com/abdullohsayfuddinov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">
                      <Instagram size={20} />
                    </span>
                  </div>
                  <span>Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/smmkurslari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">
                      <Facebook size={20} />
                    </span>
                  </div>
                  <span>Facebook</span>
                </a>

                <a
                  href="https://www.youtube.com/c/smmkurslari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg font-bold">
                      <Youtube size={20} />
                    </span>
                  </div>
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Xabar yuborish</h2>

            <ContactForm />
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Join us"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent"></div>

            <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Bizning kurslar bilan tanishing
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg">
                SMM sohasida o'z o'rningizni egallash uchun professional
                kurslarimiz bilan tanishing
              </p>
              <Link to="/courses" className="btn btn-primary">
                Kurslarni ko'rish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
