require('dotenv').config();

module.exports = {
    env: {
        COSMOS_DB_ENDPOINT: process.env.COSMOS_DB_ENDPOINT,
        COSMOS_DB_KEY: process.env.COSMOS_DB_KEY,
        COSMOS_DB_NAME: process.env.COSMOS_DB_NAME,
        COSMOS_DB_CONTAINER: process.env.COSMOS_DB_CONTAINER,
        AZURE_STORAGE_CONNECTION_STRING: process.env.AZURE_STORAGE_CONNECTION_STRING,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'http://localhost:3000',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, DELETE, OPTIONS',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-Requested-With, Content-Type, Authorization',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
                    },
                    {
                        key: 'Pragma',
                        value: 'no-cache',
                    },
                    {
                        key: 'Expires',
                        value: '0',
                    },
                    {
                        key: 'Surrogate-Control',
                        value: 'no-store',
                    },
                ],
            },
        ];
    },
};
