import React from 'react';


const ImageCards = ({items}) => {
   
    const {Id, Name, Price, ImageUrl, IsPopular, IsRecommended} = items
    return (
        <div>
           
            <img className='w-64 h-[300px] rounded-xl' src={ImageUrl} alt="" />
            <p className='text-center '>{Name}</p>
           
        </div>
    );
};

export default ImageCards;