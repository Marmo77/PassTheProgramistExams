import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronLeft, Code, Database } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";

const Theory = () => {
  const navigate = useNavigate();

  const handleSubjectSelect = (subject: string) => {
    navigate(`/theory/${subject}`);
  };

  const onBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Wybierz kwalifikację egzaminacyjną
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Rozpocznij test teoretyczny z wybranej kwalifikacji. Test zawiera 40
          losowych pytań i trwa 60 minut.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card
          className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/20"
          onClick={() => handleSubjectSelect("inf03")}
        >
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">INF.03</CardTitle>
            <CardDescription className="text-lg">
              Tworzenie i administrowanie stronami i aplikacjami internetowymi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-6">
              <Badge variant="secondary" className="mr-2">
                HTML/CSS
              </Badge>
              <Badge variant="secondary" className="mr-2">
                JavaScript
              </Badge>
              <Badge variant="secondary" className="mr-2">
                PHP
              </Badge>
              <Badge variant="secondary" className="mr-2">
                Bazy danych
              </Badge>
            </div>
            <Button className="w-full" size="lg">
              Rozpocznij test INF.03
            </Button>
          </CardContent>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/20"
          onClick={() => handleSubjectSelect("inf04")}
        >
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">INF.04</CardTitle>
            <CardDescription className="text-lg">
              Projektowanie i programowanie aplikacji desktopowych i mobilnych
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-6">
              <Badge variant="secondary" className="mr-2">
                C++
              </Badge>
              <Badge variant="secondary" className="mr-2">
                Python
              </Badge>
              <Badge variant="secondary" className="mr-2">
                Algorytmy
              </Badge>
              <Badge variant="secondary" className="mr-2">
                Struktury danych
              </Badge>
            </div>
            <Button className="w-full" size="lg">
              Rozpocznij test INF.04
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button variant="outline" onClick={onBackToHome} className="px-8">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Powrót do Strony Głównej
        </Button>
      </div>

      {/* Credit Avatar */}
      <div className="flex items-center justify-center mt-12 pt-8 border-t border-border">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/Marmo77.png" alt="Marmo77" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <span className="text-sm">
            Stworzono przez{" "}
            <Button
              className="-ml-2"
              variant="link"
              onClick={() =>
                window.open("https://github.com/Marmo77", "_blank")
              }
            >
              Marmo77
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Theory;
