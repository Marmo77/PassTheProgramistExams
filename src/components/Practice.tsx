// src/components/Practice.tsx
import React, { useEffect, useState } from "react";
import { getFilteredExams } from "@/hooks/getExams";
import type { ExamType } from "@/types/types";
import PracticeCard from "./Practice/PracticeCard";
import PracticeFilters from "./Practice/PracticeFilters";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Link } from "react-router-dom";
import { AppConstants } from "@/data/constants";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";

export type FilterOptions = {
  search: string;
  subject: string;
  technologies: string;
  sort: string;
  year: string;
};

const Practice = () => {
  const [exams, setExams] = useState<ExamType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalExams, setTotalExams] = useState<number>(0);
  const limit = 9;
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    subject: "",
    technologies: "",
    sort: "",
    year: "",
  });

  useEffect(() => {
    const fetchExams = async () => {
      setIsLoading(true);
      try {
        const { data, count } = await getFilteredExams(
          filters,
          currentPage,
          limit
        );
        setExams(data as ExamType[]);
        setTotalExams(count);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce search - żeby nie szukało odrazu po wpisaniu literki
    const timeoutId = setTimeout(
      () => {
        fetchExams();
      },
      filters.search.length > 0 && filters.search.length < 3 ? 0 : 500
    );

    return () => clearTimeout(timeoutId);
  }, [filters, currentPage]);

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="flex flex-col max-w-6xl mx-auto min-h-screen max-lg:px-8">
      <div className="py-12">
        <BreadCrumbs />
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            Arkusze egzaminacyjne
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Przeglądaj i filtruj poprzednie egzaminy praktyczne z wybranej
            kwalifikacji.
          </p>
        </div>

        <PracticeFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <div className="flex max-w-6xl mx-auto justify-center mt-4 mb-12">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Poprzednia
          </Button>
          <span className="text-muted-foreground self-center mx-4">
            Strona {currentPage}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= Math.ceil(totalExams / limit)}
          >
            Następna
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid justify-center max-lg:grid-cols-2 max-md:grid-cols-1 grid-cols-3 gap-4">
          {isLoading ? (
            <>
              <PracticeSkeletonCard />
              <PracticeSkeletonCard />
              <PracticeSkeletonCard />
            </>
          ) : exams.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              Nie znaleziono egzaminów spełniających kryteria wyszukiwania
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
