const { User } = require("../../models/user");

const { HttpError, ctrlWrapper } = require("../../helpers");

const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;

  res.json({
    email,
    subscription,
  });
};

module.exports = getCurrent;
