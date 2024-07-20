import { Router } from "express";
import {createUser} from "../Controllers/User.contoller.js"
const UserRouter=Router();

UserRouter.post("/",createUser)


export default UserRouter