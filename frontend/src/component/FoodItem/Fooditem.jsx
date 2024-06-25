import React, { useContext} from 'react'
import './foodtem.css'
import { assets } from '../assets/assets'
import { food_list } from '../assets/assets'
import { Storecontext } from '../../context/Storecontext'
const Fooditem = ({id,name,price,description,image}) => {
  const {cartItems,addtocart,removefromcart,url} = useContext(Storecontext);
  return (
    <div className='fooditem'>
      <div className='foodimg'>
        <img src={url+"/images/"+image} className='foodimage' alt="" />
        {
          !cartItems[id]? <img className='add' onClick={()=>addtocart(id)} src={assets.add_icon_white} />:
          <div className='foodcounter'>
             <img  onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
             <p>{cartItems[id]}</p>
             <img onClick={()=>addtocart(id)}  src={assets.add_icon_green} alt="" />
             </div>
        }
      </div>
      <div className="foodinfo">
        <div className="foodname">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="fooddes">
          {description}
        </p>
        <p className="foodprice">${price}</p>
      </div>

      
    </div>
  )
}

export default Fooditem
