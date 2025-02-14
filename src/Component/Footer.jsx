import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white bg-green-900">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between p-8 lg:p-14 bg-gradient-to-r from-brandYellow to-brandGreen1">
        <h1 className="font-jim-nightshade text-2xl md:text-5xl text-center lg:text-left font-medium text-green-900 italic tracking-wider mb-4 lg:mb-0 lg:ml-20">
          We are one of the Leaders in Coconut farming
        </h1>
        <button
          className="bg-brandYellow hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-2xl shadow-lg transition-all lg:mr-32"
          onClick={() => (window.location.href = 'tel:+916383195526')}
        >
          Contact Us
        </button>
      </div>

      {/* Footer Columns */}
      <div className="container mx-auto px-6 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Column 1: Company Info */}
        <div className="text-center lg:text-left">
          <img src="/logo.png" alt="Aaraniyam Farm Logo" className="mx-auto lg:mx-0 w-40 mb-4" />

        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p className="">
            
          
            BO. 402 Malaikudipatti
            <br />
            Illuppur tk
            <br />
            Pudukkottai dt - 622102
          </p>
          <p className="mt-2"><b>Email:</b> aaraniyamfarm@gmail.com</p>
          <p className="mt-2"><b>Phone:</b> 6383195526, 8489675660</p>
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Navigation</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-brandYellow">Home</a></li>
            <li><a href="/about" className="hover:text-brandYellow">About</a></li>
            <li><a href="/coconut" className="hover:text-brandYellow">Coconut</a></li>
            <li><a href="/products" className="hover:text-brandYellow">Products</a></li>
            <li><a href="/shop" className="hover:text-brandYellow">Shop</a></li>
            <li><a href="/contact" className="hover:text-brandYellow">Contact Us</a></li>
          </ul>
        </div>


        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="/coconut" className="hover:text-brandYellow">Coconut</a></li>
            <li><a href="/coconut-seeding" className="hover:text-brandYellow">Coconut Seeding</a></li>
            <li><a href="/intercropping" className="hover:text-brandYellow">Coconut Intercropping</a></li>
            <li><a href="/fertilizers" className="hover:text-brandYellow">Fertilizers</a></li>
            <li><a href="/tree-sapling" className="hover:text-brandYellow">Tree Sapling</a></li>
            <li><a href="/equipment" className="hover:text-brandYellow">Other Equipment</a></li>
          </ul>
        </div>


        <div className="text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="https://wa.me/916383195526" target="_blank" rel="noopener noreferrer">
              <img src="/img//icon/whatsapp.png" alt="whatsapp" className="w-8 h-8" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/img//icon/fb.png" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/img//icon/insta.png" alt="Instagram" className="w-8 h-8" />
            </a>
            
          </div>
        </div>



      </div>


      <div className="text-center py-4 border-t border-gray-700">
      <p>
              Copyright ©
              <script>
                document.write(new Date().getFullYear());
              </script>2025
              . All Rights Reserved. — Designed by
             <a href="https://teknospot.in/" className="text-brandYellow"> Tekno Spot</a> 
              
            </p>
        
      </div>
    </footer>
  );
};

export default Footer;
