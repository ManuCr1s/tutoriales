Vue.createApp({
    data(){
        return {
            color:'',
            active:true
        }
    },
    computed:{
        //Las propiedades computadas siempre tienen que devolver un algo con el return
        colorClassComputed(){
                return !(this.active)?this.color='text-red':this.color="text-blue";
            }
    }
}).mount('#app')
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         .text-red{
//             color: red;
//         }
//         .text-blue{
//             color: blue;
//         }
//     </style>
// </head>
// <body>
//     <div id="app">
//         <button @click="active = !active">
//             <span v-if="active">Activado</span>
//             <span v-else>Desactivado</span>
//         </button>
//         <p :class="colorClassComputed">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui quidem fugiat porro assumenda aliquid commodi blanditiis soluta? Aliquam fugiat quis placeat. Fugiat sed nesciunt quaerat quis. Autem, dolore? Facilis.
//         </p>
//     </div>
//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <script src="vue/6-computed.js"></script>
// </body>
// </html>