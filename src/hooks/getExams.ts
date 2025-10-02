import supabase from "@/utils/supabase";

export const getExams = async () => {
  const { data, error } = await supabase.from("exams").select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};
