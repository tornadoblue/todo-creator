# @tornadoblue/TodoCreator (now TodoListManager)

**Current Version:** 0.2.0

A React component library for creating and managing a list of todo items. Users can add tasks, mark them as complete, delete them, and optionally provide a custom renderer for todo items.

## Features

*   Input field for adding new todo items.
*   Display a list of todo items.
*   Mark todos as complete/incomplete.
*   Delete todos from the list.
*   Uses `TodoItem` interface: `id`, `text`, `completed`, `createdAt`.
*   Default styling for todo items using shadcn/ui components (`Input`, `Button`, `Checkbox`).
*   **Customizable Rendering**: Consumers can provide their own React component to render each todo item via the `renderItem` prop.
*   Optional `initialTodos` prop to initialize the list.
*   Optional `onTodosChange` callback to get the updated list of todos.

## Installation

You can install this library directly from its GitHub repository using npm or yarn:

```bash
npm install @tornadoblue/TodoCreator@github:tornadoblue/todo-creator#v0.2.0
# or
yarn add @tornadoblue/TodoCreator@github:tornadoblue/todo-creator#v0.2.0
```
*(Note: Use the desired version tag, e.g., `#v0.2.0`)*

Ensure you have `react` and `react-dom` as peer dependencies in your project.

## Usage Example

```typescript jsx
import React, { useState } from 'react';
import { TodoListManager, type TodoItem, TodoListItem } from '@tornadoblue/TodoCreator'; // Assuming TodoListItem is exported for custom use
import { Button } from '@/components/ui/button'; // Example for custom renderer

function App() {
  const [currentTodos, setCurrentTodos] = useState<TodoItem[]>([]);

  const initialSampleTodos: TodoItem[] = [
    { id: '1', text: 'Initial todo 1', completed: false, createdAt: new Date() },
    { id: '2', text: 'Initial todo 2 (completed)', completed: true, createdAt: new Date() },
  ];

  const handleTodosChange = (todos: TodoItem[]) => {
    console.log('Todo list updated:', todos);
    setCurrentTodos(todos);
  };

  // Optional: Custom renderer example
  const MyCustomTodoItemRenderer = (
    item: TodoItem,
    onToggleComplete: (id: string) => void,
    onDelete: (id: string) => void
  ) => (
    <div style={{
      padding: '10px',
      border: '1px solid blue',
      marginBottom: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: item.completed ? '#e0e0e0' : '#fff'
    }}>
      <span
        style={{ textDecoration: item.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => onToggleComplete(item.id)}
      >
        {item.text} (Custom Render)
      </span>
      <Button variant="destructive" size="sm" onClick={() => onDelete(item.id)}>Delete</Button>
    </div>
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1>My Enhanced Todo List</h1>
      
      <h2 style={{ marginTop: '30px' }}>Todo List with Default Renderer</h2>
      <TodoListManager
        initialTodos={initialSampleTodos}
        onTodosChange={handleTodosChange}
      />

      <h2 style={{ marginTop: '30px' }}>Todo List with Custom Renderer</h2>
      <TodoListManager
        initialTodos={[{id: 'custom-1', text: 'A custom rendered item', completed: false, createdAt: new Date()}]}
        renderItem={MyCustomTodoItemRenderer}
        onTodosChange={(todos) => console.log("Custom list changed:", todos)}
      />

      <div style={{ marginTop: '30px' }}>
        <h3>Current Todo List (from onTodosChange callback):</h3>
        {currentTodos.length > 0 ? (
          <ul>
            {currentTodos.map(todo => (
              <li key={todo.id}>
                {todo.text} ({todo.completed ? 'Done' : 'Pending'})
              </li>
            ))}
          </ul>
        ) : <p>No todos being tracked by parent state yet.</p>}
      </div>
    </div>
  );
}

export default App;
```

### Main Component: `TodoListManager` Props

*   `initialTodos?: TodoItem[]`: (Optional) An array of `TodoItem` objects to populate the list initially.
*   `renderItem?: (item: TodoItem, onToggleComplete: (id: string) => void, onDelete: (id: string) => void) => React.ReactNode`: (Optional) A function that takes a `TodoItem`, an `onToggleComplete` callback, and an `onDelete` callback, and returns a React node to render the item. If not provided, a default item renderer (`TodoListItem`) is used.
*   `onTodosChange?: (todos: TodoItem[]) => void`: (Optional) A callback function that is invoked whenever the list of todos changes (add, toggle, delete). It receives the current array of `TodoItem` objects.

### `TodoItem` Interface

```typescript
interface TodoItem {
  id: string;         // Unique identifier (UUID)
  text: string;       // The content of the todo
  completed: boolean; // Status of the todo
  createdAt: Date;    // Timestamp of when the todo was created
}
```

## Tailwind CSS Styling

This component uses Tailwind CSS and shadcn/ui components. For the styles to apply correctly in your consuming project, ensure your `tailwind.config.js` `content` array includes the path to this library. (See previous version's README for example).

## Changelog

### Version 0.2.0
*   **BREAKING CHANGE**: Renamed `TodoCreator` component to `TodoListManager`.
*   **Feature**: `TodoListManager` now manages a full list of todo items internally.
*   **Feature**: Added ability to mark todos as complete/incomplete.
*   **Feature**: Added ability to delete todos.
*   **Feature**: Added `initialTodos` prop to `TodoListManager` to initialize the list.
*   **Feature**: Added `renderItem` prop to `TodoListManager` for custom rendering of todo items.
*   **Feature**: Added `onTodosChange` callback prop to `TodoListManager` to notify consumers of list changes.
*   **Component**: Added `TodoListItem` as the default renderer for todo items (also exported for potential direct use/styling by consumers).

### Version 0.1.0
*   Initial release: `TodoCreator` component for adding new todos.
*   `onCreateTodo` callback.

---

Developed with Dyad.