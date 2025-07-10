import { useMemo } from "react";
import { courses } from "../data/courses";

export function useCourse(
  language: string | undefined,
  id: number | undefined
) {
  return useMemo(() => {
    if (!language || !id) return undefined;

    const courseList = courses[language as keyof typeof courses];
    return courseList?.find((c) => c.id === id);
  }, [language, id]);
}
