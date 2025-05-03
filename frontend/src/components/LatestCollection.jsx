import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-4xl'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base '>
          Discover our latest collection featuring elegant, comfortable, and trendy styles perfect for every occasion. Elevate your wardrobe with Vestra.
          </p>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6  '>
        {
          latestProducts.map((item,index)=>(
            <div className='bg-purple-300  rounded-xl overflow-hidden text-center my-3 font-bold shadow-lg pb-5 border-2 border-purple-400 '>
               <ProductItem   key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
           </div>
            
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
