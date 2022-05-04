
// nome repo: vue-slider

// Descrizione:
// Partendo dal markup consegnate rendere dinamici tutti i contenuti (foto e testi) e al click su una thumb, visualizzare in grande l’immagine corrispondente

// Bonus:
// 1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce



// const slides = [
//     {
//         image: 'img/01.jpg',
//         title: 'Svezia',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     },
//     {
//         image: 'img/02.jpg',
//         title: 'Svizzera',
//         text: 'Lorem ipsum.',
//     },
//     {
//         image: 'img/03.jpg',
//         title: 'Gran Bretagna',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     },
//     {
//         image: 'img/04.jpg',
//         title: 'Germania',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
//     },
//     {
//         image: 'img/05.jpg',
//         title: 'Paradise',
//         text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
//     }
// ];


const app = new Vue ({

    el: '#app',
    data:{

        index: 0,
        autoSlider: true,
        images :[
            {
                imgUrl: 'img/01.jpg',
                title: 'Svezia',
                text: 'Svezia - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti autveniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },

            {
                imgUrl: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Svizzera - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti autveniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },

            {
                imgUrl: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Gran Bretagna - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti autveniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },

            {
                imgUrl: 'img/04.jpg',
                title: 'Germania',
                text: 'Germania - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti autveniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },

            {
                imgUrl: 'img/05.jpg',
                title: 'Paradise',
                text: 'Paradise - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti autveniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
        ],

    },

    methods: {

        nextImage(){

            if(this.index < this.images.length - 1){

                this.index++;

            } else {

                this.index = 0;

            }

            console.log(this.index);
            
        },

        prevImage(){

            if(this.index <= 0){

                this.index = this.images.length - 1;

            } else {

                this.index--;
    
            }

            console.log(this.index);

        },

        clickedThumb(indexImg){

            for (let ind = 0; ind < this.images.length; ind++) {
                
                if(ind === indexImg){

                    this.index = ind;
                } 
            }
        }
    },

    mounted(){
        // BONUS 1
        setInterval(() => {
            if(this.autoSlider === true){
                this.nextImage();
            }
        }, 3000);
    }

});