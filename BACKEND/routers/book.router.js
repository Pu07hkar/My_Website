import { Router } from "express";
import {getBook} from "../controllers/book.controller.js"


let router = Router()

router.route("/").get(getBook);


export default router;
