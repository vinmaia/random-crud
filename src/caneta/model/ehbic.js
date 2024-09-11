const db = require("../db.js");

const Schema = db.Schema;

const ehbicSchema = new Schema({
 ehBic: {
    type: String,
    required: true,
  }
});

const ehBic = db.model("ehBic", ehbicSchema);

module.exports = ehBic;