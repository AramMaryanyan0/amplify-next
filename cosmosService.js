import { container } from './cosmosConfig';

const addItem = async (item) => {
    const { resource: createdItem } = await container.items.create(item);
    return createdItem;
};

const getItems = async () => {
    const { resources: items } = await container.items.query('SELECT * from c').fetchAll();
    return items;
};

const fetchItems = async (query, parameters = []) => {
    console.log('Executing fetchItems with query:', query, 'and parameters:', parameters); // Отладочный вывод
    const querySpec = {
        query,
        parameters,
    };
    const { resources: items } = await container.items.query(querySpec).fetchAll();
    console.log('Fetched items:', items); // Отладочный вывод
    return items;
};

export { addItem, getItems, fetchItems };
