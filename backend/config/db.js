import mongoose  from "mongoose";

export  const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://rathore:rathore@cluster0.emtgbjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log('DB Connected'))
}
