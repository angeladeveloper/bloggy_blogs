

const { Schema, model } = require('mongoose');

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
  }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;