const pool = require('../db')

const getAllProductos = async (req, res) => {
    res.send('Retornando todos productos');
}

const getProducto = async (req, res) => {
    res.send('Retornando un solo producto');
}

const createProducto = async (req, res) => {
    const producto = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO task(title,descripcion) VALUES($1, $2) RETURNING*",
            [title, descripcion]
        );

        res, json(result.rows[0]);
    } catch (error) {
        res, json({ error: error.message });
    }
}

const deleteProducto = async (req, res) => {
    res.send('Eliminando producto');
}

const updateProducto = async (req, res) => {
    res.send('Actualizando producto');
}

module.exports = {
    getAllProductos,
    getProducto,
    createProducto,
    deleteProducto,
    updateProducto
}