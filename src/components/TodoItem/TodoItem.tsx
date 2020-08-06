import * as React from 'react';

import Todo from "../../modals/Todo";

// interface TodoProps {
//   todo: Todo;
// }

const TodoItem: React.FunctionComponent<{
    todo: Todo,
    onDelete: (id: string) => void
}> = (props) => {

    const deleteTask = () => {
        props.onDelete(props.todo.id)
    }

    return (
        <div>
            <p>
                {props.todo.task} &nbsp;
                <input 
                    type="checkbox"
                    checked={props.todo.done}
                    disabled
                />
                <button onClick={deleteTask}>X</button>
            </p>
        </div>
    )
};

export default TodoItem;
