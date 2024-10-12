const app = Vue.createApp({
    data(){
        return{
            data:[{
                id:1,
                nombre:'Crimen y Catigo',
                descripcion:'Obra literaria'
            },{
                id:1,
                nombre:'El principito',
                descripcion:'Cuento'
            }]
        }
    }
});
app.component('template-obra',{
    data(){
        return {}
    },
    props:['obra'],
    template:
    `
        <h2>{{obra.nombre}}</h2>
        <p>{{obra.descripcion}}</p>
    `
});

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div id="app">
//         <template-obra v-for="obra in data" :key="obra.id" v-bind:obra="obra"></template-obra>
//     </div>
//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <script src="vue/8-props.js"></script>
//     <script>
//         app.mount('#app')
//     </script>
// </body>
// </html>