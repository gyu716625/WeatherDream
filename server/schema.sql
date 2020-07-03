DROP DATABASE IF EXISTS weatherdream;
CREATE DATABASE weatherdream;
USE weatherdream;

CREATE TABLE users(
    id int NOT NULL AUTO_INCREMENT,
    full_name varchar(10) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    created_at TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE chatRoom(
    message_id int NOT NULL AUTO_INCREMENT,
    context varchar(255) NOT NULL,
    country varchar(10) NOT NULL,
    chat_like int,
    chat_unlike int,
    user_id int ,
    mypage boolean,
    weather varchar(50),
    created_at TIMESTAMP,
    PRIMARY KEY (message_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);