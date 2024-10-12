Vue.createApp({
    data(){
        return {
            valor:10
        }
    },
}).mount('#app')
//HTML
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <p v-if="valor == 0">0</p>
        <p v-else-if="valor == 1">1</p>
        <p v-else-if="valor == 2">2</p>
        <p v-else>Ninguno</p> 
    </div>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="vue/4-vif.js"></script>
</body>
</html> */