import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Play, Clock, Calendar, BookOpen, Award, MessageSquare, Shield } from 'lucide-react';
import { courses } from '../data/courses';

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find(c => c.id === Number(courseId));

  useEffect(() => {
    // Update page title
    if (course) {
      document.title = `${course.title} - Abdulloh SMM`;
    }
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [course]);

  if (!course) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Kurs topilmadi</h1>
        <Link to="/courses" className="btn btn-primary">
          Barcha kurslar
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-card py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  {course.level}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {course.duration} davomiyligi
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Doimiy kirish huquqi
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {course.lessonsCount} ta dars
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Link to={`/checkout/${course.id}`} className="btn btn-primary">
                  <span>Sotib olish</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
                
                <div>
                  <p className="text-muted-foreground text-sm">Narxi</p>
                  <p className="text-xl font-semibold">{course.price.toLocaleString()} so'm</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transition-transform hover:scale-110">
                    <Play size={24} className="text-primary-foreground ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Kurs haqida</h2>
            
            <div className="prose prose-invert max-w-none mb-10">
              <p>
                {course.fullDescription || 
                  "Bu kurs sizga SMM sohasida professional darajaga erishish uchun zarur bo'lgan barcha bilim va ko'nikmalarni beradi. Kursda nazariy ma'lumotlar bilan bir qatorda amaliy mashg'ulotlar ham mavjud bo'lib, ular orqali o'rganilgan bilimlarni mustahkamlashingiz mumkin."
                }
              </p>
              
              <p>
                Kurs davomida siz ijtimoiy tarmoqlar marketingining asosiy tamoyillari, kontent yaratish, targetlangan reklama, SMM strategiyasini ishlab chiqish va natijalarni tahlil qilish usullari bilan tanishasiz.
              </p>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Kursda nimalarni o'rganasiz</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {course.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-4">Darslar ro'yxati</h3>
            
            <div className="space-y-4 mb-10">
              {course.lessons.map((lesson, index) => (
                <div key={index} className="card p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-sm">{index + 1}</span>
                      </div>
                      <h4 className="font-medium">{lesson.title}</h4>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {lesson.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-4">Kimlar uchun</h3>
            
            <div className="prose prose-invert max-w-none mb-10">
              <ul>
                <li>SMMga qiziqqan yoshlar va mutaxassislar</li>
                <li>Frilanser bo'lishni xohlaganlar</li>
                <li>O'z biznesini ijtimoiy tarmoqlarda targ'ib qilmoqchi bo'lganlar</li>
                <li>Marketing bo'limida ishlaydigan xodimlar</li>
                <li>Digital marketing sohasiga qiziqqan har qanday inson</li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="card sticky top-24">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6">Kurs afzalliklari</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Video size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Video darslar</h4>
                      <p className="text-sm text-muted-foreground">
                        Yuqori sifatli video darslar va namoyishlar
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <BookOpen size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Materiallar</h4>
                      <p className="text-sm text-muted-foreground">
                        PDF shablonlar va qo'shimcha o'quv materiallari
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <MessageSquare size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Yopiq chat</h4>
                      <p className="text-sm text-muted-foreground">
                        O'quvchilar uchun maxsus guruh va qo'llab-quvvatlash
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Award size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sertifikat</h4>
                      <p className="text-sm text-muted-foreground">
                        Kursni muvaffaqiyatli yakunlash sertifikati
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Shield size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Umrbod kirish</h4>
                      <p className="text-sm text-muted-foreground">
                        Kurs materiallariga cheksiz kirish imkoniyati
                      </p>
                    </div>
                  </div>
                </div>
                
                <Link
                  to={`/checkout/${course.id}`}
                  className="btn btn-primary w-full"
                >
                  <span>Kursni sotib olish</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;