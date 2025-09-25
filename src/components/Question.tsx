import React, { useState, useEffect } from "react";

import { Button } from "./ui/button";
import supabase from "@/utils/supabase";
import type { QuestionTest } from "../types/testtypes";
import QuestionCard from "./Question/QuestionCard";
const Question = ({
  question,
  setQuestion,
}: {
  question: QuestionTest[];
  setQuestion: React.Dispatch<React.SetStateAction<QuestionTest[]>>;
}) => {
  useEffect(() => {
    setQuestion(question);
  }, [question]);

  const [isLoading, setIsLoading] = useState(true);
  const [Loaded, setLoaded] = useState(false);

  const LoadQuestions = async () => {
    if (Loaded) return;
    setIsLoading(true);
    const { data: question, error } = await supabase
      .from("questions")
      .select(
        "id, question_number, question_text, subject, answer_a, answer_b, answer_c, answer_d, correct_answer"
      )
      .limit(1);
    setQuestion(question as QuestionTest[]);
    setLoaded(true);
    setIsLoading(false);
    if (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center flex-col gap-6 mt-6">
      <Button onClick={LoadQuestions}>Load Questions</Button>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          <QuestionCard />
          {question.map((item) => (
            <li key={item.question_number} className="text-center">
              <h1 className="font-bold">
                {item.question_number}. {item.question_text}{" "}
                <span className="text-blue-500">{item.subject}</span>
              </h1>
              <ul>
                {/* <li
                  className={
                    item.correct_answer === "A" ? "text-green-500" : ""
                  }
                >
                  {item.answer_a}
                </li>
                <li
                  className={
                    item.correct_answer === "B" ? "text-green-500" : ""
                  }
                >
                  {item.answer_b}
                </li>
                <li
                  className={
                    item.correct_answer === "C" ? "text-green-500" : ""
                  }
                >
                  {item.answer_c}
                </li>
                <li
                  className={
                    item.correct_answer === "D" ? "text-green-500" : ""
                  }
                >
                  {item.answer_d}
                </li> */}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Question;
