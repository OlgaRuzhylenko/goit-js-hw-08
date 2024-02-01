import { common } from './common';
import { createMarkup } from '../helpers/create.markup';
import { createModal } from '../helpers/createModal';
import { cars } from '../helpers/cars';

const list = document.querySelector('.js-list')
const favourite = JSON.parse(localStorage.getItem(common.KEY_FAVOURITE)) ?? [];

createMarkup(favourite, list)
list.addEventListener('click', onClick)
function onClick(evt){
    evt.preventDefault();

    if (evt.target.classList.contains('js-info')) {
      const { id } = evt.target.closest('.js-card').dataset;
      const product = findProduct(Number(id));
      createModal(product);
    }
}

function findProduct(productId) {
    return cars.find(({ id }) => id === productId);
  }