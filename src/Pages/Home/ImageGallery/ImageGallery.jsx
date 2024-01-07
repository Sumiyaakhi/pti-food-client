import React, { useEffect, useState } from "react";
import ImageCards from "./ImageCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageForm from "./ImageForm";

const ImageGallery = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
      if (window.innerWidth <= 600) {
        settings.slidesToShow = 2; // Display 2 images for small devices
      } else {
        settings.slidesToShow = 5; // Display 5 images for larger devices
      }
      const [data, setData] =useState([])
  const [popular, setPopular] = useState([]);
  const [recommended, setRecomended] = useState([]);

  useEffect(() => {
    fetch(
      "data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        // Filter items based on the "IsRecommended" property
        const recommendedItems = data.Items.filter(
          (item) => item.IsRecommended === true
        );
        setRecomended(recommendedItems)
        const popularItems = data.Items.filter(
          (item) => item.IsPopular === true
        );
            setPopular(popularItems)
        // Log the results
        console.log("Recommended Items:", recommendedItems);
        console.log("Popular Items Items:", popularItems);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });

  return (
    <>
      <section className="max-w-7xl mx-auto my-20">
        {/* popular images */}
        <div className="my-10">
          <div className="flex justify-between m-6 ">
            <h5 className="text-xl">Popular</h5>
            <button className="text-primary text-xl" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add More</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <ImageForm popular={popular}></ImageForm>
</dialog>
          </div>
          

          <div className="">
          <Slider {...settings}>
            {
             popular.map(singleImage => 
                <ImageCards key={singleImage.Id}
                items={singleImage}
                ></ImageCards>
                )   
            }
              </Slider>
          </div>
        
        </div>

        {/* recommended images */}
        <div className="my-10">
          <div className="flex justify-between m-6">
            <h5 className="text-xl">Recommended</h5>
            <button className="text-primary text-xl" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add More</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <ImageForm recommended={recommended}></ImageForm>
</dialog>
          </div>
          

          <div className="">
          <Slider {...settings}>
            {
             recommended.map(singleImage => 
                <ImageCards key={singleImage.Id}
                items={singleImage}
                ></ImageCards>
                )   
            }
              </Slider>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default ImageGallery;