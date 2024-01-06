import React from 'react';
import image from "../../../assets/images/image1.png"
const Banner = () => {
    return (
        <div className='w-10/12 mx-auto rounded-3xl sm:bg-gray-200 md:bg-primary grid grid-cols-1 md:grid-cols-2 mb-6'> 
        <div>
        <h1 className='md:text-white text-center text-2xl md:text-6xl font-semibold md:px-20 md:pt-20'>Deliver Food To Your Door Step|</h1>
           <p className='md:text-orange-200 text-center py-3 md:text-xl md:pt-6'>Authentic Food|, Quick Service,Fast Delivery</p>
            </div>          
          
           <img className='bg-orange-500 rounded-3xl md:bg-primary' src={image} alt="" />
           
        </div>
    );
};

export default Banner;