import { default as React } from 'react';
import { TodoItem } from '../interfaces/TodoItem';

interface TodoCreatorProps {
    /**
     * Callback function that is invoked when a new todo item is created.
     * @param todo The new TodoItem object.
     */
    onCreateTodo: (todo: TodoItem) => void;
}
export declare const TodoCreator: React.FC<TodoCreatorProps>;
export {};
