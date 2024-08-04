const { CosmosClient } = require("@azure/cosmos");
require('dotenv').config({ path: '.env.local' });

const endpoint = process.env.COSMOS_DB_ENDPOINT;
const key = process.env.COSMOS_DB_KEY;
const client = new CosmosClient({ endpoint, key });

async function readDocument() {
    const database = client.database(process.env.COSMOS_DB_NAME);
    const container = database.container("YourContainerName");

    const { resource: item } = await container.item("1").read();
    console.log(`Read item: ${item.id}, name: ${item.name}, description: ${item.description}`);
}

readDocument().catch(err => {
    console.error('Error reading document:', err);
});
