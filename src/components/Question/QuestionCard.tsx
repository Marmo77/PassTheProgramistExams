import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import QuestionReport from "./QuestionReport";
import type { QuestionType } from "@/types/types";

const QuestionCard = ({
  question,
  questionNumber,
  selectedAnswer,
  onSelect,
}: {
  question: QuestionType[];
  questionNumber: number;
  selectedAnswer: string | null;
  onSelect: (answer: string) => void;
}) => {
  const handleQuestionSelect = (answer: string) => {
    onSelect(answer);
  };

  return (
    <Card className="px-3">
      <CardHeader className="">
        <div className="flex items-center justify-between gap-2">
          <Badge
            className="ml-0 px-2 py-1 w-fit"
            variant={question[0]?.subject === "inf03" ? "outline" : "default"}
          >
            {question[0]?.subject ?? ""}
          </Badge>
          <QuestionReport question={question} questionNumber={questionNumber} />
        </div>
        <div className="flex py-2">
          <h1 className="text-lg font-medium leading-relaxed">
            {questionNumber}. {question[questionNumber - 1]?.question_text}
          </h1>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col px-4 gap-2">
          <Button
            variant={"questionButton"}
            className={`
              items-start justify-start text-left 
              whitespace-normal break-words
              h-auto min-h-[3rem] 
              ${selectedAnswer === "A" ? "border-primary" : ""}
            `}
            id="A"
            size="question"
            onClick={() => handleQuestionSelect("A")}
          >
            <span className="block w-full text-left">
              <span className="font-semibold mr-2">A.</span>
              <span className="break-words">
                {question[questionNumber - 1]?.answer_a}
              </span>
            </span>
          </Button>
          <Button
            variant={"questionButton"}
            className={`
              items-start justify-start text-left 
              whitespace-normal break-words
              h-auto min-h-[3rem]
              ${selectedAnswer === "B" ? "border-primary" : ""}
            `}
            id="B"
            size="question"
            onClick={() => handleQuestionSelect("B")}
          >
            <span className="block w-full text-left">
              <span className="font-semibold mr-2">B.</span>
              <span className="break-words">
                {question[questionNumber - 1]?.answer_b}
              </span>
            </span>
          </Button>
          <Button
            variant={"questionButton"}
            className={`
              items-start justify-start text-left 
              whitespace-normal break-words
              h-auto min-h-[3rem]
              ${selectedAnswer === "C" ? "border-primary" : ""}
            `}
            id="C"
            size="question"
            onClick={() => handleQuestionSelect("C")}
          >
            <span className="block w-full text-left">
              <span className="font-semibold mr-2">C.</span>
              <span className="break-words">
                {question[questionNumber - 1]?.answer_c}
              </span>
            </span>
          </Button>
          <Button
            variant={"questionButton"}
            className={`
              items-start justify-start text-left 
              whitespace-normal break-words
              h-auto min-h-[3rem]
              ${selectedAnswer === "D" ? "border-primary" : ""}
            `}
            id="D"
            size="question"
            onClick={() => handleQuestionSelect("D")}
          >
            <span className="block w-full text-left">
              <span className="font-semibold mr-2">D.</span>
              <span className="break-words">
                {question[questionNumber - 1]?.answer_d}
              </span>
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
