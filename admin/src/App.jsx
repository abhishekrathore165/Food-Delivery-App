import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Sidebar from './component/SideBar/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/add/Add'

import Order from './pages/order/Order'
import ItemList from './pages/ItemList/ItemList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add  url={url}/>}/>
          <Route path='/list' element={<ItemList url={url} />}/>
          <Route path='/order' element={<Order url={url} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App

