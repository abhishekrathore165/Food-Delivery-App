import foodModel from "../models/foodmodel.js";
import fs from 'fs'


// add food item

// const addFood = async(req, res) => {
//   // Check if description field is provided and not empty
//   if (!req.body.description || !req.body.description.trim()) {
//       return res.status(400).json({ success: false, message: 'Description is required' });
//   }

//   let image_filename = `${req.file.filename}`;

//   const food = new foodModel({
//       name: req.body.name,
//       description: req.body.description, // Ensure description is provided
//       price: req.body.price,
//       category: req.body.category,
//       image: image_filename
//   });

//   try {
//       await food.save();
//       res.json({ success: true, message: "Food Added" });
//   } catch (error) {
//       console.log(error);
//       // Check if the error is a validation error
//       if (error.name === 'ValidationError') {
//           return res.status(400).json({ success: false, message: error.message });
//       }
//       res.status(500).json({ success: false, message: "Error 2" });
//   }
// }


const addFood = async(req,res)=>{

    let image_filename = `${req.file.filename}`;

    console.log(req.body);

    const food = new foodModel({
        name:req.body.name,
        description: req.body.description,
        price:req.body.price,
        category:req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error 2"})
    }
}

// All food List 

const listFood = async(req,res)=>{
try {
    const foods = await foodModel.find({});
    res.json({success:true, data: foods})
} catch (error) {
    console.log(error)
    res.json({success: false, message: "Error"})
}
}

// remove food item

const removeFood = async (req,res)=>{
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, ()=>{})
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true, message:"Food Removed"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
}


export {addFood,listFood,removeFood}