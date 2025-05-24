export interface CourseType {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  price: number;
  level: string;
  // price1: number;
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

export interface currentModule {
  id: number;
  title: string;
  duration: number;
}
