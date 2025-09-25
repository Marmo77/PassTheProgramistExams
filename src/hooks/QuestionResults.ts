import type { QuestionType } from "@/types/types";

export type QuestionEvaluation = {
  pytanie_nr: number;
  zaznaczono: string | null;
  twoja_odpowiedz: string;
  poprawna_odpowiedz: string;
  isCorrect: boolean;
}; // podsumowanie w console.logu (pytanie, odpowiedź, user odpowiedź, poprawna, czy poprawna)

export const QuestionResults = (
  questions: QuestionType[],
  answers: (string | null)[]
) => {
  const results: QuestionEvaluation[] = questions.map((q, idx) => {
    const selected = answers[idx] ?? null;
    const isCorrect = selected !== null && selected === q.correct_answer;
    return {
      pytanie_nr: idx + 1,
      zaznaczono: selected,
      twoja_odpowiedz: answers[idx] ?? "",
      poprawna_odpowiedz: q.correct_answer,
      isCorrect,
    };
  });

  const summary = {
    total: questions.length,
    correct: results.filter((r) => r.isCorrect).length,
    incorrect: results.filter((r) => !r.isCorrect).length,
  };

  console.log("Exam results:", results);
  console.log("Summary:", summary);

  return { results, summary };
};
