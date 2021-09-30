import './styles.css';

import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes'

export const todoList = new TodoList();

//const tarea = new Todo('Aprender Javascript');
//const tarea2 = new Todo('Aprender VueJs');


todoList.todos.forEach( todo => crearTodoHtml( todo ));
//todoList.todos.forEach(crearTodoHtml);

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);
console.log(todoList.todos);

// todoList.nuevoTodo(tarea);
// //todoList.nuevoTodo(tarea2);


// crearTodoHtml(tarea);

// localStorage.setItem('myKey','ABC2134');

// setTimeout( () => {
//     localStorage.removeItem('myKey');
// }, 1500);