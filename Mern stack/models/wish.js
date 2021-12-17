// In mongo database there is collection and that collection there is record
// collection is also known as models
//there may be more than one models but in our case we have one


const mongoose=require('mongoose')
const Schema=mongoose.Schema

const WishSchema=Schema({
    wish:String
})

// Exporting in this way may give error when imported more than 1 time
// module.exports=mongoose.model('wishes',WishSchema)

//better way
mongoose.model('wishes',WishSchema)