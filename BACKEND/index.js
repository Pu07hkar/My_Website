import "dotenv/config"
import app from "./app.js"
import connectDB from "./DB/db.js";

connectDB();

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})