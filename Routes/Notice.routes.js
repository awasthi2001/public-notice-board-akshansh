import { Router } from "express";
import { getAllNotices, handleCreateNotice } from "../Controllers/Notice.controller.js";


export const NoticeRouter = Router(); 
NoticeRouter.post('/',handleCreateNotice)
NoticeRouter.get('/',getAllNotices) 