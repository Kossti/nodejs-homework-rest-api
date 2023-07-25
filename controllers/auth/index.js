const register = require("./register");

const login = require("./login");

const { HttpError, ctrlWrapper } = require("../../helpers");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
};
