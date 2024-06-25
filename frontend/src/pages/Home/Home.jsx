import React, { useState } from 'react'
import './home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../exploremenu/ExploreMenu'
import FoodDisplay from '../../component/fooddisplay/FoodDisplay'
import Download from '../../component/appdown/Download'
const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div className='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Download/>
    </div>
  )
}

export default Home
