export interface Exam {
  id: string;
  title: string;
  session: string;
  year: number;
}

export interface QuestionTest {
  id: string;
  question_text: string;
  subject: string;
  correct_answer: string;
}
