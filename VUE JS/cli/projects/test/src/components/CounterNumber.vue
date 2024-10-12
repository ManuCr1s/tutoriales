<template>
    <button :disabled="active" @click="dismiss()">-</button>
    {{ count }}
    <button @click="increment()">+</button>
</template>
<script>
export default{
    data(){
        return {
            count:0
        }
    },
    methods:{
        increment(){
            this.count++;
        },
        dismiss(){
            this.count--;
        }
    },
    computed:{
        active(){
            return (this.count===0);
        }
    }
}
</script>
<style scoped>

</style>