require('dotenv-flow').config();

console.log("COSMOS_DB_ENDPOINT:", process.env.COSMOS_DB_ENDPOINT);
console.log("COSMOS_DB_KEY:", process.env.COSMOS_DB_KEY);
console.log("COSMOS_DB_NAME:", process.env.COSMOS_DB_NAME);
console.log("COSMOS_DB_CONTAINER:", process.env.COSMOS_DB_CONTAINER);

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { CosmosClient } = require('@azure/cosmos');
const gql = require('graphql-tag');

const client = new CosmosClient({
    endpoint: process.env.COSMOS_DB_ENDPOINT,
    key: process.env.COSMOS_DB_KEY,
});

const database = client.database(process.env.COSMOS_DB_NAME);
const container = database.container(process.env.COSMOS_DB_CONTAINER);

// GraphQL Schema
const typeDefs = gql`
    type Item {
        id: String
        name: String
        description: String
    }

    type Query {
        items: [Item]
    }
`;

// Resolvers
const resolvers = {
    Query: {
        items: async () => {
            try {
                const { resources } = await container.items.query('SELECT * from c').fetchAll();
                return resources;
            } catch (error) {
                console.error('Error fetching items from Cosmos DB:', error);
                throw new Error('Failed to fetch items from Cosmos DB');
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
