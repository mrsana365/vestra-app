import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-purple-300 px-4  rounded-lg'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 pt-5 rounded-lg text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 text-xm'>
            Vestra is a contemporary fashion brand offering stylish, high-quality outfits for men, women, and kids. Emphasizing western wear, Vestra combines comfort with trendsetting designs to create versatile collections suitable for everyday wear or special occasions. Perfect for those seeking modern, chic, and timeless wardrobe essentials for the whole family.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600 font-medium'>
                <li>+91 9015646464</li>
                <li>contact@yourvestra.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Vestra - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
