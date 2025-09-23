import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import { Button } from "./ui/button";
interface Exam {
  id: string;
  title: string;
  session: string;
  year: number;
}

const SeeData = ({
  examInfo,
  setExamInfo,
}: {
  examInfo: Exam[];
  setExamInfo: React.Dispatch<React.SetStateAction<Exam[]>>;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const startLoading = async () => {
    setIsLoading(true);
    const { data: exams } = await supabase
      .from("exam_info")
      .select("id, title, session, year");
    setExamInfo(exams as Exam[]);
    setIsLoading(false);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <h1>SeeData</h1>
        <Button
          className="cursor-pointer active:scale-95 duration-300 ease-in-out hover:scale-105"
          onClick={startLoading}
        >
          Click me
        </Button>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <ul>
          {examInfo.map((exam) => (
            <li key={exam.id}>
              {exam.title}{" "}
              {exam.session.charAt(0).toUpperCase() + exam.session.slice(1)}{" "}
              {exam.year}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SeeData;
