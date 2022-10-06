import admin from "firebase-admin";
import fs from "fs";

const rutaCredenciales = "./Contenedores/FireBase/Config/ecommerce-backend-c729b-firebase-adminsdk-n5pf0-4e99e9d414.json"
const serviceAccount = JSON.parse(await fs.promises.readFile(rutaCredenciales));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const asObject = doc => ({ id: doc.id, ...doc.data()})

const db = admin.firestore()
const dbProductos = db.collection("productos")
const dbCarritos = db.collection("carritos")

export { 
  db,
  dbCarritos,
  dbProductos
}