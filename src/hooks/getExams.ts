import supabase from "@/utils/supabase";
// src/hooks/getExams.ts
import type { ExamType } from "@/types/types";
import type { FilterOptions } from "@/components/Practice";

// export const getExams = async () => {
//   const { data, error } = await supabase
//     .from("exams")
//     .select("*")
//     .ilike("subject", "inf%")
//     .order("year", { ascending: false });

//   if (error) {
//     console.error(error);
//     return [];
//   }

//   return data;
// };

export const getFilteredExams = async (filters: FilterOptions) => {
  let query = supabase.from("exams").select("*").limit(9);

  // Subject filter
  if (filters.subject && filters.subject !== "all") {
    query = query.eq("subject", filters.subject);
  }

  // Year filter
  if (filters.year && filters.year !== "all") {
    query = query.eq("year", parseInt(filters.year));
  }

  // Search filter (min 3 characters)
  if (filters.search && filters.search.length >= 3) {
    query = query.ilike("title", `%${filters.search}%`);
  }

  // Language filter (requires technologies column in database)
  if (filters.technologies && filters.technologies !== "all") {
    // This assumes you have a 'technologies' array column
    query = query.contains("technologies", [filters.technologies]);
  }

  // Sorting
  switch (filters.sort) {
    case "newest":
      query = query.order("year", { ascending: false });
      break;
    case "oldest":
      query = query.order("year", { ascending: true });
      break;
    case "title":
      query = query.order("title", { ascending: true });
      break;
    default:
      query = query.order("year", { ascending: false });
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching filtered exams:", error);
    return [];
  }

  return data as ExamType[];
};

// Keep your original getExams for backward compatibility
export const getExams = async (subject?: string) => {
  let query = supabase
    .from("exams")
    .select("*")
    .order("year", { ascending: false });

  if (subject) {
    query = query.eq("subject", subject);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching exams:", error);
    return [];
  }

  return data as ExamType[];
};
