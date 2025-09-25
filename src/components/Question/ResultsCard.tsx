import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import type { QuestionType } from "@/types/types";
import type { QuestionEvaluation } from "@/hooks/QuestionResults";

const ResultsCard = ({
  results,
  questions,
}: {
  results: QuestionEvaluation[];
  questions: QuestionType[];
}) => {
  return (
    <section className="mx-auto max-w-7xl py-12">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Wyniki</h2>
        </CardHeader>
        <CardContent className="space-y-6">
          {results.map((result, idx) => {
            const q = questions[idx];
            if (!q) return null;

            const options: { key: "A" | "B" | "C" | "D"; text: string }[] = [
              { key: "A", text: q.answer_a },
              { key: "B", text: q.answer_b },
              { key: "C", text: q.answer_c },
              { key: "D", text: q.answer_d },
            ];

            return (
              <div key={idx} className="px-3 py-2 border rounded-md">
                <div className="mb-3">
                  <h3 className="text-lg font-medium">
                    {idx + 1}. {q.question_text}
                  </h3>
                </div>

                <div className="flex flex-col gap-2 px-2">
                  {options.map((opt) => {
                    const isCorrectOption =
                      opt.key === result.poprawna_odpowiedz;
                    const isUserOption = opt.key === result.twoja_odpowiedz;
                    const wrongUserPick = isUserOption && !result.isCorrect;

                    const extra = isCorrectOption
                      ? "border-green-500 bg-green-50 text-green-600"
                      : wrongUserPick
                      ? "border-red-500 bg-red-50 text-red-600"
                      : "";

                    return (
                      <Button
                        key={opt.key}
                        variant={"questionButton"}
                        size="question"
                        className={`items-start justify-start ${extra}`}
                        disabled
                      >
                        {opt.key}. {opt.text}
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
};

export default ResultsCard;
