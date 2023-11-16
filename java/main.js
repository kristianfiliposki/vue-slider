
const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
            color:`blue`,
             message: 'Benvenuto ',

        methods:{
/*             prova: function () {
                this.message = "funziona";
                }, */
            bottoneCliccato: function () {
                    this.message = "aqua";
                }
            }   
        }
    }
};
createApp(opzioni).mount('#app')



