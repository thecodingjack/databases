var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.databaseConnection.query('select * from messages', (err, result) => {
        if (err) callback(err)
        else callback(err, result)
      })
    }, // a function which produces all the messages
    post: function (callback) {
      db.databaseConnection.query('insert into messages (message, roomname)', (data) => {
        callback(data)
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above. 
    get: function (callback) {
      db.query('select * from users', (data) => {
        callback(data)
      })
    },
    post: function (callback) {
      console.log(callback)
      db.query('insert into users', (data) => {
        callback(data)
      })
    }
  }
};

