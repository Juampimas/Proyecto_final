import  Express  from "express";
import { DaoProductos } from "../Daos/Controlador.js";


const router = Express.Router(); 

router.get("/", async (req, res) => { 
    const productos = await DaoProductos.getAll()
    res.json({Productos: productos})
})

router.get("/:id", async (req, res) => { 
   const id = req.params.id; 
   const productoEncontrado = await DaoProductos.getOne(id)
   res.json({Producto: productoEncontrado})
})

router.post("/", async (req, res) => { 
    const productoNuevo = req.body; 
    await DaoProductos.save(productoNuevo);
    res.json({Mensaje:"Producto agregado"})
})

router.put("/:id", async (req, res) => { 
   const idProductoActualizar = req.params.id; 
   const nuevosDatosProductos = req.body; 
   await DaoProductos.updateOne(idProductoActualizar, nuevosDatosProductos.nombre); 
   res.status(201).json({Estado: "Producto actualizado"})
})

router.delete("/:id", async (req, res) => { 
   const idProductoEliminar = req.params.id; 
   await DaoProductos.deleteOne(idProductoEliminar); 
   res.status(201).json({Mensaje:"Producto eliminado"})
})

export { 
    router
}