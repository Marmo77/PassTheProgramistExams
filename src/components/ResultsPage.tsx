import { useEffect, useState } from "react";
import ResultsCard from "./Question/ResultsCard";
import type { QuestionType } from "@/types/types";
import type { QuestionEvaluation } from "@/hooks/QuestionResults";
import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import NoResults from "./Question/NoResults";

type PersistedResults = {
  results: QuestionEvaluation[];
  summary?: { total: number; correct: number; incorrect: number };
  questions: QuestionType[];
};

const ResultsPage = () => {
  const params = useParams<string>();
  const exam_type: string = params.type ?? "inf03";
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState<PersistedResults | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("results_" + exam_type);
      if (!raw) {
        setLoaded(true);
        return;
      }
      const parsed = JSON.parse(raw) as PersistedResults;
      setData(parsed);
    } catch (e) {
      console.error("Failed to load results_" + exam_type, e);
    } finally {
      setLoaded(true);
    }
  }, []);

  if (!loaded) return null;

  if (!data || !data.results || !data.questions) {
    return <NoResults />;
  }

  return (
    <>
      <ResultsCard
        results={data.results}
        questions={data.questions}
        summary={data.summary ?? { total: 0, correct: 0, incorrect: 0 }}
      />
      <Link to="/" className="flex justify-center">
        <Button variant={"default"} className="my-2">
          Powrót do strony glownej
        </Button>
      </Link>
    </>
  );
};

export default ResultsPage;
