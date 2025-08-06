const mongoose = require('mongoose')

const amrutamProductSchema =  new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    } ,
    rating: {
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    packageType:[{
        type: String,
    }],
    description:{
        type: String,
        require: true
    },
    highlights: [{
        type: String,
        require: true
    }],
    keyIngredients: [{
        name: String,
        image:String,
        description:String
    }],
    howToUse:{
        type: String,
        require: true
    },
    generalInstruction:{
        type: String,
        require: true
    }
})

const AmrutamProduct = mongoose.model('AmrutamProduct', amrutamProductSchema)
module.exports = AmrutamProduct