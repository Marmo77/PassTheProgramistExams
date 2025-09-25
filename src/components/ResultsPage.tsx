import { useEffect, useState } from "react";
import ResultsCard from "./Question/ResultsCard";
import type { QuestionType } from "@/types/types";
import type { QuestionEvaluation } from "@/hooks/QuestionResults";

type PersistedResults = {
  results: QuestionEvaluation[];
  summary?: { total: number; correct: number; incorrect: number };
  questions: QuestionType[];
};

const ResultsPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState<PersistedResults | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("results_inf03");
      if (!raw) {
        setLoaded(true);
        return;
      }
      const parsed = JSON.parse(raw) as PersistedResults;
      setData(parsed);
    } catch (e) {
      console.error("Failed to load results_inf03", e);
    } finally {
      setLoaded(true);
    }
  }, []);

  if (!loaded) return null;

  if (!data || !data.results || !data.questions) {
    return (
      <section className="mx-auto max-w-7xl py-12">
        <p className="text-muted-foreground">
          Brak zapisanych wyników dla tego testu.
        </p>
      </section>
    );
  }

  return (
    <ResultsCard
      results={data.results}
      questions={data.questions}
      summary={data.summary ?? { total: 0, correct: 0, incorrect: 0 }}
    />
  );
};

export default ResultsPage;
