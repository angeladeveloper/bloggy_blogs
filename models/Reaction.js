
const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

// Schema to create reaction model
const reactionSchema = new Schema(
  {
    reactionBody: {
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
      required: true,
    },
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),

    },
    thoughtId: {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },

  }
);

const Reaction = new mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;