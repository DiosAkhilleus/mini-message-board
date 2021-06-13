var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const num = 4

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Post', num: num });
});

router.post('/new', (req, res, next) => {
  let msgUser = req.body.authName;
  let msgText = req.body.messageText;
  messages.push({text: msgText, user: msgUser, added: new Date()});
  res.redirect('/')
});

module.exports = router;
