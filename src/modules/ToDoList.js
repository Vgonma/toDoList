// import Task from './modules/Task.js';

export default class ToDoList {
  constructor(taskList = []) {
    this.taskList = taskList;
  }

  get getTaskList() {
    return this.taskList;
  }

  set setTaskList(newTaskList = []) {
    if (!newTaskList) return;
    this.taskList = newTaskList;
  }

  getLength() {
    return this.taskList.length;
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(index) {
    this.taskList.splice(index, 1);
  }

  updateTaskIndex() {
    this.sortTasks();
    for (let i = 0; i < this.taskList.length; i += 1) {
      this.taskList[i].setIndex = i;
    }
  }

  removeCompleted() {
    const arr = [];
    for (let i = 0; i < this.taskList.length; i += 1) {
      if (!this.taskList[i].completed) {
        arr.push(this.taskList[i]);
      }
    }
    this.taskList = arr;
  }

  sortTasks() {
    for (let i = 0; i < this.taskList.length - 1; i += 1) {
      for (let j = 0; j < (this.taskList.length - 1) - i; j += 1) {
        if (this.taskList[j].index > this.taskList[j + 1].index) {
          const temp = this.taskList[j + 1];
          this.taskList[j + 1] = this.taskList[j];
          this.taskList[j] = temp;
        }
      }
    }
  }
}
