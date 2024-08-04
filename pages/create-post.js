import { useState, useRef, useEffect } from 'react';
/*import { v4 as uuid } from 'uuid';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/router';
import { BlobServiceClient } from '@azure/storage-blob'; // Импорт Azure Blob Storage
import axios from 'axios'; // Для отправки данных в Azure Function

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });*/

const CreatePost = () => {
    /*const [post, setPost] = useState({ title: '', content: '' });
    const [coverImage, setCoverImage] = useState(null);
    const [localImage, setLocalImage] = useState(null);
    const [isClient, setIsClient] = useState(false);
    const fileInput = useRef(null);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true); // Устанавливаем флаг выполнения на клиенте
    }, []);

    function onChange(e) {
        setPost(() => ({ ...post, [e.target.name]: e.target.value }));
    }

    async function createNewPost() {
        if (!post.title || !post.content) return;
        const id = uuid();
        post.id = id;

        if (coverImage) {
            const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);
            const containerClient = blobServiceClient.getContainerClient('your-container-name');
            const blobName = `${coverImage.name}_${uuid()}`;
            post.coverImage = blobName;
            const blockBlobClient = containerClient.getBlockBlobClient(blobName);
            await blockBlobClient.uploadBrowserData(coverImage);
        }

        // Отправка данных поста в Azure Function
        await axios.post('/api/createPost', post);
        router.push(`/posts/${id}`);
    }

    function uploadImage() {
        fileInput.current.click();
    }

    function handleChange(event) {
        const fileUploaded = event.target.files[0];
        if (!fileUploaded) return;
        setCoverImage(fileUploaded);
        setLocalImage(URL.createObjectURL(fileUploaded));
    }

    if (!isClient) {
        return null; // Возвращаем null, если код выполняется на сервере
    }*/

    return (
        <div>
            <h1 className="text-3xl font-semibold tracking-wide mt-6">Create new post</h1>
            {/*<input
                onChange={onChange}
                name="title"
                placeholder="Title"
                value={post.title}
                className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500"
            />
            {coverImage && <img src={localImage} className="my-4" />}
            <SimpleMDE value={post.content} onChange={value => setPost({ ...post, content: value })} />
            <input
                type="file"
                ref={fileInput}
                className="absolute w-0 h-0"
                onChange={handleChange}
            />
            <button
                type="button"
                className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg mr-2"
                onClick={uploadImage}
            >
                Upload Cover Image
            </button>
            <button
                type="button"
                className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
                onClick={createNewPost}
            >
                Create Post
            </button>*/}
        </div>
    );
};

export default CreatePost;
