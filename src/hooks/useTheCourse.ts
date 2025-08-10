import { useMemo } from "react";
import { courses } from "../data/courses";

export function useTheCourse(
  language: string | undefined,

) {
  return useMemo(() => {
    if (!language) return undefined;
    return courses[language as keyof typeof courses] ?? [];
  }, [language]);
}
