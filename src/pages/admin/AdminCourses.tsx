import { useState } from "react";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  MoreVertical,
  Eye,
  Download,
  Filter,
} from "lucide-react";
import { courses } from "../../data/courses";

const AdminCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("all");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === "all" || course.level === filterLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
        <h1 className="text-2xl font-bold">Kurslar</h1>

        <button className="btn btn-primary flex items-center gap-2">
          <Plus size={20} />
          <span>Yangi kurs</span>
        </button>
      </div>

      <div className="card p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Kurslarni qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <Filter
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="w-full sm:w-auto pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="all">Barcha darajalar</option>
                <option value="Boshlang'ich">Boshlang'ich</option>
                <option value="O'rta">O'rta</option>
                <option value="Professional">Professional</option>
              </select>
            </div>

            <button className="btn btn-outline flex items-center gap-2">
              <Download size={20} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Table for desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4">Kurs nomi</th>
                <th className="text-left py-3 px-4">Daraja</th>
                <th className="text-left py-3 px-4">Davomiyligi</th>
                <th className="text-right py-3 px-4">Narxi</th>
                <th className="text-center py-3 px-4">Amallar</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr
                  key={course.id}
                  className="border-b border-border hover:bg-muted/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {course.lessonsCount} ta dars
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                      {course.level}
                    </span>
                  </td>
                  <td className="py-4 px-4">{course.duration}</td>
                  <td className="py-4 px-4 text-right">
                    {course.price.toLocaleString()} so'm
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Eye size={18} className="text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Edit2 size={18} className="text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Trash2 size={18} className="text-destructive" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <MoreVertical
                          size={18}
                          className="text-muted-foreground"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for mobile */}
        <div className="md:hidden space-y-4">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-muted/30 p-4 rounded-lg border border-border"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{course.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {course.lessonsCount} ta dars • {course.duration}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {course.level}
                </span>
                <span className="text-sm font-bold">
                  {course.price.toLocaleString()} so'm
                </span>
              </div>

              <div className="flex items-center justify-end gap-2">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Eye size={18} className="text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Edit2 size={18} className="text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <Trash2 size={18} className="text-destructive" />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                  <MoreVertical size={18} className="text-muted-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCourses;
