import { Button } from "@/components/ui/button";
import SeeData from "./components/SeeData";
import supabase from "./utils/supabase";
import { useState, useEffect } from "react";

interface Exam {
  id: string;
  title: string;
  session: string;
  year: number;
}

function App() {
  const [examInfo, setExamInfo] = useState<Exam[]>([]);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex ">
        <SeeData examInfo={examInfo} setExamInfo={setExamInfo} />
      </div>
    </div>
  );
}

export default App;
