'use client'

import { FaAngleDoubleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

const images = [
  {
    src: '/img/roopur (1).jpg',
    alt: 'Image 1',
    
  },
  {
    src: '/img/roopur (2).jpg',
    alt: 'Image 2',
  },
  {
    src: '/img/roopur (3).jpg',
    alt: 'Image 3',
  },
  {
    src: '/img/roopur (4).jpg',
    alt: 'Image 4',
  },
  {
    src: '/img/supply-ready-mixed (5).jpg',
    alt: 'Image 5',
  },
];
export default function  PowerPlantConstructionPage() {
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
  return (
    <div className="mb-16 mt-20 ">
      {" "}
      {/* Reduced bottom margin */}
      <div>
        <h2 className="sm:text-[28px] tracking-widest px-4 sm:px-16 bg-[#EEF7FF] uppercase font-bold border-t-2 mt-16 border-b-2 mb-5 py-4 sm:py-8">
        Power Plant Construction
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
          <p className="text-sm text-gray-600 capitalize">Power Plant Construction</p>
        </div>
      </div>
      <div className="px-4 sm:px-20 my-10">
        <Image
          className="w-full "
          src="/img/Neabl_power_plant_banner_pic.jpg"
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
              className="w-full object-cover cursor-pointer rounded-sm" data-aos="zoom-in"
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
        <div className="relative max-w-4xl mx-auto" >
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
            <FaAngleLeft />
          </button>

          {/* Right Icon */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 text-white text-3xl transform -translate-y-1/2"
          >
            <FaAngleRight />
          </button>
        </div>
      </Modal>
    </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 px-4 sm:px-20">
        <div>
          <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">Power Plant Construction</h1>
          <p className="text-sm text-gray-500 py-2">Our scope of delivery and services extends from the design and construction planning, through the handling of all earthwork, stonework and finishing works, to the turn-key construction of the power plant infrastructural buildings.</p>
         
          <p className="text-sm text-gray-500 py-2">The extensive in-house expertise of our Technical Processing and Planning, Work Preparation, Engineering Surveying, Formwork and Scaffolding, and Building Materials. Technology departments has been and still remains the consistent foundation for achieving the decisive technical advantage.</p>
          <p className="text-sm text-gray-500 py-2">   <p className="text-sm text-gray-500 py-2">With our own high standards of quality, adherence to schedules and project management, Naif Engineering & Builders Ltd has always proven to be a reliable partner.</p></p>
        </div>
        <div>
          <h1  className=" text-md text-gray-800 sm:text-xl font-semibold">Our Power Plant Construction includes</h1>
          <p className="text-sm text-gray-500 py-2">the following types of power plants:</p>
        
          <ul className="ml-14 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">Nuclear Power Plant</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Solar PV Power Plant</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Gas Engines Power Plant</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Oil & Gas Fired Thermal Power Plant</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Coal Fired Power Plant</li>
          
            
          </ul>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 px-4 sm:px-20">
        <div>
        
          <button className="uppercase bg-[#4ae2fa] w-full p-2 text-md sm:text-lg text-start px-4 sm:px-10 rounded-sm"> addtion construction step</button>
          <p className="text-sm text-gray-500 py-2 mt-5">We will work with all project team members to define the logistical requirements for the construction process, such as areas for deliveries, placement of barricades (if required) and hours of operation. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
        </div>
       
      </div>
    </div>
  );
}
