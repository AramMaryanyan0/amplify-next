// pages/api/cosmos.js

import { CosmosClient } from "@azure/cosmos";

const endpoint = process.env.COSMOS_DB_ENDPOINT;
const key = process.env.COSMOS_DB_KEY;
const databaseId = process.env.COSMOS_DB_NAME;
const containerId = "YourContainerName"; // Замените на ваше имя контейнера

const client = new CosmosClient({ endpoint, key });

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const { database } = await client.databases.createIfNotExists({ id: databaseId });
            const { container } = await database.containers.createIfNotExists({ id: containerId });
            const { resources: items } = await container.items.query("SELECT * from c").fetchAll();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
