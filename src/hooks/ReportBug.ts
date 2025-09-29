import type { ReportType } from "@/types/types";
import supabase from "../utils/supabase";

export const ReportBug = async (report: ReportType) => {
  const { data, error } = await supabase.from("reports").insert([report]);
  if (error) {
    console.log(error);
  }
  return data;
};
