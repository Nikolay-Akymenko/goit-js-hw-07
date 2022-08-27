import { galleryItems } from './gallery-items.js';


// Change code below this line

//*<div class="gallery"></div>

const galleryContainer = document.querySelector('.gallery');
const imgMarkup = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

// console.log(createImgMarkup(galleryItems));

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
    console.log(event.target);
}



