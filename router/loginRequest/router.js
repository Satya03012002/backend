import express from "express";
import {signIn,getdata} from "./func.js"

const SignInRouter = express.Router()
SignInRouter.post("/signin",signIn);
SignInRouter.get("/",getdata);

export default SignInRouter;