-- CREATE DATABASE chat;

USE chat;



CREATE TABLE users (
  id int NOT NULL,
  PRIMARY KEY (id),
  username varchar(35) NOT NULL
);

CREATE TABLE rooms (
  id int NOT NULL,
  PRIMARY KEY (id),
  roomname varchar(35) NOT NULL
);

CREATE TABLE messages (
  id int NOT NULL,
  createdAt timestamp,
  textMessage varchar(255) NOT NULL,
  PRIMARY KEY (id),
  roomId int NOT NULL,
  FOREIGN KEY (roomId) REFERENCES rooms(id),
  userId int NOT NULL, 
  FOREIGN KEY (userId) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

