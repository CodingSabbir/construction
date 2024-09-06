'use client'
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight, FaAngleLeft, FaTimes, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Modal from "react-modal"; // Ensure react-modal is imported
import { FaPlus, FaMinus } from 'react-icons/fa';

const images = [
  {
    src: '/img/Modern Warehouse (1).jpg',
    alt: 'Image 1',
    title:"pile drive starting"
  },
  {
    src: '/img/Modern Warehouse (2).jpg',
    alt: 'Image 2',
    title:"pile drive starting"
  },
  {
    src: '/img/Modern Warehouse (3).jpg',
    alt: 'Image 3',
    title:"pile drive starting"
  },
  {
    src: '/img/Modern Warehouse (4).jpg',
    alt: 'Image 4',
    title:"pile drive starting"
  },
  {
    src: '/img/Modern Warehouse (5).jpg',
    alt: 'Image 5',
    title:"pile drive starting"
  },
  {
    src: '/img/project (5).jpg',
    alt: 'Image 6',
    title:"pile drive starting"
  },
  {
    src: '/img/project (4).jpg',
    alt: 'Image 7',
     title:"pile drive starting"
  },
  {
    src: '/img/project (3).jpg',
    alt: 'Image 8',
    title:"pile drive starting"
  },
  {
    src: '/img/project (2).jpg',
    alt: 'Image 9',
    title:"pile drive starting"
  },
  {
    src: '/img/project (1).jpg',
    alt: 'Image 10',
    title:"pile drive starting"
  },
];

