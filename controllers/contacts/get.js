const { Contact } = require("../../models/contact");
const { HttpError, ctrlWrapper } = require("../../helpers");

const get = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

module.exports = get;
