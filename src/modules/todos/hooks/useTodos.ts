"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { DeletedTodo, Todo } from "@/modules/todos/types/todo";

function readFromStorage<T>(key: string): T[] {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function createListStore<T>(key: string) {
  const emptySnapshot: T[] = [];
  let value: T[] = typeof window === "undefined" ? emptySnapshot : readFromStorage<T>(key);
  const listeners = new Set<() => void>();

  return {
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot(): T[] {
      return value;
    },
    getServerSnapshot(): T[] {
      return emptySnapshot;
    },
    set(next: T[]) {
      value = next;
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(next));
      }
      listeners.forEach((listener) => listener());
    },
  };
}

const todosStore = createListStore<Todo>("bpds:todos");
const deletedTodosStore = createListStore<DeletedTodo>("bpds:deletedTodos");

export function useTodos() {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot,
    todosStore.getServerSnapshot
  );
  const deletedTodos = useSyncExternalStore(
    deletedTodosStore.subscribe,
    deletedTodosStore.getSnapshot,
    deletedTodosStore.getServerSnapshot
  );

  const createTodo = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    todosStore.set([
      ...todosStore.getSnapshot(),
      { id: crypto.randomUUID(), text: trimmed, done: false, createdAt: Date.now() },
    ]);
  }, []);

  const updateTodoText = useCallback((id: string, text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    todosStore.set(
      todosStore
        .getSnapshot()
        .map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo))
    );
  }, []);

  const toggleTodo = useCallback((id: string) => {
    todosStore.set(
      todosStore
        .getSnapshot()
        .map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  }, []);

  const setTodoDueDate = useCallback((id: string, dueDate: number | undefined) => {
    todosStore.set(
      todosStore
        .getSnapshot()
        .map((todo) => (todo.id === id ? { ...todo, dueDate } : todo))
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    const target = todosStore.getSnapshot().find((todo) => todo.id === id);
    if (!target) return;
    todosStore.set(todosStore.getSnapshot().filter((todo) => todo.id !== id));
    deletedTodosStore.set([
      ...deletedTodosStore.getSnapshot(),
      { ...target, deletedAt: Date.now() },
    ]);
  }, []);

  const restoreTodo = useCallback((id: string) => {
    const target = deletedTodosStore.getSnapshot().find((todo) => todo.id === id);
    if (!target) return;
    const restored: Todo = {
      id: target.id,
      text: target.text,
      done: target.done,
      createdAt: target.createdAt,
    };
    deletedTodosStore.set(
      deletedTodosStore.getSnapshot().filter((todo) => todo.id !== id)
    );
    todosStore.set([...todosStore.getSnapshot(), restored]);
  }, []);

  const deleteTodoForever = useCallback((id: string) => {
    deletedTodosStore.set(
      deletedTodosStore.getSnapshot().filter((todo) => todo.id !== id)
    );
  }, []);

  const clearTrash = useCallback(() => {
    deletedTodosStore.set([]);
  }, []);

  return {
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
  };
}
