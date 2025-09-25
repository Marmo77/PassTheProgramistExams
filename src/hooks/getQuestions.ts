import supabase from "../utils/supabase";
import type { QuestionType } from "@/types/types";

export const getQuestions = async (subject: string, limit: number = 40) => {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("subject", subject)
    .limit(limit);
  if (error) {
    console.log(error);
  }
  return data;
};
