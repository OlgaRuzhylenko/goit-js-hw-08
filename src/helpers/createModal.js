import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';
import { closeModal } from './closeModal';

function createModal(product) {
    const option = {
        handler: null,
            onShow(instance) {
                this.handler = closeModal.bind(instance)
                document.addEventListener('keydown', this.handler)
            },
            onClose(instance) {
                document.removeEventListener('keydown', this.handler)
            },
    }

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
`, option);
    instance.show();       
}



export { createModal }