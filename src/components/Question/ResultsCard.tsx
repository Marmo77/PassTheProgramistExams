import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import type { QuestionType } from "@/types/types";
import type { QuestionEvaluation } from "@/hooks/QuestionResults";

const ResultsCard = ({ results }: { results: QuestionEvaluation[] }) => {
  return (
    <section className="mx-auto max-w-7xl py-12">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Results</h2>
        </CardHeader>
        <CardContent>
          {results.map((result, idx) => (
            <div key={idx}>
              <p>Question {result.pytanie}</p>
              <p>Answer: {result.twoja_odpowiedz}</p>
              <p>Correct Answer: {result.poprawna_odpowiedz}</p>
              <p>Is Correct: {result.isCorrect ? "Yes" : "No"}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default ResultsCard;
