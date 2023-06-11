import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('mydb', 'user', 'password', {
    host: 'db',
    dialect: 'mysql',
});