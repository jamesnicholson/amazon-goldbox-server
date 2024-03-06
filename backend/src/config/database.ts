import { Sequelize } from "sequelize";
export const database = new Sequelize('myDatabase', 'root', 'jim', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
});

