import { container } from './cosmosConfig';

const addItem = async (item) => {
    const { resource: createdItem } = await container.items.create(item);
    return createdItem;
};

const getItems = async () => {
    const { resources: items } = await container.items.query('SELECT * from c').fetchAll();
    return items;
};

export const fetchItems = async (query) => {
    const { resources: items } = await container.items.query(query).fetchAll();
    return items;
};

export { addItem, getItems };
