const express = require("express");
const app = express();
const port = 5000;

const cor_router = require("./routers/cor_router.js");
const ehbic_router = require("./router/ehbic.js");

app.use(express.json());

app.use("/cor", cor_router);
app.use("/ehbic", ehbic_router);

app.listen(port, () => console.log(`Server running in ${port} port`));
