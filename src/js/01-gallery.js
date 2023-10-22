// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const container = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item"> 
    <a href="${original}" class="gallery__link">
    <img src="${preview}" alt="${description}"/>
    </a>
    </li>`).join('')
container.insertAdjacentHTML('beforeend', markup);

    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
    });