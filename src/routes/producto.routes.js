const{ Router } = require('express');
const pool = require('../db');
const{getAllProductos, getProducto, createProducto, deleteProducto, updateProducto}=require('../controllers/producto.controller');


const router = Router();

router.get('/productos',getAllProductos);

router.get('/producto/10',getProducto);

router.post('/producto',createProducto);

router.delete('/producto',deleteProducto);

router.put('/producto',updateProducto);


module.exports = router;