import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "./ui/breadcrumb";
import { Link } from "react-router-dom";
import { AppConstants } from "@/data/constants";
import { Home, Loader2 } from "lucide-react";
import PracticeCard from "./Practice/PracticeCard";
import { getExams } from "@/hooks/getExams";
import type { ExamType } from "@/types/types";

const Practice = () => {
  const [exams, setExams] = useState<ExamType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  console.log(exams);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const exams = await getExams();
        setExams(exams as ExamType[]);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    fetchExams();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-4xl mx-auto py-12">
        <BreadCrumbs />
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            Wybierz kwalifikację egzaminacyjną
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rozpocznij test teoretyczny z wybranej kwalifikacji. Test zawiera 40
            losowych pytań i trwa 60 minut.
          </p>
          <div className="w-70 h-70 bg-red-300 flex flex-col gap-2">
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <Loader2 className="w-12 h-12 animate-spin" />
              </div>
            ) : (
              exams.map((exam) => <div key={exam.id}>{exam.title}</div>)
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <PracticeCard isDone={false} exams={exams} />
          <PracticeCard isDone={true} exams={exams} />
        </div>
      </div>
    </div>
  );
};

const BreadCrumbs = () => {
  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              to={AppConstants.Navigation.Home}
              className="flex gap-2 items-center"
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Praktyka</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Practice;
