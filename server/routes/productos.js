var express = require('express');
var router = express.Router();
const multer = require('multer');

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

// Almacenar imagen en carpeta y renombrar

var id = 1;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'productoImages')
    },
    filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + id)
    }
})

var upload = multer({ storage: storage })

router.post('/addProduct',upload.single('imagen'), function(req, res, next){
    // Falta obtener el nombre del proveedor

    var producto = {

    }
    query = "INSERT INTO PRODUCTO()";
    connection.query(query, function(err){
        if(err){
            console.log(err)
        }else{
            console.log("Producto insertado...")
        }
    })

    //server.js
 
 
    
});

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
    
  })