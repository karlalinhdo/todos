import React, { useState } from 'react';

const Header = (props) => {
    //because the todo's name is entered by input and can be changed, this setting it in "state"
    const [todoName, setTodoName] = useState('');
    //newTodo is var containt value to pass among components
    const { newTodo } = props;

    const addTodo = (event) => {
        //if press Enter => return true && todoName => return todoName, else did not press Enter => return false && todoName => return false
        if (event.key === 'Enter' && todoName) {
            newTodo({
                key: "" + new Date().valueOf(),
                title: todoName,
                isCompleted: false,
                isEditing: false
            })
            setTodoName('');
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={todoName}
                onChange={(event) => setTodoName(event.target.value)}
                onKeyPress={(event) => addTodo(event)}
            />
        </header>
    );
}

export { Header };