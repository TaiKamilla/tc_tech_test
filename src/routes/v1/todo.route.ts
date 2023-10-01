import express from "express";
import todoController from "../../controllers/todo.controller";

const router = express.Router();

//TODO add data validation
//TODO add authentication
//TODO add authorization and roles

router.route("/").post(todoController.createTodo);

router
  .route("/:todoId")
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

export default router;

//TODO set the types correctly
//TODO handle labels correctly

/**
 * @swagger
 * tags:
 *  name: Todo
 *  description: Todo API service
 */

/**
 * @swagger
 * /todo:
 *   post:
 *     summary: Create a todo
 *     tags: [Todo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *               label:
 *                 type: string
 *               dueDate:
 *                 type: date
 *             example:
 *               message: "Do task 1"
 *               label: "0001"
 *               dueDate: "2024-07-25T15:30:00.000Z"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  results:
 *                   type: array
 *                   items:
 *                     type: object
 *               example:
 *                 id: "6519111ea3a3170eddceadb9"
 *                 message: "Do task 2"
 *                 label: "0004"
 *                 dueDate: "2024-07-25T15:30:00.000Z"
 */

/**
 * @swagger
 * /todo/{todoId}:
 *   get:
 *     summary: Get all todos
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: todoId
 *         required: true
 *         description: ID of the todo
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                  type: string
 *                label:
 *                  type: object
 *                dueDate:
 *                  type: date
 *               example:
 *                id: "6519111ea3a3170eddceadb9"
 *                message: "Do task 1" 
 *                label:
 *                  id: "0001"
 *                  name: "Chore"
 *                dueDate: "2024-07-25T15:30:00.000Z"
 *
 *   patch:
 *     summary: Update a todo
 *     tags: [Todo]
 *     parameters:
 *     - in: path
 *       name: todoId
 *       required: true
 *       description: ID of the todo
 *       schema:
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *               label:
 *                 type: string
 *               dueDate:
 *                 type: date
 *             example:
 *               message: "Do task 2"
 *               label: 
 *                id: "0004"
 *                name: "Task"
 *               dueDate: "2025-11-05T15:30:00.000Z"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  results:
 *                   type: array
 *                   items:
 *                     type: object
 *               example:
 *                 id: "6519111ea3a3170eddceadb9"
 *                 message: "Do task 2"
 *                 label: 
 *                   id: "0004"
 *                   name: "Task"
 *                 dueDate: "2025-11-05T15:30:00.000Z"
 *
 *   delete:
 *    summary: Delete a todo
 *    tags: [Todo]
 *    parameters:
 *    - in: path
 *      name: todoId
 *      required: true
 *      description: ID of the todo
 *      schema:
 *        type: string
 *    responses:
 *      204:
 *        description: No content
 */
