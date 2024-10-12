<template>
    <router-view/>
    <!--Para utilizar nombres de ruta con el valor name sin parametro -->
    <!-- <router-link :to="{name:'cursoIndex'}"> Index</router-link> -->
    <!-- <router-link :to="'/curso/'+$route.params.idCurso">Index</router-link> |
    <router-link :to="'/curso/'+$route.params.idCurso+'/detail'">Detail</router-link> |
    <router-link :to="'/curso/'+$route.params.idCurso+'/time'">Time</router-link> -->
    <!--Para utilizar nombres de ruta con el valor name con parametro -->
    <router-link :to="{name:'cursoIndex',params:{idCurso:$route.params.idCurso}}"> Index</router-link>
    <router-link :to="{name:'cursoDetail',params:{idCurso:$route.params.idCurso}}"> Detail</router-link>
    <router-link :to="{name:'cursoTime',params:{idCurso:$route.params.idCurso}}"> Time</router-link>
</template>
<script>

</script>
<style></style>