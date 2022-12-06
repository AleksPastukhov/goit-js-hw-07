import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');
const galleryMarkap = createGaleryMarkup(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryMarkap);

galleryBox.addEventListener('click', onImageOfGalleryClick);

function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(
      image => `
    <a class="gallery__item" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" 
 />
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

  let gallerySet = new SimpleLightbox('.gallery a');
  gallerySet.on('show.simplelightbox', function () {});
}
