"use client";

import { useState } from "react";
import { useTodos } from "@/modules/todos/hooks/useTodos";

export type TodoView = "tasks" | "trash";

export function useTodoApp() {
  const {
    todos,
    deletedTodos,
    createTodo,
    updateTodoText,
    toggleTodo,
    setTodoDueDate,
    deleteTodo,
    restoreTodo,
    deleteTodoForever,
    clearTrash,
  } = useTodos();
  const [view, setView] = useState<TodoView>("tasks");

  const doneCount = todos.filter((todo) => todo.done).length;
  const pendingCount = todos.length - doneCount;

  return {
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
  };
}
