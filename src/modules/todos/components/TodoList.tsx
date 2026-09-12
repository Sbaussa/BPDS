"use client";

import { ClipboardList } from "lucide-react";
import type { TodoListProps } from "@/modules/todos/types/todo";
import { TodoItem } from "@/modules/todos/components/TodoItem";
import { TodoPagination } from "@/modules/todos/components/TodoPagination";
import { usePagination } from "@/modules/todos/hooks/usePagination";

export function TodoList({ todos, onToggle, onUpdateText, onDelete, onSetDueDate }: TodoListProps) {
  const { page, totalPages, pageItems, setPage } = usePagination(todos);

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-4 text-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100">
          <ClipboardList className="h-4 w-4 text-zinc-400" />
        </div>
        <p className="text-xs text-zinc-400">
          No hay tareas todavía.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      <ul className="flex flex-col gap-1.5">
        {pageItems.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onUpdateText={onUpdateText}
            onDelete={onDelete}
            onSetDueDate={onSetDueDate}
          />
        ))}
      </ul>
      <TodoPagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
