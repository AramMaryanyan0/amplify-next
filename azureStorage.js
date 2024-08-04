// azureStorage.js
import { BlobServiceClient } from '@azure/storage-blob';

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);

export const getBlobUrl = async (blobName) => {
    const containerClient = blobServiceClient.getContainerClient('images');
    const blobClient = containerClient.getBlobClient(blobName);
    return blobClient.url;
};

export const uploadBlob = async (blobName, content) => {
    const containerClient = blobServiceClient.getContainerClient('images');
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    await blockBlobClient.upload(content, Buffer.byteLength(content));
};
