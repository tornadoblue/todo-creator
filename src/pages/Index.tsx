import { MadeWithDyad } from "@/components/made-with-dyad";
// Use a relative path to import from the library's source entry point
import { TodoListManager, type TodoItem } from ".."; // This should resolve to src/index.ts
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // For custom renderer example

const Index = () => {
  const [currentManagedTodos, setCurrentManagedTodos] = useState<TodoItem[]>([]);

  const initialTodos: TodoItem[] = [
    { id: 'sample-1', text: 'Walk the dog', completed: false, createdAt: new Date() },
    { id: 'sample-2', text: 'Buy groceries', completed: true, createdAt: new Date() },
    { id: 'sample-3', text: 'Read a book', completed: false, createdAt: new Date() },
  ];

  const handleTodosChange = (todos: TodoItem[]) => {
    console.log("Index page: Todo list updated by TodoListManager:", todos);
    setCurrentManagedTodos(todos);
  };

  // Custom renderer example
  const MyCustomTodoItem = (
    item: TodoItem,
    onToggleComplete: (id: string) => void,
    onDelete: (id: string) => void
  ) => (
    <div
      className={`p-3 mb-2 border rounded-md flex justify-between items-center transition-all
                  ${item.completed ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}
    >
      <span
        onClick={() => onToggleComplete(item.id)}
        className={`cursor-pointer ${item.completed ? 'line-through text-green-700' : 'text-blue-700'}`}
      >
        {item.text} <em className="text-xs">(Custom Rendered)</em>
      </span>
      <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600" onClick={() => onDelete(item.id)}>
        Remove
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-4 space-y-8">
      <div className="text-center mt-8">
        <h1 className="text-5xl font-bold mb-3 text-gray-800">Todo List Manager</h1>
        <p className="text-xl text-gray-600">
          Add, manage, and complete your tasks.
        </p>
      </div>

      <Card className="w-full max-w-xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Default Todo List</CardTitle>
          <CardDescription>Using the built-in item rendering.</CardDescription>
        </CardHeader>
        <CardContent>
          <TodoListManager
            initialTodos={initialTodos}
            onTodosChange={handleTodosChange}
          />
        </CardContent>
      </Card>

      <Card className="w-full max-w-xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl">Custom Rendered Todo List</CardTitle>
          <CardDescription>Providing a custom component to render each item.</CardDescription>
        </CardHeader>
        <CardContent>
          <TodoListManager
            initialTodos={[{id: 'c-1', text: 'First custom item', completed: false, createdAt: new Date()}]}
            renderItem={MyCustomTodoItem}
            // onTodosChange can be used here too if needed for this specific list
          />
        </CardContent>
      </Card>
      
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader>
          <CardTitle>Tracked Todos (from Default List)</CardTitle>
          <CardDescription>This list is updated by the `onTodosChange` callback from the first TodoListManager.</CardDescription>
        </CardHeader>
        <CardContent>
          {currentManagedTodos.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1">
              {currentManagedTodos.map(todo => (
                <li key={todo.id} className={todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}>
                  {todo.text}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No todos being tracked by parent state yet, or list is empty.</p>
          )}
        </CardContent>
      </Card>

      <MadeWithDyad />
    </div>
  );
};

export default Index;