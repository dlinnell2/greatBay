DROP DATABASE IF EXISTS greatBayDB;

CREATE DATABASE greatBayDB;

USE greatBayDB;

CREATE TABLE items (

  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(50) NOT NULL,
  price INTEGER(10) NOT NULL,
  PRIMARY KEY (id)

);

CREATE TABLE users (

id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(30) NOT NULL,
password VARCHAR(30) NOT NULL
);


INSERT INTO items (item, price)
VALUES ('Record Player', 250);

INSERT INTO items (item, price)
VALUES ('Electric Guitar', 135);

INSERT INTO items (item, price)
VALUES ('Bicycle', 200);

INSERT INTO items (item, price)
VALUES ('Honda Accord', 2000);

INSERT INTO items (item, price)
VALUES ('Laptop', 450);

INSERT INTO items (item, price)
VALUES ('Empty Starbucks Cup', 5);

INSERT INTO items (item, price)
VALUES ('Full Starbucks Cup', 3);

INSERT INTO items (item, price)
VALUES ('Vintage Converse', 45);

INSERT INTO items (item, price)
VALUES ('A bag of steel cut oats', 30);

INSERT INTO items (item, price)
VALUES ('Helicopter', 3000);