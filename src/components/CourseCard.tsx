import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CourseType } from "../types";

interface CourseCardProps {
  course: CourseType;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="card"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/90 text-primary-foreground rounded-full">
            {course.level}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="mb-4 space-y-2">
          {course.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check
                size={16}
                className="text-primary mt-1 mr-2 flex-shrink-0"
              />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-muted-foreground text-sm">Narxi</p>
            <p className="text-xl font-semibold">
              {course.price.toLocaleString()} so'm
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={`/courses/${course.id}`}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Batafsil
            </Link>
            <Link
              to={`/checkout/${course.id}`}
              className="btn btn-primary py-2 px-4"
            >
              <span>Sotib olish</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
