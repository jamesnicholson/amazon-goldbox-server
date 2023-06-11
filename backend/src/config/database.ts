import { Sequelize } from "sequelize";
export const database = new Sequelize('myDatabase', 'myUsername', 'myPassword', {
    host: 'localhost',
    dialect: 'mysql',
});