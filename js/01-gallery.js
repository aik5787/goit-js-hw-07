import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const gallery = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);

gallery.insertAdjacentHTML('beforeend', markup.join(''));

gallery.addEventListener('click', onClick);


function onClick(evt) {
    evt.preventDefault();

    
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }

    const imageSource = evt.target.dataset.source;

    const instance = basicLightbox.create(`
  <img src="${imageSource}" width="800" height="600">
`,{

	onShow: (instance) => {document.addEventListener('keydown', closeModal)},
	
	onClose: (instance) => {document.removeEventListener('keydown', closeModal);}
});

    instance.show();
    
        function closeModal(evt) {
        
        if (evt.code === "Escape" || evt.type === 'click') {
    instance.close()
}    }
    
}

