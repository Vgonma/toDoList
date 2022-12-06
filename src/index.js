import Task from './modules/Task.js';
import ToDoList from './modules/ToDoLiost.js';

const toDoList = new ToDoList();
toDoList.addTask(new Task('task 1'));
toDoList.addTask(new Task('task 2'));
toDoList.addTask(new Task('task 3'));
toDoList.addTask(new Task('task 4'));
