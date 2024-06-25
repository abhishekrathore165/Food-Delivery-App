import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './component/footer/Footer';
import { useState } from 'react';
import Login from './component/loginpop/Login';
import Verify from './pages/verify/Verify';
import Myorder from './pages/myorder/Myorder';

function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
      <>
      {
        showLogin? <Login setShowLogin={setShowLogin} />:<></>
      }
    <div className="App">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/verify' element={<Verify/>} />
        <Route path='/myorders' element={<Myorder/>} />
      </Routes>
    </div>
      <Footer/>
      </>
  );
}

export default App;
