
drop database if exists movieList;

CREATE DATABASE movieList;

USE movieList;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  watched BOOLEAN,
  PRIMARY KEY (id)
);

INSERT INTO movies (title, watched) VALUES ('On the Western Front', FALSE);
INSERT INTO movies (title, watched) VALUES ('Rat Race', TRUE);
INSERT INTO movies (title, watched) VALUES ('Shawshank Redemption', TRUE);
INSERT INTO movies (title, watched) VALUES ('Super Troopers', FALSE);