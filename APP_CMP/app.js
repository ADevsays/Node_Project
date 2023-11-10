require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const userRouter = require('./src/controllers/users');
const personalRouter = require('./src/controllers/personals');
const planillasRouter = require('./src/controllers/planillas');
const salariosRouter = require('./src/controllers/salarios');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//conexion a la bd

(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Estas conectado a MongoDB');
    }catch(error){
        console.log(error);
    }
})();

//crear las rutas del frontend para el localhost:4000
app.use('/',express.static(path.resolve('views','home')));
app.use('/principal',express.static(path.resolve('views','Principal')));
app.use('/registro',express.static(path.resolve('views','registro')));
app.use('/login',express.static(path.resolve('views','login')));
app.use('/planillas',express.static(path.resolve('views','Planillas')));
app.use('/salarios',express.static(path.resolve('views','Salarios')));
app.use('/personal',express.static(path.resolve('views','Personal')));
app.use('/usuarios',express.static(path.resolve('views','Usuarios')));
app.use('/components',express.static(path.resolve('views','components')));
app.use('/PDF',express.static(path.resolve('views','PDF')));
app.use('/notificaciones',express.static(path.resolve('views','Notificaciones')));
app.use('/IMG',express.static(path.resolve('IMG')));
app.use('/CSS',express.static(path.resolve('views','CSS')));
app.use('/html2pdf',express.static(path.resolve('views','html2pdf.js')));

//importante
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('tiny'));

//rutas de backend
app.use('/api/users',userRouter);
app.use('/api/personal',personalRouter);
app.use('/api/planillas',planillasRouter);
app.use('/api/salarios',salariosRouter);

module.exports = app;