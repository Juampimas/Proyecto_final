import  Express  from "express";

import { DaoProductos,  DaoCarritos} from "../Daos/Controlador.js";


const router = Express.Router(); 


router.get("/", async (req, res) => { 
    const obtenerCarritos = await DaoCarritos.getCarts()
    res.status(201).json({Lista_Carritos: obtenerCarritos})
})

router.get("/:codigo", async (req,res) => { 
  const codigoCarrito = req.params.codigo; 
  const carritoEncontrado = await DaoCarritos.getCart(codigoCarrito)
  res.status(201).json({Carrito: carritoEncontrado})
})

router.post("/", async (req,res) => { 
    const datosNuevoCarrito = req.body; 
    await DaoCarritos.addCart(datosNuevoCarrito);
    res.status(201).json({Mensaje: "Carrito creado "}) 
})

router.post("/:codigo/:producto", async (req,res) => { 
    const codigoCarrito = req.params.codigo; 
    const codigoProducto = req.params.producto;
    const obtenerProducto = await DaoProductos.getOne(codigoProducto); 

    await DaoCarritos.saveCartProds(codigoCarrito, obtenerProducto)
    res.status(201).json({Mensaje:"Ok"})

})

router.delete("/:id", async (req, res) => { 
    const idCarritoEliminar = req.params.id; 
    await DaoCarritos.deleteCart(idCarritoEliminar); 
    res.status(201).json({Mensaje:"Carrito eliminado"})
})

router.delete("/:idCarrito/:productoEliminar",async (req,res) => { 
    const idCarrito = req.params.idCarrito; 
    const idProducto = req.params.productoEliminar; 
    const productoEliminar = await DaoProductos.getOne(idProducto)

    await DaoCarritos.deleteCartProds(idCarrito, productoEliminar)

    res.status(201).json({Mensaje:"Producto Eliminado"})
})

export { 
    router
}