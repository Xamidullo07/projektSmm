export type CourseType = {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  price: number;
  image: string;
  duration: string;
  level: string;
  lessonsCount: number;
  features: string[];

  modules: {
    title: string;
    lessons: {
      id: number;
      title: string;
      duration: string;
      videoUrl?: string;
    }[];
  }[];
};

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
