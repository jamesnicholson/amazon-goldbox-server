import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { ProductResolver } from './resolvers/Product';
async function main() {

    const schema = await buildSchema({
        resolvers: [ProductResolver],
        validate: false,
    });

    const server = new ApolloServer({
        schema,
        context: ({ req, res }: any) => ({ req, res })
    });

    await server.listen(4000);
    console.log("Server has started!");
}
main().catch((err) => console.error(err));