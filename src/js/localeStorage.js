import { v4 as uuidv4 } from 'uuid';

const listElem = document.querySelector('.js-list');
const formElem = document.querySelector('.js-form');
const cardsArr = JSON.parse(localStorage.getItem('cardsArr')) ?? [];

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const item = {
    smallImg: evt.target.elements.url1.value,
    bigImg: evt.target.elements.url2.value,
    name: evt.target.elements.tag.value,
    id: uuidv4(),
  };
  const markup = templateCard(item);

  listElem.insertAdjacentHTML('beforeend', markup);
  cardsArr.push(item);
  localStorage.setItem('cardsArr', JSON.stringify(cardsArr));
}

function templateCard(item) {
  return `
<li class="box item" data-id='${item.id}'>
<img
  src="${item.smallImg}"
  alt="${item.name}"
/>
<button class="form-control" data-type="delete">DELETE</button>
</li>
`;
}

function markupArr(arr) {
  return arr.map(templateCard).join('');
}
function renderArr(arr){
    const markup =  markupArr(arr);

    listElem.innerHTML = markup;
}

renderArr(cardsArr);