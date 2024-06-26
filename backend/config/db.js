import mongoose  from "mongoose";

export  const connectDB = async ()=>{
    await mongoose.connect('mongodb://[::1]:27017/food-del')
    .then(()=>console.log('DB Connected'))
}
