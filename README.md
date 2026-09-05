# BPDS

Proyecto de Buenas Prácticas de Desarrollo de Software. App Next.js con un CRUD de tareas (Todo List): crear, editar, marcar como completada y eliminar.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- lucide-react (íconos)
- pnpm como gestor de paquetes

## Requisitos

- Node.js 18+
- pnpm instalado (`npm install -g pnpm` si no lo tienes)

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la app.

## Otros comandos

```bash
pnpm build   # build de producción
pnpm start   # levanta el build de producción
pnpm lint    # linter
```

## Estructura

```
src/
  app/                  # rutas y layout de Next.js
  modules/
    todos/
      types/            # tipos del módulo
      hooks/            # lógica de estado (useTodos, useTodoInput, useTodoItemEditing)
      components/       # TodoApp, TodoInput, TodoItem, TodoList, TodoTextField
```

Este proyecto usa **pnpm**, no `npm` ni `yarn` — instala dependencias y corre scripts siempre con `pnpm`.
