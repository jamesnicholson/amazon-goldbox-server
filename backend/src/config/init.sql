CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    img TEXT,
    url TEXT,
    title TEXT CHARACTER SET utf8mb4,
    price TEXT,
    oldPrice TEXT,
    productId TEXT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- add this line
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- and this line
);
