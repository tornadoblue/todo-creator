import { MadeWithDyad } from "@/components/made-with-dyad";
import { TodoCreator } from "@/components/TodoCreator";
import { TodoItem } from "@/interfaces/TodoItem";
import { useState } from "react"; // Keep useState as it's used directly
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [lastCreatedTodo, setLastCreatedTodo] = useState<TodoItem | null>(null);
  const [allTodos, setAllTodos] = useState<TodoItem[]>([]);

  const handleCreateTodo = (todo: TodoItem) => {
    console.log("Index page: Received new todo from TodoCreator:", todo);
    setLastCreatedTodo(todo);
    setAllTodos(prevTodos => [todo, ...prevTodos]); // Add to the beginning of the list
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Simple Todo App</h1>
        <p className="text-xl text-gray-600">
          Create and manage your tasks.
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create a New Todo</CardTitle>
          <CardDescription>Enter the details for your new task below.</CardDescription>
        </CardHeader>
        <CardContent>
          <TodoCreator onCreateTodo={handleCreateTodo} />
        </CardContent>
      </Card>

      {lastCreatedTodo && (
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Last Created Todo</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>ID:</strong> {lastCreatedTodo.id}</p>
            <p><strong>Text:</strong> {lastCreatedTodo.text}</p>
            <p><strong>Completed:</strong> {lastCreatedTodo.completed ? "Yes" : "No"}</p>
            <p><strong>Created At:</strong> {lastCreatedTodo.createdAt.toLocaleString()}</p>
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