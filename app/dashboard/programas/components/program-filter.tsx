import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import { ProgramStatus } from "../data";

const filterOptions: (ProgramStatus | "Todos")[] = [
  "Todos",
  "Activo",
  "Completado",
];

interface ProgramFilterProps {
  filter: ProgramStatus | "Todos";
  onFilterChange: (filter: ProgramStatus | "Todos") => void;
  resultCount: number;
}

export function ProgramFilter({
  filter,
  onFilterChange,
  resultCount,
}: ProgramFilterProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex items-center gap-2 pr-2 border-r border-border mr-2">
        <ListFilter className="h-5 w-5 text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground hidden sm:block">
          Estado:
        </span>
      </div>
      {filterOptions.map((option) => (
        <Button
          key={option}
          variant={filter === option ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(option)}
          className={`whitespace-nowrap rounded-full transition-all ${
            filter === option
              ? "bg-foreground text-background shadow-md border-transparent"
              : "border-border text-muted-foreground hover:text-foreground"
          }`}
        >
          {option}
        </Button>
      ))}
      <span className="text-xs text-muted-foreground ml-auto hidden sm:block">
        {resultCount} programa{resultCount !== 1 ? "s" : ""}
      </span>
    </div>
  );
}
