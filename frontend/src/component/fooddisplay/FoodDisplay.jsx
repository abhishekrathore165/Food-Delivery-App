import React, { useContext } from 'react'
import './fooddisplay.css'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../FoodItem/Fooditem'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(Storecontext)
  return (
    <div className='fooddisplay' id='food-display' >
       <h2>Top dishes near you</h2>
       <div className="foodlist">
        {
            food_list.map((item,index)=>{
              if(category==="All" || category === item.category){
                return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
              }
            })
        }
       </div>
    </div>
  )
}

export default FoodDisplay
