import React from "react";
import Navbar from "./Navbar";
import Image from "../assets/shoe_image.png";
import "../index.css";

import Flipkart from "../assets/flipkart.png";
import Amazon from "../assets/amazon.png";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="flex mt-20">
        {/* text here */}
        <div className="text-left">
          <h1 className="text-black font-poppins text-8xl font-extrabold leading-tight">
            YOUR FEET DESERVE THE BEST
          </h1>
          <h1 className="mt-9 text-gray-600 font-poppins text-sm font-semibold">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </h1>

          {/* Buttons */}

          <div className="mt-9 flex gap-x-12">
            <button className="py-4 px-6 items-start gap-10 bg-red-600">
              <span className="text-white">Shop Now</span>
            </button>

            <button className="py-4 px-6 border border-solid border-gray-500 text-gray-500 p-1/4 px-4 items-start gap-10">
              <span>Category</span>
            </button>
          </div>

          {/* icons */}
        </div>

        <img src={Image} alt="" />
      </div>

      <div className="text-left mt-9 mb-24">
        <h1 className="text-gray-600">Also Available On</h1>
        <div className=" mt-4 flex items-center gap-x-4">
          <img src={Flipkart} alt="" className="w-8 h-8" />
          <img src={Amazon} alt="" className="w-8 h-8" />
        </div>
      </div>

      <h1>
      © 2024 Your Company Name. All rights reserved.

      </h1>
    </div>
  );
};

export default Home;
