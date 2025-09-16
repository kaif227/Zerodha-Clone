const {model} = require("mongoose");
const {OrdersSchema} = require("../schemas/orderSchema");

const OrdersModel = new model("order",OrdersSchema)//this is a collection

module.exports = {OrdersModel}