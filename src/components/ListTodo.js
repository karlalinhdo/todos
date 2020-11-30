import React from 'react';
import { Todo } from './Todo';

const ListTodo = (props) => {
    const { listTodo, removeTodo, isCompleted, editing, getEditingTodo } = props;
    return (
        <section className="main">
            <ul className="todo-list">
                {
                    listTodo.map(todo => {
                        return <Todo
                            key={todo.key}
                            todo={todo}
                            removeTodo={removeTodo}
                            isCompleted={isCompleted}
                            editing={editing}
                            getEditingTodo={getEditingTodo}
                        />
                    })
                }
            </ul>
        </section>
    );
}

export { ListTodo };