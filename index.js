const express = require('express');
const db = require('./config/connections');
const routes = require('./routes');


const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.get('/', (req, res) => {
  // res.send('Hello World!');
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });
});
