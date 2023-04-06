import express from "express";
import bodyParser from "body-parser";
import "./db/dbConn.js";
import cors from 'cors';
import SignInRouter from "./router/loginRequest/router.js";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use("/",SignInRouter);


// if (process.env.NODE_ENV === 'production') {
//     //*Set static folder
//     app.use(express.static('client/build'));
    
//     app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
//   }

app.listen(PORT,()=>{
    console.log(`server running successfully on PORT : ${PORT}`)
});


