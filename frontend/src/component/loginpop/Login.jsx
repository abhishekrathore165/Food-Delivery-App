import React, { useContext, useState } from 'react'
import './login.css'
import { assets } from '../assets/assets'
import { Storecontext } from '../../context/Storecontext'
import axios from "axios"
const Login = ({setShowLogin}) => {
    const [current, setCurrent] = useState("Sign Up")

    const {url,setToken} = useContext(Storecontext)
   

    const [data,setData]= useState({
      name:"",
      email:"",
      password:""
    });

    const onchangeHandler = (event)=>{ 
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const onlogin = async(event)=>{
      event.preventDefault()
      let newUrl = url;
      if(current === "login"){
        newUrl += "/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl,data);
      if (response.data.success) {
         setToken(response.data.token);
         localStorage.setItem("token", response.data.token);
         setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }
    }

  return (
    <div className='login'>
      <form onSubmit={onlogin} className='logincont'>
        <div className="logintitle">
            <h2>{current}</h2>
            <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
            {
                current === "login"?<></>:<input name='name' onChange={onchangeHandler} value={data.name} type="text" placeholder='Your name' required />
            }
            <input type="eamil" name='email' onChange={onchangeHandler} value={data.email} placeholder='Your email' required />
            <input type="password" placeholder='Password' name='password' onChange={onchangeHandler} value={data.password} required />
        </div>
        <button type='submit'>{current==="Sign Up"? "Create account": "Login"}</button>
        <div className="logincondition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {
          current === "login"?<p>Create a new account? <span onClick={()=>setCurrent("Sign Up")}>click here</span></p>
          : <p>Already have an account? <span onClick={()=>setCurrent("login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default Login
