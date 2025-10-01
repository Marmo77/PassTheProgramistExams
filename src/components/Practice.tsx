import React from "react";
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
import { Home } from "lucide-react";
import PracticeCard from "./Practice/PracticeCard";

const Practice = () => {
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
        </div>
        <div className="grid grid-cols-2 gap-4">
          <PracticeCard isDone={false} />
          <PracticeCard isDone={true} />
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
