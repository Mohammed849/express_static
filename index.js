//import instantiation
const express = require('express');
const exphbs = require('express-handlebars');
const port = 3000;
const app = express();
//express config
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//routes
app.get('/', (req, res) => {
  res.render('home');
});
//server launcing
app.listen(port, () => {
  console.log(`server starts on port : ${port}`);
});
