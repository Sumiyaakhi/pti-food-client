import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const ImageForm = ({popular, recommended}) => {
const [popularData, setPopularData] = useState(popular);
const [recommendedData, setRecommendedData] = useState(recommended);
       console.log(popular, recommended);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    

      const onSubmit = (data) => {
        console.log(data);
        setPopularData(data)
        setRecommendedData(data)
       
        window.location.reload();
      };
    
    
    return (
      <div className="modal-box">
        <h3 className="font-bold text-primary pb-4 text-lg text-center">
          Add More New Card
        </h3>
        <hr />
        {/* <div className="modal-action"> */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <label className="font-bold text-primary" htmlFor="Name">
              Name
            </label>
            <input
              className="my-2 p-2 border rounded-xl w-full"
              {...register('Name', { required: 'Name is required' })}
              placeholder="Name of the Receipe"
            />
            {errors.Name && (
              <p className="text-red-500">{errors.Name.message}</p>
            )}
  
            <label className="font-bold text-primary" htmlFor="ImageUrl">
              Image Url
            </label>
            <input
              className="my-2 p-2 border rounded-xl w-full"
              {...register('ImageUrl', { required: 'Image Url is required' })}
              placeholder="Image Url"
            />
            {errors.ImageUrl && (
              <p className="text-red-500">{errors.ImageUrl.message}</p>
            )}
  
            <div className="my-4">
              <label className="pe-5 text-primary font-bold">IsPopular</label>
              <select {...register('IsPopular')}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
  
            <div className="my-4">
              <label className="pe-5 text-primary font-bold">IsRecommended</label>
              <select {...register('IsRecommended')}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
  
            <div className="text-center mt-3">
              <button
              className="bg-primary text-white hover:rounded-full hover:bg-orange-600 btn rounded-2xl"
              type="submit">Submit
              </button>
             
            </div>
           
          </form>
        {/* </div> */}
      </div>
    );
};

export default ImageForm;