import express from "express";
import userRouter from "./routes/user.js"; //name can be given whatever
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";


 
export const app = express();

config({
    path:"./data/.env"
})


//using middleware
app.use(express.json()) //make sure to write this above any route
app.use(cookieParser())
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );


//using routes
app.use("/api/v1/users",userRouter) // /users will be custom route now we can remove all /users in router folder
app.use("/api/v1/task", taskRouter);



app.get("/",(req,res)=>{
    res.send("Working")
})


// Using Error Middleware
app.use(errorMiddleware);
