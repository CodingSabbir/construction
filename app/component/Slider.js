// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../../public/css/slider.css";
// import { Pagination, Navigation } from "swiper/modules";
// import Image from "next/image";

// const slider = [
//   {
//     img: "/img/slider (1).jpg",
//     content: "This is the content for slide 1",
//   },
//   {
//     img: "/img/slider (2).jpg",
//     content: "This is the content for slide 2",
//   },
//   {
//     img: "/img/slider (3).jpg",
//     content: "This is the content for slide 3",
//   },
//   {
//     img: "/img/slider (4).jpg",
//     content: "This is the content for slide 4",
//   },
// ];

// const Slider = () => (
//   <Swiper
//     spaceBetween={30}
//     centeredSlides={true}
//     pagination={{
//       clickable: true,
//     }}
//     navigation={true}
//     modules={[Pagination, Navigation]} // Removed Autoplay module
//     className="mySwiper"
//     loop={true} // Enables infinite looping
//     speed={1000} // Smooth transition speed for slide change
//   >
//     {slider.map((item, index) => (
//       <SwiperSlide
//         key={index}
//         onClick={() => console.log(`Slide ${index + 1} clicked`)}
//       >
//         <div className="relative">
//           {/* Background Image */}
//           <Image
//             src={item.img}
//             alt={`Slide ${index + 1}`}
//             width={1200}
//             height={600}
//             className="h-screen object-cover w-full"
//           />
//           {/* Black Overlay */}
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           {/* Centered Content */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center text-white p-4 rounded">
//               {item.content}
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>
//     ))}
//   </Swiper>
// );

// export default Slider;



// 'use client';
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// const images = [
//   "/img/slider (1).jpg",
//   "/img/slider (2).jpg",
//   "/img/slider (3).jpg",
//   "/img/slider (4).jpg",
// ];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Clear the interval on component unmount
//   }, []);

//   return (
//     <div className="slider relative w-full h-[100vh] overflow-hidden">
//       {images.map((img, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === currentIndex ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <Image
//             src={img}
//             alt={`Slide ${index + 1}`}
//             fill
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Slider;


'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../../public/css/slider.css";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaAnglesRight } from "react-icons/fa6";
const slider = [
  {
    img: "/img/slider (1).jpg",
    content: "This is the content for slide 1",
    text: "Welcome",
    button: "who We Are"
  },
  {
    img: "/img/slider (2).jpg",
    content: "This is the content for slide 2",
  },
  {
    img: "/img/slider (3).jpg",
    content: "This is the content for slide 3",
  },
  {
    img: "/img/slider (4).jpg",
    content: "This is the content for slide 4",
  },
];

const Slider = () => (
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 5000, // Change slide every 3 seconds
      disableOnInteraction: false, // Continue autoplay after user interactions
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation, EffectFade, Autoplay]} // Added Autoplay module
    className="mySwiper"
    loop={true} // Enables infinite looping
    speed={1000} // Smooth transition speed for slide change
    effect="fade" // Set the fade effect for smooth transitions
    fadeEffect={{ crossFade: true }} // Enables cross-fade effect
  >
    {slider.map((item, index) => (
      <SwiperSlide
        key={index}
        onClick={() => console.log(`Slide ${index + 1} clicked`)}
      >
        <div className="relative">
          {/* Background Image */}
          <Image
            src={item.img}
            alt={`Slide ${index + 1}`}
            width={1200}
            height={600}
            className=" h-72 sm:h-screen object-cover w-full"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <p className="text-2xl pt-20 sm:pt-0 sm:text-[70px] font-bold tracking-[20px] uppercase" data-aos="fade-up"
     data-aos-duration="2000">{item.text}</p>
            <br />
            <p className="text-lg sm:text-4xl font-bold tracking-widest capitalize" >{item.content}</p>
            <br />
            {item.button && (
              <button className=" flex gap-3 items-center text-black py-3 cursor-pointer font-semibold uppercase bg-[#4ae2fa] px-7 rounded mt-2">
                {item.button}
                <FaAnglesRight className="text-black" />
              </button>
            )}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slider;
