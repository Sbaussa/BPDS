"use client";

import { useTodos } from "@/modules/todos/hooks/useTodos";
import { TodoInput } from "@/modules/todos/components/TodoInput";
import { TodoList } from "@/modules/todos/components/TodoList";

export function TodoApp() {
  const { todos, createTodo, updateTodoText, toggleTodo, deleteTodo } = useTodos();
  const pendingCount = todos.filter((todo) => !todo.done).length;

  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-900/10">
      <div className="border-b border-zinc-100 bg-black px-6 py-5">
        <h1 className="text-lg font-semibold tracking-tight text-white">
          Lista de tareas
        </h1>
        <p className="mt-1 text-sm text-zinc-300">
          {pendingCount === 0
            ? "Nada pendiente por ahora"
            : `${pendingCount} tarea${pendingCount === 1 ? "" : "s"} pendiente${pendingCount === 1 ? "" : "s"}`}
        </p>
      </div>

      <div className="space-y-4 px-6 py-5">
        <TodoInput onCreate={createTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onUpdateText={updateTodoText}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}
