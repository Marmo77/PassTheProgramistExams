import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import type { QuestionType } from "@/types/types";
import { Skeleton } from "../ui/skeleton";

// { question }: { question: Question[] }
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
  const openCreator = () => {
    window.open("https://github.com/Marmo77", "_blank");
  };
  const handleQuestionSelect = (answer: string) => {
    onSelect(answer);
  };
  return (
    <Card className="px-3">
      <CardHeader className="">
        <Badge
          // {question.subject === "inf03" ? variant="destructive" : variant="default"}
          className="ml-0 px-2 py-1"
          variant={question[0]?.subject === "inf03" ? "destructive" : "default"}
        >
          {question[0]?.subject ?? ""}
        </Badge>
        <div className="flex py-2">
          <h1 className={`text-lg font-medium`}>
            {questionNumber}. {question[questionNumber - 1]?.question_text}
          </h1>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col px-4 gap-2">
          <Button
            variant={"questionButton"}
            className={`items-start justify-start ${
              selectedAnswer === "A" ? "border-primary" : ""
            }`}
            id="A"
            size="question"
            onClick={() => handleQuestionSelect("A")}
          >
            A. {question[questionNumber - 1]?.answer_a}
          </Button>
          <Button
            variant={"questionButton"}
            className={`items-start justify-start ${
              selectedAnswer === "B" ? "border-primary" : ""
            }`}
            id="B"
            size="question"
            onClick={() => handleQuestionSelect("B")}
          >
            B. {question[questionNumber - 1]?.answer_b}
          </Button>
          <Button
            variant={"questionButton"}
            className={`items-start justify-start ${
              selectedAnswer === "C" ? "border-primary" : ""
            }`}
            id="C"
            size="question"
            onClick={() => handleQuestionSelect("C")}
          >
            C. {question[questionNumber - 1]?.answer_c}
          </Button>
          <Button
            variant={"questionButton"}
            size="question"
            className={`items-start justify-start ${
              selectedAnswer === "D" ? "border-primary" : ""
            }`}
            id="D"
            onClick={() => handleQuestionSelect("D")}
          >
            D. {question[questionNumber - 1]?.answer_d}
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Avatar className="cursor-pointer w-7 h-7" onClick={openCreator}>
          <AvatarImage
            src="https://github.com/Marmo77.png"
            alt="@Marmo77"
            title="Credits: Marmo77"
          />
          <AvatarFallback className="text-[8px]">Marmo77</AvatarFallback>
        </Avatar>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
