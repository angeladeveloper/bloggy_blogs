const router = require('express').Router();
const {
  createThought,
  getThoughts,
  getSingleThought,
  createReaction,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought);
router.route('/:thoughtId/reaction').post(createReaction);


module.exports = router;