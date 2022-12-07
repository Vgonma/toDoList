export function createTaskDOM(desc) {
  const newTask = document.createElement('li');
  newTask.className = 'task';
  newTask.innerHTML = `<input type="checkbox">
  <input class="task-description" value="${desc}"></input>
  <span>&#8942;</span>`;
  const taskCheckbox = newTask.children[0];
  taskCheckbox.addEventListener('change', () => {
    if (taskCheckbox.checked) {
      newTask.classList.add('completed');
    } else {
      newTask.classList.remove('completed');
    }
  });
  const newTaskInput = newTask.children[1];
  newTaskInput.addEventListener('focus', () => {
    newTaskInput.parentElement.classList.toggle('focus');
  });
  newTaskInput.addEventListener('blur', () => {
    newTaskInput.parentElement.classList.toggle('focus');
  });
  return newTask;
}

export function dummy() {
  return 'dummy';
}
