const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(arr) {
  const ulElement = document.querySelector('.tasks__list'); 
  document.querySelector('.tasks__list').innerHTML = '';

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

  if (task.type === 'Urgente') {
    createSpan.classList.add('span-urgent');
  } else if (task.type === 'Importante') {
    createSpan.classList.add('span-important');
  } else if (task.type === 'Normal') {
    createSpan.classList.add('span-normal');
  }

  const createParagraph = document.createElement('p');
  createParagraph.textContent = task.title; 

  const createButton = document.createElement('button');
  createButton.classList.add('task__button--remove-task');

  createDiv.appendChild(createSpan);
  createDiv.appendChild(createParagraph);

  createLi.appendChild(createDiv);
  createLi.appendChild(createButton);

  return createLi;
}

renderElements(tasks);
