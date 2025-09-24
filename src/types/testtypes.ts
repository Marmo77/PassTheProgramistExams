export interface Exam {
  id: string;
  title: string;
  session: string;
  year: number;
}

export interface QuestionTest {
  question_number: number;
  question_text: string;
  subject: string;
  answer_a: string;
  answer_b: string;
  answer_c: string;
  answer_d: string;
  correct_answer: string;
}
