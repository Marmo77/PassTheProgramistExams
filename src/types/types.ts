export type Question = {
  id: string;
  question_text: string;
  subject: string; // inf03 | inf04
  topics?: string[]; // algorytmy, bazy_danych, itp. - pod SEO
  correct_answer: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  answer_4: string;
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
