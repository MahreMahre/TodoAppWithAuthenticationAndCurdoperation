const express = require("express")
const todoController = require("../controllers/todoController")

const router = express.Router();

router.post('/create-todo',todoController.CreateTodo);
router.get('/get-todo',todoController.GetTodo)
router.put('/:todoId',todoController.UpdateTodo);
router.delete('/:todoId',todoController.Deletetodo)


module.exports = router;