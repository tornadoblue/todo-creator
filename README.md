# @tornadoblue/TodoCreator

**Current Version:** 0.1.0

A simple React component library for creating todo items. This component allows users to input a task and receive a structured `TodoItem` object via a callback.

## Features

*   Input field for entering todo text.
*   Button to submit the new todo.
*   Callback function `onCreateTodo` that returns a `TodoItem` object.
*   `TodoItem` interface includes `id`, `text`, `completed` status, and `createdAt` timestamp.
*   Styled with Tailwind CSS using shadcn/ui components (`Input`, `Button`).

## Installation

You can install this library directly from its GitHub repository using npm or yarn:

```bash
npm install @tornadoblue/TodoCreator@github:tornadoblue/todo-creator
# or
yarn add @tornadoblue/TodoCreator@github:tornadoblue/todo-creator
```

Ensure you have `react` and `react-dom` as peer dependencies in your project.

## Usage Example

Here's a basic example of how to use the `TodoCreator` component in your React application:

```typescript jsx
import React, { useState } from 'react';
import { TodoCreator, type TodoItem } from '@tornadoblue/TodoCreator';

// Optional: If your project uses Tailwind CSS and you want to ensure
// the component's styles are applied correctly, make sure your
// tailwind.config.js content array includes the path to this library
// in node_modules. For example:
// content: [
//   // ... your other paths
//   "./node_modules/@tornadoblue/todo-creator/dist/**/*.{js,ts,jsx,tsx}",
//   "./node_modules/@tornadoblue/todo-creator/src/**/*.{js,ts,jsx,tsx}" // If you also want to scan src
// ],

function App() {
  const [latestTodo, setLatestTodo] = useState<TodoItem | null>(null);
  const [allTodos, setAllTodos] = useState<TodoItem[]>([]);

  const handleNewTodo = (todo: TodoItem) => {
    console.log('New Todo Created:', todo);
    setLatestTodo(todo);
    setAllTodos(prevTodos => [todo, ...prevTodos]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>My Todo App</h1>
      <TodoCreator onCreateTodo={handleNewTodo} />

      {latestTodo && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #eee' }}>
          <h2>Last Todo Added:</h2>
          <p>ID: {latestTodo.id}</p>
          <p>Text: {latestTodo.text}</p>
          <p>Completed: {latestTodo.completed ? 'Yes' : 'No'}</p>
          <p>Created: {latestTodo.createdAt.toLocaleString()}</p>
        </div>
      )}

      {allTodos.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>All Todos:</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {allTodos.map(todo => (
              <li key={todo.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                <p><strong>{todo.text}</strong></p>
                <small>Status: {todo.completed ? 'Done' : 'Pending'} | Created: {todo.createdAt.toLocaleDateString()}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
```

### `TodoItem` Interface

The `onCreateTodo` callback provides a `TodoItem` object with the following structure:

```typescript
interface TodoItem {
  id: string;         // Unique identifier (UUID)
  text: string;       // The content of the todo
  completed: boolean; // Status of the todo (defaults to false)
  createdAt: Date;    // Timestamp of when the todo was created
}
```

## Tailwind CSS Styling

This component uses Tailwind CSS and shadcn/ui components. For the styles to apply correctly in your consuming project:

1.  Ensure your project is set up with Tailwind CSS.
2.  You might need to include the path to this library in the `content` array of your `tailwind.config.js` file so Tailwind can scan its classes:

    ```javascript
    // tailwind.config.js
    module.exports = {
      content: [
        // ...your application's paths
        "./node_modules/@tornadoblue/todo-creator/dist/**/*.js", // For the built files
        // OR if you prefer to scan source for some reason (less common for libraries)
        // "./node_modules/@tornadoblue/todo-creator/src/**/*.{ts,tsx}",
      ],
      // ...rest of your Tailwind config
    };
    ```
    *Note: Including `dist` is generally preferred for consuming pre-built libraries. If you also include `src`, ensure your build process handles it correctly.*

## Breaking Changes

This section will be updated when breaking changes are introduced in new versions.

### Version 0.1.0
*   Initial release.

---

Developed with Dyad.