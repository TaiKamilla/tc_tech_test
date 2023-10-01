import httpStatus from "http-status";
import awaitAsync from "../utils/awaitAsync";
import todoService from "../services/todo.service";

const getTodo = awaitAsync(async (req, res) => {
  const todo = await todoService.getTodo(req.params.todoId);
  if (!todo) {
    res.status(httpStatus.NOT_FOUND).send({
      message: "Todo not found",
    });
  } else {
    res.status(httpStatus.OK).send(todo);
  }
});

const createTodo = awaitAsync(async (req, res) => {
  const todo = await todoService.createTodo(req.body);
  res.status(httpStatus.CREATED).send(todo);
});

const updateTodo = awaitAsync(async (req, res) => {
  const todo = await todoService.updateTodo(req.params.todoId, req.body);
  if (!todo) {
    res.status(httpStatus.NOT_FOUND).send({
      message: "Todo not found",
    });
  } else {
    res.status(httpStatus.OK).send(todo);
  }
});

const deleteTodo = awaitAsync(async (req, res) => {
  const todo = await todoService.deleteTodo(req.params.todoId);
  if (!todo) {
    res.status(httpStatus.NOT_FOUND).send({
      message: "Todo not found",
    });
  } else {
    res.status(httpStatus.NO_CONTENT).send();
  }
});

export default {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
