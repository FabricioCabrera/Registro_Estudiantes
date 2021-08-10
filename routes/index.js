const express = require("express");
const  Router = express.Router();
const Dato = require('../models/datos');

Router.get('/', async (req, res)=>{
    const datos = await Dato.find();
    console.log(datos);
    res.render('index',{
        datos
    });
});



Router.post('/add', async (req, res)=>{
    const datos = new Dato(req.body);
    console.log(datos);
    await datos.save();
    res.redirect('/');
})

module.exports = Router;