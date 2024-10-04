let data = [
    {
        id:1,
        nombre:'Manuel'
    },
    {
        id:2,
        nombre:'Juan'
    }
];
let getData = (data) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(false){
                resolve(data);
            }else{
                reject({error:'401'});
            }
        },2000)
    })
}
//PIMERA FORMA DE CAPTURAR LA RESPUESTA DE UNA PROMESA
/* let response = getData(data);
response.then((data)=>{
    console.log(data);
}).catch(()=>{
    return error;
}); */
//SEGUNDA FORMA DE CAPTURAR LA REPSUESTA DE UNA PROMESA 
async function fetchFunction(){
    try {
        let response = await getData(data);
        console.log(response);        
    } catch (error) {
        console.log(error)
    }

}
fetchFunction();
console.log('Final del codigo');