export default class contenedor { 
    constructor(baseDatos){ 
        this.baseDatos = baseDatos
    }

   async getAll(){ 
        const response = await this.baseDatos.get(); 
        const responseArray = [];
        response.forEach(doc => { 
            responseArray.push(doc.data())
        })
        return responseArray;
    }

   async getOne(id){ 
        const productoRef = this.baseDatos.doc(id)
        const response = await productoRef.get(); 
        const productoEnviado = response.data()

        return productoEnviado;
    }

    async save(datos){ 
        const nuevoProducto = await this.baseDatos.add(datos)
        return nuevoProducto;
    }

    async updateOne(id, nuevosDatos){ 
      const nuevoProducto = await this.baseDatos.doc(id).update(nuevosDatos)
        return nuevoProducto;
    }

    async deleteOne(id){ 
     const productoEliminado = await this.baseDatos.doc(id).delete()
     return productoEliminado;
    }
}