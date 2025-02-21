import express from "express";
import router from "./routers/book.router.js";


let app = express()


app.use("/api/book",router)


export default app;