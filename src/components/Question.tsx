import { useEffect, useState } from "react";
import QuestionCard from "./Question/QuestionCard";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { getQuestions } from "@/hooks/getQuestions";
import type { QuestionType } from "@/types/types";
import { Button } from "./ui/button";

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
  useEffect(() => {
    getQuestions("inf03", 10).then((res) => setQuestion(res as QuestionType[]));
  }, []);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  return (
    <section className="mx-auto max-w-7xl py-12">
      <div className="grid grid-cols-6 gap-12">
        <div className="col-span-4">
          <QuestionCard question={question} questionNumber={currentQuestion} />
        </div>
        <div className="col-span-2">
          <Card className="h-full">
            <CardHeader></CardHeader>
            <CardContent>00:00</CardContent>
            <CardFooter>End</CardFooter>
          </Card>
        </div>
        <div className="col-span-4">
          <div className="flex justify-between px-2">
            <Button
              variant={"outline"}
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 1}
              className="select-none cursor-pointer hover:scale-95 active:scale-75 transition-all duration-300"
            >
              Poprzednie
            </Button>
            <Button
              onClick={handleNextQuestion}
              className="select-none cursor-pointer hover:scale-95 active:scale-75 transition-all duration-300"
              disabled={currentQuestion === question.length}
            >
              Następne
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
