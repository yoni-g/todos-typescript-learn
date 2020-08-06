import * as React from 'react';

import Todo from "../../modals/Todo";

// interface TodoProps {
//   todo: Todo;
// }

const AddTaskPanel: React.FunctionComponent<{
    onCreateTask: (todo: Todo) => void
}> = (props) => {

    var todo: Todo = {
        id:'',
        task:'',
        done:false
    }

    const createTodo = () => {
        if (todo.task === '') {
            alert("Please enter a value")
            return
        }
        props.onCreateTask(todo)
    }

    function inputChange(){
        
        switch (arguments[0].target.name) {
            case 'task_input':
                todo.task = arguments[0].target.value
                break;
            case 'done_input':
                todo.done = arguments[0].target.checked
                break;
            default:
                break;
        }
    }
    return (
        <div className="Container AddTaskPanel">
            <p className="FieldLabel">{"Task Name: "} &nbsp;</p>
            <input type="text" onChange={inputChange} name="task_input"/>
            <p className="FieldLabel">{"Is Done? "} &nbsp;</p>
            <input type="checkbox" onChange={inputChange} name="done_input"/>
            <button onClick={createTodo}>
                {"Create"}
            </button>
        </div>
    )
};

export default AddTaskPanel;
