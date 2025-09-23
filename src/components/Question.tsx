import React, { useState, useEffect } from "react";

import { Button } from "./ui/button";
import supabase from "@/utils/supabase";
import type { QuestionTest } from "../types/testtypes";
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
      .select("id, question_text, subject, correct_answer");
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
        <ul>
          {question.map((item) => (
            <li key={item.id} className="text-center">
              <h1 className="font-bold">
                {item.question_text}{" "}
                <span className="text-blue-500">{item.subject}</span>
              </h1>
              <h4 className="text-green-500">{item.correct_answer}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Question;
