var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results)=> {
        if (err) {
          res.status(500).end();
        } else {
          res.send({results})
        }
      })
      // res.send('hello world')
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('POST MESSAGE: ', req.body)
      var params = [req.body.text,req.body.username,req.body.roomname]
      models.messages.post(params,(err,results)=>{
        if (err) {
          res.status(500).end();
        } else {
          res.send(results)
        }
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results)=> {
        if (err) {
          res.status(500).end();
        } else {
          res.send({results})
        }
      })
      // res.send('hello world')
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('POST USERS ', req.body)
      var params = [req.body.username]
      models.users.post(params,(err,results)=>{
        console.log('PARAMS' , params)
        if (err) {
          res.status(500).end();
        } else {
          res.send(results)
        }
      })
    } 
  }
};

