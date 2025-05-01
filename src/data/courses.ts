import { CourseType } from '../types';

export const courses: CourseType[] = [
  {
    id: 1,
    title: "SMM sohasini 0 dan o'rganish",
    description: "Ijtimoiy tarmoqlarda professional SMM kampaniyalarini yaratish va yuritishni o'rganing",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1200000,
    level: "Boshlang'ich",
    duration: "8 hafta",
    lessonsCount: 48,
    features: [
      "SMM strategiyasini ishlab chiqish",
      "Targetlangan reklamalar yaratish",
      "Mijozlar bilan ishlash usullari",
      "Kontent-plan tuzish",
      "Ijtimoiy tarmoqlar tahlili",
      "Biznes akkauntlarni optimallash"
    ],
    lessons: [
      { title: "SMM asoslari va zamonaviy trendlar", duration: "45 daqiqa" },
      { title: "Marketingning asosiy tushunchalari", duration: "50 daqiqa" },
      { title: "Maqsadli auditoriyani aniqlash", duration: "55 daqiqa" },
      { title: "Kontent strategiyasi", duration: "60 daqiqa" },
      { title: "Instagram marketing asoslari", duration: "65 daqiqa" },
      { title: "Facebook marketing", duration: "55 daqiqa" },
      { title: "Telegram va YouTube", duration: "50 daqiqa" },
      { title: "TikTok va zamonaviy platformalar", duration: "45 daqiqa" }
    ]
  },
  {
    id: 2,
    title: "Instagram marketing to'liq kurs",
    description: "Instagram orqali biznesingizni rivojlantirish va mijozlar bazasini kengaytirish strategiyasi",
    image: "https://images.pexels.com/photos/6157056/pexels-photo-6157056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 950000,
    level: "O'rta",
    duration: "6 hafta",
    lessonsCount: 36,
    features: [
      "Akkaunt optimizatsiyasi",
      "Algoritm bilan ishlash",
      "Kontent strategiyasi",
      "Reels, Stories va IGTV",
      "Instagram Ads",
      "Statistika tahlili va o'sish strategiyasi"
    ],
    lessons: [
      { title: "Instagram algoritmi haqida", duration: "45 daqiqa" },
      { title: "Akkauntni to'g'ri sozlash", duration: "40 daqiqa" },
      { title: "Professional bio yozish", duration: "35 daqiqa" },
      { title: "Kontent yaratish asoslari", duration: "55 daqiqa" },
      { title: "Reels kontentlari", duration: "50 daqiqa" },
      { title: "Instagram Ads so'zlashamiz", duration: "60 daqiqa" },
      { title: "Stories va IGTV", duration: "45 daqiqa" },
      { title: "Statistikani tahlil qilish", duration: "50 daqiqa" }
    ]
  },
  {
    id: 3,
    title: "Facebook targetlangan reklama",
    description: "Facebook Ads Manager orqali samarali reklama kampaniyalarini yaratish va boshqarish",
    image: "https://images.pexels.com/photos/4350225/pexels-photo-4350225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 850000,
    level: "Professional",
    duration: "4 hafta",
    lessonsCount: 24,
    features: [
      "Facebook Ads Manager",
      "Reklama kampaniyalari yaratish",
      "Maqsadli auditoriyani tanlash",
      "A/B testlash usullari",
      "Facebook Pixels o'rnatish",
      "ROI ni kuzatish va optimallash"
    ],
    lessons: [
      { title: "Facebook Ads Manager bilan tanishuv", duration: "50 daqiqa" },
      { title: "Maqsadlar va kampaniyalar", duration: "55 daqiqa" },
      { title: "Auditoriya tanlash", duration: "45 daqiqa" },
      { title: "Reklama matnlari yozish", duration: "40 daqiqa" },
      { title: "Kreativlarni tayyorlash", duration: "50 daqiqa" },
      { title: "A/B testlash", duration: "45 daqiqa" },
      { title: "Facebook Pixel o'rnatish", duration: "60 daqiqa" },
      { title: "Natijalarni tahlil qilish", duration: "55 daqiqa" }
    ]
  },
  {
    id: 4,
    title: "Kontent marketing Express",
    description: "Har qanday biznes uchun samarali kontent strategiyasini ishlab chiqish va amalga oshirish",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 700000,
    level: "O'rta",
    duration: "3 hafta",
    lessonsCount: 18,
    features: [
      "Kontent strategiyasi",
      "Kontent turlarini aniqlash",
      "Kontentni режалаштириш",
      "SEO asoslari",
      "Storytelling usullari",
      "Kontent kalendari yaratish"
    ],
    lessons: [
      { title: "Kontent marketing strategiyasi", duration: "55 daqiqa" },
      { title: "Kontent turlari", duration: "45 daqiqa" },
      { title: "Target auditoriya va kontent", duration: "40 daqiqa" },
      { title: "Storytelling usullari", duration: "50 daqiqa" },
      { title: "Vizual kontent", duration: "45 daqiqa" },
      { title: "Tekstli kontent", duration: "40 daqiqa" },
      { title: "Kontent kalendari", duration: "35 daqiqa" },
      { title: "Natijalarni o'lchash", duration: "50 daqiqa" }
    ]
  },
  {
    id: 5,
    title: "Telegram marketing",
    description: "Telegram kanallari va botlari orqali biznesingizni rivojlantirish va ularni monetizatsiya qilish",
    image: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 850000,
    level: "Boshlang'ich",
    duration: "4 hafta",
    lessonsCount: 24,
    features: [
      "Telegram kanal yaratish va rivojlantirish",
      "Bot yaratish va sozlash",
      "Auditoriyani jalb qilish usullari",
      "Kanallar monetizatsiyasi",
      "Reklama joylashtirish va sotish",
      "Telegram Analytics"
    ],
    lessons: [
      { title: "Telegram asoslari", duration: "40 daqiqa" },
      { title: "Kanal yaratish va sozlash", duration: "45 daqiqa" },
      { title: "Kanal dizayni", duration: "35 daqiqa" },
      { title: "Kontent yaratish", duration: "50 daqiqa" },
      { title: "Obunachi yig'ish usullari", duration: "55 daqiqa" },
      { title: "Bot yaratish", duration: "60 daqiqa" },
      { title: "Kanaldan pul ishlash", duration: "45 daqiqa" },
      { title: "Analytics va tahlil", duration: "40 daqiqa" }
    ]
  },
  {
    id: 6,
    title: "TikTok marketing",
    description: "TikTok algoritmi bilan ishlash va viral kontent yaratish orqali biznes auditoriyasini kengaytirish",
    image: "https://images.pexels.com/photos/5326965/pexels-photo-5326965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 950000,
    level: "O'rta",
    duration: "5 hafta",
    lessonsCount: 30,
    features: [
      "TikTok algoritmini o'rganish",
      "Trend kontentlar yaratish",
      "TikTok Ads Manager",
      "Virallik strategiyasi",
      "Influencerlar bilan ishlash",
      "TikTok marketing kampaniyalari"
    ],
    lessons: [
      { title: "TikTok marketing asoslari", duration: "45 daqiqa" },
      { title: "Akkaunt yaratish", duration: "30 daqiqa" },
      { title: "TikTok algoritmi", duration: "50 daqiqa" },
      { title: "Trend topish usullari", duration: "40 daqiqa" },
      { title: "Video yaratish", duration: "55 daqiqa" },
      { title: "TikTok Ads", duration: "60 daqiqa" },
      { title: "Influencer marketing", duration: "45 daqiqa" },
      { title: "Analytics va tahlil", duration: "40 daqiqa" }
    ]
  }
];