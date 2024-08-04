import { BlobServiceClient } from '@azure/storage-blob';

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);

export const getBlobUrl = async (blobName) => {
    const containerClient = blobServiceClient.getContainerClient('your-container-name');
    const blobClient = containerClient.getBlobClient(blobName);
    return blobClient.url;
};
