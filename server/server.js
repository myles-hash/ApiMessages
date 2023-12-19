import express from "express";
import cors from "cors";
const app = express();
app.use (express.json());
app.use(cors());

app.get("/",(req,res)=> {
    response.json('Looking at root route');
});

app.listen(8080,() =>{
    console.log("App is running");
})