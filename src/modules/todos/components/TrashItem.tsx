"use client";

import { RotateCcw, X } from "lucide-react";
import type { TrashItemProps } from "@/modules/todos/types/todo";

export function TrashItem({ todo, onRestore, onDeleteForever }: TrashItemProps) {
  return (
    <li className="group flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 transition hover:border-zinc-300">
      <span className="flex-1 truncate text-xs text-zinc-400 line-through decoration-zinc-300">
        {todo.text}
      </span>

      <div className="flex shrink-0 items-center gap-0.5">
        <button
          type="button"
          onClick={() => onRestore(todo.id)}
          aria-label="Restaurar tarea"
          className="rounded-full p-1 text-zinc-400 transition hover:bg-emerald-50 hover:text-emerald-600"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          onClick={() => onDeleteForever(todo.id)}
          aria-label="Eliminar definitivamente"
          className="rounded-full p-1 text-zinc-400 transition hover:bg-red-50 hover:text-red-500"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </li>
  );
}
