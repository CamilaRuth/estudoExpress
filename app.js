const { request, response } = require('express');
const express = require ('express');
const app = express();
let usuarios = [
    {
        nome: "Camila", sobrenome: "Ruth"
    }
];

app.get("/inicio", (request, response)=>{
return response.send ('Ola Mundo');
})

app.get("/usuarios", (request, response)=>{
    //console.log (request);
    return response.json(usuarios);
})

app.listen(3000, () => {
    console.log('servidor rodando')
})