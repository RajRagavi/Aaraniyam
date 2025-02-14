import React from "react";
import Flower from "../data/flowersapling.json"; 

const FlowerSapling = () => {
  return (
    <div className="w-full mt-24"> 
      <div className="w-full bg-[rgb(109,140,84)] text-white  flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex-shrink-0 h-[600px]">
          <img
            src="/img/flower/bg.png"
            alt="Flower Plants"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 px-12 ">
          <p
            className="text-base sm:text-m ">Flower Plants</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ">Choose the Right Flowers<br /> Over here</h2>

          <div className='flex items-center gap-7 mt-6'>
            <div className='rounded-full bg-brandGreen h-12 w-12 flex justify-center items-center'>
              <img src="/img/icon/Growth.png" alt="Growth Icon" className='w-6 md:w-8' />
            </div>
            <div>
              <h2 className=' font-inter md:text-3xl text-xl font-bold'>Key Features of Successful Flower Farming</h2>
              <p className='text-white md:w-[400px] text-justify'>Different flowers thrive in specific climates and soil types. Understanding these factors is crucial for high yields. Flowers need consistent watering, but overwatering can lead to diseases. Drip irrigation is a common method used by farmers.</p>
            </div>
          </div>
          <div className='flex items-center gap-7 mt-6'>
            <div className='rounded-full bg-brandGreen h-12 w-12 flex justify-center items-center'>
              <img src="/img/icon/coconutTree.png" alt="Growth Icon" className='w-6 md:w-8' />
            </div>
            <div>
              <h2 className=' font-inter md:text-3xl text-xl font-bold'>Modern Innovations in Flower Farming</h2>
              <p className='text-white md:w-[400px] text-justify'> 
              Growing flowers without soil using nutrient-rich water solutions. Controlled environments help produce flowers all year round, regardless of seasons.IoT-based sensors monitor soil moisture, temperature, and plant health for optimized growth.</p>
            </div>
          </div>

          
        </div>
      </div>

      <div className="w-full py-12 bg-green-900 flex flex-col items-center">
        <h3 className="text-4xl font-semibold text-center text-white">Explore Our Products</h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 px-6">
          {Flower.map((product) => (
            <div
              key={product.id}
              className="bg-gray-300  shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300 border border-gray-300"
            >
              <div className="bg-gray-100 p-4 rounded-md">
              <span className="absolute top-2 right-2 bg-white text-black text-xl font-bold px-2 py-1 rounded">
    {product.weight} KG
  </span>
                <img src={product.image} alt={product.name} className="w-52 h-42 mx-auto" />
              </div>
              {/* <p className="text-sm font-bold text-gray-800 mt-2">{product.weight} KG</p> */}
              <p className="text-green-500 font-semibold mt-3 uppercase">BIO FERTILIZER</p>
              <h4 className="text-xl font-bold text-gray-900 mt-1">{product.name}</h4>
              <p className="text-2xl font-bold text-gray-800 mt-2">₹{product.price}</p>
              {/* <button className="mt-4 bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 text-lg">
                Buy Now
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowerSapling;
