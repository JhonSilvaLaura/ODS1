//importar dependencia
const express = require('express');
//para k no dee la direccion exacta
const path = require("path")

const app = express();
//direccion exacta de la ruta y la carpeta de html 
app.use(express.static(path.join(__dirname, 'public')));


//ruta inicio
app.get('/', (resq,res)=>{
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

//las rutas explorar
app.get('/explorar', (resq,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'explorar.html'))
})

//login
app.get('/login', (resq,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

//el puerto que usaremos 
const PORT = 4000;

//listamos 
app.listen(PORT , ()=>{
    console.log('server prendido');
})