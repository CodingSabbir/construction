'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

const images = [
  {
    src: '/img/Modern Warehouse (1).jpg',
    alt: 'Image 1',
  },
  {
    src: '/img/Modern Warehouse (2).jpg',
    alt: 'Image 2',
  },
  {
    src: '/img/Modern Warehouse (3).jpg',
    alt: 'Image 3',
  },
  {
    src: '/img/Modern Warehouse (4).jpg',
    alt: 'Image 4',
  },
  {
    src: '/img/Modern Warehouse (5).jpg',
    alt: 'Image 5',
  },
];

const ImageFilter = () => {
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
  );
};

export default ImageFilter;
