var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, result)=> {
        if (err) {
          res.status(500).end();
        } else {
          res.send(result)
        }
      })
      // res.send('hello world')
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('TEST HERE: ', req.body)
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log(res.send)
      res.send('hello World')
    },
    post: function (req, res) {
      res.end()
    }
  }
};

