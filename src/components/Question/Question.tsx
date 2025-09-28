import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { Card, CardContent, CardHeader } from "../ui/card";
import { getQuestions } from "@/hooks/getQuestions";
import type { QuestionType } from "@/types/types";
import { Button } from "../ui/button";
import { QuestionResults } from "@/hooks/QuestionResults";
import { useNavigate } from "react-router-dom";
import LoadingQuestions from "./LoadingQuestions";
import { useParams } from "react-router-dom";
import { ChevronLeft, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import NoQuestions from "./NoQuestions";
import { Progress } from "../ui/progress";
import ProgressNavigation from "./ProgressNavigation";
import Timer from "./Timer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import ErrorTestComponent from "../ErrorTestComponent";
// { type }: { type: string }
const Question = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [question, setQuestion] = useState<QuestionType[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // będzie używane gdy dodamy inne tryby (jeśli true -> gramy dalej, false -> koniec gry)

  // Timer
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 * 60 = 3600 sekund = 1 godzina

  const navigate = useNavigate();

  // get type from params
  const params = useParams<string>();
  const exam_type: string = params.type ?? "inf03";

  // asnwered count
  const answeredCount = answers.filter((answer) => answer !== null).length;

  useEffect(() => {
    // console.log("typ pytań: ", type);
    getQuestions(exam_type, 10)
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
    // console.log("load", isLoading);
  }, [exam_type]);
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

  const handleFinish = () => {
    try {
      const DoingTime = Math.round(60 * 60 - timeLeft);
      const { results, summary } = QuestionResults(
        question,
        answers,
        DoingTime
      );
      const exam_type_result = "results_" + exam_type;
      localStorage.setItem(
        exam_type_result,
        JSON.stringify({
          results,
          summary,
          questions: question,
          time: DoingTime,
        })
      );
      navigate("/theory/results/" + exam_type);
    } catch (error) {
      console.error("Error finishing quiz:", error);
    }
  };

  // handle time up
  useEffect(() => {
    if (timeLeft === 0) {
      handleFinish();
    }
  }, [timeLeft]);
  return (
    <>
      {isLoading ? (
        <LoadingQuestions exam_type={exam_type} />
      ) : question.length === 0 ? (
        <NoQuestions exam_type={exam_type} />
      ) : (
        <section className="mx-auto max-w-7xl max-xl:px-12 max-lg:px-4 max-md:px-2">
          {/* <ErrorTestComponent /> -- test error handling */}
          {/* PROGRESS BAR */}
          <ProgressNavigation
            currentQuestion={currentQuestion}
            question={question}
            exam_type={exam_type}
          />
          {/* MAIN */}
          <div className="flex flex-col lg:flex-row gap-8 pt-2">
            {/* Main Questions + Navigation */}
            <div className="flex-1 space-y-8">
              <QuestionCard
                question={question}
                questionNumber={currentQuestion}
                selectedAnswer={selectedAnswer}
                onSelect={handleSelect} // replace setSelectedAnswer
              />
              {/* Navigation Buttons */}
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
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant={"destructive"}
                        className="select-none cursor-pointer hover:scale-95 transition-all duration-300"
                        // onClick={handleFinish}
                      >
                        Zakończ
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Napewno chcesz zakończyć ten egzamin?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Odpowiedziałeś na{" "}
                          {answeredCount === question.length
                            ? "wszystkie pytania!"
                            : answeredCount + "/" + question.length + " pytań."}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Powrót</AlertDialogCancel>
                        <AlertDialogAction onClick={handleFinish}>
                          Zakończ
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
            {/* Sidebar | Questions Map | Timer*/}
            <div className="lg:w-72 space-y-6">
              {/* Timer */}
              <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
              <Card className="lg:block hidden">
                <CardHeader>
                  <h2 className="text-lg">Pytania</h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 gap-2">
                    {question.map((item, idx) => {
                      const answered =
                        answers[idx] !== null && answers[idx] !== undefined; // Sprawdza czy odpowiedź jest zaznaczona
                      const isCurrent = currentQuestion === idx + 1; // Sprawdza czy jest aktualne pytanie
                      return (
                        <Button
                          key={idx}
                          variant={"questionMapButtonActive"}
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
              </Card>
              {/* Credit Avatar */}
              <div className="flex items-center max-md:mb-8 justify-center gap-2 text-xs pt-4 text-muted-foreground">
                <Avatar className="w-6 h-6">
                  <AvatarImage
                    src="https://github.com/Marmo77.png"
                    alt="Marmo77"
                    className="rounded-xl"
                  />
                  <AvatarFallback>M77</AvatarFallback>
                </Avatar>
                <span>
                  by{" "}
                  <span
                    className="font-bold hover:underline cursor-pointer"
                    onClick={() =>
                      window.open("https://github.com/Marmo77", "_blank")
                    }
                  >
                    Marmo77
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Question;
