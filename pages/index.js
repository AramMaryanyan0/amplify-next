// index.js
import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const IndexPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const client = new ApolloClient({
            link: new HttpLink({
                uri: 'http://localhost:3000/api/posts',
                fetch,
            }),
            cache: new InMemoryCache(),
        });


        client.query({
            query: gql`
                query {
                    items {
                        id
                        name
                        description
                    }
                }
            `,
        })

        .then(result => setItems(result.data.items))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Index Page</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <strong>{item.name}</strong>: {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;
