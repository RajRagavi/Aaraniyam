import React from 'react'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";




    const Contact = () => {
        useEffect(() => {
          AOS.init({ duration: 1000, once: true });
        }, []);
      
        return (
          <div className="min-h-screen flex flex-col">
            <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(/img/AaraniyamFarm.jpg)` }}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative flex flex-col items-start justify-center h-full p-6 sm:p-10 text-white mt-5">
                <p className="text-base sm:text-lg font-semibold mb-2" data-aos="fade-up" data-aos-duration="2000">
                  Original & Natural
                </p>
                <hr data-aos="fade-right" data-aos-duration="2000" className="border-amber-400 border-2 w-32" />
                <h1 data-aos="fade-up" data-aos-duration="2000" className="font-noto text-4xl font-bold text-amber-500">
                  ஆரணியம்
                </h1>
                <h2 data-aos="fade-up" data-aos-duration="2000" className="text-4xl sm:text-6xl font-bold mb-6">
                  The Good Quality of <br className="hidden sm:block" />
                  Coconut Farm
                </h2>
                <p data-aos="fade-up" data-aos-duration="2000" className="text-sm sm:text-lg mb-8 font-inte">
                  Coconuts come in various shapes, sizes, and colors. Some are ideal <br className="hidden sm:block" />
                  for drinking coconut water, while others excel in oil production. <br className="hidden sm:block" />
                  Explore the diversity!
                </p>
                <button
                  data-aos="fade-right" data-aos-duration="2000"
                  className="bg-yellow-500 text-black font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-yellow-600 transition duration-300"
                  onClick={() => (window.location.href = 'tel:+916383195526')}
                >
                  Contact Us
                </button>
              </div>
            </div>
      
            {/* Contact Section */}
            <div className="bg-green-900 text-white py-16 px-8 md:px-20 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-3xl font-bold">GET IN TOUCH NOW</h2>
                  <p className="mt-4 max-w-2xl">
                    You can get in touch with our representatives who will be readily available to answer your queries regarding coconut farming.
                  </p>
                  <div className="mt-6 space-y-2">
                    <p><b>Phone:</b> 6383195526, 8489675660</p>
                    <p><b>Email:</b> aaraniyamfarm@gmail.com</p>
                    <p><b>Address:</b> BO. 402 Malaikudipatti, Illuppur TK, Pudukkottai DT - 622102</p>
                  </div>
                </div>
      
                <form className="max-w-lg w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 bg-green-800 border border-gray-700 rounded" />
                    <input type="text" placeholder="Phone Number" className="w-full p-3 bg-green-800 border border-gray-700 rounded" />
                  </div>
                  <input type="email" placeholder="Your Email" className="w-full p-3 mt-4 bg-green-800 border border-gray-700 rounded" />
                  <textarea placeholder="Your Message" className="w-full p-3 mt-4 h-32 bg-green-800 border border-gray-700 rounded"></textarea>
                  <button type="submit" className="mt-4 bg-brandYellow hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-all">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      }
      
      export default Contact;
      