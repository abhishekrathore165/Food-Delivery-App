import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodroute.js";
import userRouter from "./routes/userroute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartroute.js";
import orderRouter from "./routes/orderRoute.js";
const app = express();
const port = process.env.PORT || 4000;

// middleware 

app.use(express.json())
  app.use(cors({origin: 'https://food-delivery-app-nynv.onrender.com'}));



// db connection
connectDB();

// API endpoint
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.get('/test-cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'https://food-delivery-app-nynv.onrender.com');
  res.send('CORS enabled');
});


app.listen(port,()=>{console.log(`Server Started on http://localhost:${port}`)})
