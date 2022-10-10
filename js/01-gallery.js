import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let modalRef = null;

const galleryDivRef = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);

galleryDivRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryDivRef.addEventListener('click', onPictureClick);

// console.log(galleryDivRef);

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
</div>`
    })
        .join('');
};

function onPictureClick(event) {
    // console.log(event.target)
    event.preventDefault();

    const onTargetClick = event.target;

    // console.log(onPictureClick)

    if (onTargetClick.nodeName !== 'IMG') {
        return;
    }

    modalRef = basicLightbox.create(`
    <img src="${onTargetClick.dataset.source}" 
    alt="${onTargetClick.alt}">`, {
        // closable: false,
        onClose: (modalRef) => { listenerRemove() },
    })
    
    modalRef.show();
    
    window.addEventListener('keydown', onEscapeClose);
}

function onEscapeClose(event) {
    if (event.code !== 'Escape') {
        return;
    }

    modalRef.close();
}

function listenerRemove() {
    console.log('listenerRemove');
    window.removeEventListener('keydown', onEscapeClose);
}


// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()