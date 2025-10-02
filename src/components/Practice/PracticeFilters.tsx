import { Search } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const PracticeFilters = () => {
  return (
    <Card className="my-4">
      <CardContent className="px-6">
        <section className="flex gap-4 flex-wrap lg:flex-nowrap">
          <div className="flex max-lg:flex-col justify-center items-center gap-4 w-full">
            {/* WYSZUKAJ - 3x wider */}
            <div className="flex-[3] min-w-[300px] max-lg:w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Wyszukaj egzamin..."
                  className="w-full pl-10"
                />
              </div>
            </div>

            {/* KWALIFIKACJE */}
            <div className="flex-1 min-w-[180px] max-lg:w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Wybierz kwalifikacje" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Kwalifikacje</SelectLabel>
                    <SelectItem value="all">Wszystkie</SelectItem>
                    <SelectItem value="INF03">INF.03</SelectItem>
                    <SelectItem value="INF04">INF.04</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* JĘZYK PROGRAMOWANIA */}
            <div className="flex-1 min-w-[180px] max-lg:w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Wybierz język programowania" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Język programowania</SelectLabel>
                    <SelectItem value="all">Wszystkie</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="php">PHP</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="c++">C++</SelectItem>
                    <SelectItem value="sql">SQL</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* SORTOWANIE */}
            <div className="flex-1 min-w-[160px] max-lg:w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sortuj" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sortuj</SelectLabel>
                    <SelectItem value="newest">Najnowsze</SelectItem>
                    <SelectItem value="popular">Najpopularniejsze</SelectItem>
                    <SelectItem value="rating">Najwyżej oceniane</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* ROK EGZAMINU */}
            <div className="flex-1 min-w-[140px] max-lg:w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Wybierz rok" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Rok</SelectLabel>
                    <SelectItem value="all">Wszystkie</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default PracticeFilters;
