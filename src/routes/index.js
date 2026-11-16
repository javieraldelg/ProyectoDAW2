import express from "express";
const router = express.Router();

import { createUser, deleteUser, getUsers, getUsersById, updateUser } from "../controllers/users.controller.js";
//import usersController from "../controllers/users.controller.js"; (usersController.getUsers,...)


router.get("/", getUsers);

router.get("/:id", getUsersById);

router.post("", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;