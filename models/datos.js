const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema de la tabla Datos
// autor: Faby
const DatoSchema = new Schema({
    name: {type: String},
    username: { type: String},
    age: { type: String},
    address: { type: String},
    telephone: { type: String},
    email:{ type: String}
});

module.exports = mongoose.model('datos', DatoSchema);