import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

const FeaturedCourses = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { current } = containerRef;
      const scrollAmount =
        direction === "left" ? -current.offsetWidth : current.offsetWidth;

      current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update scroll buttons state after scrolling
      setTimeout(() => {
        if (current) {
          setCanScrollLeft(current.scrollLeft > 0);
          setCanScrollRight(
            current.scrollLeft < current.scrollWidth - current.offsetWidth
          );
        }
      }, 300);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { current } = containerRef;
      setCanScrollLeft(current.scrollLeft > 0);
      setCanScrollRight(
        current.scrollLeft < current.scrollWidth - current.offsetWidth - 10
      );
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-3">Eng mashhur kurslar</h2>
            <p className="text-muted-foreground max-w-xl">
              SMM sohasida eng yaxshi bilim va ko'nikmalarni egallab, o'z
              biznesingizni rivojlantiring
            </p>
          </div>

          <div className="flex items-center gap-2 self-end">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                canScrollLeft
                  ? "border-border hover:bg-secondary text-foreground"
                  : "border-border/50 text-foreground/30 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                canScrollRight
                  ? "border-border hover:bg-secondary text-foreground"
                  : "border-border/50 text-foreground/30 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex space-x-6" style={{ minWidth: "max-content" }}>
            {courses.map((course) => (
              <div key={course.id} className="w-full min-w-[320px] max-w-sm">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
