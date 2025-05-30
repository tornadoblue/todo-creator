import { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TodoItem } from '@/interfaces/TodoItem';
import { TodoListItem } from './TodoListItem'; // Default item renderer

interface TodoListManagerProps {
  /**
   * Optional array of initial todo items.
   */
  initialTodos?: TodoItem[];
  /**
   * Optional custom rendering component for a todo item.
   * If not provided, a default renderer will be used.
   * @param item The TodoItem object.
   * @param onToggleComplete Callback to toggle the completion status of the item.
   * @param onDelete Callback to delete the item.
   * @returns React.ReactNode
   */
  renderItem?: (
    item: TodoItem,
    onToggleComplete: (id: string) => void,
    onDelete: (id: string) => void
  ) => React.ReactNode;
  /**
   * Callback function that is invoked when the list of todos changes.
   * @param todos The current array of TodoItem objects.
   */
  onTodosChange?: (todos: TodoItem[]) => void;
}

export const TodoListManager: React.FC<TodoListManagerProps> = ({
  initialTodos = [],
  renderItem,
  onTodosChange,
}) => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const [inputText, setInputText] = useState('');

  const notifyChange = (updatedTodos: TodoItem[]) => {
    if (onTodosChange) {
      onTodosChange(updatedTodos);
    }
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      text: inputText.trim(),
      completed: false,
      createdAt: new Date(),
    };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    notifyChange(updatedTodos);
    setInputText('');
    console.log('TodoListManager: New todo added:', newTodo);
  };

  const handleToggleComplete = (id: string) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    notifyChange(updatedTodos);
    console.log('TodoListManager: Todo toggled:', id);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    notifyChange(updatedTodos);
    console.log('TodoListManager: Todo deleted:', id);
  };

  return (
    <div className="space-y-6 w-full max-w-lg mx-auto">
      <form onSubmit={handleAddTodo} className="flex w-full items-center space-x-2 p-4 border rounded-lg shadow-md bg-white">
        <Input
          type="text"
          placeholder="Enter a new todo..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-grow"
          aria-label="New todo text"
        />
        <Button type="submit">Add Todo</Button>
      </form>

      {todos.length > 0 ? (
        <div className="space-y-3">
          {todos.map(todo => (
            <div key={todo.id}>
              {renderItem ? (
                renderItem(todo, handleToggleComplete, handleDeleteTodo)
              ) : (
                <TodoListItem
                  item={todo}
                  onToggleComplete={handleToggleComplete}
                  onDelete={handleDeleteTodo}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-4">No todos yet. Add one above!</p>
      )}
    </div>
  );
};