const register = require("./register");

const login = require("./login");

const getCurrent = require("./current");

const logout = require("./logout");

const { HttpError, ctrlWrapper } = require("../../helpers");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
};