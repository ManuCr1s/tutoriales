Vue.createApp({
    data(){
        return {
            count:0,
            nombre:'Manuel'
        }
    },
    mounted(){
        setInterval(()=>{
            this.count++;
        },1000)
    }
}).mount('#app');