'use client'
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Devider from "./Devider";
import { FaAnglesRight } from "react-icons/fa6";

const clientList = [
  {
    img: "/img/clientlogo (1).jpg",
    content:"of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    link:"/"
      
  },
  {
    img: "/img/clientlogo (2).jpg",
    link:"/",
    content:
      " Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their",
  },
  {
    img: "/img/clientlogo (3).jpg",
    link:"/",
    content:
      "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    img: "/img/clientlogo (4).jpg",
    link:"/",
    content:
      " Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their",
  },
  {
    img: "/img/clientlogo (5).jpg",
    link:"/",
    content:
      "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    img: "/img/clientlogo (6).jpg",
    link:"/",
    content:
      " Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their",
  },
];


export default function OurClient() {
    const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Function to update visible cards based on window width
  const updateVisibleCards = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleCards(1);
    } else if (width >= 640) {
      setVisibleCards(1);
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
    <div className="grid grid-cols-1 sm:grid-cols-2 py-10 px-4 sm:px-16 gap-10  items-center">
      <div className="col-span-1">
      <h2 className="text-xl sm:text-2xl font-bold leading-tight">Our Clients</h2>
      <div className='pb-5'><Devider/></div>
        <div className="grid grid-cols-3 border border-gray-300">
          <Image
            className="w-48 border-r border-b border-gray-300"
            src="/img/clientlogo (1).jpg"
            alt="Client Logo 1"
            width={300}
            height={300}
          />
          <Image
            className="w-48 border-r border-b border-gray-300"
            src="/img/clientlogo (2).jpg"
            alt="Client Logo 2"
            width={300}
            height={300}
          />
          <Image
            className="w-48 border-b border-gray-300"
            src="/img/clientlogo (3).jpg"
            alt="Client Logo 3"
            width={300}
            height={300}
          />
          <Image
            className="w-48 border-r border-b border-gray-300"
            src="/img/clientlogo (4).jpg"
            alt="Client Logo 4"
            width={300}
            height={300}
          />
          <Image
            className="w-48 border-r border-b border-gray-300"
            src="/img/clientlogo (5).jpg"
            alt="Client Logo 5"
            width={300}
            height={300}
          />
          <Image
            className="w-48 border-b border-gray-300"
            src="/img/clientlogo (6).jpg"
            alt="Client Logo 6"
            width={300}
            height={300}
          />
        </div>
       <div className='flex justify-center'>
       <div className='flex mt-16 w-28 items-center justify-center gap-2 p-2 rounded-sm shadow-md text-center text-gray-700 text-sm uppercase bg-[#4ae2fa]'>
        <FaAnglesRight />
        <button>view more</button>
        </div>
       </div>
      </div>
      <div>
      <section className="light py-5 sm:py-10 bg-white text-zinc-900">
      <div className="">
        <div className="grid grid-cols-12 gap-6 items-center justify-between">
          <div className="col-span-12 gap-6 items-center justify-between flex mb-4 sm:px-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold leading-tight">
              What Clients Say
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
                <div className="bg-white h-full border p-4">
                 
                  <p className="text-gray-600 mb-2 capitalize text-sm italic  line-clamp-3 lg:line-clamp-none">{testimonial.content}</p>
                  <div className="flex items-center pb-2 mb-6">
                    <div className=" w-full">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="h-14 flex items-start w-44 "
                        width={800}
                        height={800}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
}
