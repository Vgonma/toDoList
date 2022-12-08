export default function createTaskDOM(desc) {
  const newTask = document.createElement('li');
  newTask.setAttribute('draggable', 'true');
  newTask.className = 'task';
  newTask.innerHTML = `<input type="checkbox" class="checkbox">
  <input class="task-description" value="${desc}">
  <span id="trash" class="hidden">&#128465;</span>
  </input>
  <span id="move">&#8942;</span>
  `;
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
    newTaskInput.parentElement.children[3].classList.add('hidden');
    newTaskInput.parentElement.children[2].classList.remove('hidden');
  });
  newTaskInput.addEventListener('blur', () => {
    setTimeout(() => {
      newTaskInput.parentElement.children[3].classList.remove('hidden');
      newTaskInput.parentElement.children[2].classList.add('hidden');
      newTaskInput.parentElement.classList.toggle('focus');
    }, 100);
  });

  const trashButton = newTask.children[2];
  trashButton.addEventListener('click', () => {
    if (trashButton.parentElement.parentElement) {
      setTimeout(() => {
        trashButton.parentElement.parentElement.removeChild(trashButton.parentElement);
      }, 10);
    }
  });

  return newTask;
}
