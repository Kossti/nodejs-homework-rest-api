const { Contact } = require("../../models/contact");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getById = async (req, res) => {
  const { id } = req.params;
  console.log({ id });
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not found!");
  }
  res.json(result);
};

module.exports = getById;
