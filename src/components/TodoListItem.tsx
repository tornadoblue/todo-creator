import { TodoItem } from '@/interfaces/TodoItem';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';

interface TodoListItemProps {
  item: TodoItem;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void; // Added delete functionality
  className?: string;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ item, onToggleComplete, onDelete, className }) => {
  return (
    <div className={`flex items-center justify-between p-3 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow ${item.completed ? 'opacity-60' : ''} ${className}`}>
      <div className="flex items-center space-x-3">
        <Checkbox
          id={`todo-${item.id}`}
          checked={item.completed}
          onCheckedChange={() => onToggleComplete(item.id)}
          aria-label={`Mark ${item.text} as ${item.completed ? 'incomplete' : 'complete'}`}
        />
        <label
          htmlFor={`todo-${item.id}`}
          className={`flex-grow cursor-pointer ${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
        >
          {item.text}
        </label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(item.id)}
        aria-label={`Delete ${item.text}`}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={18} />
      </Button>
    </div>
  );
};