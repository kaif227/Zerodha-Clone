const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/holdingsSchema.js");

const HoldingsModel = new model("holding",HoldingsSchema)//this is a collection

module.exports = {HoldingsModel}