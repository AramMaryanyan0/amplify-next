import { CosmosClient } from '@azure/cosmos';

const endpoint = process.env.COSMOS_DB_ENDPOINT;
const key = process.env.COSMOS_DB_KEY;
const databaseId = process.env.COSMOS_DB_NAME;
const containerId = process.env.COSMOS_DB_CONTAINER;

console.log("COSMOS_DB_ENDPOINT:", endpoint);
console.log("COSMOS_DB_KEY:", key ? "****" : "undefined");
console.log("COSMOS_DB_NAME:", databaseId);
console.log("COSMOS_DB_CONTAINER:", containerId);

let container;

const connectToCosmosDB = async () => {
    try {
        const client = new CosmosClient({ endpoint, key });
        const database = client.database(databaseId);
        container = database.container(containerId);

        const { resource: databaseResource } = await database.read();
        console.log(`Connected to database: ${databaseResource.id}`);

        const { resource: containerResource } = await container.read();
        console.log(`Connected to container: ${containerResource.id}`);
    } catch (error) {
        console.error("Error connecting to Cosmos DB:", error);
        throw error;
    }
};

connectToCosmosDB();

export { container };
