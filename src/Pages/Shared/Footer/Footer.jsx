import React from "react";
import image from "../../../assets/images/image2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer bg-[#ffa500] w-full pb-4 md:pb-3 rounded">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mx-2 md:ms-28">
        {/* writing context */}
        <div className="mx-6 md:my-20 md:mx-36">
          <div>
            <div className="justify-center ">
              <form className="w-[350px] md:w-[450px] lg:w-[550px] relative ">
                <div className="relative ">
                  <input
                    type="search"
                    placeholder="   Enter Your Email"
                    className="w-full p-3 rounded-xl bg-white"
                    id=""
                  />
                  <button className="absolute top-1 right-2 px-6 py-2 md:text-white font-bold text-orange-500 md:bg-orange-600 rounded-xl flex items-center gap-2 ">
                    {/* <FaSearch className="" /> */}
                    Subscribe{" "}
                    {/* <FaArrowRightLong
                      style={{ color: "white", width: "36px", height: "20px" }}
                    /> */} 
                     <FaArrowRightLong
                      style={{
                        color: window.innerWidth <= 768 ? "orange-500" : "white",
                        width: "36px",
                        height: "20px",
                      }}/>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="md:mt-20  ">
            
              <h1 className="font-bold text-3xl text-center md:text-left font-mitr my-3">
                pti<span className="text-orange-600">.</span>
              </h1>
              <div className="md:flex gap-10">
              <p className="font-bold text-sm  pb-5 text-center">Copyright©Tripp.All right reserved</p>
           
            <div className="flex gap-2 md:ps-12 justify-center ">
              <div className="w-12 h-12 py-3 px-2 rounded-full bg-orange-300 text-center items-center">
                <FaGoogle
                  style={{ color: "", width: "36px", height: "20px" }}
                  className=" text-orange-600 rounded-full "
                />
              </div>
              <div className="w-12 h-12 py-3 px-2 rounded-full bg-orange-300 text-center items-center">
                <FaTwitter
                  style={{ color: "", width: "36px", height: "20px" }}
                  className=" text-orange-600 rounded-full "
                />
              </div>
              <div className="w-12 h-12 py-4 ps-1  rounded-full bg-orange-300 text-center items-center">
                <FaInstagram
                  style={{ color: "", width: "36px", height: "20px" }}
                  className=" text-orange-600 rounded-full "
                />
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="hidden md:ms-56  md:block">
          <img className="w-96" src={image} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
