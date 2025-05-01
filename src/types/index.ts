export interface CourseType {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  price: number;
  level: string;
  duration: string;
  lessonsCount: number;
  features: string[];
  lessons: LessonType[];
}

export interface LessonType {
  title: string;
  duration: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  course: string;
}