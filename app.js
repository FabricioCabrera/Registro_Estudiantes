const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const app = express();
const multer = require('multer');
const mimetypes = require('mime-types');

//Conectar db
mongoose.connect('mongodb://localhost/Registro-E')
.then(db => console.log('Conectada correctamente'))
.catch(err => console.log(err));

//Importanto rutas
const indexRoutes = require('./routes/index');


//Setting
app.set('port', process.env.port || 3000);
app.set('views', path.join(__dirname ,'views'));
app.set('view engine','ejs');



const storage = multer.diskStorage({
    destination: 'uploads',
    filename: function(req,file,cb){
        console.log(Date.now());
        cb("", Date.now() + file.originalname + "." + mimetypes.extension(file.mimetypes));
    }
})

const upload = multer({
   // dest:'uploads/'
   storage: storage
})


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);


app.post("/files", upload.single('avatar'),(req, res)=>{
    res.send("Archivo subido correctamente");
    
    });


//Iniciando el servidor
app.listen(app.get('port'), ()=>{
console.log(`Server on port ${app.get('port')}`);
});
