import Contenedor from "../../Contenedores/MongoDB/ContenedorProductos.js";
import ProductoSchema from "../../Contenedores/MongoDB/Config/Schema/ProductoSchema.js";

const DaoProductos = new Contenedor(ProductoSchema);

export { 
    DaoProductos
}