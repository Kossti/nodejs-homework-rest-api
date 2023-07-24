const get = require("./get");
const getById = require("./getById");
const add = require("./add");
const deleteById = require("./deleteById");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");

const { HttpError, ctrlWrapper } = require("../../helpers");

module.exports = {
  get: ctrlWrapper(get),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
