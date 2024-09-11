const { ConnectionStates } = require("mongoose");

const ehBic = require("../model/ehbic.js");

const store = async (req, res) => {
  await ehBic.create(req.body);
  res.json();
};

const index = async (req, res) => {
  const content = ehBic.find().exec();
  res.json(content);
};

const show = async (req, res) => {
  const content = ehBic.findById(req.params.id).exec();
  res.json(content);
};

const update = async (req, res) => {
  await ehBic.findByIdAndUpdate(req.params.id, req.body).exec();
  res.json();
};

const destroy = async (req, res) => {
  await ehBic.findByIdAndDelete(req.params.id).exec();
  res.json();
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
