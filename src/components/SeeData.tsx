import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import { Button } from "./ui/button";
import type { Exam } from "../types/testtypes";
const SeeData = ({
  examInfo,
  setExamInfo,
}: {
  examInfo: Exam[];
  setExamInfo: React.Dispatch<React.SetStateAction<Exam[]>>;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [Loaded, setLoaded] = useState(false);
  const startLoading = async () => {
    if (Loaded) return;
    setIsLoading(true);
    const { data: exams, error } = await supabase
      .from("exam_info")
      .select("id, title, session, year");
    setExamInfo(exams as Exam[]);
    setLoaded(true);
    setIsLoading(false);
    if (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <section className="flex mt-6 flex-col gap-6 justify-center items-center">
      <div>
        <Button
          className="cursor-pointer active:scale-95 duration-300 ease-in-out hover:scale-105"
          onClick={startLoading}
        >
          Load Exam Names
        </Button>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <ul className="flex flex-col gap-2">
          {/* examInfo.sort((a, b) => b.year - a.year) */}
          {examInfo.map((exam) => (
            <li key={exam.id}>
              <span className="font-bold">{exam.title}</span>{" "}
              <span className="text-blue-500">
                {exam.session.charAt(0).toUpperCase() + exam.session.slice(1)}
              </span>{" "}
              <span className="text-yellow-500">{exam.year}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default SeeData;
