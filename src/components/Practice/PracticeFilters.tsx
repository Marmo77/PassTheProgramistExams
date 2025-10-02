import { Card, CardContent } from "../ui/card";
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
      <CardContent>
        <section className="flex gap-4">
          <div className="flex justify-center items-center gap-2">
            {/* KWALFIKACJE */}
            <div className="flex items-center gap-2">
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Wybierz kwalifikacje" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Kwalfikacje</SelectLabel>
                    <SelectItem value="all">Wszystkie</SelectItem>
                    <SelectItem value="inf03">INF.03</SelectItem>
                    <SelectItem value="inf04">INF.04</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* JĘZYK PROGRAMOWANIA */}
            <div>
              <Select>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Wybierz język programowania" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Język programowania</SelectLabel>
                    <SelectItem value="all">Wszystkie</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="php">PHP</SelectItem>
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
