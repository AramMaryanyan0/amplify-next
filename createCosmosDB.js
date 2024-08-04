require('dotenv').config({ path: './.env.local' });

const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_DB_ENDPOINT;
const key = process.env.COSMOS_DB_KEY;
const client = new CosmosClient({ endpoint, key });

async function createDatabaseAndContainer() {
    console.log('Endpoint:', endpoint);
    console.log('Key:', key);
    console.log('Database Name:', process.env.COSMOS_DB_NAME);

    try {
        const { database } = await client.databases.createIfNotExists({ id: process.env.COSMOS_DB_NAME });
        console.log(`Created database:\n${database.id}\n`);

        const { container } = await database.containers.createIfNotExists({ id: "YourContainerName" });
        console.log(`Created container:\n${container.id}\n`);
    } catch (err) {
        console.error('Error creating database and container:', err);
    }
}

createDatabaseAndContainer().catch(err => {
    console.error('Error in createDatabaseAndContainer:', err);
});
