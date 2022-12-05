import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');
const galleryMarkap = createGaleryMarkup(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryMarkap);

galleryBox.addEventListener('click', onImageOfGalleryClick);

function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(
      image => `
<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
`
    )
    .join('');
}

function onImageOfGalleryClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const originalImage = evt.target.dataset.source;
}
