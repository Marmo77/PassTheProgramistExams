import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import type { QuestionType } from "@/types/types";
import type { QuestionEvaluation } from "@/hooks/QuestionResults";
import { Badge } from "../ui/badge";

const ResultsCard = ({
  results,
  questions,
  summary,
}: {
  results: QuestionEvaluation[];
  questions: QuestionType[];
  summary: { total: number; correct: number; incorrect: number };
}) => {
  //   const resultPercent =
  //     results.filter((r) => r.isCorrect).length / results.length;
  const resultPercent = summary.correct / summary.total;
  const resultPoints = resultPercent * 100;
  return (
    <section className="mx-auto max-w-7xl py-12">
      <Card>
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Wyniki</h2>
          <div className="flex justify-center items-center">
            <h2 className="text-lg font-medium">Uzyskany Wynik:</h2>
            <Badge
              variant={resultPercent >= 0.5 ? "default" : "destructive"}
              className={`text-lg ${
                resultPercent >= 0.5 ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {resultPercent * 100}%
            </Badge>
          </div>
          <div>
            <h2>
              {summary.correct} / {summary.total}
            </h2>
          </div>
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
                  {result.zaznaczono === null && (
                    <Badge variant={"destructive"}>
                      Nie zaznaczono odpowiedzi
                    </Badge>
                  )}
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
                        variant={"outline"}
                        size="question"
                        className={`items-start justify-start ${extra}`}
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
