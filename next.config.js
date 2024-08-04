module.exports = {
    env: {
        COSMOS_DB_ENDPOINT: process.env.COSMOS_DB_ENDPOINT,
        COSMOS_DB_KEY: process.env.COSMOS_DB_KEY,
        COSMOS_DB_NAME: process.env.COSMOS_DB_NAME,
        AZURE_STORAGE_CONNECTION_STRING: process.env.AZURE_STORAGE_CONNECTION_STRING,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
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
