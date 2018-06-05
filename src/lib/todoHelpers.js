export const generateId = () => Math.floor(Math.random() * 100000);

export const addTodo = (list, item) => list.concat(item);

export const findById = (list, id) => list.find(x => x.id === id);

export const updateByObjectId = (list, updated) =>
  list.map(todo => (todo.id === updated.id ? updated : todo));

export const removeTodoById = (list, id) => {
  const index = list.findIndex(x => x.id === id);
  if (index > -1) {
    list.splice(index, 1);
  }

  return list;
};
