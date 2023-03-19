// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Add imports above this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryItemsShown = galleryItems
  .map(
    galleryItem =>
      `
    <a class="gallery__item" href="${galleryItem.original}">
     <img
        class="gallery__image"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}"
      />
    </a>`
  )
  .join('');
gallery.innerHTML = galleryItemsShown;

const showFullscreen = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return;
};
const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});
