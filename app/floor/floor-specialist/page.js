"use client";

import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { FaAngleDoubleRight, FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import DownloadPdfButton from "@/app/component/Download";
import Link from "next/link";
const images = [
  {
    src: "/img/color (1).jpg",
    alt: "Image 1",
  },
  {
    src: "/img/color (2).jpg",
    alt: "Image 2",
  },
  {
    src: "/img/color (3).jpg",
    alt: "Image 3",
  },
  {
    src: "/img/color (4).jpg",
    alt: "Image 4",
  },
  {
    src: "/img/color (5).jpg",
    alt: "Image 5",
  },
];
export default function FloorSpecialistPage() {
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
  const [modalOpen, setModalOpen] = useState({ video1: false, video2: false });

  return (
    <div>
      <div className="pb-20 ">
        <div>
          <h2 className="sm:text-[32px] tracking-widest px-4 sm:px-20  bg-[#EEF7FF] uppercase font-bold border-t-2 mt-20 border-b-2 mb-7 py-5 sm:py-10 text-center">
            Floor Specialist
          </h2>
        </div>
        <div className=" lg:flex items-center grid sm:grid-cols-2 md:grid-cols-4 justify-center gap-3 px-4 sm:px-16">
     <div className="bg-slate-200 p-4 flex items-center gap-2 rounded-t-md">
     <FaAngleDoubleRight/>
          <p className="text-sm text-gray-600 hover:text-[#4ae2fa]  cursor-pointer">
            Airon solution Ltd.
          </p>
     </div>
          
     <div className="bg-slate-200 p-4 flex items-center justify-center gap-2 rounded-t-md">
      <Link href='/our-service' className="flex items-center gap-2">
        <FaAngleDoubleRight className="text-gray-600" />
        <p className="text-sm text-gray-600 capitalize hover:text-[#4ae2fa] cursor-pointer">
          Our Service
        </p>
      </Link>
    </div>
         <div className="bg-slate-200 p-4 flex items-center gap-2 rounded-t-md">
         <FaAngleDoubleRight />
         <p className="text-sm text-gray-600 capitalize cursor-pointer">Modern Warehouse</p>
         </div>
         <div className="bg-slate-200 p-4 flex items-center gap-2 rounded-t-md">
         <FaAngleDoubleRight />
         <p className="text-sm text-gray-600 capitalize cursor-pointer">Modern Warehouse</p>
         </div>
        </div>
        <div className="px-4 sm:mx-20 bg-slate-200 grid grid-cols-1 md:grid-cols-2 gap-10 pb-6 lg:my-0">
          {/* Left Side: Video Button */}
          <div className="flex items-center">
            <div className="lg:py-10">
              <button
                className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                onClick={() => setModalOpen({ ...modalOpen, video1: true })}
                aria-label="Watch the video"
              >
                <Image
                  className="h-38 sm:h-80 transition-shadow duration-300 ease-in-out"
                  src="/img/blog (1).jpg"
                  width={640}
                  height={260}
                  priority
                  alt="Modal video thumbnail"
                />
                {/* Play icon */}
                <svg
                  className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                >
                  <circle
                    className="fill-white"
                    cx="36"
                    cy="36"
                    r="36"
                    fillOpacity=".8"
                  />
                  <path
                    className="fill-indigo-500 drop-shadow-2xl"
                    d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
                  />
                </svg>
              </button>

              {/* Modal for Video 1 */}
              <Transition show={modalOpen.video1} as={Fragment}>
                <Dialog
                  onClose={() => setModalOpen({ ...modalOpen, video1: false })}
                  className="relative z-50"
                >
                  {/* Backdrop */}
                  <Transition.Child
                    as="div"
                    className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-out duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    aria-hidden="true"
                  />

                  {/* Modal Content */}
                  <Transition.Child
                    as="div"
                    className="fixed inset-0 z-[99999] flex p-6"
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 scale-75"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-out duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-75"
                  >
                    <div className="max-w-5xl mx-auto h-full flex items-center relative">
                      <DialogPanel className="w-full max-h-full shadow-2xl aspect-video bg-black overflow-hidden">
                        <video width="1920" height="1080" controls>
                          <source src="/video1.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </DialogPanel>
                      {/* Close Icon */}
                      <button
                        onClick={() =>
                          setModalOpen({ ...modalOpen, video1: false })
                        }
                        className="absolute top-4 right-4 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 focus:outline-none"
                        aria-label="Close video"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.714-4.714a.75.75 0 111.06 1.06L13.525 12l4.714 4.714a.75.75 0 111-1.06L12 14.475l-4.714 4.714a.75.75 0 111-1.06L10.475 12 5.76 7.286a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                </Dialog>
              </Transition>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex items-center">
            <Image
              className="h-38 sm:h-80"
              src="/img/blog (2).jpg"
              alt="company-image"
              width={640}
              height={260}
            />
          </div>
        </div>
        <div className="py-8 px-4 sm:mx-20 bg-slate-200">
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
          <div className="grid sm:grid-cols-2 gap-5 pt-14">
            <div>
              <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">
              Introduction
              </h1>
              <p className="text-sm text-gray-500 py-2">
                We add value to our projects by listening carefully to our
                clients in order to ensure that we align with their objectives
                and the needs of building occupants, in addition to delivering
                structures that are safe, sustainable and cost-effective. From
                the earliest design stages, we plan for the diverse uses of a
                project through its whole life-cycle, focusing on efficiency and
                economy. We deal with
              </p>
              <h1 className=" text-md text-gray-800 sm:text-md font-semibold">
                Our leading range of expertise consists of:
              </h1>
              <ul className="ml-14 py-4">
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
              </ul>
              <p className="text-sm text-gray-500 py-2 ">
                Floor Construction Survey Flatness is crucial in many industrial
                and warehouse floors, where the central challenges are the
                efficient use of space, equipment and labor. Floor Flatness in
                floor construction is fundamental for many reasons, specifically
                in Very Narrow Aisle warehouse units and achieving the correct
                floor flatness standards for your warehouse operation will help
                to provide warehouse operators with peace of mind.
              </p>
              <h1 className=" text-md text-gray-800 sm:text-xl font-semibold pt-5">
                Design Build
              </h1>
              <p className="text-sm text-gray-500 py-2 pb-8">
                Naif Engineering & Builder Ltd are able to provide a total
                design and build package. Regarded as the link between the
                Logistics Industry and the Construction Industry, Naif
                Engineering & Builders Ltd understands the requirements of one
                and the capabilities of the other. Our design service includes
                structural design, detail design and specification. Naif
                Engineering & Builders Ltd will create a design that fulfils
                expectation and that can be produced cost effectively without
                being over specified. Naif Engineering & Builders Ltd can also
                offer a range of design and consultancy services including
                design reviews, on site supervision, condition report. Find out
                more here.
              </p>
              <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">
                LASER SCREED & LASER GRINDER
              </h1>
              <p className="text-sm text-gray-500 py-2 ">
                Do you require large floors with very high tolerances, but have
                a tight schedule? Our unique combination of high output Laser
                Screed ® floor construction and Laser Grinding system offer a
                FastTrack and a perfect solution. No other flooring contractor
                can provide this complete comprehensive service. Building floors
                to very high tolerances can be very time consuming. However the
                Naif Engineering & Builders Ltd superflat high tolerance fast
                rack Laser Screed ®/Laser Grind solution removes the flooring
                works off the critical path. Once the roof and walls are built,
                we can construct up to 1,500m2 of FM2 ground supported floor per
                day, making short work of large floor areas. Then overhead
                services and racking can be fitted while the aisles are being
                ground to tolerance with our patented system, the Laser Grinder
                ®. Our cast-grind solution can save weeks off the building
                program.
              </p>
            </div>
            <div>
              <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">
                Industrial Floor Specialists
              </h1>
              <h1 className=" text-md text-gray-800 sm:text-sm font-semibold">
                New or Existing Floor
              </h1>
              <h1 className=" text-md text-gray-800 sm:text-md font-semibold">
                Our leading range of expertise consists of:
              </h1>
              <ul className=" ml-8 lg:ml-14 py-4">
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
              </ul>
              <p className="text-sm text-gray-500 py-2 ">
                Naif Engineering & Builders Ltd is part of international
                industrial floor solution experts. Naif Engineering & Builders
                Ltd has over 10 years global expertise in the Design,
                Construction and Upgrading of Industrial Concrete floors.
              </p>
              <h1 className=" text-md text-gray-800 sm:text-md font-semibold">
                Industrial Floor Specialists
              </h1>
              <p className="text-sm text-gray-500 py-2 ">
                Superflat High Tolerance is a term commonly applied to high
                tolerance floor flatness within a defined movement, VNA (Very
                Narrow Aisle) facility. A Defined Traffic Path appears when
                Material Handling Equipment (MHE) moves up and down the floor
                surface in exactly the same wheel position every time. VNA
                warehouses are the most frequent application for defined traffic
                specifications. To assist in your decision whether Superflat
                High Tolerance is appropriate for you, please read the following
                information supplied in the options below:
              </p>
              <ul className=" ml-8 lg:ml-14 py-4">
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                
              </ul>
              <p className="text-sm text-gray-500 py-2 ">Naif Engineering & Builders Ltd offers various construction solutions for accomplishing Superflat High Tolerance floors. These consist of:

</p>
<ul className=" ml-8 lg:ml-14 py-4">
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <li className="text-sm text-gray-500 list-disc py-1.5">
                  Portal Frame Structure
                </li>
                <p className="text-sm text-gray-500 py-2 ">Find out more about the Naif Engineering & Builders Ltd.

</p>
               
                
              </ul>
            </div>
          </div>
        
          <h1 className=" text-md text-gray-800 sm:text-xl font-semibold pt-5">
                Design Build
              </h1>
              <p className="text-sm text-gray-500 py-2 ">When design and programme prohibit construction of the structural slab to tolerance or when extensive upgrading is needed, our topping slab floor system is the solution.
Assembled with complete mechanical bond or unbonded; starting at 75mm thick, these slabs are finished to tolerance for Free Movement or VNA applications.
Naif Engineering & Builders Ltd has demonstrated the effectiveness of topping slab construction to a vast audience of global clients.

</p>
<DownloadPdfButton/>
        </div>
      </div>
    </div>
  );
}
