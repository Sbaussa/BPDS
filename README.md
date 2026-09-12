# BPDS — Lista de Tareas

Proyecto de la asignatura **Buenas Prácticas de Desarrollo de Software**. Aplicación Next.js con un CRUD de tareas (Todo List): crear, editar, marcar como completada, eliminar, y una **papelera** para restaurar o eliminar definitivamente las tareas borradas.

## Integrantes

- Steven Baussa

## Vista previa

> Ejecuta `pnpm dev` y abre `http://localhost:3006` para ver la app en vivo, con la vista de **Tareas** y la vista de **Papelera**.
>
> _Agrega aquí capturas de pantalla de ambas vistas antes de entregar (por ejemplo `docs/tasks-view.png` y `docs/trash-view.png`)._

## Funcionalidades

- **Crear** tareas escribiendo texto y presionando `Enter`.
- **Editar** el texto de una tarea haciendo clic sobre ella.
- **Completar / descompletar** tareas con el checkbox.
- **Eliminar** una tarea: en vez de borrarla para siempre, se mueve a la **papelera**.
- **Fecha de creación**: cada tarea muestra cuándo fue creada.
- **Fecha límite**: se le puede asignar (o quitar) una fecha límite a cada tarea con un selector de calendario.
- **Papelera**: nueva vista accesible desde el switch superior (Tareas / Papelera) donde puedes:
  - **Restaurar** una tarea eliminada, devolviéndola a la lista de tareas.
  - **Eliminar definitivamente** una tarea de la papelera.
  - **Vaciar** toda la papelera de una sola vez.
- Persistencia local con `localStorage` (las tareas y la papelera sobreviven a recargar la página).

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui (Calendar, Popover, Button)
- date-fns (formato de fechas)
- lucide-react (íconos)
- pnpm como gestor de paquetes

## Requisitos

- Node.js 18+
- pnpm instalado (`npm install -g pnpm` si no lo tienes)

## Instalación

```bash
pnpm install
```

Equivalente a `npm install`, pero este proyecto usa `pnpm` como gestor de paquetes (ver `packageManager` en `package.json`).

## Desarrollo

```bash
pnpm dev
```

Equivalente a `npm run dev`. Abre [http://localhost:3006](http://localhost:3006) para ver la app.

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
  components/ui/        # componentes shadcn/ui (Button, Calendar, Popover)
  lib/                  # utilidades compartidas (cn)
  modules/
    todos/
      types/            # tipos del módulo (Todo, DeletedTodo, props)
      constants/        # configuración estática (TODO_STAT_CONFIG)
      hooks/             # lógica de estado (useTodoApp, useTodos, useTodoInput,
                         # useTodoItemEditing, usePagination)
      screens/          # TodoScreen (composición de página completa)
      components/       # TodoInput, TodoItem, TodoList, TodoTextField,
                         # TrashList, TrashItem, TodoStats, TodoPagination,
                         # TodoDueDatePicker
```

Este proyecto usa **pnpm**, no `npm` ni `yarn` — instala dependencias y corre scripts siempre con `pnpm`.
