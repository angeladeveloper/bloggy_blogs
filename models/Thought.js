

const { Schema, model, default: mongoose } = require('mongoose');
const ReactionSchema = require('./Reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      ref: 'User',
    },
  },
);

const Thought = new mongoose.model('thought', thoughtSchema);

module.exports = Thought;