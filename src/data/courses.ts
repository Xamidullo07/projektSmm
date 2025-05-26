import { CourseType } from "../types";

export const courses: CourseType[] = [
  {
    id: 1,
    title: "STANDART",
    description:
      "To’liq Online kursga 3 oy muddatga dostup, Yordam tizimi, Uy vazifalarni tekshirish, Sertifikat",
    image:
      "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 1200000,
    level: "STANDART",
    duration: "8 hafta",
    lessonsCount: 48,
    features: [
      "SMM strategiyasini ishlab chiqish",
      "Targetlangan reklamalar yaratish",
      "Mijozlar bilan ishlash usullari",
      "Kontent-plan tuzish",
      "Ijtimoiy tarmoqlar tahlili",
      "Biznes akkauntlarni optimallash",
    ],
    modules: [
      {
        title: "1-modul: Kirish",
        lessons: [
          {
            id: 1,
            title: "1-dars Kurs haqida",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 2,
            title: "2-dars Copywriterlik",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 3,
            title: "3-dars Telegramga kirish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 4,
            title: "4-dars Telegram kanal ochish va guruh ochish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 5,
            title: "5-dars Telegramda post joylash",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 6,
            title: "6-dars Livegramda Chat bot yasash",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 7,
            title: "7-dars Controller bot yasash",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 8,
            title: "8-dars Telegraf yasash",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 9,
            title: "9-dars Telegram Ads orqali reklama yoqish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
        ],
      },

      {
        title: "2-modul:",
        lessons: [
          {
            id: 1,
            title: "1-dars Instagram akkaunt ochish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 2,
            title: "2-dars Instagram akkauntni biznes akkauntga o'tkazish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 3,
            title: "3-dars Instagram akkauntni upakovka qilish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 4,
            title: "4-dars Instagram akkauntnga publikatsiya qo'yish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 5,
            title: "5-dars Instagram akkauntga stories qo'yish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 6,
            title: "6-dars HighLight qo’yish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 7,
            title: "7-dars Instagram akkauntdan Targeting yoqish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 8,
            title: "8-dars Instagram mavzusini yakunlash",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 9,
            title: "9-dars Instagram full",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 10,
            title: "10-dars Instagram kompyuter orqali reklama yoqish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
        ],
      },
      {
        title: "3-modul:",
        lessons: [
          {
            id: 1,
            title: "1-dars Facebook sahifa ochish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 2,
            title: "2-dars Facebookdan foydalanish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 3,
            title: "3-dars Facebook Ads sozlash",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 4,
            title: "4-dars Facebook LID reklama yoqish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 5,
            title: "5-dars Uyga vazifada yo’l qo’yilgan xatolar",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 6,
            title:
              "6-dars Facebook Messages reklama yoqish - Instagram varianti",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 7,
            title:
              "7-dars Facebook Messages reklama yoqish - Facebook varianti",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 8,
            title: "8-dars Facebook Traffik reklama yoqish - 1",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 9,
            title: "9-dars Facebook Traffik reklama yoqish - 2",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 10,
            title: "10-dars Facebook Traffik reklama yoqish - 3",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 11,
            title: "11-dars Facebook blok holatiga tushsa yechish usuli",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 12,
            title: "12-dars Facebook ADS menejer darsi tugatish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 13,
            title: "13-dars Facebook yakuniy dars",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 14,
            title: "14-dars Facebook Telefondan reklama yoqish",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
        ],
      },
      {
        title: "4-modul:",
        lessons: [
          {
            id: 1,
            title: "1-dars TikTok akkaunt biznes o'tkazish va video yuklash",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 2,
            title:
              "2-dars Portfolio yaratish PPT orqali va Kontent plan tuzish, Konkurentlar analizi",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 3,
            title: "3-dars Marketing - 1",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 4,
            title: "4-dars Marketing - 2",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 5,
            title: "5-dars Marketing to’liq",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
        ],
      },

      {
        title: "5-modul:",
        lessons: [
          {
            id: 1,
            title: "1-dars Google Account ochish (HD tinniq format)",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 2,
            title: "2-dars Google Drivega kirish qismi (HD format)",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 3,
            title: "3-dars Google Forma yasash, so'rovnoma uchun (HD format)",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 4,
            title: "4-dars Cheklist yasash (HD format)",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 5,
            title: "5-dars Driveda Papka ochish va ichiga joylash (HD format)",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 6,
            title: "6-dars Qo'shimcha ma'lumotlar va yakuniy dars (HD format)",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
        ],
      },

      {
        title: "6-modul:",
        lessons: [
          {
            id: 1,
            title: "1-dars YouTube 1-dars",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 2,
            title: "2-dars YouTube 2-dars",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 3,
            title: "3-dars YouTube 3-dars",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 4,
            title: "4-dars YouTube 4-dars",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
          {
            id: 5,
            title: "5-dars YouTube 5-dars",
            duration: "07:16",
            videoUrl: "/src/videos/lesson1.mp4",
          },
        ],
      },
    ],
  },
];
