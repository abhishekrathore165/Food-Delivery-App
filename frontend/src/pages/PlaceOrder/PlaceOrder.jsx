import React, { useContext, useEffect, useState,} from 'react'
import {useNavigate} from 'react-router-dom'
import './placeOrder.css'
import { Storecontext } from '../../context/Storecontext'
import axios from 'axios'
const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(Storecontext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  })

  const placeOrder = async(event)=>{
event.preventDefault();
let orderItems = [];
 food_list.map((item)=>{
  if(cartItems[item._id]>0){
    let itemInfo = item;
    itemInfo["quantity"] = cartItems[item._id];
    orderItems.push(itemInfo);
  }
 })
 console.log(orderItems)
   let orderData = {
    address:data,
    items:orderItems,
    amount:getTotalCartAmount()+2,
   }
   let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
   if(response.data.success){
    const {sesssion_url} = response.data;
    window.location.replace(sesssion_url);
   }
   else{
    alert("Error")
   }
  }

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value= event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const navigate = useNavigate()

  useEffect(()=>{
   if(!token){
   navigate('/cart')
   }
   else if(getTotalCartAmount()===0){
   navigate('/cart')
   }
  },[token])

  return (
    <form  onSubmit={placeOrder} className='placeorder'>
      <div className="placeleft">
        <p className='title'>Delivery Information</p>
        <div className="nulti-fields">
          <input required type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First Name' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
        <input required type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' />
        <div className="nulti-fields">
          <input required type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' />
          <input required type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' />
        </div>
        <div className="nulti-fields">
          <input required type="text"  name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' />
          <input required type="text"  name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' />
        </div>
        <input required type="text"  name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' />
      </div>
      <div className="placeright">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Delivery Free</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type='submit' >PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
