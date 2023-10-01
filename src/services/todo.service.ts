import Todo from "../models/todo.model";
import labelService from "./label.service";

//create type from model
type todoType = typeof Todo;

/**
 * Get todo by id
 * @param {ObjectId} id
 * @returns {Promise<Todo>}
 */
const getTodo = async (todoId: string) => {
  const todo = await Todo.findById(todoId);
  if (!todo) {
    return null;
  }
  const label = await labelService.getLabelById(todo.label);
  if (!label) {
    return null;
  }
  todo.label = label;
  return todo;
};

/**
 * Create a todo
 * @param {Todo} todoBody
 * @returns {Promise<Todo>}
 */
const createTodo = async (todoBody: todoType) => {
  return Todo.create(todoBody);
};

/**
 * Update a todo
 * @param {ObjectId} todoId
 * @param {Todo} todoBody
 * @returns {Promise<Todo>}
 */
const updateTodo = async (todoId: string, todoBody: todoType) => {
  const todo = await Todo.findById(todoId);
  if (!todo) {
    return null;
  }
  Object.assign(todo, todoBody);
  await todo.save();
  return todo;
};

/**
 * Delete a todo
 * @param {ObjectId} todoId
 * @returns {Promise<Todo>}
 */
const deleteTodo = async (todoId: string) => {
  const todo = await Todo.findById(todoId);
  if (!todo) {
    return null;
  }
  await todo.deleteOne();
  return todo;
};

export default {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
