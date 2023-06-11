import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Product } from '../types/Product'; // or wherever your Product type is located
import { ProductModel } from '../models/Product'; // this would be your Sequelize model

@Resolver(Product)
export class ProductResolver {

    @Query(() => [Product])
    async products() {
        return await ProductModel.findAll();
    }

    @Query(() => Product, { nullable: true })
    async product(@Arg('id') id: string) {
        return await ProductModel.findByPk(id);
    }

    @Mutation(() => Product)
    async createProduct(
        @Arg('img') img: string,
        @Arg('url') url: string,
        @Arg('title') title: string,
        @Arg('price') price: string,
        @Arg('oldPrice') oldPrice: string,
        @Arg('domain') domain: string
    ) {
        const product = await ProductModel.create({
            img,
            url,
            title,
            price,
            oldPrice,
            domain
        });
        return product;
    }

    @Mutation(() => Product)
    async updateProduct(
        @Arg('id') id: string,
        @Arg('img', { nullable: true }) img: string,
        @Arg('url', { nullable: true }) url: string,
        @Arg('title', { nullable: true }) title: string,
        @Arg('price', { nullable: true }) price: string,
        @Arg('oldPrice', { nullable: true }) oldPrice: string,
        @Arg('domain', { nullable: true }) domain: string
    ) {
        const fieldsToUpdate = { img, url, title, price, oldPrice, domain };
        await ProductModel.update(fieldsToUpdate, { where: { id } });
        const updatedProduct = await ProductModel.findByPk(id);
        return updatedProduct;
    }
}
