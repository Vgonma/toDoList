import './style.css';
import ToDoList from './modules/ToDoList.js';
import Task from './modules/Task.js';

const toDoList = new ToDoList();
toDoList.addTask(new Task('task 1', 3));
toDoList.addTask(new Task('task 2', 2));
toDoList.addTask(new Task('task 3', 1));
toDoList.addTask(new Task('task 4', 0));

function populateList(toDoList) {
  toDoList.sortTasks();
  const taskList = document.querySelector('.to-do-list');
  for (let i = 0; i < toDoList.taskList.length; i += 1) {
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = `<input type="checkbox">
    <p contenteditable="true">${toDoList.taskList[i].getDescription}</p>
    <span>&#8942;</span>`;
    taskList.appendChild(newTask);
  }
}

populateList(toDoList);
