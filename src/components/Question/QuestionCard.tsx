import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const QuestionCard = () => {
  const openCreator = () => {
    window.open("https://github.com/Marmo77", "_blank");
  };
  return (
    <Card>
      <CardHeader>
        <h1>QuestionCard</h1>
      </CardHeader>
      <CardContent>
        <ul>
          <li>q1</li>
          <li>q2</li>
          <li>q3</li>
          <li>q4</li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Avatar className="cursor-pointer w-7 h-7" onClick={openCreator}>
          <AvatarImage
            src="https://github.com/Marmo77.png"
            alt="@Marmo77"
            title="Credits: Marmo77"
            className=""
          />
          <AvatarFallback>Marmo77</AvatarFallback>
        </Avatar>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
