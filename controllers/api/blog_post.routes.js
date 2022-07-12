const router = require('express').Router();
const { Post } = require('../../models/index.model');
const authorize = require('../../utils/auth');

router.post('/', authorize, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a post by its `id` value
router.put('/:id', authorize, async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        idpost: req.params.id,
      },
    });
    if (!postData[0]) {
      res.status(404).json({ message: 'No blog post with this id!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.delete('/:id', authorize, async (req, res) => {
  try {
    const PostData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!PostData) {
      res.status(404).json({ message: 'No blog posts found with this id!' });
      return;
    }

    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
