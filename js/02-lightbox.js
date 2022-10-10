import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDivRef = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);

galleryDivRef.insertAdjacentHTML('beforeend', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.9,
    showCounter: false,
    disableRightClick: true,
    disableScroll: true,
    // spinner: false,
    // nav: false,
 });

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
        .join('');
};
