import * as React from 'react';
import * as CSS from 'csstype';

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
    const todoItemStyle: CSS.Properties = {
        textAlign: 'justify',
    }
    const floatRight: CSS.Properties = {
        float: 'right',
    }
    const clearButton: CSS.Properties = {
        border: '0',
        backgroundColor: 'Transparent'
    }

    return (
        <div>
            <p style={todoItemStyle}>
                {props.todo.task} &nbsp;
                <div style={floatRight}>
                    <input type="checkbox"
                        checked={props.todo.done}
                        disabled
                    />
                    <button 
                        style={clearButton} 
                        onClick={deleteTask}>
                        🗑
                    </button>
                </div>
            </p>
        </div>
    )
};

export default TodoItem;
