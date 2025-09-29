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
import { AppConstants } from "@/data/constants";

const Theory = () => {
  const navigate = useNavigate();
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
        <ExamCard
          subject="inf03"
          title="INF.03"
          badges={["HTML/CSS", "JavaScript", "PHP", "Bazy danych"]}
          description="Tworzenie i administrowanie stronami i aplikacjami internetowymi"
          Icon={Code}
          icon_color="blue"
        />
        <ExamCard
          title="INF.04"
          subject="inf04"
          badges={["C++", "Python", "Algorytmy", "Struktury danych"]}
          description="Projektowanie i programowanie aplikacji desktopowych i mobilnych"
          Icon={Database}
          icon_color="green"
        />
      </div>

      <div className="text-center">
        <Button variant="outline" onClick={onBackToHome} className="px-8">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Powrót do Strony Głównej
        </Button>
      </div>

      {/* Credit Avatar */}
      <Credits />
    </div>
  );
};

const Credits = () => {
  return (
    <div className="flex items-center justify-center mt-12 pt-8 border-t border-border">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Avatar className="w-8 h-8">
          <AvatarImage
            src={AppConstants.Credits.avatar}
            alt={AppConstants.Credits.name}
          />
          <AvatarFallback>{AppConstants.Credits.name[0]}</AvatarFallback>
        </Avatar>
        <span className="text-sm">
          Stworzono przez{" "}
          <Button
            className="-ml-2"
            variant="link"
            onClick={() => window.open(AppConstants.Credits.link, "_blank")}
          >
            {AppConstants.Credits.name}
          </Button>
        </span>
      </div>
    </div>
  );
};

const ExamCard = ({
  subject,
  title,
  badges,
  description,
  Icon,
  icon_color,
}: {
  subject: string;
  title: string;
  badges: string[];
  description: string;
  Icon?: React.ElementType;
  icon_color?: string;
}) => {
  const navigate = useNavigate();

  const handleSubjectSelect = (subject: string) => {
    navigate(`/theory/${subject}`);
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/20"
      onClick={() => handleSubjectSelect(subject)}
    >
      <CardHeader className="text-center pb-4">
        <div
          className={`w-16 h-16 bg-${icon_color}-100 dark:bg-${icon_color}-900/20 rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          {Icon ? (
            <Icon className={`w-8 h-8`} style={{ color: icon_color }} />
          ) : (
            <Database className={`w-8 h-8`} style={{ color: icon_color }} />
          )}
        </div>
        {/* INF.04 */}
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-lg">
          {description}
          {/* Projektowanie i programowanie aplikacji desktopowych i mobilnych */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-6">
          {badges.map((item, idx) => (
            <Badge variant="secondary" key={idx} className="mr-2">
              {item}
            </Badge>
          ))}
        </div>
        <Button className="w-full" size="lg">
          Rozpocznij test {title}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Theory;
