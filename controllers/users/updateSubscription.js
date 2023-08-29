const User = require('../../models/user');

const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );

  res.json({
    user: {
      email: user.email,
      subscription,
    },
  });
};

module.exports = updateSubscription;
