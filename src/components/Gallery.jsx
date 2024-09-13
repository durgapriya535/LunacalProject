import { useState, useRef } from 'react';
import SideBar from './SideBar';

const GalleryWidget = () => {
  const [images, setImages] = useState([]);
  const scrollContainerRef = useRef(null);

  const addImage = () => {
    const newImage = `https://via.placeholder.com/150?text=Image+${images.length + 1}`;
    setImages([...images, newImage]);
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust the value to control scroll speed
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust the value to control scroll speed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex w-full bg-gray-800 p-4 rounded-3xl shadow-3xl">
      <div className="flex-shrink">
        <SideBar />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex items-center gap-4 ml-0">
        <button className="h-[90%] bg-[#171717] px-8 py-3 flex justify-center items-center rounded-2xl text-white text-lg font-medium 
                shadow-lg shadow-gray-900/50 text-shadow-md">
    Gallery
</button>
<div className=" flex shadow-[6px_7px_5px_1px_#1f1f1fab] rounded-full ml-40">
  <button onClick ={addImage} className="px-4 py-3 rounded-full bg-[#FFFFFF08] text-white whitespace-nowrap font-semibold text-xs flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5]">
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-[10px] mb-[1.4px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
    </svg>
    ADD IMAGE
  </button>
</div>
    <div className="flex gap-4 text-[#6F787C] text-xl px-2">
      {/* Left Arrow Button */}
      <div className="rounded-full shadow-btn-next-prev active:scale-[0.8] z-0">
        <button onClick = {handleScrollLeft} className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3 shadow-btn-next-prev2">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0" // Changed from stroke-width to strokeWidth
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
          </svg>
        </button>
      </div>

      {/* Right Arrow Button */}
      <div className="rounded-full shadow-btn-next-prev active:scale-[0.8] z-0">
        <button onClick = {handleScrollRight} className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3 shadow-btn-next-prev2">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0" 
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
          </svg>
        </button>
      </div>
    </div>
        </div>

        {/* Image container with horizontal scroll */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4"
        >
          <img className="w-40 h-40 object-cover rounded-md transform transition-transform duration-300 opacity-50 hover:opacity-100 hover:scale-105"
           src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt=""/>
           <img className="w-40 h-40 object-cover rounded-md transform transition-transform duration-300 opacity-50 hover:opacity-100 hover:scale-105"
           src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt=""/>
                     <img className="w-40 h-40 object-cover rounded-md transform transition-transform duration-300 opacity-50 hover:opacity-100 hover:scale-105"
           src="https://img.freepik.com/premium-photo/beautiful-butterfly-images-brighten-your-day_1199394-94530.jpg" alt=""/>

          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 bg-gray-900 rounded">
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="w-40 h-40 object-cover rounded-md transform transition-transform duration-300 opacity-50 hover:opacity-100 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryWidget;
