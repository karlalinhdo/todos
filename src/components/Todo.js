import React, { useState } from 'react';

const Todo = (props) => {
    const { todo, removeTodo, isCompleted, editing, getEditingTodo } = props;
    const [editValue, setEditValue] = useState(todo.title);
    return (
        <li >
            {console.log(todo)}
            {
                todo.isEditing ?
                    <input
                        className="edit"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' && editValue) {
                                editing(todo.key, editValue);
                            }
                        }}
                    />
                    :
                    <div className="view" onDoubleClick={() => getEditingTodo(todo.key)}>
                        <input className="toggle" type="checkbox" onChange={(e) => isCompleted(todo.key, e.target.checked)} checked={todo.isCompleted} />
                        <label className={todo.isCompleted ? "completed" : ""}>{todo.title}</label>
                        <button className="destroy" onClick={() => removeTodo(todo.key)}></button>
                    </div>
            }

        </li>
    );
}

export { Todo };