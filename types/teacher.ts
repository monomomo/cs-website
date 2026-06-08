export interface TeacherStats {
  students: number;
  employment: string;
  rating: number;
  awards: number;
}

export interface Project {
  name: string;
  description: string;
  role: string;
}

export interface Achievement {
  type: "paper" | "patent" | "speech" | "award";
  title: string;
  description?: string;
}

export interface TechnicalLinks {
  github?: string;
  blog?: string;
  juejin?: string;
}

export interface Review {
  id: string;
  content: string;
  author: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  avatar: string;
  company: string;
  experience: string;
  stats: TeacherStats;
  introduction: string;
  expertise: string[];
  courses: string[];
  highlights: string[];
  links: TechnicalLinks;
  projects: Project[];
  achievements: Achievement[];
  reviews: Review[];
}