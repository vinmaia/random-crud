const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://<your-nick>:<your-pass>@Cluster0.ctfts.mongodb.net/pet";

async function main() {
  await mongoose.connect(mongoDB);
}

main().then(() => console.log("Conexão realizada com sucesso")).catch(err => console.log(err))

module.exports = mongoose 
