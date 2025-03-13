 import React, { useEffect } from 'react'
 import "./Home.css"
import MultiItemCarousel from './MultiItemCorusel'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurantAction } from '../State/Restaurant/Action'
import { useNavigate } from 'react-router-dom'
import { findCart } from '../State/Cart/Action'


 const restaurants=[1,1]
  const Home = () => {
    const dispatch=useDispatch()
    const jwt=localStorage.getItem("jwt")
    const {restaurants}=useSelector(store=>store)
  
    console.log("restaurants",restaurants)
    
    useEffect(()=>{
     dispatch(getAllRestaurantAction(jwt))
    },[])
   
      
   return (
     <div className='pb-10'>
        <section className='banner -z-50 relative flex flex-col justify-center
        items-center'>

            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>FoodSphere</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl' > The Ultimate Comfortable Tasty Foods for Every moods</p>

            </div>
            <div className='cover absolute top-0 left-0 right-0'>

            </div>
            <div className='fadout'>

            </div>
        </section>
         <section className='p-10 lg:py-10 lg:px-20'>
          <p className='text-2xl font-semibond text-gray-400 py-3 pb-10'>Top Meals</p>
         <MultiItemCarousel/>
         </section>
         <section className='px-5 lg:px-20 pt-10'>
          <h1 className='text2xl font-semibold text-gray-400 pb-8'>Order From Our Handpicked Favourites</h1>
          <div className='flex flex-wrap item-center justify-around gp-5'>

            {restaurants?.map((item)=><RestaurantCard item={item}/>)}

          </div>
         </section>  
        
     </div>
   )
 }
 
 export default Home
 