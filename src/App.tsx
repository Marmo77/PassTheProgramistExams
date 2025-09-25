import { Button } from "@/components/ui/button";
import SeeData from "./components/SeeData";
import supabase from "./utils/supabase";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import QuestionTest from "./components/QuestionTest";
import type { Exam, QuestionTest } from "./types/testtypes";
import { MoveB } from "./components/MoveB";
import Question from "./components/Question";
import ResultsPage from "./components/ResultsPage";

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
        <Route path="/questions" element={<Question />} />
        <Route path="/results" element={<ResultsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
