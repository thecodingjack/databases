DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;



CREATE TABLE users (
  id int NOT NULL,
  PRIMARY KEY (id),
  username varchar(35) NOT NULL
);

-- CREATE TABLE rooms (
--   id int NOT NULL,
--   PRIMARY KEY (id),
--   roomname varchar(35) NOT NULL
-- );

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  createdAt timestamp,
  message varchar(255) NOT NULL,
  roomname varchar(255) NOT NULL,
  PRIMARY KEY (id)
  -- userId int NOT NULL, 
  -- FOREIGN KEY (userId) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

