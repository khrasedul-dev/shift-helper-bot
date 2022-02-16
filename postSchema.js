const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    website: {
        type: String
    },
    twitter: {
        type: String
    },
    contract: {
        type: String
    },
    adminlist: {
        type:String
    },
    marketing:{
        type: String
    },
    dextools: {
        type:String
    },
    news: {
        type: String
    },
    buy: {
        type: String
    },
    help: {
        type: String
    },
    instagram: {
        type:String
    },
    facebook:{
        type: String
    },
    youtube: {
        type:String
    },
    reddit:{
        type: String
    },
    supply: {
        type:String
    }
})

module.exports = mongoose.model("shifthelperbot" , schema)