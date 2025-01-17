const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tmpUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await Jimp.read(tmpUpload)
    .then((avatar) => {
      return avatar.resize(250, 250).write(tmpUpload);
    })
    .catch((err) => {
      console.error(err);
    });
  await fs.rename(tmpUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
