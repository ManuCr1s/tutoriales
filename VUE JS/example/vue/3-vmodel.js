Vue.createApp({
    data(){
        return{
            name:'',
            paises:['Peru','Bolivia']
        }
    },
    methods:{
        increment(){
            this.paises.push(this.name);
            this.name = '';
        }
    }
}).mount('#app')