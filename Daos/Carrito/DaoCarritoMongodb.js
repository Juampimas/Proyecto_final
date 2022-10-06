import contenedor from "../../Contenedores/MongoDB/ContenedorCarritos.js";
import CarritoSchema from "../../Contenedores/MongoDB/Config/Schema/CarritoSchema.js";

const DaoCarritos = new contenedor(CarritoSchema); 

export { 
    DaoCarritos
}