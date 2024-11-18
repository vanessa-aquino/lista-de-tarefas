const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderElements(arr) {
  const ulElement = document.querySelector('.tasks__list'); 
  ulElement.innerHTML = '';

  arr.forEach(task => {
    ulElement.appendChild(createTaskItem(task)); 
  });
}

function createTaskItem(task) {
  const createLi = document.createElement('li');
  createLi.classList.add('task__item');

  const createDiv = document.createElement('div');
  createDiv.classList.add('task-info__container');

  const createSpan = document.createElement('span');
  createSpan.classList.add('task-type');

  if (task.type === 'urgente') {
    createSpan.classList.add('span-urgent');
  } else if (task.type === 'importante') {
    createSpan.classList.add('span-important');
  } else if (task.type === 'normal') {
    createSpan.classList.add('span-normal');
  }

  const createParagraph = document.createElement('p');
  createParagraph.textContent = task.title; 

  const createButton = document.createElement('button');
  createButton.classList.add('task__button--remove-task');

  createButton.setAttribute('data-title', task.title);

  createButton.addEventListener('click', (event) => {
    event.preventDefault();

    const taskTitle = createButton.getAttribute('data-title');
    const taskIndex = tasks.findIndex(t => t.title === taskTitle);
    if(taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      saveToLocalStorage();
      renderElements(tasks);
    }

  });

  createDiv.appendChild(createSpan);
  createDiv.appendChild(createParagraph);

  createLi.appendChild(createDiv);
  createLi.appendChild(createButton);

  return createLi;
}
renderElements(tasks);


function addTask() {
  const taskInput = document.getElementById('input_title');
  const selectType = document.getElementById('select-options');
  const inputValue = taskInput.value;
  const selectTypeValue = selectType.value;

  if (!inputValue) return;
  
  tasks.push({
    title: inputValue,
    type: selectTypeValue,
  });

  saveToLocalStorage();
  renderElements(tasks);

} 

const button = document.querySelector('.form__button--add-task');
button.addEventListener('click', (event) => {
  event.preventDefault();
  addTask()

})

renderElements(tasks);
  
  

  