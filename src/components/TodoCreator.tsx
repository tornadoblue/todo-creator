import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TodoItem } from '@/interfaces/TodoItem';

interface TodoCreatorProps {
  /**
   * Callback function that is invoked when a new todo item is created.
   * @param todo The new TodoItem object.
   */
  onCreateTodo: (todo: TodoItem) => void;
}

export const TodoCreator: React.FC<TodoCreatorProps> = ({ onCreateTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo: TodoItem = {
      id: crypto.randomUUID(), // Modern way to generate a unique ID
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };

    onCreateTodo(newTodo); // Send the data back via callback
    setText(''); // Clear the input field
    console.log('TodoCreator: New todo created and callback invoked:', newTodo);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2 p-4 border rounded-lg shadow-md">
      <Input
        type="text"
        placeholder="Enter a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};