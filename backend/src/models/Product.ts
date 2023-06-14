// models/Product.ts
import { Model, DataTypes } from 'sequelize';
import { database } from '../config/database';
import { Product } from '../types/Product';

export class ProductModel extends Model {
    public id!: number;
    public img!: string;
    public url!: string;
    public title!: string;
    public price!: string;
    public oldPrice!: string;
    public productId!: string;

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
            allowNull: true,
        },
        url: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        title: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        price: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        oldPrice: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        productId: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
    },
    {
        tableName: 'products',
        sequelize: database, // this bit is important
    },
);

export async function upsertProduct(productData:Product) {
    const { id, ...props } = productData;
  
    // First, we try to find the product in the database using the provided id
    let newProduct = await ProductModel.findByPk(id);
 
    if (newProduct) {
      // If the product exists, we update it with the new data
      await newProduct.update(props);
    } else {
      // If the product does not exist, we create a new one
      newProduct = await ProductModel.create({
        id,
        ...props
      });
    }
  
    return newProduct;
  }
// in case you want to use the model elsewhere
export default ProductModel;
