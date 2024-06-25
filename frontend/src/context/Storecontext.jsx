import { createContext, useEffect, useState } from "react";

// import { food_list } from "../component/assets/assets";
import axios from "axios";
export const Storecontext = createContext(null);


const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const url = "https://food-delivery-appbackend.onrender.com"
    const [token,setToken] = useState("")

    const [food_list,setFood_list] =useState([])

    const addtocart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if(token){
       await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }

    }
    const removefromcart = async(itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
             }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {

            if (cartItems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                totalAmount += iteminfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchfoodlist = async()=>{
        const response = await axios.get(url+"/api/food/list")
        setFood_list(response.data.data)
    }

    const loadCartData = async (token)=>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }
    
    useEffect(()=>{
       
        async function loadData(){
              await fetchfoodlist();
              if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        addtocart,
        setCartItems,
        removefromcart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default StoreContextProvider;
