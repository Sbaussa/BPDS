"use client";

import type { TodoListProps } from "@/modules/todos/types/todo";
import { TodoItem } from "@/modules/todos/components/TodoItem";

export function TodoList({ todos, onToggle, onUpdateText, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-10 text-center">
        <span className="text-3xl">🗒️</span>
        <p className="text-sm text-zinc-400">
          No hay tareas todavía.
        </p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdateText={onUpdateText}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
