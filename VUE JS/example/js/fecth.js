fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response=>response.json())
    .then(data=>console.log(data));
/*Codigo para obtener respuetsa de una peticion de una API*/    