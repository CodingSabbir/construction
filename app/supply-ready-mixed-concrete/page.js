'use client'

import { FaAngleDoubleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

const images = [
  {
    src: '/img/supply-ready-mixed (1).jpg',
    alt: 'Image 1',
    desp:"Naif Company Mixture Trucks in Gildan Project With Batching Plant"
  },
  {
    src: '/img/supply-ready-mixed (2).jpg',
    alt: 'Image 2',
  },
  {
    src: '/img/supply-ready-mixed (3).jpg',
    alt: 'Image 3',
  },
  {
    src: '/img/supply-ready-mixed (4).jpg',
    alt: 'Image 4',
  },
  {
    src: '/img/supply-ready-mixed (5).jpg',
    alt: 'Image 5',
  },
];
export default function SupplyReadyMixedConcrete() {
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
        floor coating application
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
          <p className="text-sm text-gray-600 capitalize">Supply Ready Mixed Concrete</p>
        </div>
      </div>
      <div className="px-4 sm:px-20 my-10">
        <Image
          className="w-full "
          src="/img/supply-ready-mixed-concrete-1.jpg"
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
            <p className="text-sm italic text-gray-500">{image.desp}</p>
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
          <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">READY MIXED CONCRETE</h1>
          <p className="text-sm text-gray-500 py-2">Naif Engineering & Builders Ltd have a variety of high volume ready-mix concrete plants capable of producing in excess of 1000m3 each day. These plants are strategically located and are equipped with wet batch facilities offering customers convenience of collection or efficient high volume delivery. The choice is yours!</p>
         
          <p className="text-sm text-gray-500 py-2">Naif Engineering & Builders Ltd operate a modern fleet of company owned 8m3 truck mixers to ensure reliable and consistent supply of ready mixed concrete throughout the country.</p>
          <p className="text-sm text-gray-500 py-2">   <p className="text-sm text-gray-500 py-2">Naif Engineering & Builders Ltd have a variety of high volume ready-mix concrete plants capable of producing in excess of 1000m3 each day. These plants are strategically located and are equipped with wet batch facilities offering customers convenience of collection or efficient high volume delivery. The choice is yours!</p></p>
        </div>
        <div>
          <h1  className=" text-md text-gray-800 sm:text-xl font-semibold">Our ready mixed concrete</h1>
          <p className="text-sm text-gray-500 py-2">plants are given assurance that customer requirements and contract specifications will be fully met.</p>
          <p className="text-sm text-gray-500 py-2">All of the concrete we produce is manufactured using in-house aggregates from our own quarries ensuring a high degree of consistency is obtained.
          We have an extensive customer base ranging from multinational contractors to local companies and are proud of the strong working relationships we have developed with them. Naif Engineering & Builders Ltd has successfully supplied concrete to a substantial number of prestigious projects and are currently well on the way to completion of the contract to supply around 30,000m3 for the</p>
          <p className="text-sm text-gray-500 py-2">Whether your enquiry is for a domestic use or a highly technical specific project, our highly experienced technical staff is on hand to support you.</p>
          
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
