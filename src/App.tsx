import { Button } from "@/components/ui/button";
import SeeData from "./components/SeeData";
import supabase from "./utils/supabase";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import QuestionTest from "./components/QuestionTest";
import type { Exam, QuestionTest } from "./types/testtypes";
import { MoveB } from "./components/MoveB";
import Question from "./components/Question/Question";
import ResultsPage from "./components/ResultsPage";
import Theory from "./components/Theory";

function App() {
  const [examInfo, setExamInfo] = useState<Exam[]>([]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<MoveB />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/theory/inf03" element={<Question type="inf03" />} />
        <Route path="/theory/inf04" element={<Question type="inf04" />} />
        <Route path="/theory/results" element={<ResultsPage />} />
        <Route
          path="/exams"
          element={<SeeData examInfo={examInfo} setExamInfo={setExamInfo} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
