import './style.css';
import ToDoList from './modules/ToDoList.js';
import Task from './modules/Task.js';
import createTaskDOM from './modules/taskEvents.js';

const toDoList = new ToDoList();
toDoList.addTask(new Task('task 1', 3));
toDoList.addTask(new Task('task 2', 2));
toDoList.addTask(new Task('task 3', 1));
toDoList.addTask(new Task('task 4', 0));
const taskList = document.querySelector('.to-do-list');

function populateList(toDoList) {
  toDoList.sortTasks();
  for (let i = 0; i < toDoList.taskList.length; i += 1) {
    taskList.appendChild(
      createTaskDOM(toDoList.taskList[i].getDescription),
    );
  }
}

populateList(toDoList);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const desc = form.children[0].value;
  if (!desc) return;
  taskList.appendChild(createTaskDOM(desc));
  form.children[0].value = '';
});

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach((box) => {
  box.addEventListener('change', () => {
    const boxIndex = Array.prototype.indexOf.call(checkboxes, box);
    toDoList.taskList[boxIndex].toggleCompleted();
  });
});

const clearAll = document.querySelector('.clear-all');
clearAll.addEventListener('click', () => {
  toDoList.removeCompleted();
  for (let i = 0; i < taskList.children.length; i += 1) {
    if (taskList.children[i].children[0].checked) {
      taskList.removeChild(taskList.children[i]);
    }
  }
});
