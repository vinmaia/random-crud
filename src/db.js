const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://maiav:kSckXefOO0ZiO5AS@Cluster0.ctfts.mongodb.net/pet";

async function main() {
  await mongoose.connect(mongoDB);
}

main().then(() => console.log("Conexão realizada com sucesso")).catch(err => console.log(err))

module.exports = mongoose 
