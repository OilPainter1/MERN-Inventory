const {mongoose} = require('../config/config')



console.log(mongoose.connection)
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    quantity: Number
}
)
const Product = mongoose.model("Product",productSchema)

module.exports=Product