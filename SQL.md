# Anteckningar

sudo service mysql restart

## skapa super user

sudo mysql -u root

CREATE USER 'filip'@'localhost' IDENTIFIED BY 'filip';

GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';

exit

# använda

mysql -u filip -p

show databases;

use database;

show tables;

SELECT * FROM user;

utf8mb4 mysql är vanlig utf8

describe table;

CREATE TABLE users (id INT UNSIGNED AUTO_INCREMENT, PRIMARY KEY(id)) ENGINE = innodb CHARACTER SET 'utf8mb4';

SHOW resurs;

USE databas;

ALTER table

INSERT

SELECT

insert into tasks (task) values ('handla');

alter table tasks drop completed_at;

create table NAMN (id) ...

alter table NAMN ADD MODIFY DROP NAMN

delete from tasks WHERE id = 5;

update tasks set completed=1, updated_at=now() where id=1;

# historik

history | grep mysql

!0000