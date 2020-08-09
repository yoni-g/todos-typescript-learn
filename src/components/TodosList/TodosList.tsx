import * as React from 'react';

import Todo from "../../modals/Todo";

import TodoItem from '../TodoItem/TodoItem';

// interface TodoProps {
//   todo: Todo;
// }

const TodosList: React.FunctionComponent<{
    todoItems: Todo[],
    deleteTask: (id: string) => void
}> = (props) => {

    return (

        <div className="Container TodosContainer">
            <p>All Todos</p>
            { props.todoItems.map(todo => (
                    <TodoItem 
                        todo={todo} 
                        onDelete={(id:string) => props.deleteTask(id)}
                        key={todo.id}
                    />
                )
            )}

        </div>

    )
};

export default TodosList;