export default function PilingFoundation() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    setOpen(open === index ? null : index);
  };
  useEffect(() => {
    // Check if document and #__next exist before setting the app element
    if (typeof document !== 'undefined' && document.getElementById('__next')) {
      Modal.setAppElement('#__next');
    }
  }, []);

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
    <div className="mb-16 mt-20">
      {/* Header Section */}
      <div>
        <h2 className="sm:text-[28px] tracking-widest px-4 sm:px-16 bg-[#EEF7FF] uppercase font-bold border-t-2 mt-16 border-b-2 mb-5 py-4 sm:py-8">
        Piling Foundation
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
          <p className="text-sm text-gray-600 capitalize">Piling Foundation</p>
        </div>
      </div>

      {/* Banner Image */}
      <div className="px-4 sm:px-20 my-10">
        <Image
          className="w-full"
          src="/img/piling-foundation-banner-image.jpg"
          alt="Modern Warehouse image"
          width={700}
          height={500}
          layout="responsive"
        />
      </div>

      {/* Image Grid and Modal */}
      <div className="my-8 px-4 sm:px-20">
        <div className="grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                className="w-full object-cover cursor-pointer rounded-sm"
                src={image.src}
                alt={image.alt}
                width={400}
                height={250}
                layout="responsive"
                onClick={() => openModal(index)}
              />
              <p className="text-sm italic text-gray-500 py-1.5">{image.title}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="relative max-w-4xl mx-auto">
            <Image
              className="w-full h-auto max-h-[80vh] rounded-md"
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              width={800}
              height={600}
              layout="responsive"
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
      <p className="text-md sm:text-2xl text-gray-900 px-4 sm:px-20 text-center  font-semibold">Pre-Cast Concrete Pile Drive Installation Process</p>
      <div
      className="flex justify-center items-center w-full overflow-hidden"
      
    >
      <div className="relative my-7" style={{ width: "80%", maxWidth: "800px", paddingTop: "32.857143%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com"
          allowFullScreen
          data-gtm-yt-inspected-2340190_699="true"
          id="240632615"
        ></iframe>
      </div>
    </div>
        <div className="px-4 sm:px-20">
        <p className="text-xl pb-7 pt-10">Piling-Foundation</p>
        <p  className="py-3 text-sm text-gray-500">Designing and constructing a solid foundation for buildings is arguably the most important aspect of any building project. Without the right foundation, the whole structure built on top will simply not last for very long and will in the long run, cost even more to put right.</p>
        <p className="py-3 text-sm text-gray-500">Naif Engineering & Builders Ltd has entered into the piling business equipped with modern machinery and vast capabilities. The company currently owns rotary drilling rigs, several percussion drilling rigs and related equipment as well as a large fleet of cranes, excavators, loaders, and dump trucks to support operations of pilling rigs.</p>
        <p className="py-3 text-sm text-gray-500">Naif Engineering & Builders Ltd has entered into the piling business equipped with modern machinery and vast capabilities. The company currently owns rotary drilling rigs, several percussion drilling rigs and related equipment as well as a large fleet of cranes, excavators, loaders, and dump trucks to support operations of pilling rigs.</p>
        </div>
        <div className="mt-5 mb-12 py-5 my-4 mx-4 sm:mx-20 bg-gray-100">
      {/* First Button and Content */}
      <div className="overflow-hidden">
        <button
          className={`w-full border-b text-start px-4 py-2 font-semibold text-lg flex justify-between items-center transition-colors ${
            open === 1 ? 'bg-gray-100' : 'bg-gray-100'
          }`}
          onClick={() => toggleOpen(1)}
        >
          
          {open === 1 ? <FaMinus /> : <FaPlus />}
        </button>
        <div
          className={`transition-all bg-gray-100 duration-1000 ease-in-out ${
            open === 1 ? 'max-h-100' : 'max-h-0'
          } overflow-hidden`}
        >
          <p className="px-4 py-2 text-sm border-t bg-gray-100">
          Types of piling:
          </p>
          <div className=" flex justify-center pt-7 pb-2">
          <Image className="h-full w-[800px]"  src='/img/piling-foundation-types.jpg' alt="" width={400} height={400}/>
          
          </div>
          <p className="text-start px-4 sm:px-20 text-sm ml-28 italic">Piling foundation types</p>
          <div className="px-4 sm:px-20">
          <p className="text-sm text-gray-500 py-2">Pile foundations can be classified based on function, materials and installation process, etc. Followings are the types of pile foundation used in construction:</p>
          <h2 className="text-xl">Sheet Piles</h2>
          <p className="text-lg py-1 text-gray-700">This type of pile is mostly used to provide lateral support. Usually, they resist lateral pressure from loose soil, the flow of water, etc. They are usually used for cofferdams, trench sheeting, shore protection, etc. They are not used for providing vertical support to the structure. They are usually used to serve the following purpose-</p>
          <ul className=" ml-14 lg:ml-20 py-4">
            <li className="text-md text-gray-500 list-disc py-1.5">Construction of retaining walls.</li>
            <li className="text-md text-gray-500 list-disc py-1.5">Construction of retaining walls.</li>
            <li className="text-md text-gray-500 list-disc py-1.5">Construction of retaining walls.</li>
            <li className="text-md text-gray-500 list-disc py-1.5">Construction of retaining walls.</li>
            <li className="text-md text-gray-500 list-disc py-1.5">Construction of retaining walls.</li>
            <li className="text-md text-gray-500 list-disc py-1.5">Construction of retaining walls.</li>
            <li className="text-md text-gray-500 list-disc py-1.5">Construction of retaining walls.</li>
            <li className="text-md text-gray-500 list-disc py-1.5">Construction of retaining walls.</li>
            <li className="text-md text-gray-500 list-disc py-1.5">Construction of retaining walls.</li>
            
            
          </ul>
          <h2 className="text-xl">Load Bearing Piles</h2>
          <p className="text-lg py-1 pb-7 text-gray-700">This type of pile foundation is mainly used to transfer the vertical loads from the structure to the soil. These foundations transmit loads through the soil with poor supporting property onto a layer which is capable of bearing the load. Depending on the mechanism of load transfer from pile to the soil, load-bearing piles can be further classified as flowed.</p>
          <h2 className="text-xl">Friction Pile</h2>
          <p className="text-lg py-1 text-gray-700">Friction pile transfers the load from the structure to the soil by the frictional force between the surface of the pile and the soil surrounding the pile such as stiff clay, sandy soil, etc. Friction can be developed for the entire length of the pile or a definite length of the pile, depending on the strata of the soil. In friction pile, generally, the entire surface of the pile works to transfer the loads from the structure to the soil.</p>
          <h2 className="text-xl  pt-7">Soil Compactor Piles</h2>
          <p className="text-lg py-1 text-gray-700">Sometimes piles are driven at placed closed intervals to increase the bearing capacity of soil by compacting</p>
          <p className="text-black underline text-xl pb-8">Types of Pile Foundation Based on Materials and Construction Method</p>
          </div>
        </div>
      </div>

      {/* Second Button and Content */}
      <div className="overflow-hidden my-4">
        <button
          className={`w-full text-start border-b px-4 py-2  font-semibold text-lg flex justify-between items-center transition-colors ${
            open === 2 ? 'bg-gray-100' : 'bg-gray-100'
          }`}
          onClick={() => toggleOpen(2)}
        >
         
          {open === 2 ? <FaMinus /> : <FaPlus />}
        </button>
        <div
          className={`transition-all bg-gray-100 duration-1000 ease-in-out ${
            open === 2 ? 'max-h-100' : 'max-h-0'
          } overflow-hidden`}
        >
          <p className="px-4 py-2 text-sm border-t bg-gray-100">
           when to use pile foundation
          </p>
          <div className="px-4">
            <p className="text-xl text-black">Following are the situations when using a pile foundation system can be</p>
            <ul className=" ml-7 lg:ml-10 py-4">
            <li className="text-md text-gray-800 list-disc py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-disc py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-disc py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-disc py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-disc py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-disc py-1.5">When the groundwater table is high.</li>
            
            
          </ul>
          <p className="text-xl text-black">Piling is not any more unknown, difficult or expensive service in Bangladesh.</p>
          <p className="text-md text-gray-800 pt-3">NAIF ENGINEERING AND BUILDERS LTD is providing you the concrete information that can let you know the actual standard and costing of piling service.</p>
          <p className="text-md text-gray-800 pt-3">Among all fuzzy information about piling services around the market of Bangladesh, NAIF ENGINEERING & BUILDERS LTD is going let you know what actually the piling is, the types are, the benefits are and the cost is.</p>
          <p className="text-md text-gray-800 pt-3 pb-10">Every penny is earned worth a lot more than you think to you. So, you have right to justify what you are taking from us.</p>
          </div>
        </div>
      </div>

      {/* Third Button and Content */}
      <div className="overflow-hidden my-4">
        <button
          className={`w-full  border-b text-start px-4 py-2  font-semibold text-lg flex justify-between items-center transition-colors ${
            open === 3 ? 'bg-gray-100' : 'bg-gray-100'
          }`}
          onClick={() => toggleOpen(3)}
        >
         
          {open === 3 ? <FaMinus /> : <FaPlus />}
        </button>
        <div
          className={`transition-all duration-1000 ease-in-out ${
            open === 3 ? 'max-h-100' : 'max-h-0'
          } overflow-hidden`}
        >
          <p className="px-4 py-2 bg-gray-100">
          Piling service we provide
          </p>
          <h2 className="text-xl capitalize px-4  py-3 border-t border-b text-black font-semibold">Cast in situ pile</h2>
          <div className="px-4">
            <p className="text-lg  py-3 text-black">To cast the pile concrete boring a specified depth of soil at the site of the pile is called cast in situ pile. In this piling system, pile is made in the place where it is placed. This is why no impact or hydraulic pressure is required for the placement of the pile. Usually rod is not used in this kind of pile unless it is used for column.</p>
           <p className="text-lg  py-3 text-black mt-3">Benefits of cast is situ pile</p>
            <ul className=" ml-7 lg:ml-10 py-4">
            <li className="text-md text-gray-800 list-decimal py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-decimal py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-decimal py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-decimal py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-decimal py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-decimal py-1.5">When the groundwater table is high.</li>
            
            
          </ul>
          <p className="text-md text-black">This type of pile is mostly used to provide lateral support. Usually, they resist lateral pressure from loose soil, the flow of water, etc. They are usually used for cofferdams, trench sheeting, shore protection, etc. They are not used for providing vertical support to the structure. They are usually used to serve the following purpose-</p>
          <ul className=" ml-7 lg:ml-10 py-4">
            <li className="text-md text-gray-800 list-decimal py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-decimal py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-decimal py-1.5">When the groundwater table is high.</li>
            <li className="text-md text-gray-800 list-decimal py-1.5">When the groundwater table is high.</li>
            
            
            
          </ul>
          </div>
        </div>
      </div>

      
    </div>
    </div>
  );
}
