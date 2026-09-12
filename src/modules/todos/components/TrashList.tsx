"use client";

import { Trash2 } from "lucide-react";
import type { TrashListProps } from "@/modules/todos/types/todo";
import { TrashItem } from "@/modules/todos/components/TrashItem";
import { TodoPagination } from "@/modules/todos/components/TodoPagination";
import { usePagination } from "@/modules/todos/hooks/usePagination";

export function TrashList({ deletedTodos, onRestore, onDeleteForever }: TrashListProps) {
  const { page, totalPages, pageItems, setPage } = usePagination(deletedTodos);

  if (deletedTodos.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-4 text-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100">
          <Trash2 className="h-4 w-4 text-zinc-400" />
        </div>
        <p className="text-xs text-zinc-400">La papelera está vacía.</p>
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      <ul className="flex flex-col gap-1.5">
        {pageItems.map((todo) => (
          <TrashItem
            key={todo.id}
            todo={todo}
            onRestore={onRestore}
            onDeleteForever={onDeleteForever}
          />
        ))}
      </ul>
      <TodoPagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
