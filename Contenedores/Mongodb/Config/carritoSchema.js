import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema({
    nombre:{type:String, required:true},  
    codigo:{type:String, required:true}, 
    productos:{type:Array, required:true}
})

export default mongoose.model("carritos", carritoSchema)