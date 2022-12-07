import './style.css';
import ToDoList from './modules/ToDoList.js';
import Task from './modules/Task.js';
import * as ct from './modules/taskEvents.js';

const toDoList = new ToDoList();
toDoList.addTask(new Task('task 1', 3));
toDoList.addTask(new Task('task 2', 2));
toDoList.addTask(new Task('task 3', 1));
toDoList.addTask(new Task('task 4', 0));

function populateList(toDoList) {
  toDoList.sortTasks();
  const taskList = document.querySelector('.to-do-list');
  for (let i = 0; i < toDoList.taskList.length; i += 1) {
    taskList.appendChild(
      ct.createTaskDOM(toDoList.taskList[i].getDescription),
    );
  }
}

populateList(toDoList);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const desc = form.children[0].value;
  if (!desc) return;
  const taskList = document.querySelector('.to-do-list');
  taskList.appendChild(ct.createTaskDOM(desc));
  form.children[0].value = '';
});
