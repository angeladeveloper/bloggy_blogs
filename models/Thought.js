

const { Schema, model, default: mongoose } = require('mongoose');
const reactionSchema = require('./Reaction');

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
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    }],
  },
);

const Thought = new mongoose.model('Thought', thoughtSchema);

module.exports = Thought;