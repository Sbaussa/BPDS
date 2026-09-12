import { TODO_STAT_CONFIG } from "@/modules/todos/constants/todoStats";
import type { TodoStatKey } from "@/modules/todos/constants/todoStats";

interface TodoStatsProps {
  total: number;
  pending: number;
  done: number;
  trashed: number;
}

export function TodoStats({ total, pending, done, trashed }: TodoStatsProps) {
  const values: Record<TodoStatKey, number> = { total, pending, done, trashed };

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {TODO_STAT_CONFIG.map(({ key, label, icon: Icon }) => (
        <div
          key={key}
          className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 shadow-sm"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100">
            <Icon className="h-4 w-4 text-zinc-500" />
          </div>
          <div>
            <p className="text-base font-semibold leading-none text-zinc-900">{values[key]}</p>
            <p className="mt-0.5 text-[11px] text-zinc-500">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
