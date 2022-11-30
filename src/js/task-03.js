const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const makeGalleryItem = ({ url, alt }) => {
  galleryList.style.display = 'flex';
  galleryList.style.justifyContent = 'pace-between';
  galleryList.style.gap = '15px';
  galleryList.style.listStyle = 'none';
  galleryList.style.padding = '0';
  galleryList.style.margin = '0';

  const galleryItem = document.createElement('li');
  galleryItem.insertAdjacentHTML('afterbegin', `<img src='${url}' alt='${alt}' width = 100% >`);

  galleryItem.style.borderRadius = '10px';
  galleryItem.style.overflow = 'hidden';

  return galleryItem;
};

const gallerySet = images.map(makeGalleryItem);

galleryList.append(...gallerySet);
