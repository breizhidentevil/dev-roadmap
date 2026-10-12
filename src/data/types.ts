export interface Lesson {
  id: string;
  title: string;
  description: string;
  path: string;
}

export type LessonKind = 'skill' | 'project';
export type CatalogFilter = LessonKind | 'course' | 'all';

export interface CourseCodeExample {
  title: string;
  language: string;
  code: string;
}

export interface CourseSection {
  title: string;
  body: string;
  examples?: CourseCodeExample[];
}

export interface CourseModule {
  id: string;
  title: string;
  summary: string;
  concepts: string[];
  exercise: string;
  sections?: CourseSection[];
  example?: {
    language: string;
    code: string;
  };
}

export interface CourseReference {
  title: string;
  url: string;
}

export interface Course {
  id: string;
  title: string;
  category: 'Langage' | 'Bibliothèque' | 'Runtime' | 'Base de données';
  tags: string[];
  description: string;
  level: string;
  duration: string;
  prerequisites: string[];
  objectives: string[];
  modules: CourseModule[];
  references?: CourseReference[];
  finalProject: {
    title: string;
    description: string;
    criteria: string[];
  };
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Catalog {
  sourceVersion: string;
  sourceArchive: string;
  chapters: Chapter[];
}
