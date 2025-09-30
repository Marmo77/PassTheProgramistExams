import SeeData from "./components/SeeData";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import type { Exam } from "./types/testtypes";
import { MoveB } from "./components/MoveB";
import Question from "./components/Question/Question";
import ResultsPage from "./components/ResultsPage";
import Theory from "./components/Theory";
import NotFound from "./components/NotFound";

function App() {
  const [examInfo, setExamInfo] = useState<Exam[]>([]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<MoveB />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/theory/:type" element={<Question />} />
        <Route path="/theory/results/:type" element={<ResultsPage />} />
        <Route
          path="/exams"
          element={<SeeData examInfo={examInfo} setExamInfo={setExamInfo} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
