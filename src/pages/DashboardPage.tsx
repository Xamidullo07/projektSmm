import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Book,
  FileText,
  Clock,
  CheckCircle,
  User,
  Settings,
  LogOut,
  Lock,
} from "lucide-react";
import { courses } from "../data/courses";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("courses");

  useEffect(() => {
    // Update page title
    document.title = "Shaxsiy kabinet - Abdulloh SMM";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const enrolledCourses = courses.slice(0, 2);

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                  <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Abdulloh Tohiriy</h3>
                  <p className="text-sm text-muted-foreground">
                    abdulloh@example.com
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab("courses")}
                  className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${
                    activeTab === "courses"
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  <Book size={18} />
                  <span>Mening kurslarim</span>
                </button>

                <button
                  onClick={() => setActiveTab("profile")}
                  className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${
                    activeTab === "profile"
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  <User size={18} />
                  <span>Profilim</span>
                </button>

                <button
                  onClick={() => setActiveTab("settings")}
                  className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${
                    activeTab === "settings"
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  <Settings size={18} />
                  <span>Sozlamalar</span>
                </button>

                <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors">
                  <LogOut size={18} />
                  <span>Chiqish</span>
                </button>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold mb-4">Statistika</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">
                      Tugallangan darslar
                    </span>
                    <span>12/36</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[33%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">
                      Sotib olingan kurslar
                    </span>
                    <span>2</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Sertifikatlar</span>
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            {activeTab === "courses" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Mening kurslarim</h2>

                {enrolledCourses.length > 0 ? (
                  <div className="space-y-6">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="card overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-1/3 h-48 md:h-auto">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 w-full md:w-2/3">
                            <h3 className="text-xl font-semibold mb-2">
                              {course.title}
                            </h3>
                            <div className="flex items-center text-sm text-muted-foreground mb-4">
                              <Clock size={16} className="mr-1" />
                              <span>{course.duration}</span>
                              <span className="mx-2">•</span>
                              <Book size={16} className="mr-1" />
                              <span>{course.lessonsCount} ta dars</span>
                            </div>

                            <div className="mb-4">
                              <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-muted-foreground">
                                  Progress
                                </span>
                                <span>{Math.floor(Math.random() * 100)}%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary"
                                  style={{
                                    width: `${Math.floor(
                                      Math.random() * 100
                                    )}%`,
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                              <Link
                                to={`/courses/${course.id}`}
                                className="btn btn-outline py-2"
                              >
                                Kursga o'tish
                              </Link>
                              <button className="btn btn-primary py-2">
                                <Play size={16} className="mr-1" />
                                Davom ettirish
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="card p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                      <Book size={24} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Kurslar topilmadi
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Siz hali hech qanday kursni sotib olmadingiz
                    </p>
                    <Link to="/courses" className="btn btn-primary">
                      Kurslarni ko'rish
                    </Link>
                  </div>
                )}

                {enrolledCourses.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-xl font-bold mb-6">
                      Oxirgi ko'rilgan darslar
                    </h3>

                    <div className="space-y-4">
                      {enrolledCourses[0].lessons
                        .slice(0, 3)
                        .map((lesson, index) => (
                          <div key={index} className="card p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                                  <Play
                                    size={20}
                                    className="text-primary ml-1"
                                  />
                                </div>
                                <div>
                                  <h4 className="font-medium">
                                    {lesson.title}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {enrolledCourses[0].title}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                  {lesson.duration}
                                </span>
                                {index === 0 && (
                                  <CheckCircle
                                    size={16}
                                    className="text-primary"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">
                    Tavsiya etilgan kurslar
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {courses.slice(2, 4).map((course) => (
                      <div key={course.id} className="card overflow-hidden">
                        <div className="aspect-video relative">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                          <div className="absolute bottom-3 left-3">
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                              {course.level}
                            </span>
                          </div>
                        </div>

                        <div className="p-4">
                          <h4 className="font-medium mb-1">{course.title}</h4>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {course.description}
                          </p>

                          <div className="flex items-end justify-between">
                            <div>
                              <p className="text-xs text-muted-foreground">
                                Narxi
                              </p>
                              <p className="font-semibold">
                                {course.price.toLocaleString()} so'm
                              </p>
                            </div>

                            <Link
                              to={`/courses/${course.id}`}
                              className="btn btn-outline py-1 px-3 text-sm"
                            >
                              Batafsil
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Mening profilim</h2>

                <div className="card p-6 mb-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary">
                        <img
                          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                        <Settings size={14} />
                      </button>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        Abdulloh Tohiriy
                      </h3>
                      <p className="text-muted-foreground">O'rganuvchi</p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="text-lg font-semibold mb-6">
                    Shaxsiy ma'lumotlar
                  </h3>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          To'liq ism
                        </label>
                        <input
                          type="text"
                          value="Abdulloh Tohiriy"
                          readOnly
                          className="w-full px-4 py-2 bg-muted border border-border rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value="abdulloh@example.com"
                          readOnly
                          className="w-full px-4 py-2 bg-muted border border-border rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Telefon
                        </label>
                        <input
                          type="text"
                          value="+998 90 123 45 67"
                          readOnly
                          className="w-full px-4 py-2 bg-muted border border-border rounded-lg"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Ro'yxatdan o'tish sanasi
                        </label>
                        <input
                          type="text"
                          value="12 Aprel, 2023"
                          readOnly
                          className="w-full px-4 py-2 bg-muted border border-border rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="btn btn-primary">
                        Ma'lumotlarni tahrirlash
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Sozlamalar</h2>

                <div className="card p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-6">
                    Parolni o'zgartirish
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Joriy parol
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          className="w-full px-4 py-2 bg-muted border border-border rounded-lg pr-10"
                          placeholder="Joriy parolingizni kiriting"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <Eye size={18} />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Yangi parol
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          className="w-full px-4 py-2 bg-muted border border-border rounded-lg pr-10"
                          placeholder="Yangi parolingizni kiriting"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <Eye size={18} />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Yangi parolni tasdiqlash
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          className="w-full px-4 py-2 bg-muted border border-border rounded-lg pr-10"
                          placeholder="Yangi parolingizni qayta kiriting"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <Eye size={18} />
                        </button>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button className="btn btn-primary">Saqlash</button>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="text-lg font-semibold mb-6">Xabarnomalar</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2">
                      <div>
                        <h4 className="font-medium">
                          Yangi darslar haqida xabarnoma
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Yangi darslar qo'shilganda xabar olish
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <div>
                        <h4 className="font-medium">Kurs yangilanishlari</h4>
                        <p className="text-sm text-muted-foreground">
                          Kurslar yangilanganda xabar olish
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <div>
                        <h4 className="font-medium">Yangi kurslar</h4>
                        <p className="text-sm text-muted-foreground">
                          Yangi kurslar qo'shilganda xabar olish
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>

                    <div className="pt-2">
                      <button className="btn btn-primary">Saqlash</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
