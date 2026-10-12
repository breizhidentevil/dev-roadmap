export interface Lesson {
  id: string;
  title: string;
  description: string;
  path: string;
}

export type LessonKind = 'skill' | 'project';

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
