import React from "react";
import fertilizerData from "../data/fertilizerData.json"; 

const Fertilizer = () => {
  return (
    <div className="w-full mt-24"> {/* Push content below the navbar */}
      {/* Hero Section */}
      <div className="w-full bg-[rgb(109,140,84)] text-white  flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src="/img/Fertilizer.jpg"
            alt="Bio Fertilizers"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 px-12 ">
          <p
            className="text-base sm:text-m ">Fertilizers</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 ">Importance of the<br />Bio Fertilizers</h2>

          <div className='flex items-center gap-7 mt-6'>
            <div className='rounded-full bg-brandGreen h-12 w-12 flex justify-center items-center'>
              <img src="/img/icon/Growth.png" alt="Growth Icon" className='w-6 md:w-8' />
            </div>
            <div>
              <h2 className=' font-inter md:text-3xl text-xl font-bold'>Enhance Growth</h2>
              <p className='text-white md:w-[400px] text-justify'>Biofertilizers introduce beneficial microbes that fix nitrogen, solubilize
                phosphorus, and produce growth hormones. This boosts nutrient availability,
                leading to healthier and more productive plants.</p>
            </div>
          </div>
          <div className='flex items-center gap-7 mt-6'>
            <div className='rounded-full bg-brandGreen h-12 w-12 flex justify-center items-center'>
              <img src="/img/icon/coconutTree.png" alt="Growth Icon" className='w-6 md:w-8' />
            </div>
            <div>
              <h2 className=' font-inter md:text-3xl text-xl font-bold'>Improve soil</h2>
              <p className='text-white md:w-[400px] text-justify'> 
              These microbes enhance soil structure, increase water retention, and promote organic matter decomposition. This creates a fertile and sustainable environment for plant growth, improving overall soil health.</p>
            </div>
          </div>

          
        </div>
      </div>

      <div className="w-full py-12 bg-green-900 flex flex-col items-center">
        <h3 className="text-4xl font-semibold text-center text-white">Explore Our Fertilizer Products</h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 px-6">
          {fertilizerData.map((product) => (
            <div
              key={product.id}
              className="bg-gray-300 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300 border border-gray-300"
            >
              <div className="bg-gray-100 p-4 rounded-md">
              <span className="absolute top-2 right-2 bg-white text-black text-xl font-bold px-2 py-1 rounded">
    {product.weight} KG
  </span>
  <img src={product.image} alt={product.name} className="w-52 h-52 object-cover mx-auto" />

              </div>
              {/* <p className="text-sm font-bold text-gray-800 mt-2">{product.weight} KG</p> */}
              <p className="text-green-500 font-bold mt-3 uppercase">BIO FERTILIZER</p>
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

export default Fertilizer;
