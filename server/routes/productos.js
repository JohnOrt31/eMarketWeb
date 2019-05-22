var express = require('express');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'jolans',
    password: '1234',
    database: 'emarket'
});
  
connection.connect();

router.get('/', function(req, res, next){
    
    query = "SELECT po.producto_id AS 'producto_id', pe.nombre AS 'proveedor', po.nombre AS 'nombre', po.precio AS precio, po.descripcion AS 'descripcion', po.existencia AS existencia, po.imagen as imagen FROM PROVEEDOR pe, PRODUCTO po;";

    var productos = [];
    connection.query(query, function(err, rows, fields){
        if(!err){
            for (r of rows) {
                var producto = {
                    producto_id: 0,
                    proveedor: "",
                    nombre: "",
                    precio: 0,
                    descripcion: "",
                    existencia: 0,
                    imagen: ""
                }
                producto.producto_id = r.producto_id;
                producto.proveedor = r.proveedor;
                producto.nombre = r.nombre;
                producto.precio = r.precio;
                producto.descripcion = r.descripcion;
                producto.existencia = r.existencia;
                producto.imagen = r.imagen;
                productos.push(producto);
            }
        }else{
            console.log(err);
        }
        res.json(productos);
    });
});