"use client";

import { Check, Pencil, Trash2 } from "lucide-react";
import type { TodoItemProps } from "@/modules/todos/types/todo";
import { useTodoItemEditing } from "@/modules/todos/hooks/useTodoItemEditing";
import { TodoTextField } from "@/modules/todos/components/TodoTextField";

export function TodoItem({ todo, onToggle, onUpdateText, onDelete }: TodoItemProps) {
  const { isEditing, draft, startEditing, handleChange, commitEdit, handleKeyDown } =
    useTodoItemEditing(todo.text, (text) => onUpdateText(todo.id, text));

  return (
    <li className="group flex items-center gap-3 rounded-xl border-2 border-zinc-100 bg-white px-3 py-2.5 transition hover:border-zinc-300 hover:shadow-sm">
      <label className="relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="peer h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-zinc-300 transition checked:border-black checked:bg-black"
        />
        <Check
          strokeWidth={3}
          className="pointer-events-none absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100"
        />
      </label>

      {isEditing ? (
        <div className="flex-1">
          <TodoTextField
            autoFocus
            value={draft}
            onChange={handleChange}
            onBlur={commitEdit}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        <span
          onClick={startEditing}
          className={`flex-1 cursor-text truncate text-sm transition ${
            todo.done ? "text-zinc-400 line-through decoration-zinc-400" : "text-zinc-700"
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex shrink-0 items-center gap-1 opacity-0 transition group-hover:opacity-100">
        <button
          type="button"
          onClick={startEditing}
          aria-label="Editar tarea"
          className="rounded-full p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-black"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onDelete(todo.id)}
          aria-label="Eliminar tarea"
          className="rounded-full p-1.5 text-zinc-400 transition hover:bg-red-50 hover:text-red-500"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </li>
  );
}
