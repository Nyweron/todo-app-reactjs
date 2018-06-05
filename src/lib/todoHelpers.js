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

export const filterTodos = (list, action) => {
    switch(action){
      case '/active':
        return list.filter(x => !x.isComplete);
      case '/complete':
        return list.filter(x => x.isComplete);
      default:
        return list;
    }
}

export const getCurrentPath = () => {
  const path = document.location.pathname;
  const route =  path.substring(path.lastIndexOf('/'));

  return route;
}