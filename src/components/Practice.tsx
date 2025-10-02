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
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

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
    <section className="flex flex-col max-w-6xl mx-auto min-h-screen max-lg:px-8 ">
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
            <>
              <PracticeSkeletonCard />
              <PracticeSkeletonCard />
              <PracticeSkeletonCard />
            </>
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
const PracticeSkeletonCard = () => {
  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex justify-between">
          <Skeleton className="w-10 h-6" />
          <Skeleton className="w-25 h-6" />
        </div>
        <div className="mt-2 flex flex-col gap-3">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-3/4 h-12" />
        </div>
        <div className="flex flex-col mt-4 gap-2">
          <Skeleton className="w-20 h-6" />
          <Skeleton className="w-20 h-6" />
        </div>
        <div className="mt-4 flex gap-4">
          <Skeleton className="w-12 h-6" />
          <Skeleton className="w-16 h-6" />
          <Skeleton className="w-12 h-6" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-8" />
          <Skeleton className="w-full h-8" />
        </div>
      </CardContent>
    </Card>
  );
};
export default Practice;
