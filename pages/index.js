// pages/index.js

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { listPosts } from '../graphql/queries';
import { fetchItems } from '../cosmosService';
import UploadComponent from '../components/UploadComponent'; // Импортируйте компонент UploadComponent

export default function Home() {
    /*const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        const items = await fetchItems(listPosts);
        setPosts(items);
    }*/

    return (
        <div>
            <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-8">Index page</h1>
            {/*{
                posts.map((post, index) => (
                    <Link key={index} href={`/posts/${post.id}`}>
                        <div className="my-6 pb-6 border-b border-gray-300">
                            {
                                post.coverImage && <img src={post.coverImage} className="w-56" />
                            }
                            <div className="cursor-pointer mt-2">
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p className="text-gray-500 mt-2">Author: {post.username}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }*/}
            {/*<UploadComponent />  Используйте компонент UploadComponent */}
        </div>
    );
}
