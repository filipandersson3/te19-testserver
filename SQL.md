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
# historik

history | grep mysql

!0000