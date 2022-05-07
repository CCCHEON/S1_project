set names utf8;
drop database if exists consumeDB;
create database consumeDB charset=utf8;
use consumeDB;
create table consumeInfo(
	consumeId int not null primary key auto_increment,
	consumeName varchar(20) not null,
	consumePrice decimal(7,2) not null,
	consumeCount int not null,
	consumeDate varchar(20) not null,
	consumeType varchar(20) not null,
	remark varchar(100)
);
insert into consumeInfo values(1,"电费",0.45,100,"2011-10-08","日常消费","");
insert into consumeInfo values(2,"胡萝卜",3,3,"2011-11-10","生活消费","");
insert into consumeInfo values(3,"猪肉",16,2,"2011-12-12","生活消费","");
insert into consumeInfo values(4,"大衣",240,1,"2011-12-26","百货消费","");