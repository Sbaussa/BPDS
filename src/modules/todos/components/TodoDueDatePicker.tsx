"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format, startOfDay } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface TodoDueDatePickerProps {
  createdAt: number;
  dueDate?: number;
  onChange: (dueDate: number | undefined) => void;
}

export function TodoDueDatePicker({ createdAt, dueDate, onChange }: TodoDueDatePickerProps) {
  const [open, setOpen] = useState(false);
  const selected = dueDate ? new Date(dueDate) : undefined;
  const earliestSelectable = startOfDay(new Date(createdAt));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={`flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-medium transition ${
          dueDate
            ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
            : "text-zinc-400 hover:bg-zinc-100"
        }`}
      >
        <CalendarIcon className="h-3 w-3" />
        {selected ? format(selected, "d MMM", { locale: es }) : "Fecha límite"}
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selected}
          locale={es}
          disabled={{ before: earliestSelectable }}
          onSelect={(date) => {
            onChange(date ? date.getTime() : undefined);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
