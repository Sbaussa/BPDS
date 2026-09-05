"use client";

import type { TodoInputProps } from "@/modules/todos/types/todo";
import { useTodoInput } from "@/modules/todos/hooks/useTodoInput";
import { TodoTextField } from "@/modules/todos/components/TodoTextField";

export function TodoInput({ onCreate }: TodoInputProps) {
  const { value, handleChange, handleKeyDown } = useTodoInput(onCreate);

  return (
    <TodoTextField
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Escribe una tarea y presiona Enter..."
    />
  );
}
