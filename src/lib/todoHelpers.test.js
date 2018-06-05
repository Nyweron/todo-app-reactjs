import { addTodo, findById, removeTodoById, filterTodos } from "./todoHelpers";

test("addTodo should add and passed todo to the list", () => {
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false }
  ];
  const newTodo = { id: 3, name: "three", isComplete: false };
  const expected = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false }
  ];

  const result = addTodo(startTodos, newTodo);

  expect(result).toEqual(expected);
});

test("addTodo should not mutate the existing todo array", () => {
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false }
  ];
  const newTodo = { id: 3, name: "three", isComplete: false };
  const expected = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false }
  ];

  const result = addTodo(startTodos, newTodo);

  expect(result).not.toBe(startTodos);
});

test("findById should find object by id from list", () => {
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false }
  ];
  const id = 1;
  const expected = { id: 1, name: "one", isComplete: false };

  const result = findById(startTodos, id);
  expect(result).toEqual(expected);
});

test("removeTodoById should remove one element from array by id", () => {
  const startTodos = [
    { id: 1, name: "one", isComplete: false },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false }
  ];
  const id = 2;
  const expected = [
    { id: 1, name: "one", isComplete: false },
    { id: 3, name: "three", isComplete: false }
  ];

  const result = removeTodoById(startTodos, id);
  expect(result).toEqual(expected);
});

test("filterTodos should return active", () => {
  const startTodos = [
    { id: 1, name: "one", isComplete: true },
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false }
  ];
  const action = '/active';
  const expected = [
    { id: 2, name: "two", isComplete: false },
    { id: 3, name: "three", isComplete: false }
  ];

  const result = filterTodos(startTodos, action);
  expect(result).toEqual(expected);
});