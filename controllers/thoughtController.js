const { Thought, Reaction } = require('../models');
const { ObjectId } = require('mongoose').Types;


module.exports = {
  getThoughts(req, res) {
    Thought.find({})
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
      (
        !thought
          ? res.status(404).json({ message: 'No Thought with that ID' })
          : thought)
      ).then((data) => {

        res.json(data)
      })
      .catch((err) => res.status(500).json(err));
  },
  // create a new Thought
  async createThought(req, res) {
    const newThought = await new Thought(req.body);
    newThought.save()
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },

  async createReaction(req, res) {
    const newReaction = await new Reaction({
      ...req.body,
      reactionId: new ObjectId(),
      thoughtId: req.params.thoughtId
    });
    newReaction.save()
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
};