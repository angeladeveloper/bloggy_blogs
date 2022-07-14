const router = require('express').Router();
const { User } = require('../../models/index.model');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);


    req.session.save(() => {
      req.session.user_id = userData.iduser;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email_lg } });
    //checks if the email is correct, or in the database
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    //checks if the password is correct using the checkpassword method on the User.Model. will return a boolean, using bcrypt. 
    const correctPassword = await userData.checkPassword(req.body.password_lg);
    // if the password is wrong, just tell them to try again, dont give to much information. 
    if (!correctPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // save this users session in the database, so when they return to the site, it will remember them. 
    // also , set a LOGGED IN status in the session. 
    req.session.save(() => {
      req.session.user_id = userData.iduser;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
