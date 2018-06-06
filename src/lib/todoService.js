const baseUrl = "http://localhost:8080/todos";

export const getAll = () => {
  return fetch(baseUrl).then(res => res.json());
};

export const createTodo = todo => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());
};

export const deleteTodo = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
};

export const updateTodo = todo => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());
}
