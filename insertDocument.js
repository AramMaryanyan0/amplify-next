const { CosmosClient } = require("@azure/cosmos");
require('dotenv').config({ path: '.env.local' });

const endpoint = process.env.COSMOS_DB_ENDPOINT;
const key = process.env.COSMOS_DB_KEY;
const client = new CosmosClient({ endpoint, key });

console.log('Endpoint:', endpoint);
console.log('Key:', key);
console.log('Database Name:', process.env.COSMOS_DB_NAME);

async function createDocument() {
    const database = client.database(process.env.COSMOS_DB_NAME);
    const container = database.container("YourContainerName");

    const newItem = {
        id: "1",
        name: "Sample Item",
        description: "This is a sample item"
    };

    const { resource: createdItem } = await container.items.create(newItem);
    console.log(`Created item: ${createdItem.id}`);
}

createDocument().catch(err => {
    console.error('Error creating document:', err);
});
