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

export type ExamType = {
  id: string;
  title: string;
  description?: string;
  subject: string; // 'inf03' | 'inf04'
  session: string; // 'styczeń' | 'maj' | 'czerwiec' | 'sierpień'
  year: number;
  links?: string[]; // This is TEXT in your database, not string[]
  has_solution?: boolean;
  technologies?: string[];
  created_at?: string;
};

export type ReportType = {
  question_id: string;
  category: string;
  description: string;
};
