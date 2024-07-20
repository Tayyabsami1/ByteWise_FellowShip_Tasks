import { Router } from "express";
import { GetUsers,PostUser,GetUser,DeleteUser, UpdateUser } from "../Controllers/User.controller.js"
const userRouter =Router();

userRouter.get('/',GetUsers);
userRouter.post('/',PostUser);
userRouter.get('/:id',GetUser);
userRouter.delete('/:id',DeleteUser);
userRouter.patch("/:id",UpdateUser);

export default userRouter