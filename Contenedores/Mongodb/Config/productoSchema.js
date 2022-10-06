import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({ 
    nombre:{type:String, required:true},
    descripcion:{type:String, required:true},
    precio:{type:String, required:true},
    foto:{type:String, required:true},
    stock:{type:String, required:true}
})

export default mongoose.model("productos", productoSchema)