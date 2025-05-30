import { MadeWithDyad } from "@/components/made-with-dyad";
import { TodoCreator } from "@/components/TodoCreator"; // This is the original local component
import { TodoItem } from "@/interfaces/TodoItem";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Simulate importing from the "published" package and aliasing it
// In this project, this still resolves to your local src/index.ts -> src/components/TodoCreator.tsx
import { TodoCreator as ExternalTodoCreator } from "@tornadoblue/TodoCreator";

const Index = () => {
  const [lastCreatedTodo, setLastCreatedTodo] = useState<TodoItem | null>(null);
  const [allTodos, setAllTodos] = useState<TodoItem[]>([]);
  const [lastExternalTodo, setLastExternalTodo] = useState<TodoItem | null>(null);

  const handleCreateTodo = (todo: TodoItem) => {
    console.log("Index page: Received new todo from ORIGINAL TodoCreator:", todo);
    setLastCreatedTodo(todo);
    setAllTodos(prevTodos => [todo, ...prevTodos]);
  };

  const handleCreateExternalTodo = (todo: TodoItem) => {
    console.log("Index page: Received new todo from EXTERNAL TodoCreator:", todo);
    setLastExternalTodo(todo);
    // You might want to add these to a separate list or the same one
    setAllTodos(prevTodos => [todo, ...prevTodos]); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Simple Todo App - Library Test</h1>
        <p className="text-xl text-gray-600">
          Create and manage your tasks.
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create with Original TodoCreator</CardTitle>
          <CardDescription>(This uses the component directly from src/components)</CardDescription>
        </CardHeader>
        <CardContent>
          <TodoCreator onCreateTodo={handleCreateTodo} />
        </CardContent>
      </Card>

      {lastCreatedTodo && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Last Todo (from Original)</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Text:</strong> {lastCreatedTodo.text}</p>
          </CardContent>
        </Card>
      )}

      <Card className="w-full max-w-md mt-6">
        <CardHeader>
          <CardTitle>Create with ExternalTodoCreator (Aliased)</CardTitle>
          <CardDescription>(This imports from '@tornadoblue/TodoCreator')</CardDescription>
        </CardHeader>
        <CardContent>
          <ExternalTodoCreator onCreateTodo={handleCreateExternalTodo} />
        </CardContent>
      </Card>

      {lastExternalTodo && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Last Todo (from External/Aliased)</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Text:</strong> {lastExternalTodo.text}</p>
          </CardContent>
        </Card>
      )}

      {allTodos.length > 0 && (
         <Card className="w-full max-w-md mt-8">
          <CardHeader>
            <CardTitle>All Todos</CardTitle>
            <CardDescription>Here's a list of all your tasks.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {allTodos.map(todo => (
                <li key={todo.id} className="p-2 border rounded bg-white">
                  <p className="font-semibold">{todo.text}</p>
                  <p className="text-xs text-gray-500">
                    ID: {todo.id} | Created: {todo.createdAt.toLocaleDateString()} | Status: {todo.completed ? "Done" : "Pending"}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <MadeWithDyad />
    </div>
  );
};

export default Index;