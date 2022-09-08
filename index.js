const express = require('express');// de esta maneras lo traemos
const app = express();
const port = 8000;//indicamos que queremos que nuestra aplicacion corra en el puerto 30000

//quiero definir una ruta
//el primer parametro es la ruta y el segundo es una funcion callback
//donde vamos a ejecutar la respues que nosotros enviemos a nuestro cliente.
// en este callback siempre tenemos dos parametro "el require, el response"
/*req y res
req es un objeto que contiene información sobre la solicitud HTTP que provocó el evento.
 En respuesta areq, usa respara devolver la respuesta HTTP deseada.*/
app.get('/',(req,res)=>{
//send es un metedo de http "enviar" queremos retornar este mensaje.
  res.send('hola, este es mi primer servidor en express')

})

// ahora debemos decirle a nuestra aplicacion que debe escuchar en un puerto especifico
//listen: otro metodo http
app.listen(port, ()=>{
  console.log(`Escuchar en:  http://localhost:${port}`);
});
