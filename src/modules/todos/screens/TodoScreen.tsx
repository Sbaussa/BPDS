"use client";

import Image from "next/image";
import { ListTodo, Trash2 } from "lucide-react";
import { useTodoApp } from "@/modules/todos/hooks/useTodoApp";
import { TodoInput } from "@/modules/todos/components/TodoInput";
import { TodoList } from "@/modules/todos/components/TodoList";
import { TrashList } from "@/modules/todos/components/TrashList";
import { TodoStats } from "@/modules/todos/components/TodoStats";

export function TodoScreen() {
  const {
    view,
    setView,
    todos,
    deletedTodos,
    doneCount,
    pendingCount,
    createTodo,
    updateTodoText,
    toggleTodo,
    setTodoDueDate,
    deleteTodo,
    restoreTodo,
    deleteTodoForever,
    clearTrash,
  } = useTodoApp();

  return (
    <div className="w-full max-w-5xl">
      <header className="mb-4 flex items-center gap-3 rounded-xl bg-black px-4 py-3">
        <Image
          src="/baussa.png"
          alt="Baussa"
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-white">
            Lista de tareas
          </h1>
          <p className="text-xs text-zinc-300">
            Organiza tus pendientes y controla lo que eliminas.
          </p>
        </div>
      </header>

      <TodoStats
        total={todos.length}
        pending={pendingCount}
        done={doneCount}
        trashed={deletedTodos.length}
      />

      <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className="flex items-center justify-between gap-2 border-b border-zinc-100 px-4 py-2">
          <div className="flex gap-1 rounded-full bg-zinc-100 p-1">
            <button
              type="button"
              onClick={() => setView("tasks")}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition ${
                view === "tasks"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              <ListTodo className="h-3.5 w-3.5" />
              Tareas
            </button>
            <button
              type="button"
              onClick={() => setView("trash")}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition ${
                view === "trash"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              <Trash2 className="h-3.5 w-3.5" />
              Papelera
              {deletedTodos.length > 0 && (
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
                  {deletedTodos.length}
                </span>
              )}
            </button>
          </div>
          {view === "trash" && deletedTodos.length > 0 && (
            <button
              type="button"
              onClick={clearTrash}
              className="text-xs font-medium text-zinc-400 transition hover:text-red-500"
            >
              Vaciar todo
            </button>
          )}
        </div>

        <div className="px-4 py-3">
          {view === "tasks" ? (
            <div className="space-y-2.5">
              <TodoInput onCreate={createTodo} />
              <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onUpdateText={updateTodoText}
                onDelete={deleteTodo}
                onSetDueDate={setTodoDueDate}
              />
            </div>
          ) : (
            <TrashList
              deletedTodos={deletedTodos}
              onRestore={restoreTodo}
              onDeleteForever={deleteTodoForever}
            />
          )}
        </div>
      </div>
    </div>
  );
}
