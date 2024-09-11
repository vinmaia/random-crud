const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://<your_nick>:<your_pass>.ctfts.mongodb.net/pet";

async function main() {
  await mongoose.connect(mongoDB);
}

main().then(() => console.log("Conexão realizada com sucesso")).catch(err => console.log(err))

module.exports = mongoose 
