import mongoose  from "mongoose";

export  const connectDB = async ()=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/food-del')
    .then(()=>console.log('DB Connected'))
}
