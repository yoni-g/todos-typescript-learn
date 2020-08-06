import * as React from 'react';

import Todo from "../../modals/Todo";

// interface TodoProps {
//   todo: Todo;
// }

const TodoItem: React.FunctionComponent<{
    todo: Todo;
}> = (props) => {
  return (
    <div>
        <p>
            {props.todo.task} &nbsp;
            <input 
                type="checkbox"
                checked={props.todo.done}
                disabled
            />
        </p>
    </div>
  )
};

export default TodoItem;
