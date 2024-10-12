const app = Vue.createApp({});
app.component('button-numbered',{
    data(){
        return {
            data:0
        }
    },
    template:`
        <button @click="data++">Hiciste click {{this.data}}, veces</button>
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
//         <button-numbered></button-numbered>
//         <button-numbered></button-numbered>
//         <button-numbered></button-numbered>
//         <button-numbered></button-numbered>
//     </div>
//     <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
//     <script src="vue/7-components.js"></script>
//     <script>
//         app.mount("#app")
//     </script>
// </body>
// </html>