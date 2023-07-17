const Contact = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const get = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found!");
//   }
//   res.json(result);
// };

// const add = async (req, res) => {
//   //   const { error } = addSchema.validate(req.body);
//   //   if (error) {
//   //     throw HttpError(400, "missing required name field");
//   //   }
//   const result = await contacts.addContact(req.body);
//   res.status(201).json(result);
// };

// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.removeContact(id);
//   if (!result) {
//     throw HttpError(404, "Not Found!");
//   }
//   res.status(200).json({ message: "contact deleted" });
// };

// const updateById = async (req, res) => {
//   //   const { error } = addSchema.validate(req.body);
//   //   if (error) {
//   //     throw HttpError(400, error.message);
//   //   }
//   const { id } = req.params;
//   const result = await contacts.updateContact(id, req.body);
//   if (!result) {
//     throw HttpError(404, "Not Found !");
//   }
//   res.status(200).json(result);
// };

module.exports = {
  get: ctrlWrapper(get),
  // getById: ctrlWrapper(getById),
  // add: ctrlWrapper(add),
  // deleteById: ctrlWrapper(deleteById),
  // updateById: ctrlWrapper(updateById),
};
