const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true },

},
    {
        //Al crear un dato le va a dar un dato de cuando se creo y cuando se actualizo 
        timestamps: true,
        versionKey: false
    })

module.exports = model('Employee', employeeSchema);