'use client'

import { FaAngleDoubleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

const images = [
  {
    src: '/img/color-concrete (1).jpg',
    alt: 'Image 1',
  },
  {
    src: '/img/color-concrete (2).jpg',
    alt: 'Image 2',
  },
  {
    src: '/img/color-concrete (3).jpg',
    alt: 'Image 3',
  },
  {
    src: '/img/color-concrete (4).jpg',
    alt: 'Image 4',
  },
  {
    src: '/img/color-concrete (5).jpg',
    alt: 'Image 5',
  },
];
export default function FloorCoatingApplicationPage() {
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
          <p className="text-sm text-gray-600 capitalize"> Floor coating application</p>
        </div>
      </div>
      <div className="px-4 sm:px-20 my-10">
        <Image
          className="w-full "
          src="/img/Paint_Application_banner.jpg"
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
          <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">Floor coating application</h1>
          <p className="text-sm text-gray-500 py-2">Naif Engineering & Builders Ltd is a leading industrial floor coating contractor with broad experience that also includes commercial and residential applications. Our coatings work on virtually any type of flooring material. We are providing high quality flooring, roofing and painting expertise with outstanding service and results for their clients. Contact us today for your next floor coating project.
          Our floor coating services includes:</p>
          <ul className="ml-14 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            
          </ul>
          
        </div>
        <div>
          <h1  className=" text-md text-gray-800 sm:text-xl font-semibold">Industries Served</h1>
          <p className="text-sm text-gray-500 py-2">Naif Engineering & Builders Ltd is a leading industrial floor coating contractor with broad experience that also includes commercial and residential applications. Our coatings work on virtually any type of flooring material. We are providing high quality flooring, roofing and painting expertise with outstanding service and results for their clients. Contact us today for your next floor coating project.
          Our floor coating services includes:</p>
          <ul className=" ml-14 lg:ml-20 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            
          </ul>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5 px-4 sm:px-20">
        <div>
          <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">Benefits of Epoxy Floor Paint</h1>
          <p className="text-sm text-gray-500 py-2">Because it’s durable, scratch and chip resistant, and long lasting, epoxy floor paint is a great flooring option. Epoxy floor paint works well in warehouses, manufacturing plants, commercial kitchens, hospitals and more. Our durable epoxy floor paint offers:</p>
          <ul className="ml-14 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
           
            
          </ul>
          <button className="uppercase bg-[#4ae2fa] w-full p-2 text-md sm:text-lg text-start px-4 sm:px-10 rounded-sm"> addtion construction step</button>
          <ul className="ml-14 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">Elimination of Dusting from Efflorescence</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
           
            
          </ul>
        </div>
        <div>
          <h1  className=" text-md text-gray-800 sm:text-xl font-semibold">Benefits of Polyurethane (PU) Floor</h1>
          <ul className=" ml-14 lg:ml-20 py-4">
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            <li className="text-sm text-gray-500 list-disc py-1.5">Portal Frame Structure</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
