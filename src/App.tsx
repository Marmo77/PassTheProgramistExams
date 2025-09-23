import { Button } from "@/components/ui/button";
import SeeData from "./components/SeeData";
import supabase from "./utils/supabase";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Question from "./components/Question";
import type { Exam, QuestionTest } from "./types/testtypes";
import { MoveB } from "./components/MoveB";

function App() {
  const [examInfo, setExamInfo] = useState<Exam[]>([]);
  const [question, setQuestion] = useState<QuestionTest[]>([]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<MoveB />} />
        <Route
          path="/exams"
          element={<SeeData examInfo={examInfo} setExamInfo={setExamInfo} />}
        />
        <Route
          path="/questions"
          element={<Question question={question} setQuestion={setQuestion} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
