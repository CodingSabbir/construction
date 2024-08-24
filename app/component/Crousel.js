// import React, { useState } from "react";
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import Image from "next/image";
// import Devider from "./Devider";

// const clientList = [
//   {
//     img: "/img/client (1).jpg",
//     name: "Sophia Davis",
//     position: "Client",
//     content:
//       "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
//   },
//   {
//     img: "/img/client (2).jpg",
//     name: "James Wilson",
//     position: "Client",
//     content:
//       "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
//   },
//   {
//     img: "/img/client (3).jpg",
//     name: "Jessica Miller",
//     position: "Client",
//     content:
//       "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
//   },
//   {
//     img: "/img/client (4).jpg",
//     name: "Emily Johnson",
//     position: "Client",
//     content:
//       "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
//   },
//   {
//     img: "/img/client (5).jpg",
//     name: "David Brown",
//     position: "Client",
//     content:
//       "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
//   },
//   {
//     img: "/img/client (6).jpg",
//     name: "Michael Smith",
//     position: "Client",
//     content:
//       "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
//   },
// ];

// const Carousel = () => {
//   const [index, setIndex] = useState(0);

//   const handleNext = () => {
//     const visibleCards = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
//     if (index < clientList.length - visibleCards) {
//       setIndex(index + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   };

//   return (
//     <section className="light py-5 sm:py-10 bg-white text-zinc-900  ">
//       <div className="px-4 sm:px-16">
//         <div className="grid grid-cols-12 gap-6 items-center justify-between ">
//           <div className="col-span-12 gap-6 items-center justify-between flex mb-4 px-4">
//             <div>
//               <h2
//                 className=" text-xl sm:text-2xl font-bold leading-tight  "
               
//               >
//                 What We Do
//               </h2>
//               <Devider/>
//             </div>
//             <div className="flex gap-5">
//               <div className="border-2 hover:border-gray-500 text-xl p-2 cursor-pointer" onClick={handlePrevious}>
//                 <FaChevronLeft />
//               </div>
//               <div className="border-2 text-xl hover:border-gray-500 p-2 cursor-pointer" onClick={handleNext}>
//                 <FaChevronRight />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-hidden relative">
//           <div
//             className={`flex transition-transform duration-700 ease-in-out`}
//             style={{
//               transform: `translateX(-${
//                 (index * 100) / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
//               }%)`,
//             }}
//           >
//             {clientList.map((testimonial, i) => (
//               <div
//                 className="flex-shrink-0 w-full px-4  sm:w-1/2 lg:w-1/3 "
//                 style={{ width: window.innerWidth >= 1024 ? "33.3333%" : window.innerWidth >= 640 ? "50%" : "100%" }}
//                 key={i}
//               >
//                 <div className="bg-white h-full   ">
//                   <div className="flex items-center pb-2 mb-6">
//                     <div className="mr-3 w-full">
//                       <Image
//                         src={testimonial.img}
//                         alt={testimonial.name}
//                         className=" h-44 border"
//                         width={400}
//                         height={400}
//                       />
//                     </div>
//                   </div>
//                   <p className="opacity-75 mb-2 ">{testimonial.content}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Carousel;



import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import Devider from "./Devider";
import Link from "next/link";

const clientList = [
  {
    img: "/img/Consultanc (1).jpg",
    content:"Floor coating application",
    button:"Service Details",
    link:"/"
      
  },
  {
    img: "/img/Consultanc (2).jpg",
    button:"Service Detail",
    link:"/",
    content:
      "Floor coating application",
  },
  {
    img: "/img/Consultanc (3).jpg",
   button:"Service Detail",
    link:"/",
    content:
      "Leed & Green Building",
  },
  {
    img: "/img/Consultanc (4).jpg",
    button:"Service Detail",
    link:"/",
    content:
      "Consultancy",
  },
  {
    img: "/img/Consultanc (5).jpg",
   button:"Service Detail",
    link:"/",
    content:
      "Power Plant Construction",
  },
  {
    img: "/img/Consultanc (6).jpg",
   button:"Service Detail",
    link:"/",
    content:
      "Supply Ready Mixed Concrete",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Function to update visible cards based on window width
  const updateVisibleCards = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleCards(3);
    } else if (width >= 640) {
      setVisibleCards(2);
    } else {
      setVisibleCards(1);
    }
  };

  // Initial setup and event listener
  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleNext = () => {
    if (index < clientList.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="light py-5 sm:py-10 bg-white text-zinc-900">
      <div className="px-4 sm:px-16">
        <div className="grid grid-cols-12 gap-6 items-center justify-between">
          <div className="col-span-12 gap-6 items-center justify-between flex mb-4 sm:px-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                What We Do
              </h2>
              <Devider />
            </div>
            <div className="flex gap-5">
              <div
                className="border-2 hover:border-gray-500 text-xl p-2 cursor-pointer"
                onClick={handlePrevious}
              >
                <FaChevronLeft />
              </div>
              <div
                className="border-2 hover:border-gray-500 text-xl p-2 cursor-pointer"
                onClick={handleNext}
              >
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(index * 100) / visibleCards}%)`,
            }}
          >
            {clientList.map((testimonial, i) => (
              <div
                className="flex-shrink-0 sm:px-4"
                key={i}
                style={{
                  width: `${100 / visibleCards}%`,
                }}
              >
                <div className="bg-white h-full">
                  <div className="flex items-center pb-2 mb-6">
                    <div className=" w-full">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="h-44 w-full border"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                  <p className="text-black mb-2 capitalize text-md sm:text-xl">{testimonial.content}</p>
                  <Link href={testimonial.link}><button className="text-md hover:underline font-semibold text-[#4ae2fa] uppercase">{testimonial.button}</button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
