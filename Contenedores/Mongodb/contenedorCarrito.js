import mongoose from "mongoose";

const uri = "mongodb://localhost:27017"
mongoose.connect(uri)

export default class contenedor{ 
    constructor(schema){ 
        this.schema = schema; 
    }

    async obtenerCarritos(){ 
        const listaCarritos = this.schema.find().select({_id:0, __v:0})
        return listaCarritos
    }

    async crearCarrito(objetoCarrito){ 
        let nombreCarrito = objetoCarrito.nombre; 
        let codigoCarrito = Math.floor(Math.random()*99999999); 
        let productosCarrito = [];
        
        const carritoGuardar = this.schema.create({nombre: nombreCarrito, codigo: codigoCarrito, productos: productosCarrito}); 
        return carritoGuardar; 
    }

    async eliminarCarrito(codigoObtenido){ 
        const datosEliminar = this.schema.deleteOne({codigo:codigoObtenido})
        return datosEliminar
    }

    async obtenerCarritoPorId(codigoObtenido){ 
        const carritoEncontrado = this.schema.findOne({codigo:codigoObtenido }).select({_id:0, __v:0})
        return carritoEncontrado
    }

    async guardarProductosCarrito(codigoCarrito, productoAgregar){ 
        await this.schema.updateOne({codigo:codigoCarrito }, {$push:{productos:productoAgregar}})
    }

    async eliminarProductoCarrito(codigoCarrito, codigoProducto){ 
        await this.schema.updateOne({codigo:codigoCarrito}, {$pull: {codigo: codigoProducto}})
    }
    
}