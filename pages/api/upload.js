// pages/api/upload.js
import { uploadBlob } from '../../azureStorage';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { blobName, content } = req.body;

        try {
            await uploadBlob(blobName, content);
            res.status(200).json({ message: 'Upload successful' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Upload failed' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
