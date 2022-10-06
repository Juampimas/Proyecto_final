import  Express  from "express";
const app = Express();
import  path  from "path";


import {router} from "./Routes/productos.js"
import {router as routerCarrito} from "./Routes/carrito.js"

// Routes
app.use("/api/productos/", router)
app.use("/api/carritos", routerCarrito)


// Settings
app.use(Express.json())
app.use(Express.urlencoded({extended:true}))



// Servidor
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', (error) => console.log(`Error en servidor ${error}`));


app.get("/", (req,res) => {
  res.send("Página Principal")
})