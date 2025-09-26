import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { getQuestions } from "@/hooks/getQuestions";
import type { QuestionType } from "@/types/types";
import { Button } from "../ui/button";
import { QuestionResults } from "@/hooks/QuestionResults";
import type { QuestionEvaluation } from "@/hooks/QuestionResults";
import { useNavigate } from "react-router-dom";
import LoadingQuestions from "./LoadingQuestions";

const Question = ({ type }: { type: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [question, setQuestion] = useState<QuestionType[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [results, setResults] = useState<QuestionEvaluation[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // będzie używane gdy dodamy inne tryby (jeśli true -> gramy dalej, false -> koniec gry)

  const navigate = useNavigate();

  useEffect(() => {
    console.log("typ pytań: ", type);
    getQuestions("inf03", 10)
      .then((res) => {
        // Pobieranie X pytań z Bazy Danych
        const q = res as QuestionType[];
        setQuestion(q);
        setAnswers(Array(q.length).fill(null)); // tworzy tablice o długości q.length i wypełnia ją nullami (jeśli nie zaznaczono odpowiedzi to jest null)
        setCurrentQuestion(1); //Wczytuje na start od pierwszego pytania
        setSelectedAnswer(null); //Resetuje zaznaczoną odpowiedź
        // setIsCorrect(null); //Resetuje poprawność odpowiedzi
      })
      .catch((e) => {
        console.error("Failed to load questions", e);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1300);
      });
    console.log("load", isLoading);
  }, []);
  const handleNextQuestion = () => {
    // Przechodzi do następnego pytania
    const next = Math.min(currentQuestion + 1, question.length || 1); // Sprawdza czy nie wyjdzie poza zakres
    setCurrentQuestion(next);
    setSelectedAnswer(answers[next - 1] ?? null); // Ustawia zaznaczoną odpowiedź
    // setIsCorrect(null); // Resetuje poprawność odpowiedzi
  };

  const handlePreviousQuestion = () => {
    // Przechodzi do poprzedniego pytania
    if (currentQuestion > 1) {
      const prev = currentQuestion - 1;
      setCurrentQuestion(prev);
      setSelectedAnswer(answers[prev - 1] ?? null); // Ustawia zaznaczoną odpowiedź
      // setIsCorrect(null); // Resetuje poprawność odpowiedzi
    }
  };
  const handleSelect = (answer: string) => {
    setSelectedAnswer(answer); // Ustawia zaznaczoną odpowiedź
    setAnswers((prev) => {
      const copy = prev.slice();
      copy[currentQuestion - 1] = answer;
      return copy;
    });
  };

  const handleSideBarSelect = (questionNumber: number) => {
    // Przechodzi do pytania z listy
    setCurrentQuestion(questionNumber);
    setSelectedAnswer(answers[questionNumber - 1] ?? null); // Ustawia zaznaczoną odpowiedź (jesli jest)
    // setIsCorrect(null); // Resetuje poprawność odpowiedzi
  };
  const handleCheck = () => {
    console.log("Check");
    console.log(answers);
  };

  const handleFinish = () => {
    const { results, summary } = QuestionResults(question, answers);
    localStorage.setItem(
      "results_inf03",
      JSON.stringify({
        results,
        summary,
        questions: question,
      })
    );
    navigate("/results");
  };
  return (
    <>
      {isLoading ? (
        <LoadingQuestions />
      ) : (
        <section className="mx-auto max-w-7xl py-12">
          <div className="grid grid-cols-6 gap-12">
            <div className="col-span-4">
              <QuestionCard
                question={question}
                questionNumber={currentQuestion}
                selectedAnswer={selectedAnswer}
                onSelect={handleSelect} // replace setSelectedAnswer
              />
            </div>
            <div className="col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <h2 className="text-2xl font-bold">
                    Question {currentQuestion}
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-8 gap-4">
                    {question.map((item, idx) => {
                      const answered =
                        answers[idx] !== null && answers[idx] !== undefined; // Sprawdza czy odpowiedź jest zaznaczona
                      const isCurrent = currentQuestion === idx + 1; // Sprawdza czy jest aktualne pytanie
                      return (
                        <Button
                          key={idx}
                          variant={"questionButtonActive"}
                          onClick={() => handleSideBarSelect(idx + 1)}
                          className={
                            isCurrent
                              ? "border-blue-500"
                              : answered
                              ? "border-green-500 bg-green-50 text-green-600"
                              : ""
                          }
                        >
                          {idx + 1}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
                <CardFooter>{""}</CardFooter>
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
                {currentQuestion === question.length ? (
                  <Button
                    variant={"destructive"}
                    className="select-none cursor-pointer hover:scale-95 transition-all duration-300"
                    onClick={handleFinish}
                  >
                    Zakończ
                  </Button>
                ) : (
                  <Button
                    onClick={handleNextQuestion}
                    className="select-none cursor-pointer hover:scale-95 active:scale-75 transition-all duration-300"
                    disabled={currentQuestion === question.length}
                  >
                    Następne
                  </Button>
                )}
              </div>
            </div>
            <div className="col-span-2">
              <Card className="">
                <Button
                  size={"lg"}
                  className="w-32 bg-chart-1 hover:bg-chart-3 cursor-pointer"
                  onClick={handleCheck}
                >
                  Check ✅
                </Button>
              </Card>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Question;
