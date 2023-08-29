const path = require('path');
const fs = require('fs/promises');
const User = require('../../models/user');
const Jimp = require('jimp');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tmpUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);

  await fs.rename(tmpUpload, resultUpload);

  await Jimp.read(resultUpload)
    .then(image => {
      image.resize(250, 250).write(resultUpload);
    })
    .catch(error => console.log(error));

  const avatarURL = path.join('avatars', filename);

  await User.findByIdAndUpdate(_id, { avatarURL }, { new: true });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
