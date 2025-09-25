export type QuestionType = {
  id: string;
  question_text: string;
  subject: string; // inf03 | inf04
  correct_answer: string;
  answer_a: string;
  answer_b: string;
  answer_c: string;
  answer_d: string;
  explanation?: string;
};
export type ExamInfo = {
  id: string;
  title: string;
  description: string;
  subject: string; // inf03 | inf04
  session: string; // styczeń | czerwiec
  year: number; // 2024, etc.
  topics?: string[]; // algorytmy, bazy_danych, itp. - pod SEO
  has_solutions?: boolean;
};
