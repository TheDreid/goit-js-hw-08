import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
const galleryItemsRef = galleryItems;
const markup = createMarkup(galleryItemsRef);

galleryRef.innerHTML = markup;

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
      `;
    })

    .join('');
}

const listElement = document.querySelector('ul');
listElement.style.listStyleType = 'none';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
