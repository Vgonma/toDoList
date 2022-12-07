export default class Task {
  constructor(description = '', index = 0) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }

  set setDescription(newDescription = '') {
    if (!newDescription) return;
    this.description = newDescription;
  }

  set setCompleted(newCompleted) {
    this.completed = newCompleted;
  }

  set setIndex(newIndex = 0) {
    if (typeof newIndex !== 'number' || newIndex < 0) return;
    this.index = newIndex;
  }

  get getDescription() {
    return this.description;
  }

  get getCompleted() {
    return this.completed;
  }

  get getIndex() {
    return this.index;
  }

  isCompleted() {
    return this.completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
