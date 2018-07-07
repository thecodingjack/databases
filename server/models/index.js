var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.databaseConnection.query('select * from messages', (err, results) => {
        if (err) callback(err)
        else callback(err, results)
      })
    }, // a function which produces all the messages
    post: function (params,callback) {
      console.log("MODELS POST", params)
      var queryString = 'insert into messages (message, username, roomname)  values (?,?,?)'
      // var queryString = `insert into messages (message, username, roomname)  values ('hello', 'rose', 'lobby')`;
      db.databaseConnection.query(queryString, params, (err,results) => {
        console.log("MODELS POST",queryString)
        if (err) callback(err)
        else {
          console.log("MODELS POST RESULT", results)
          callback(err, results)
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above. 
    get: function (callback) {
      db.databaseConnection.query('select * from users', (err,results) => {
        if (err) callback(err)
        else callback(err, results)
      })
    },
    post: function (params, callback) {
      var queryString = 'insert into users (username) values (?)'

      db.databaseConnection.query(queryString, params[0], (err,results) => {

        if (err) callback(err)
        else callback(err, results)
      })
    }
  }
};

