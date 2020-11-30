import './App.css';
import './css/header.css';
import './css/listTodo.css';
import './css/footer.css';
import { Header } from './components/Header';
import { ListTodo } from './components/ListTodo';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [statusListTodo, setStatusListTodo] = useState('all')

  //get list todo from localstorage. useEffect(()=>{},[]) function load data only one time before the first render. if have item in localStorage => setListToto(items) else listTodo = []
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('listTodo'));
    if (items) {
      setListTodo(items);
    }
  }, [])

  //set list todo in localstorage. useEffect(()=>{},[listTodo]) function load when listTodo is changed
  useEffect(() => {
    localStorage.setItem('listTodo', JSON.stringify(listTodo));
  }, [listTodo])

  //add a new todo have to done
  const newTodo = (todo = {}) => {
    const list = [...listTodo];
    list.push(todo);
    setListTodo(list);
  }

  //delete a todo
  const removeTodo = (id = '') => {
    const list = listTodo.filter(todo => todo.key !== id);
    setListTodo(list);
  }

  //handle click complete
  const isCompleted = (id = '', check) => {
    const list = [...listTodo];
    const todo = list.find(item => item.key === id);
    const index = list.indexOf(todo);
    todo.isCompleted = check;
    list[index] = todo;
    setListTodo(list);
  }

  //change isEditing to todo "input edit" show 
  const getEditingTodo = (id = '') => {
    const list = [...listTodo];
    const todo = list.find(item => item.key === id);
    todo.isEditing = true;
    setListTodo(list);
  }

  //editing todo
  const editing = (id = '', editTitle) => {
    const list = [...listTodo];
    const todo = list.find(item => item.key === id);
    todo.title = editTitle;
    todo.isEditing = false;
    setListTodo(list);
  }

  //filterButton
  const getListTodoFilter = (listTodo, statusListTodo) => {
    console.log(statusListTodo);
    let list = [];
    if (statusListTodo === 'all') {
      list = listTodo;
    }
    if (statusListTodo === 'active') {
      list = listTodo.filter(todo => todo.isCompleted === false);
    }
    if (statusListTodo === 'completed') {
      list = listTodo.filter(todo => todo.isCompleted === true);
    }
    if(statusListTodo === 'clearCompleted'){
      list = listTodo.filter(todo => todo.isCompleted === false);
      setStatusListTodo('all');
      setListTodo(list);
    }
    return list;
  }

  //get the number of todo left
  const getNumberTodoLeft = () => {
      const list = listTodo.filter(todo => todo.isCompleted === false);
    return list.length;
  }

  //number
  return (
    <div className="todoapp">
      <Header newTodo={newTodo} />
      <ListTodo
        listTodo={getListTodoFilter(listTodo, statusListTodo)}
        removeTodo={removeTodo}
        isCompleted={isCompleted}
        getEditingTodo={getEditingTodo}
        editing={editing}
      />
      <Footer filterButton={(status) => setStatusListTodo(status)} 
      numberTodos={listTodo.length}
      numberTodoLeft={getNumberTodoLeft()}
      />
    </div>
  );
}

export default App;
