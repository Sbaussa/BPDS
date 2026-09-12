import { TodoScreen } from "@/modules/todos/screens/TodoScreen";

export default function Home() {
  return (
    <div className="flex h-screen justify-center overflow-hidden bg-zinc-50 px-6 py-6 sm:px-8">
      <TodoScreen />
    </div>
  );
}
