import { useState, useEffect } from 'react';
import { addItem, getItems } from '../cosmosService';

function Profile() {
    const [user, setUser] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        checkUser();
        fetchItems();
    }, []);

    async function checkUser() {
        // Implement your authentication check with Azure here
        // Placeholder: Set user to a mock user object
        const user = { username: 'AzureUser', attributes: { email: 'user@azure.com' } };
        setUser(user);
    }

    async function fetchItems() {
        const fetchedItems = await getItems();
        setItems(fetchedItems);
    }

    if (!user) return null;

    return (
        <div>
            <h1 className="text-3xl font-semibold tracking-wide mt-6">Profile</h1>
            <h3 className="font-medium text-gray-500 my-2">Username: {user.username}</h3>
            <p className="text-sm text-gray-500 mb-6">Email: {user.attributes.email}</p>
            <div>
                <h2 className="text-2xl font-semibold tracking-wide mt-6">Items</h2>
                <ul>
                    {items.map((item) => (
                        <li key={item.id} className="my-2">
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={() => addItem({ id: '2', name: 'New Item' })}>Add Item</button>
        </div>
    );
}

export default Profile;
