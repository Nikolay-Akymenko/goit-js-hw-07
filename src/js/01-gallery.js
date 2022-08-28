import { galleryItems } from './gallery-items.js';


// Change code below this line

//*<div class="gallery"></div>

const galleryContainer = document.querySelector('.gallery');
const imgMarkup = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

const modalInstance = getModal();

function createImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
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
    </div>
    `;
    })
    .join('');
}

function onGalleryContainerClick(event) {
    event.preventDefault();

    if (!event.classList.contains('.gallery__item'))
        return;

    const currentImageUrl = event.target.dataset.source;
    instance = basicLighbox.create(
        `<img class="modal__image" src"${currentImageUrl}" />`
    );
    instance.show();
}
function onModalOpen(event) {
    window.addEventListener('keydown', onModalClose);
}
function onModalClose(event) {
    window.addEventListener('keydown', onKeyPress);
}
function onKeyPress(event) {
    const ESK_KEY_CODE = 'Escape';
    const isKeyCode = event.code === ESK_KEY_CODE;

    if (isKeyCode) {
        instance.close();
        window.removeEventListener('keydown', onModalClose);
    }
}


