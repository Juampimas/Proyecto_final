import { dbCarritos } from "../../Contenedores/FireBase/Config/Config.js";
import contenedor from "../../Contenedores/FireBase/contenedorCarrito.js";

const DaoCarritos = new contenedor(dbCarritos); 

export { 
    DaoCarritos
}