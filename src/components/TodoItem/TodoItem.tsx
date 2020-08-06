import * as React from 'react';

import Todo from "../../modals/Todo";

interface TodoProps {
  todo: Todo;
}

const TodoItem: React.FunctionComponent<TodoProps> = (props) => {
  return (
    <div>
        <p>
            {props.todo.task}
        </p>
        <input 
            type="checkbox" 
            value={props.todo.done ? 1 : 0}
            disabled 
        />
    </div>
  )
};

export default TodoItem;
