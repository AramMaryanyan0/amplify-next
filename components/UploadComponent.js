import { useState } from 'react';

function UploadComponent() {
    const [blobName, setBlobName] = useState('');
    const [content, setContent] = useState('');

    const handleUpload = async () => {
        const response = await fetch('/api/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ blobName, content }),
        });

        if (response.ok) {
            console.log('Upload successful');
        } else {
            console.error('Upload failed');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Blob Name"
                value={blobName}
                onChange={(e) => setBlobName(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default UploadComponent;
