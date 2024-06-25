import React, { useContext, useEffect, useState } from 'react'
import './myorder.css'
import { Storecontext } from '../../context/Storecontext'
import axios from 'axios'
import  {assets}  from '../../component/assets/assets'
const Myorder = () => {
    const {url,token} = useContext(Storecontext);
    const [data,setData]=useState([]);
    const fetchOrder = async ()=>{
        const response = await axios.post(url+"/api/order/userorder",{},{headers:{token}})
        setData(response.data.data)
    }
    useEffect(()=>{
        if(token){
            fetchOrder();
        }
    },[token])
  return (
    <div className='my-orders'>
       <h2>My Orders</h2>
       <div className='container'>
        {
            data.map((order,index)=>{
               return(
                   <div key={index} className="my-orders-order">
                    <img src={assets.parcel_icon} alt="" />
                    <p>{order.items.map((item,index)=>{
                        if(index === order.items.length-1){
                            return item.name +" X "+  item.quantity
                        }
                        else{
                            return item.name +" X "+ item.quantity+","
                        }
                    })}
                      </p>
                      <p>${order.amount}.00</p>
                      <p>Items:{order.items.length}</p>
                      <p><span>&#x25cf;</span> <b>{order.status }</b> </p>
                      <button>Track Order</button>
                   </div>
               )
            })
        }
       </div>
    </div>
  )
}

export default Myorder
