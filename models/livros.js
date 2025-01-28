import {Schema, model} from 'mongoose'

const livrosSchema = new Schema({
    nome: {
        type: String,
        required: true
    },qPaginas: {
        type: Number,
        required: true,
        min: 0
    },autor: {
        type: String,
        required: true
    },
})

const livrosModel = model('Livros', livrosSchema)

export {livrosModel}