import { useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import type { QuestionType } from "@/types/types";

// { question }: { question: Question[] }
const QuestionCard = ({ question }: { question: QuestionType[] }) => {
  const openCreator = () => {
    window.open("https://github.com/Marmo77", "_blank");
  };
  console.log(question);
  return (
    <Card className="px-3">
      <CardHeader className="">
        <Badge
          // {question.subject === "inf03" ? variant="destructive" : variant="default"}
          className="ml-0 px-2 py-1"
          variant={"destructive"}
        >
          inf03
        </Badge>
        <div className="flex py-2">
          <h1 className="text-lg font-medium">{question[0].question_text}</h1>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col px-4 gap-2">
          <Button
            variant={"questionButton"}
            className="items-start justify-start"
            size="question"
          >
            A. {question[0].answer_a}
          </Button>
          <Button
            variant={"questionButton"}
            className="items-start justify-start"
            size="question"
          >
            B. {question[0].answer_b}
          </Button>
          <Button
            variant={"questionButton"}
            className="items-start justify-start"
            size="question"
          >
            C. {question[0].answer_c}
          </Button>
          <Button
            variant={"questionButton"}
            size="question"
            className="items-start justify-start"
          >
            D. {question[0].answer_d}
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
