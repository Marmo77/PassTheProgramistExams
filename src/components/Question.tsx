import React, { useEffect, useState } from "react";
import QuestionCard from "./Question/QuestionCard";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { getQuestions } from "@/hooks/getQuestions";
import type { QuestionType } from "@/types/types";

const Question = () => {
  const [question, setQuestion] = useState<QuestionType[]>([
    {
      id: "1",
      question_text: "Jaki jest najdłuższy wiatr w świecie?",
      subject: "inf03",
      correct_answer: "A",
      answer_a: "halny",
      answer_b: "mcony",
      answer_c: "wali",
      answer_d: "konin",
    },
  ]);
  //   useEffect(() => {
  //     getQuestions("inf03").then((res) => setQuestion(res as QuestionType[]));
  //   }, []);

  return (
    <section className="mx-auto max-w-7xl py-12">
      <div className="grid grid-cols-6 gap-12">
        <div className="col-span-4">
          <QuestionCard question={question} />
        </div>
        <div className="col-span-2">
          <Card className="h-full">
            <CardHeader></CardHeader>
            <CardContent>00:00</CardContent>
            <CardFooter>End</CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Question;
