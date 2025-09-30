import supabase from "../utils/supabase";

//```
//
// Get random questions from whole database (inf03 or inf04 based on 'subject' param)
// , shuffle them and return first 'limit' questions amount.
//
//```

export const getRandomQuestions = async (
  subject: string,
  limit: number = 40
) => {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("subject", subject);
  if (error) {
    console.log(error);
  }
  const shuffled = data?.sort(() => Math.random() - 0.5);
  const limited = shuffled?.slice(0, limit);
  return limited;
  // return data;
};
