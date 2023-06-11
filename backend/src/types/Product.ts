import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Product {
    @Field(() => ID)
    id!: string;

    @Field()
    img!: string;

    @Field()
    url!: string;

    @Field()
    title!: string;

    @Field()
    price!: string;

    @Field()
    oldPrice!: string;

    @Field()
    domain!: string;
}