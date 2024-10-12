const app = Vue.createApp({})
app.component('template-saludo',{
    data(){
        return{
            hola:'Saludo'
        }
    },
    props:['saludo'],
    template:`
        <h1>Hola Mundo</h1>
        <p><slot></slot></p>
    `
})