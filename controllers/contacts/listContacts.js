const Contact = require('../../models/contact');

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  let result;

  if (!favorite) {
    result = await Contact.find({ owner }, '', { skip, limit });
  } else {
    result = await Contact.find({ owner, favorite }, '', { skip, limit });
  }

  res.json(result);
};

module.exports = listContacts;
