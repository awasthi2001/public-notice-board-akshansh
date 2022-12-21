import { Router } from "express";
import { handleLogin } from "../Controllers/Login.controller.js";

export const UserRouter = Router();

UserRouter.post('/',handleLogin)