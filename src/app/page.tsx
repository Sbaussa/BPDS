import { TodoApp } from "@/modules/todos/components/TodoApp";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-16">
      <TodoApp />
    </div>
  );
}
