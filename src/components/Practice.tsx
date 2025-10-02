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
import PracticeFilters from "./Practice/PracticeFilters";

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
    <section className="flex flex-col max-w-6xl mx-auto min-h-screen">
      <div className="py-12">
        <BreadCrumbs />
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            Wybierz kwalifikację egzaminacyjną
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rozpocznij test teoretyczny z wybranej kwalifikacji. Test zawiera 40
            losowych pytań i trwa 60 minut.
          </p>
        </div>
        <PracticeFilters />
        <div
          className={`grid justify-center max-lg:grid-cols-2 max-md:grid-cols-1 grid-cols-3 gap-4`}
        >
          {isLoading ? (
            <div className="mt-12 col-span-3 mx-auto">
              <Loader2 className="w-16 h-16 animate-spin" />
            </div>
          ) : (
            exams.map((exam) => (
              <PracticeCard key={exam.id} isDone={false} exam={exam} />
            ))
          )}
        </div>
      </div>
    </section>
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
