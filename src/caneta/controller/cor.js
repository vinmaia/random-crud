const { ConnectionStates } = require("mongoose");

const Cor = require("../model/cor.js");

const store = async (req, res) => {
  await Cor.create(req.body);
  res.json();
};

const index = async (req, res) => {
  const content = Cor.find().exec();
  res.json(content);
};

const show = async (req, res) => {
  const content = Cor.findById(req.params.id).exec();
  res.json(content);
};

const update = async (req, res) => {
  await Cor.findByIdAndUpdate(req.params.id, req.body).exec();
  res.json();
};

const destroy = async (req, res) => {
  await Cor.findByIdAndDelete(req.params.id).exec();
  res.json();
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
