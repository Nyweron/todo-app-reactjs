export const generateId = () => Math.floor(Math.random() * 100000);

export const addTodo = (list, item) => list.concat(item);

export const findById = (list, id) => list.find(x=>x.id === id);