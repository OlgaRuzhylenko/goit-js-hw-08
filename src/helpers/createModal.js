import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';

function createModal(product) {

const instance = basicLightbox.create(`
<div>
<img src="${product.img}" alt="${product.car}">
<h2>${product.car}</h2>
<h3>${product.type}</h3>
<p>${product.price}</p>
<div>
  <button class='js-favourite'>add to favourite</button>
  <button class='js-basket'>add to basket</button>
</div>
</div>
`);
    instance.show();       
}

export { createModal }