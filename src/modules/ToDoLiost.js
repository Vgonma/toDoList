export default class ToDoList {
  constructor(taskList = []) {
    this.taskList = taskList;
  }

  get taskList() {
    return this.taskList;
  }

  set taskList(newTaskList) {
    this.taskList = newTaskList;
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(index) {
    this.taskList.splice(index, 1);
  }
}
