import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import {
  CheckCircle,
  Calendar,
  FileText,
  NotebookText,
  Scale,
  FolderArchive,
} from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const PracticeCard = ({ isDone }: { isDone: boolean }) => {
  const DoneColors = [
    {
      Done: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-600",
      },
      NotDone: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-600",
      },
    },
  ];

  const ActiveLinks = [
    {
      Exams: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-600/35",
      },
      Solutions: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-600/35",
      },
      ZIP: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-600/35",
      },
      Rules: {
        bg: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-600/35",
      },
    },
  ];

  const Technologies = [
    {
      JavaScript: {
        bg: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-600/35",
      },
      PHP: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-600/35",
      },
    },
  ];
  return (
    <Card className="hover:shadow-lg hover:drop-shadow-lg hover:scale-102 transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-center">
          <Badge className="bg-gray-900 py-1 px-2.5 rounded-xl flex items-center gap-1">
            INF03
          </Badge>
          <Badge
            className={
              DoneColors[0][isDone ? "Done" : "NotDone"].bg +
              " " +
              DoneColors[0][isDone ? "Done" : "NotDone"].text +
              " " +
              DoneColors[0][isDone ? "Done" : "NotDone"].border
            }
          >
            <CheckCircle className="w-4 h-4 mr-1" />
            {isDone ? "Rozwiązania" : "Brak rozwiązań"}
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold">Restauracja</CardTitle>
        <CardDescription className="text-muted-foreground">
          Test zawiera 40 losowych pytań i trwa 60 minut.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Informacje o egzaminie */}
        <div className="flex flex-col gap-3">
          <ul className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600 gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              15 stycznia 2024 | Nr 3
            </div>
            <div className="flex items-center text-sm text-gray-600 gap-2">
              <FileText className="w-4 h-4 text-gray-400" />
              INF03 03-01-22.1-SG
            </div>
          </ul>
          {/* Techonologies used */}
          <div className="flex items-center gap-2">
            <Badge
              variant={"technology"}
              className={
                Technologies[0].JavaScript.bg +
                " " +
                Technologies[0].JavaScript.text +
                " " +
                Technologies[0].JavaScript.border
              }
            >
              JavaScript
            </Badge>
            <Badge
              variant={"technology"}
              className={
                Technologies[0].PHP.bg +
                " " +
                Technologies[0].PHP.text +
                " " +
                Technologies[0].PHP.border
              }
            >
              PHP
            </Badge>
          </div>
          {/* ACTION BUTTONS */}
          <div className="grid grid-cols-2 items-center gap-2">
            <Link to={"/practice/arkusz"}>
              <Button
                size="sm"
                variant={"actionButton"}
                className={`w-full ${ActiveLinks[0].Exams.bg} ${ActiveLinks[0].Exams.text} ${ActiveLinks[0].Exams.border}`}
              >
                <NotebookText className="w-4 h-4 mr-1" />
                Arkusz
              </Button>
            </Link>
            <Link to={"/practice/rozwiązanie"}>
              <Button
                size="sm"
                variant="actionButton"
                className={`w-full ${ActiveLinks[0].Solutions.bg} ${ActiveLinks[0].Solutions.text} ${ActiveLinks[0].Solutions.border}`}
              >
                <FileText className="w-4 h-4 mr-1" />
                Rozwiązanie
              </Button>
            </Link>

            <Link to={"/practice/zip"}>
              <Button
                size="sm"
                variant="actionButton"
                className={`w-full ${ActiveLinks[0].ZIP.bg} ${ActiveLinks[0].ZIP.text} ${ActiveLinks[0].ZIP.border}`}
              >
                <FolderArchive className="w-4 h-4 mr-1" />
                ZIP
              </Button>
            </Link>
            <Link to={"/practice/zasady-oceniania"}>
              <Button
                size="sm"
                variant="actionButton"
                className={`w-full ${ActiveLinks[0].Rules.bg} ${ActiveLinks[0].Rules.text} ${ActiveLinks[0].Rules.border}`}
              >
                <Scale className="w-4 h-4 mr-1" />
                Zasady Oceniania
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PracticeCard;
