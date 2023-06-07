import express from 'express'
import ProductManager from './productManager.js'
import cartRouter from './routers/cart.router.js'
import productRouter from './routers/product.router.js'


/*
ME FALTA DESCARGAR E IMPORTAR EL MODULO MULTER  
//importamos la libreria MULTER
import multer from 'multer'
*/

//Ejecucion de la libreria Express  
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Instanciando el productoManager
const productManager = new ProductManager()
//const readProducts = productManager.readProducts()

//endpoint - Raiz '/'  - hace referencia al http://localhost:8080/
app.get('/', async (req, res) => res.send('ok'))
//endpoint - '/health' - http://localhost:8080/health 
app.get('/health', (req, res) => res.json({ message: 'The Server is running on port 8080' }))




// ACTIVANDO EL USO DEL ROUTER PARA 'cart' 
app.use('cart', cartRouter)

// ACTIVANDO EL USO DEL ROUTER PARA 'product' 
app.use('/product', productRouter)










app.listen(8080, () => console.log('Server up'))