"use client";

import { Check, Pencil, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { TodoItemProps } from "@/modules/todos/types/todo";
import { useTodoItemEditing } from "@/modules/todos/hooks/useTodoItemEditing";
import { TodoTextField } from "@/modules/todos/components/TodoTextField";
import { TodoDueDatePicker } from "@/modules/todos/components/TodoDueDatePicker";

export function TodoItem({ todo, onToggle, onUpdateText, onDelete, onSetDueDate }: TodoItemProps) {
  const { isEditing, draft, startEditing, handleChange, commitEdit, handleKeyDown } =
    useTodoItemEditing(todo.text, (text) => onUpdateText(todo.id, text));

  return (
    <li className="group flex flex-col gap-0.5 rounded-lg border border-zinc-200 bg-white px-2.5 py-1.5 transition hover:border-zinc-300 hover:shadow-sm">
      <div className="flex items-center gap-2">
        <label className="relative flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
            className="peer h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-zinc-300 transition checked:border-black checked:bg-black"
          />
          <Check
            strokeWidth={3}
            className="pointer-events-none absolute h-2.5 w-2.5 text-white opacity-0 peer-checked:opacity-100"
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
            className={`flex-1 cursor-text truncate text-xs transition ${
              todo.done ? "text-zinc-400 line-through decoration-zinc-400" : "text-zinc-700"
            }`}
          >
            {todo.text}
          </span>
        )}

        <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition group-hover:opacity-100">
          <button
            type="button"
            onClick={startEditing}
            aria-label="Editar tarea"
            className="rounded-full p-1 text-zinc-400 transition hover:bg-zinc-100 hover:text-black"
          >
            <Pencil className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            aria-label="Eliminar tarea"
            className="rounded-full p-1 text-zinc-400 transition hover:bg-red-50 hover:text-red-500"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between pl-6">
        <span className="text-[10px] text-zinc-400">
          Creada: {format(new Date(todo.createdAt), "d MMM", { locale: es })}
        </span>
        <TodoDueDatePicker
          createdAt={todo.createdAt}
          dueDate={todo.dueDate}
          onChange={(dueDate) => onSetDueDate(todo.id, dueDate)}
        />
      </div>
    </li>
  );
}
