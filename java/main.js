const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            index:"0",
            slides : [
                {
                    immagine: 'https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-787.jpg',
                    nome: 'Smartphone XYZ',
                    descrizione: 'Uno smartphone potente con caratteristiche avanzate e display nitido.',
                    prezzo: 499.99
                },
                {
                    immagine: 'https://img.freepik.com/free-psd/laptop-blue-background-mock-up_1022-178.jpg',
                    nome: 'Laptop ABC',
                    descrizione: 'Un laptop leggero e performante, ideale per la produttività in movimento.',
                    prezzo: 899.99
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg',
                    nome: 'Fotocamera 123',
                    descrizione: 'Una fotocamera professionale con alta risoluzione e molte funzionalità.',
                    prezzo: 699.99
                }
            ],
        }   
    },
    methods: {
        avanti() {
            let finalindex = this.slides.length-1;
            if(this.index < finalindex){
                this.index++;
            }
            else if(index = finalindex){
                this.index=0;
            }
        },
         indietro() {
            if(this.index == 0){
                    let finalindex = this.slides.length-1;
                    this.index=finalindex;
                }
            else{
                let finalindex = this.slides.length-1;
                this.index--;

            }
            }
    }
};
createApp(opzioni).mount('#app')



