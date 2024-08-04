// pages/api/posts.js

import { CosmosClient } from '@azure/cosmos';

const client = new CosmosClient({
    endpoint: process.env.COSMOS_DB_ENDPOINT,
    key: process.env.COSMOS_DB_KEY,
});
const database = client.database(process.env.COSMOS_DB_NAME);
const container = database.container(process.env.COSMOS_DB_CONTAINER);

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { resources } = await container.items.query('SELECT * from c').fetchAll();
            res.status(200).json(resources);
        } catch (error) {
            console.error('Error fetching items from Cosmos DB:', error);
            res.status(500).json({ error: 'Failed to fetch items from Cosmos DB' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
