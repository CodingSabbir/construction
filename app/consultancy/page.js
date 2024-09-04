'use client'
import React from "react";
import { FaAngleDoubleRight, FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Modal from 'react-modal'; 

const images = [
    {
      src: '/img/Constructabil (1).jpg',
      alt: 'Image 1',
    },
    {
      src: '/img/Constructabil (2).jpg',
      alt: 'Image 2',
    },
    {
      src: '/img/Constructabil (3).jpg',
      alt: 'Image 3',
    },
    {
      src: '/img/Constructabil (4).jpg',
      alt: 'Image 4',
    },
    {
      src: '/img/Constructabil (5).jpg',
      alt: 'Image 5',
    },
  ];
export default function ConsultancyPage() {
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
        Consultancy
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
          <p className="text-sm text-gray-600 capitalize">Consultancy</p>
        </div>
      </div>
      <div className="px-4 sm:px-20 my-10">
        <Image
          className="w-full "
          src="/img/Consultancy.jpg"
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
          <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">Construction Consulting</h1>
          <p className="text-sm text-gray-500 py-2">We add value to our projects by listening carefully to our clients in order to ensure that we align with their objectives and the needs of building occupants, in addition to delivering structures that are safe, sustainable and cost-effective. From the earliest design stages, we plan for the diverse uses of a project through its whole life-cycle, focusing on efficiency and economy. We deal with</p>
          <ul className="ml-14 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">Change Order Management</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Constructability Review</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Contract Administration</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Cost Estimating</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
           
            
          </ul>
          <h1 className=" text-md text-gray-800 sm:text-xl uppercase font-semibold">LISTENING AND CREATING SOLUTIONS BASED ON PROVEN SERVICES</h1>
          <p className="text-sm text-gray-500 py-2">Understanding your business and project needs are paramount to Naif Engineering & Builders, for us to be able to determine how best to add value to your construction projects. Thanks to our long experience and wide-ranging knowledge of construction and associated engineering, we have a comprehensive range of services to provide complete solutions to your projects on time, on budget, safely and to meet your requirements. You can use our specialist services standalone or to augment your existing procedures. However, as you will know, it can often be more cost effective to subcontract certain services completely.</p>
   
          
        </div>
        <div>
          <h1  className=" text-md text-gray-800 sm:text-xl font-semibold">Our others consulting services includes:</h1>
          <h1 className="text-lg uppercase font-semibold text-gray-600">PLANNING</h1>
          <p className="text-sm text-gray-500 py-2">Effective planning is an essential part of the ongoing project management process. The environmental impact of a job, its scheduling, budgeting, site safety, availability and delivery of quality materials, personnel, logistics, as well as inconvenience to the general public, compliance with local and national standards – these things and countless more all have to be considered.</p>
          <h1 className=" text-md text-gray-800 sm:text-xl uppercase font-semibold pt-5">ARE YOU SURE ABOUT WHAT MATERIALS YOU ARE USING?</h1>
          <p className="text-sm text-gray-500 py-2">We also have a range of services dedicated just to materials: chemical and physical testing of the durability of materials and materials certification. For example, if a product is labeled as meeting a certain standard, how can you be sure that it truly does? We can tell you.</p>
          <div className="mt-5 mb-12">
      {/* First Button and Content */}
      <div className="overflow-hidden">
        <button
          className={`w-full text-start px-4 py-2 rounded-md font-semibold text-lg transition-colors ${
            open === 1 ? 'bg-[#4ae2fa]' : 'bg-gray-400'
          }`}
          onClick={() => toggleOpen(1)}
        >
          Addition Construction Steps
        </button>
        <div
          className={`transition-all duration-1000 ease-in-out ${
            open === 1 ? 'max-h-40' : 'max-h-0'
          } overflow-hidden`}
        >
          <p className="px-4 py-2 bg-gray-100">
            Content for the first FAQ item goes here. It can be any description or information related to the construction steps.
          </p>
        </div>
      </div>

      {/* Second Button and Content */}
      <div className="overflow-hidden my-4">
        <button
          className={`w-full text-start px-4 py-2 rounded-md font-semibold text-lg transition-colors ${
            open === 2 ? 'bg-[#4ae2fa]' : 'bg-gray-400'
          }`}
          onClick={() => toggleOpen(2)}
        >
          Addition Construction Steps
        </button>
        <div
          className={`transition-all duration-1000 ease-in-out ${
            open === 2 ? 'max-h-40' : 'max-h-0'
          } overflow-hidden`}
        >
          <p className="px-4 py-2 bg-gray-100">
            Content for the second FAQ item goes here. Additional details about the construction steps can be placed here.
          </p>
        </div>
      </div>

      {/* Third Button and Content */}
      <div className="overflow-hidden my-4">
        <button
          className={`w-full text-start px-4 py-2 rounded-md font-semibold text-lg transition-colors ${
            open === 3 ? 'bg-[#4ae2fa]' : 'bg-gray-400'
          }`}
          onClick={() => toggleOpen(3)}
        >
          Addition Construction Steps
        </button>
        <div
          className={`transition-all duration-1000 ease-in-out ${
            open === 3 ? 'max-h-40' : 'max-h-0'
          } overflow-hidden`}
        >
          <p className="px-4 py-2 bg-gray-100">
            Content for the third FAQ item goes here. More information about the construction steps can be shared here.
          </p>
        </div>
      </div>

      {/* Fourth Button and Content */}
      <div className="overflow-hidden">
        <button
          className={`w-full text-start px-4 py-2 rounded-md font-semibold text-lg transition-colors ${
            open === 4 ? 'bg-[#4ae2fa]' : 'bg-gray-400'
          }`}
          onClick={() => toggleOpen(4)}
        >
          Addition Construction Steps
        </button>
        <div
          className={`transition-all duration-1000 ease-in-out ${
            open === 4 ? 'max-h-40' : 'max-h-0'
          } overflow-hidden`}
        >
          <p className="px-4 py-2 bg-gray-100">
            Content for the fourth FAQ item goes here. More information about the construction steps can be shared here.
          </p>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
