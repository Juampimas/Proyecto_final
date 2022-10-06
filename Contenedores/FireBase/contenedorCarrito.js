import pkg from 'firebase-admin';
const { firestore } = pkg;


firestore.FieldValue.arrayUnion

export default class contenedor{ 
    constructor(baseDatos){ 
        this.baseDatos = baseDatos; 
    }

    async getCarts(){ 
        const listaCarritos = await this.baseDatos.get(); 
        const listaCarritosArray = []; 
        listaCarritos.forEach(doc => { 
            listaCarritosArray.push(doc.data()); 
        })
        return listaCarritosArray; 
    }

    async AddCart(nuevoCarrito){ 
        let datosCarritoNuevo = { 
            nombre:nuevoCarrito.nombre, 
            codigo:Math.floor(Math.random()*999999999), 
            productos: []
        }
        const carritoNuevo = await this.baseDatos.add(datosCarritoNuevo); 
        return carritoNuevo; 
    }

    async deleteCart(idCarrito){ 
        const carritoEliminar = await this.baseDatos.doc(idCarrito).delete(); 
        return carritoEliminar; 
    }

    async getCart(idCarrito){ 
        const carritoBuscar = this.baseDatos.doc(idCarrito); 
        const carritoEncontrado = await carritoBuscar.get(); 
        const obtenerDataCarrito = carritoEncontrado.data(); 

        return obtenerDataCarrito; 
    }

    async saveCartProds(idCarrito, productoAgregar){ 
        let doc = this.baseDatos.doc(idCarrito); 
        doc.update({ 
            productos: firestore.FieldValue.arrayUnion(productoAgregar)
        })
    }

    async deleteCartProds(idCarrito, productoEliminar){ 
        let doc = this.baseDatos.doc(idCarrito); 
        
        doc.update({ 
            productos: firestore.FieldValue.arrayRemove(productoEliminar)
        })
    }
}