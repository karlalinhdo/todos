import React, { useState } from 'react';

const Footer = (props) => {
    const { filterButton, numberTodoLeft, numberTodos } = props;
    const [statusList, setStatusList] = useState('all');

    const handleFilterButton = (e, status) => {
        e.preventDefault();
        setStatusList(status);
        filterButton(status);
    }
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{numberTodoLeft}</strong>
                <span> {numberTodoLeft > 1 ? ' items' : ' item'}</span>
                <span> left</span>
            </span>
            <ul className="filters">
                <li>
                    <a
                        href='/'
                        className={statusList === 'all' ? "selected" : ""}
                        onClick={(e) => handleFilterButton(e,'all')}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        href='/active'
                        className={statusList === 'active' ? "selected" : ""}
                        onClick={(e) => handleFilterButton(e, 'active')}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        href='/completed'
                        className={statusList === 'completed' ? "selected" : ""}
                        onClick={(e) => handleFilterButton(e, 'completed')}
                    >
                        Completed
                    </a>
                </li>
            </ul>
    {numberTodos > numberTodoLeft && <button 
    className="clear-completed" 
    onClick={(e) => handleFilterButton(e, 'clearCompleted')}
    >
        Clear completed
        </button> 
        }
        </footer>
    );
}

export { Footer };