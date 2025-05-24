import { useParams, Link, useNavigate } from "react-router-dom";
import { courseModules } from "../data/courses";

export default function LessonPage() {
  const { id } = useParams(); // id: "1-1", "1-2", "2-1" kabi
  const navigate = useNavigate();

  // Barcha darslarni bitta massivga yig'amiz
  const allLessons = courseModules.flatMap((modul) => modul.lessons);
  const selectedLesson = allLessons.find((lesson) => lesson.id === id);

  const currentModuleIndex = courseModules.findIndex((modul) =>
    modul.lessons.some((lesson) => lesson.id === id)
  );
  const currentModule = courseModules[currentModuleIndex];

  const currentIndex = allLessons.findIndex((lesson) => lesson.id === id);
  const nextLesson = allLessons[currentIndex + 1];

  // Keyingi modul va uning birinchi darsi
  const nextModule = courseModules[currentModuleIndex + 1];
  const firstLessonOfNextModule = nextModule?.lessons[0];

  if (!selectedLesson || !currentModule) {
    return (
      <div className="text-white text-center py-10 text-xl">
        Dars topilmadi yoki mavjud emas.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen  bg-black text-white pt-[60px]">
      {/* Yon panel */}
      <div className="border-r border-gray-700 p-6 space-y-4 pt-10 bg-[#1a1919] min-w-[300px]">
        <h2 className="text-xl font-bold">{currentModule.title}</h2>
        <ul className="space-y-2">
          {currentModule.lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                to={`/lesson/${lesson.id}`}
                className={`block p-2 rounded ${
                  lesson.id === id
                    ? "bg-[#00FFD4] text-[#000]"
                    : "hover:bg-gray-800"
                }`}
              >
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Video va keyingi dars tugmasi uchun konteyner */}
      <div className="flex-1  p-8 relative">
        <div className="w-[950px]">
          {selectedLesson.videoUrl ? (
            <video
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              className="w-full rounded-lg mb-6"
            >
              <source src={selectedLesson.videoUrl} type="video/mp4" />
              Brauzeringiz video formatini qo‘llab-quvvatlamaydi.
            </video>
          ) : (
            <p>Video mavjud emas</p>
          )}
          <h2 className="text-2xl font-bold mb-4">{selectedLesson.title}</h2>
          <p className="text-gray-400">
            Davomiyligi: {selectedLesson.duration}
          </p>
        </div>

        {/* Tugmalar */}
        {nextLesson ? (
          <button
            onClick={() => navigate(`/lesson/${nextLesson.id}`)}
            className="absolute left-[850px] bottom-11 bg-[#00FFD4] text-black px-6 py-3 rounded hover:bg-[#00e6bd] font-semibold transition"
          >
            Keyingi dars →
          </button>
        ) : firstLessonOfNextModule ? (
          <button
            onClick={() => navigate(`/lesson/${firstLessonOfNextModule.id}`)}
            className="absolute left-[850px] bottom-11 bg-[#00FFD4] text-black px-6 py-3 rounded hover:bg-[#00e6bd] font-semibold transition"
          >
            Modulni yakunlash →
          </button>
        ) : (
          <p className="absolute left-[850px] bottom-11 text-gray-400">
            Bu oxirgi dars
          </p>
        )}
      </div>
    </div>
  );
}
