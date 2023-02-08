console.log("Hello From Server.js")
const Product = require("../Models/Product")

async function test() {
    const product1 = await Product.create({name: "toy", id: 2})
}

console.log(test())