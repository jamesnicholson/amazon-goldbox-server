const { EbayAPI } = require('./data-source')
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server-express')
const port = 9002;
const jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');
const app = express();

app.use(cors(), bodyParser.json(), expressJwt({
    secret: jwtSecret,
    credentialsRequired: false
}));
const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf8' }))
const resolvers = require('./resolvers')
const context = ({ req }) => ({ user: req.user && null })

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => {
        console.log("formatError : ", err)
        return err;
    },
    dataSources: () => {
        return {
            EbayAPI: new EbayAPI()
        }
    }
})

apolloServer.applyMiddleware({ app, path: '/graphql' })
app.listen(port, () => console.info(`Server started on port ${port}`));