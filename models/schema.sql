drop database if exists projectDB;
CREATE DATABASE projectDB;

use projectDB;
create table user(
    id int auto_increment,
    name varchar(50) not null,
    age int not null,
    gender varchar(50) not null,
    primary key (id)
);