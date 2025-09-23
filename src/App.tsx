import { Button } from "@/components/ui/button";
import SeeData from "./components/SeeData";
import supabase from "./utils/supabase";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

interface Exam {
  id: string;
  title: string;
  session: string;
  year: number;
}

function App() {
  const [examInfo, setExamInfo] = useState<Exam[]>([]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          path="/"
          element={<SeeData examInfo={examInfo} setExamInfo={setExamInfo} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
