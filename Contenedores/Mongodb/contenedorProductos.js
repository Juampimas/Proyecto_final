import mongoose from "mongoose";
const uri = "mongodb://localhost:27017"

mongoose.connect(uri)


export default class Contenedor{ 
    constructor(schema){ 
        this.schema = schema
    }

   async save(objetoProductoNuevo){
        const nombre = objetoProductoNuevo.nombre; 
        const precio = objetoProductoNuevo.precio; 
        const descripcion = objetoProductoNuevo.descripcion; 
        const foto = objetoProductoNuevo.foto; 
        const stock = objetoProductoNuevo.stock; 
        const datosGuardar = this.schema.create({nombre:nombre, precio:precio, descripcion:descripcion, foto: foto, stock:stock})
        return datosGuardar
    }

    getAll(){ 
        const datos = this.schema.find().select({_id:0, __v:0}).lean()
        return datos
    }

    getOne(idProducto){ 
        const dato =  this.schema.findOne({codigo:idProducto}).select({_id:0, __v:0})
        return dato
    }

    deleteOne(nombreDato){ 
        const datosEliminar = this.schema.deleteOne({codigo:nombreDato})
        return datosEliminar
    }

    updateOne(id, nombre){ 
        const datoActualizar = this.schema.updateOne({id:id}, {$set:{nombre:nombre}})
        return datoActualizar
    }

}