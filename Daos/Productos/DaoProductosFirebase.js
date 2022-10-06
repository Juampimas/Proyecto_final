import contenedor from "../../Contenedores/FireBase/ContenedorProductos.js";
import { dbProductos } from "../../Contenedores/FireBase/Config/Config.js";

const DaoProductos = new contenedor(dbProductos); 

export{ 
    DaoProductos
}