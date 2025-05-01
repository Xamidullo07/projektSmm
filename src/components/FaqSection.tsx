import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Kurslarni qanday sotib olaman?",
    answer: "Kursni sotib olish uchun ro'yxatdan o'tishingiz, kerakli kursni tanlashingiz va to'lov sahifasiga o'tishingiz kerak. To'lov amalga oshirilgandan so'ng, kurs materiallariga darhol kirishingiz mumkin."
  },
  {
    question: "Kurs qancha vaqt davom etadi?",
    answer: "Har bir kursning davomiyligi uning hajmiga qarab farq qiladi. Asosiy SMM kurslari 8-12 hafta davom etadi, express kurslar esa 2-4 hafta ichida yakunlanadi. Barcha ma'lumotlar har bir kurs sahifasida ko'rsatilgan."
  },
  {
    question: "Kurslarni sotib olgandan so'ng qancha vaqt davomida foydalanishim mumkin?",
    answer: "Bizning barcha kurslarimizga bir marta to'lov qilasiz va umrbod kirishingiz mumkin. Yangilanishlar va qo'shimcha materiallar ham avtomatik ravishda sizga taqdim etiladi."
  },
  {
    question: "Kursda o'rganilgan bilimlarni qanday qo'llashim mumkin?",
    answer: "Kursda o'rganilgan bilimlar orqali siz o'zingizning yoki mijozlaringizning SMM kampaniyalarini samarali boshqarishingiz, ijtimoiy tarmoqlarda to'g'ri strategiya tuzishingiz va kontent yaratish ko'nikmalaringizni oshirishingiz mumkin."
  },
  {
    question: "Kurs davomida qo'shimcha yordam olish imkoniyati bormi?",
    answer: "Ha, har bir kurs davomida o'quvchilar uchun yopiq chat guruhi mavjud bo'lib, unda siz savollaringizni berishingiz, boshqa o'quvchilar bilan tajriba almashishingiz va o'qituvchidan maslahatlar olishingiz mumkin."
  },
  {
    question: "Kursni tugatganimda sertifikat olamanmi?",
    answer: "Ha, har bir kursni muvaffaqiyatli tugatganingizdan so'ng siz rasmiy sertifikat olasiz. Bu sertifikat sizning SMM sohasidagi bilim va ko'nikmalaringizni tasdiqlaydi va portfolio sifatida ishlatishingiz mumkin."
  }
];

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border py-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-3">Ko'p so'raladigan savollar</h2>
          <p className="text-muted-foreground">
            Sizda savollar bormi? Quyida eng ko'p so'raladigan savollarga javoblar bilan tanishing
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;