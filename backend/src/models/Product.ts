// models/Product.ts
import { Sequelize, Model, DataTypes } from 'sequelize';
import { database } from '../config/database';

export class ProductModel extends Model {
    public id!: number;
    public img!: string;
    public url!: string;
    public title!: string;
    public price!: string;
    public oldPrice!: string;
    public domain!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ProductModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        img: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        url: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        title: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        price: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        oldPrice: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        domain: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        tableName: 'products',
        sequelize: database, // this bit is important
    },
);

// in case you want to use the model elsewhere
export default ProductModel;
