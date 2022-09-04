const { User } = require('../models');
const { ObjectId } = require('mongoose').Types;
module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  async createUser(req, res) {
    const newUser = await new User(req.body);
    newUser.save()
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
};
