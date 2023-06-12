CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    oldPrice VARCHAR(255) NOT NULL,
    domain VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- add this line
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- and this line
);
INSERT INTO products (img, url, title, price, oldPrice, domain)
VALUES ('http://dummyimage.com/1.jpg', 'http://dummyurl.com/1', 'Dummy product 1', '10.00', '15.00', 'http://dummydomain.com');

INSERT INTO products (img, url, title, price, oldPrice, domain)
VALUES ('http://dummyimage.com/2.jpg', 'http://dummyurl.com/2', 'Dummy product 2', '20.00', '25.00', 'http://dummydomain.com');

INSERT INTO products (img, url, title, price, oldPrice, domain)
VALUES ('http://dummyimage.com/3.jpg', 'http://dummyurl.com/3', 'Dummy product 3', '30.00', '35.00', 'http://dummydomain.com');
