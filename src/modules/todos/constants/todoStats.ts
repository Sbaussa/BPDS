import { CheckCircle2, Circle, ListTodo, Trash2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type TodoStatKey = "total" | "pending" | "done" | "trashed";

export interface TodoStatConfig {
  key: TodoStatKey;
  label: string;
  icon: LucideIcon;
}

export const TODO_STAT_CONFIG: TodoStatConfig[] = [
  { key: "total", label: "Total", icon: ListTodo },
  { key: "pending", label: "Pendientes", icon: Circle },
  { key: "done", label: "Completadas", icon: CheckCircle2 },
  { key: "trashed", label: "En papelera", icon: Trash2 },
];
