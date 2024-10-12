const app = Vue.createApp({
    data(){
        return {
            data:[
                {
                    id:1,
                    name:'Manuel',
                    age:30
                },
                {
                    id:1,
                    name:'Juan',
                    age:32
                },
                {
                    id:1,
                    name:'Edin',
                    age:33
                }
            ]
        }
    }
});
app.component('template-alumn',{
    data(){
        return {}
    },
    props:['alumn'],
    template:
    `
        <h1>{{alumn.name}}</h1>
        <p>{{alumn.age}}</p>
        <button v-on:click="$emit('saludarTexto','Hola Manuel')">Agregar tamaño</button>
    `
})

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div id="app">
//         <template-alumn v-on:saludar-texto="console.log($event)" v-for="alumn in data" :key="alumn.id" v-bind:alumn="alumn"></template-alumn>
//     </div>
//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <script src="vue/9-emision.js"></script>
//     <script>
//         app.mount("#app")
//     </script>
// </body>
// </html>