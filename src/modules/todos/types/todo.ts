export interface Todo {
  id: string;
  text: string;
  done: boolean;
  createdAt: number;
  dueDate?: number;
}

export interface DeletedTodo extends Todo {
  deletedAt: number;
}

export interface TodoInputProps {
  onCreate: (text: string) => void;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onUpdateText: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  onSetDueDate: (id: string, dueDate: number | undefined) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onUpdateText: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  onSetDueDate: (id: string, dueDate: number | undefined) => void;
}

export interface TrashItemProps {
  todo: DeletedTodo;
  onRestore: (id: string) => void;
  onDeleteForever: (id: string) => void;
}

export interface TrashListProps {
  deletedTodos: DeletedTodo[];
  onRestore: (id: string) => void;
  onDeleteForever: (id: string) => void;
}

export interface TodoPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
