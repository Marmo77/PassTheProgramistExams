import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const MoveB = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex gap-12">
        <Link to={"/practice"}>
          <Button variant={"outline"}>Load Exams Names</Button>
        </Link>
        <Link to={"/theory"}>
          <Button variant={"destructive"}>Load Questions</Button>
        </Link>
      </div>
    </div>
  );
};
