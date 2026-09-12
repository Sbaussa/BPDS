"use client";

import { Plus } from "lucide-react";
import type { TodoInputProps } from "@/modules/todos/types/todo";
import { useTodoInput } from "@/modules/todos/hooks/useTodoInput";
import { TodoTextField } from "@/modules/todos/components/TodoTextField";

export function TodoInput({ onCreate }: TodoInputProps) {
  const { value, handleChange, handleSubmit } = useTodoInput(onCreate);

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-1.5">
      <TodoTextField
        value={value}
        onChange={handleChange}
        placeholder="Escribe una nueva tarea..."
      />
      <button
        type="submit"
        aria-label="Agregar tarea"
        disabled={!value.trim()}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-black text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Plus className="h-4 w-4" />
      </button>
    </form>
  );
}
