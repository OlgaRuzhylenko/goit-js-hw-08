// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galeryList = document.querySelector('.gallery')
function galleryTemplate(item){
    return `
    <div class="gallery">
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
   <img src="${item.preview}" alt="${item.description}" class='gallery__image' >
   </a>
 </li>
 </div>
 `
 }
 
 
 function galleryCreate(galleryItems) {
 return galleryItems.map(galleryTemplate).join('');
 }
 
 function render(){
     const markup = galleryCreate(galleryItems);
     galeryList.innerHTML = markup;
     var lightbox = new SimpleLightbox('.gallery a', { 
         captionsData: 'alt',
         captionDelay: 250,
      });
 }
 
 render()
 
 galeryList.addEventListener('click', onImageClick)
 function onImageClick(evt){
     document.addEventListener('keydown', onEsckapePress)
     evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
     return
    }
    
 }
 
 
 function onEsckapePress(evt){
 
     if (evt.code == 'Escape') {
         // instance.close()
         document.removeEventListener('keydown', onEsckapePress)
     }
     
 }