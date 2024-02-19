const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');


class Carousel{
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    // updateGallery() {
    //     this.carouselArray.forEach(el => {
    //         el.classList.remove('gallery-item-1');
    //         el.classList.remove('gallery-item-2');
    //         el.classList.remove('gallery-item-3');
    //         el.classList.remove('gallery-item-4');
    //         el.classList.remove('gallery-item-5');
    //     });
    
    //     this.carouselArray.slice(0, 5).forEach((el, i) => {
    //         el.classList.add(`gallery-item-${i + 1}`);
    
    //         //Agregar evento de clic a la imagen con la clase gallery-item-3
    //         if (el.classList.contains('gallery-item-3')) {
    //             el.addEventListener('click', () => {
    //                 const modalOverlay = document.createElement('div');
    //                 modalOverlay.classList.add('modal-overlay');
    
    //                 const modalImage = document.createElement('img');
    //                 modalImage.src = el.src;
    //                 modalImage.classList.add('modal-image');
    
    //                 modalOverlay.appendChild(modalImage);
    //                 document.body.appendChild(modalOverlay);
    
    //                 modalOverlay.addEventListener('click', () => {
    //                     modalOverlay.remove();
    //                 });
    //             });
    //         }
           
    //     });
    // }

    updateGallery() {
        // Quita todos los eventos de clic de las imágenes
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
            el.removeEventListener('click', this.modalHandler);
        });
    
        // Agrega las clases correspondientes y agrega el evento de clic solo a la imagen con la clase gallery-item-3
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
    
            if (el.classList.contains('gallery-item-3')) {
                el.addEventListener('click', this.modalHandler);
            }
        });
    }
    
    modalHandler() {
        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');
    
        const modalImage = document.createElement('img');
        modalImage.src = this.src;
        modalImage.classList.add('modal-image');
    
        modalOverlay.appendChild(modalImage);
        document.body.appendChild(modalOverlay);
    
        modalOverlay.addEventListener('click', () => {
            modalOverlay.remove();
        });
    }

    setCurrentState(direction) {
        if(direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
            console.log('control:', control);
        }); 
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }

    // setupModal() {
    //     const galleryItem3 = document.querySelector('.gallery-item-3');
    //     galleryItem3.addEventListener('click', () => {
    //         const modalOverlay = document.createElement('div');
    //         modalOverlay.classList.add('modal-overlay');

    //         const modalImage = document.createElement('img');
    //         modalImage.src = galleryItem3.src;
    //         modalImage.classList.add('modal-image');

    //         modalOverlay.appendChild(modalImage);
    //         document.body.appendChild(modalOverlay);

    //         modalOverlay.addEventListener('click', () => {
    //             modalOverlay.remove();
    //         });
    //     });
    // }
    

}

const carousel = new Carousel(galleryContainer, galleryItems, galleryControls);

carousel.updateGallery();
carousel.setControls();
carousel.useControls();
// carousel.setupModal();
