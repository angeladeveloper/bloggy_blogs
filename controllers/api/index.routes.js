const router = require('express').Router();
const user_log = require('./user_log.routes');
const blog_post = require('./blog_post.routes');

router.use('/users', user_log);
router.use('/blog_post', blog_post);

module.exports = router;
