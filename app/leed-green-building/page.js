'use client'
import React from "react";
import { FaAngleDoubleRight, FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Modal from 'react-modal'; 

const images = [
    {
      src: '/img/leedgreen (1).jpg',
      alt: 'Image 1',
    },
    {
      src: '/img/leedgreen (2).jpg',
      alt: 'Image 2',
    },
    {
      src: '/img/leedgreen (3).jpg',
      alt: 'Image 3',
    },
    {
      src: '/img/leedgreen (4).jpg',
      alt: 'Image 4',
    },
    {
      src: '/img/leedgreen (5).jpg',
      alt: 'Image 5',
    },
  ];
export default function LeedGreenBuildingPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <div className="mb-16 mt-20 ">
      {" "}
      {/* Reduced bottom margin */}
      <div>
        <h2 className="sm:text-[28px] tracking-widest px-4 sm:px-16 bg-[#EEF7FF] uppercase font-bold border-t-2 mt-16 border-b-2 mb-5 py-4 sm:py-8">
        LEED & GREEN BUILDING
        </h2>
        <div className="border-b-2 flex items-center gap-3 px-4 pb-4 sm:px-16">
          <p className="text-sm text-gray-600 hover:text-[#4ae2fa] hover:underline cursor-pointer">
            Airon solution Ltd.
          </p>
          <FaAngleDoubleRight />
          <Link href='/our-service'>
            <p className="text-sm text-gray-600 capitalize hover:text-[#4ae2fa] hover:underline cursor-pointer">
              Our Service
            </p>
          </Link>
          <FaAngleDoubleRight />
          <p className="text-sm text-gray-600 capitalize"> Leed & Green Building</p>
        </div>
      </div>
      <div className="px-4 sm:px-20 my-10">
        <Image
          className="w-full "
          src="/img/leed-green-building.jpg"
          alt="Modern Warehouse image"
          width={700}
          height={500}
        />
      </div>
      <div>
      <div className="my-8 px-4 sm:px-20">
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              className="w-full object-cover cursor-pointer rounded-sm"
              src={image.src}
              alt={image.alt}
              width={400} // Increased width for preview images
              height={250} // Increased height for preview images
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative max-w-4xl mx-auto">
          <Image
            className="w-full h-auto max-h-[80vh] rounded-md" // Ensures the image fits well in modal and doesn't overflow
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            width={800} // Increased modal image width
            height={600} // Increased modal image height
          />
          {/* Close Icon */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl"
          >
            <FaTimes />
          </button>

          {/* Left Icon */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 text-white text-3xl transform -translate-y-1/2"
          >
            <FaAngleLeft/>
          </button>

          {/* Right Icon */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 text-white text-3xl transform -translate-y-1/2"
          >
            <FaAngleRight/>
          </button>
        </div>
      </Modal>
    </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 px-4 sm:px-20">
        <div>
          <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">LEED & GREEN BUILDING</h1>
          <p className="text-sm text-gray-500 py-2">We add value to our projects by listening carefully to our clients in order to ensure that we align with their objectives and the needs of building occupants, in addition to delivering structures that are safe, sustainable and cost-effective. From the earliest design stages, we plan for the diverse uses of a project through its whole life-cycle, focusing on efficiency and economy. We deal with</p>
          <ul className="ml-14 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">Change Order Management</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Constructability Review</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Contract Administration</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Cost Estimating</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
           
            
          </ul>
          <h1 className=" text-md text-gray-800 sm:text-xl  capitalize font-semibold">What are the Benefits of Becoming LEED Certified?</h1>
          <p className="text-sm text-gray-500 py-2">The benefits of becoming LEED certified include, but are not limited to:</p>
   
          <ul className="ml-14 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">Change Order Management</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Constructability Review</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Contract Administration</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Cost Estimating</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
           
            
          </ul>
          <div>
        
        <button className="uppercase bg-[#4ae2fa] w-full p-2 text-md sm:text-lg text-start px-4 sm:px-10 rounded-sm"> addtion construction step</button>
        <p className="text-sm text-gray-500 py-2 mt-5">We will work with all project team members to define the logistical requirements for the construction process, such as areas for deliveries, placement of barricades (if required) and hours of operation. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
      </div>
        </div>
        <div>
          <h1  className=" text-md text-gray-800 sm:text-xl font-semibold">WHAT IS LEED?</h1>
         
          <p className="text-sm text-gray-500 py-2">LEED (Leadership in Energy and Environmental Design) is a Green Building Rating System developed by the U.S Green Building Council (USGBC) and introduced to the market in a large number of countries.</p>
          <p className="text-sm text-gray-500 py-2">LEED provides a suite of standards for designing, constructing, and maintaining buildings in an environmentally sustainable way. LEED promotes an integrated sustainable building approach by recognizing performance in key areas:</p>
          <ul className="ml-14 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">Change Order Management</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Constructability Review</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Contract Administration</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Cost Estimating</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
           
            
          </ul>
          <h1  className=" text-md text-gray-800 sm:text-xl font-semibold">Different types Green Building Certification</h1>
          <ul className=" ml-14 sm:ml-24 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">LEED certification for new constructions and major renovations</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Constructability Review</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Contract Administration</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Cost Estimating</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
           
            
          </ul>
   
        </div>
      </div>
    </div>
  );
}
