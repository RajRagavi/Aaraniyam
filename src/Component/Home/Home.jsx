import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '@fontsource/jim-nightshade';

import ImageCarousel from './ImageCarousel';



const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);


  return (
    <div>
        {/* <Navbar/> */}
        <section>
            <div className='relative  bg-cover bg-center h-screen' style={{backgroundImage:`url(/Aaraniyam.jpg)`}}>
                {/* //Overlay for backgroundImage */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className='relative  flex flex-col items-start justify-center h-full p-6 sm:p-10 text-White'>
                    <p 
                    className='text-base sm:text-lg font-semibold mb-2'>
                    <span data-aos="fade-up" data-aos-duration="2000">Original & Natural</span>
                    
                    </p>
                    <hr data-aos="fade-right" data-aos-duration="2000"
                    className="border-amber-400 border-2 w-32" />
                    <h1 data-aos="fade-up" data-aos-duration="2000"
                    className='font-noto text-4xl font-bold text-amber-500'>ஆரணியம்</h1>
                    <h2 data-aos="fade-up" data-aos-duration="2000"
                    className="text-4xl sm:text-6xl font-bold mb-6">
                            The Good Quality of <br className="hidden sm:block" />
                            Coconut Farm
                        </h2>
                        <p data-aos="fade-up" data-aos-duration="2000"
                        className="text-sm sm:text-lg mb-8 font-inte">
                            Coconuts come in various shapes, sizes, and colors. Some are ideal<br className="hidden sm:block" />
                            for drinking coconut water, while others excel in oil production.<br className="hidden sm:block" />
                            Explore the diversity!
                        </p>
                        <button 
                        data-aos="fade-right" data-aos-duration="2000"
                        className="bg-yellow-500 text-black font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg hover:bg-yellow-600 transition duration-300"
                        onClick={()=>(window.location.href='tel:+916383195526')}>
                            Contact Us
                        </button>
                </div>
            </div>
        </section>
        <section className="bg-green-900 text-white py-10 sm:py-16">
                <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start px-4 sm:px-6 lg:px-8">
                    <div className="lg:w-1/3 relative mb-8 lg:mb-0">
                        <img
                            data-aos="fade-right"
                            src="/img/IMG-20240809-WA0018.jpg"
                            alt="Coconut Farm"
                            className="rounded-lg shadow-lg relative z-10 w-full h-auto md:block hidden"
                        />

                        <div 
                        data-aos="fade-up"
                        className="absolute top-32 sm:top-40 lg:top-60 -left-2 sm:-left-4 lg:-left-3 bg-yellow-200 h-24 sm:h-32 lg:h-60  sm:w-6 lg:w-3 rounded-lg"></div>
                        <div 
                        data-aos="fade-up"
                        className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-10 right-8 sm:right-12 lg:right-20 bg-emerald-600 h-8 sm:h-10 lg:h-16 sm:w-32 lg:w-48 rounded-lg"></div>
                    </div>

                    <div className="lg:w-1/2 lg:pl-16 lg:text-left">
                        <p 
                        data-aos="fade-up"
                        className="text-base sm:text-sm uppercase mb-3 sm:mb-4">Our Introduction</p>
                        <h2 
                        data-aos="fade-up"
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                            The Pure Quality Organic Coconut Farm
                        </h2>
                        <h3 
                        data-aos="fade-up"
                        className="text-lg sm:text-xl lg:text-2xl text-yellow-400 font-semibold mb-3 sm:mb-4">
                            We are one of the leaders in coconut farming
                        </h3>
                        <p 
                        data-aos="fade-up"
                        className="mb-5 sm:mb-6">
                            Organic coconut farming focuses on quality, avoiding chemical residues, and maintaining soil fertility. Practices include intercropping, recycling palm residues, and appropriate water management.
                        </p>
                        <div>
                            <h4 
                            data-aos="fade-up"
                            className="text-base sm:text-lg font-semibold mb-2">Why Is Coconut Farming Important?</h4>
                            <p 
                            data-aos="fade-up"
                            className="mb-2">
                                <span className="font-semibold text-justify">Global Impact:</span> Coconut farming plays a crucial role in tropical regions worldwide. It contributes to local economies, provides employment, and sustains livelihoods.
                            </p>
                            <h4 
                            data-aos="fade-up"
                            className="text-base sm:text-lg font-semibold mb-2">Health Benefits:</h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li data-aos="fade-left">Preventing obesity</li>
                                <li data-aos="fade-left">Improving heart health</li>
                                <li data-aos="fade-left">Boosting the immune system</li>
                                <li data-aos="fade-left">Providing quick energy through coconut water</li>
                                <li data-aos="fade-left">Reducing sweet cravings</li>
                                <li data-aos="fade-left">Offering a low glycemic index (beneficial for diabetics)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <h1 
                    data-aos="fade-up"
                    className="text-center text-white font-bold text-3xl bottom-10">
                        Explore the Variety of coconuts</h1>

                </div>
                <div className="p-5 relative">
                    <h1 data-aos="fade-up"
                    className="text-center text-brandYellow font-bold text-xl font-inter ">
                        Our Commitment to Quality and Natural
                    </h1>
                    <ImageCarousel/>
                </div>

                {/* <div data-aos="fade-up"
                className="flex flex-col lg:flex-row justify-between p-8 lg:p-14 bg-gradient-to-r from-brandYellow to-brandGreen1">
                    <h1
                        className="font-jim-nightshade  text-2xl md:text-5xl text-center lg:text-left font-medium text-green-900 italic tracking-wider mb-4 lg:mb-0 lg:ml-20"
                    >
                        We are one of the Leaders in Coconut farming
                    </h1>
                    <button className="bg-brandYellow hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-2xl shadow-lg transition-all lg:mr-32"
                    onClick={()=>(window.location.href='tel:+916383195526')}>
                       Contact Us
                    </button>
                </div> */}

            </section>
           
    </div>
  )
}

export default Home