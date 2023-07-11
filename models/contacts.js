const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const contactId = String(id);
  const contacts = await listContacts();
  const results = contacts.find((item) => item.id === contactId);
  return results || null;
};

const removeContact = async (id) => {
  const contactId = String(id);
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = allContacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return result;
};

const addContact = async (body) => {
  const allContacts = await listContacts();
  const newContacts = {
    id: nanoid(),
    ...body,
  };
  allContacts.push(newContacts);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return newContacts;
};

const updateContact = async (id, body) => {
  const contactId = String(id);
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  allContacts[index] = { id, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return allContacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
