import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const images = [
    'img/Carousel1.jpeg',
    'img/Carousel2.jpeg',
    'img/Carousel3.jpeg',
    'img/Carousel4.jpg',
    'img/Carousel5.jpg',
    'img/Carousel6.jpg',
    'img/Carousel7.jpg',
];


const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const goToNextSlide = () => {
        const maxIndex = window.innerWidth >= 1024 ? Math.ceil(images.length/2) : images.length;
        setCurrentIndex((currentIndex + 1) % maxIndex);
    };

    const goToPreviousSlide = () => {
        const maxIndex = window.innerWidth >= 1024 ? Math.ceil(images.length / 2) : images.length;
        setCurrentIndex((currentIndex - 1 + maxIndex) % maxIndex);
    };

    const handleImageClick = (index) => {
        navigate(`/image/${index}`);
    };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg bg-green-900">
            <div
                className="flex transition-transform duration-700 ease-in-out transform"
                style={{
                    transform: `translateX(-${currentIndex * (window.innerWidth >= 1024 ? 100 / 3 : 100)}%)`
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 h-96 flex justify-center items-center ${window.innerWidth >= 1024 ? 'w-1/3' : 'w-full'}`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="w-80 h-80 object-cover rounded-xl cursor-pointer"
                            onClick={() => handleImageClick(index)}
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={goToPreviousSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
            >
                &lt;
            </button>
            <button
                onClick={goToNextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
            >
                &gt;
            </button>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'}`}
                    ></div>
                ))}
            </div>
        </div>
  )
}

export default ImageCarousel