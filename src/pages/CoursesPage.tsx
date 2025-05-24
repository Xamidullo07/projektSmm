import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, BookOpen, Award, Video, Users } from "lucide-react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const CoursesPage = () => {
  useEffect(() => {
    // Update page title
    document.title = "Barcha kurslar - Abdulloh SMM";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-card py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Barcha kurslar</h1>
            <p className="text-muted-foreground mb-8">
              O'z biznesingizni rivojlantirish uchun zarur bo'lgan professional
              SMM kurslarni tanlang va zamonaviy ko'nikmalarni egallang
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Qidiruv..."
                className="w-full bg-muted border border-border pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Video size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Video darslar</h3>
            <p className="text-muted-foreground">
              Yuqori sifatli video darslar va amaliy mashg'ulotlar
            </p>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <BookOpen size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Qo'shimcha materiallar
            </h3>
            <p className="text-muted-foreground">
              PDF qo'llanmalar, shablonlar va amaliy vazifalar
            </p>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Hamjamiyat</h3>
            <p className="text-muted-foreground">
              Hamfikrlar bilan tajriba almashish imkoniyati
            </p>
          </div>

          <div className="card p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Award size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sertifikat</h3>
            <p className="text-muted-foreground">
              Kursni tugatgach rasmiy sertifikat olish imkoniyati
            </p>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="container py-12">
        <h2 className="text-2xl font-bold mb-8">Barcha kurslar</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container py-16">
        <div className="card overflow-hidden">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3758755/pexels-photo-3758755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Join us"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent"></div>

            <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Bir qadam oldinga</h2>
              <p className="text-muted-foreground mb-6 max-w-lg">
                Hoziroq ro'yxatdan o'ting va professional SMM mutaxassisi
                bo'lish yo'lidagi birinchi qadamni tashlang!
              </p>
              <Link to="/register" className="btn btn-primary">
                Ro'yxatdan o'tish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
