Vue.createApp({
    data(){
        return {
            count:0
        }
    },
    methods:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        }
    }
}).mount('#app')