import { galleryItems } from './gallery-items.js';


// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const imgMarkup = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
             />
         </a>
    </div>
    `;
    })
    .join('');
}

function onGalleryContainerClick(event) {
    event.preventDefault();
    
    const isGalleryEl = event.target.classList.contains('gallery__image');

    if (!isGalleryEl) {
        return;
    }
    
    const swatchUrlEl = event.target.dataset.source;
    const instance = basicLightbox.create(`
       <img src="${swatchUrlEl}" width="600" haight="700">
        `, {
        onShow: (instance) => window.addEventListener('keydown', onEscKeyPress),
        onClose: (instance) => window.removeEventListener('keydown', onEscKeyPress),
    });
    instance.show();
    
    function onEscKeyPress(event) {
        const ESC_KEY_CODE = 'Escape';
        if (event.code === ESC_KEY_CODE) {
            instance.close();
        }
    }
}
