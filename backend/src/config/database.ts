import { Sequelize } from "sequelize";
export const database = new Sequelize('myDatabase', 'root', 'jim', {
    host: 'db',
    dialect: 'mysql',
});

