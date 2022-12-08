import './style.css';
import ToDoList from './modules/ToDoList.js';
import Task from './modules/Task.js';
import createTaskDOM from './modules/taskEvents.js';
import * as storage from './modules/localStorageFunctions.js';

const toDoList = new ToDoList();
toDoList.taskList = storage.load('tasks');

// test variables if the list is empty
// toDoList.addTask(new Task('task 1', 3));
// toDoList.addTask(new Task('task 2', 2));
// toDoList.addTask(new Task('task 3', 1));
// toDoList.addTask(new Task('task 4', 0));

const taskList = document.querySelector('.to-do-list');

function populateList(emptyList) {
  emptyList.sortTasks();
  for (let i = 0; i < emptyList.taskList.length; i += 1) {
    taskList.appendChild(
      createTaskDOM(emptyList.taskList[i].description),
    );
  }
}

populateList(toDoList);
storage.save('tasks', toDoList.taskList);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const desc = form.children[0].value;
  if (!desc) return;
  taskList.appendChild(createTaskDOM(desc));
  form.children[0].value = '';
  const newTask = new Task(desc, toDoList.taskList.length);
  toDoList.addTask(newTask);
  storage.save('tasks', toDoList.taskList);
});

const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach((box) => {
  box.addEventListener('change', () => {
    const boxIndex = Array.prototype.indexOf.call(checkboxes, box);
    toDoList.taskList[boxIndex].completed = !toDoList.taskList[boxIndex].completed;
  });
});

const clearAll = document.querySelector('.clear-all');
clearAll.addEventListener('click', () => {
  toDoList.removeCompleted();
  const len = taskList.children.length;
  for (let i = len - 1; i >= 0; i -= 1) {
    if (taskList.children[i].children[0].checked) {
      taskList.removeChild(taskList.children[i]);
    }
  }
  storage.save('tasks', toDoList.taskList);
});

const trashCans = document.querySelectorAll('#trash');
trashCans.forEach((bin) => {
  bin.addEventListener('click', () => {
    const index = (Array.prototype.indexOf.call(
      bin.parentElement.parentElement.children, bin.parentElement,
    ));
    toDoList.removeTask(index);
    storage.save('tasks', toDoList.taskList);
  });
});

const reload = document.querySelector('.reload');
reload.addEventListener('click', () => {
  populateList(toDoList);
});
