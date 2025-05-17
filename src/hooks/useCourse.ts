import { courses } from '../data/courses';

export function useCourse(id: number | undefined) {
  if (id == null) return undefined;
  return courses.find(c => c.id === id);
}
