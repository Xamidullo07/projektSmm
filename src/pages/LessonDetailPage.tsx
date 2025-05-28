import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import { ArrowLeft, ChevronDown, ChevronRight, PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";

const LessonDetailPage = () => {
  const { courseId, moduleIndex, lessonIndex } = useParams<{
    courseId: string;
    moduleIndex: string;
    lessonIndex: string;
  }>();

  const course = courses.find((c) => c.id === Number(courseId));
  const currentModule = course?.modules?.[Number(moduleIndex)];
  const currentLesson = currentModule?.lessons?.[Number(lessonIndex)];

  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(
    Number(moduleIndex)
  );

  const noteKey = `note-${courseId}-${moduleIndex}-${lessonIndex}`;
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");

  useEffect(() => {
    const storedNote = localStorage.getItem(noteKey);
    if (storedNote) setSavedNote(storedNote);
  }, [noteKey]);

  if (!course || !currentModule || !currentLesson) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Dars topilmadi</h1>
        <Link to={`/course/${courseId}`} className="btn btn-primary">
          Kursga qaytish
        </Link>
      </div>
    );
  }

  const nextLessonIndex = Number(lessonIndex) + 1;
  const nextModuleIndex = Number(moduleIndex) + 1;
  const isLastLesson = nextLessonIndex >= currentModule.lessons.length;
  const isLastModule = nextModuleIndex >= course.modules.length;

  let nextLessonPath = "";
  if (!isLastLesson) {
    nextLessonPath = `/course/${courseId}/lesson/${moduleIndex}/${nextLessonIndex}`;
  } else if (!isLastModule) {
    nextLessonPath = `/course/${courseId}/lesson/${nextModuleIndex}/0`;
  }

  return (
    <div className="pt-16 h-screen overflow-hidden bg-[#0f0f0f] text-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-[300px] bg-[#1c1c1c] h-[300px] lg:h-full overflow-y-auto border-r border-gray-800">
        <div className="p-4 pt-8 text-sm font-semibold">STANDART</div>
        {course.modules.map((mod, modIndex) => (
          <div key={modIndex} className="border-b border-gray-800">
            <button
              onClick={() =>
                setOpenModuleIndex(
                  openModuleIndex === modIndex ? null : modIndex
                )
              }
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-[#222] bg-black/40 font-medium"
            >
              <span>
                {modIndex + 1}-Modul. {mod.title}
              </span>
              {openModuleIndex === modIndex ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {openModuleIndex === modIndex && (
              <div>
                {mod.lessons.map((les, lesIndex) => {
                  const isActive =
                    Number(moduleIndex) === modIndex &&
                    Number(lessonIndex) === lesIndex;
                  return (
                    <Link
                      key={lesIndex}
                      to={`/course/${courseId}/lesson/${modIndex}/${lesIndex}`}
                      className={`flex items-center px-5 py-2 text-sm ${
                        isActive
                          ? "bg-[#343434] text-white font-semibold"
                          : "text-gray-400 hover:bg-[#222]"
                      }`}
                    >
                      <PlayCircle size={14} className="mr-2" />№{modIndex + 1}
                      {lesIndex + 1}. {les.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        <Link
          to={`/course/${courseId}`}
          className="text-sm text-gray-400 mb-2 hover:underline flex items-center"
        >
          <ArrowLeft className="mr-1" size={16} />
          Kursga qaytish
        </Link>

        {/* Video Component */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-4 bg-black relative">
          <video
            src={currentLesson.videoUrl}
            controls
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 text-sm text-gray-400 gap-2">
          <div className="space-x-4">
            <span>📚 Modul: {currentModule.title}</span>
            <span>🎓 Kurs: {course.title}</span>
            <span>⏱ Davomiyligi: {currentLesson.duration}</span>
          </div>

          {nextLessonPath && (
            <Link
              to={nextLessonPath}
              className="px-4 py-2 bg-[#00FFD4] hover:bg-[#00ddbb] text-black font-semibold text-xs rounded"
            >
              Keyingi dars
            </Link>
          )}
        </div>

        <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
      </div>

      {/* Notes Panel */}
      <div className="w-full lg:w-[300px] bg-[#1c1c1c] h-[300px] lg:h-full border-t lg:border-t-0 lg:border-l border-gray-800 p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Eslatmalar</h2>
        <div className="flex-1 overflow-y-auto text-gray-400 whitespace-pre-wrap mb-2">
          {savedNote || "Eslatmalar yo'q"}
        </div>

        <div className="flex flex-col gap-2">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Eslatma yozing..."
            rows={2}
            className="w-full px-3 py-1.5 rounded bg-[#2a2a2a] text-white text-sm outline-none resize-none"
          />
          <button
            onClick={() => {
              localStorage.setItem(noteKey, note);
              setSavedNote(note);
              setNote("");
            }}
            className="px-4 py-2 bg-[#00FFD4] hover:bg-[#00ddbb] text-black font-semibold text-sm rounded"
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonDetailPage;
