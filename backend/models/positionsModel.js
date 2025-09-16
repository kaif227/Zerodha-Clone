const {model} = require("mongoose");
const {PositionsSchema} = require("../schemas/positionSchema.js");

const PositionsModel = new model("position",PositionsSchema)//this is a collection

module.exports = {PositionsModel}