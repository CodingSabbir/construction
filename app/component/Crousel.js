
import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import Devider from "./Devider";
import Link from "next/link";

const clientList = [
  {
    img: "/img/structure.jpg",
    content:"Design & Development",
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
