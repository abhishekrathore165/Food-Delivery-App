import express from "express"
import {addTocart,removefromcart,getcart } from "../controllers/cartcontroller.js"
import authMiddleware from "../middleware/auth.js";
const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addTocart)
cartRouter.post("/remove",authMiddleware,removefromcart)
cartRouter.post("/get",authMiddleware,getcart)


export default cartRouter;

