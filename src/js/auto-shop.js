import { common } from './common';
import { createMarkup } from '../helpers/create.markup';
import { createModal } from '../helpers/createModal';

import { cars } from '../helpers/cars';

const input = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const favouriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVOURITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

//ця функціця винесена в helpers
createMarkup(cars, list);

list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    createModal(product);
  }
  if (evt.target.classList.contains('js-basket')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    basketArr.push(product)
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr))
  }
  if (evt.target.classList.contains('js-favourite')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    const inStorage = favouriteArr.some(({ id }) => id === product.id)
    if (inStorage){
      return
    }
    favouriteArr.push(product)
    localStorage.setItem(common.KEY_FAVOURITE, JSON.stringify(favouriteArr))
  }
}

function findProduct(productId) {
  return cars.find(({ id }) => id === productId);
}
