'use client'
import React from "react";
import { FaAngleDoubleRight, FaAngleLeft, FaAngleRight, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Modal from 'react-modal'; 
import Devider from "../component/Devider";

const pages=[
  {id:1,
    link:"/ziska-pharmaceuticals",
  },
  {id:2,
    link:"/rooppur-power-plant",
  },
  {id:3,
    link:"/ifad-autos-ltd",
  },
  {id:4,
    link:"/color-concrete",
  },
  {id:5,
    link:"/akij-group",
  },
  {id:6,
    link:"/badsha-group",
  },
]

const images = [
    {
      src: '/img/supply-ready-mixed (4).jpg',
      alt: 'Image 1',
    },
    {
      src: '/img/badsha (2).jpg',
      alt: 'Image 2',
    },
    {
      src: '/img/roopur-azi (1).jpg',
      alt: 'Image 3',
    },
    {
      src: '/img/ifad_gall3.jpg',
      alt: 'Image 4',
    },
    {
      src: '/img/ifad_gall6.jpg',
      alt: 'Image 5',
    },
    {
        src: '/img/roopur-azi (4).jpg',
        alt: 'Image 5',
      },
  ];
export default function   AkijGroupPage() {

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
       <div className="flex justify-between items-center bg-[#EEF7FF] border-t-2 mt-16 border-b-2 px-4 sm:px-16 ">
       <h2 className="sm:text-[28px] tracking-widest  uppercase font-bold mb-5 py-4 sm:py-8">
       Akij Group
        </h2>
        <div className="flex gap-5">
              <div
                className="border-2 hover:border-gray-500 text-xl p-2 cursor-pointer"
                
              >
                <FaChevronLeft/>
              </div>
              <div
                className="border-2 hover:border-gray-500 text-xl p-2 cursor-pointer"
                
              >
                <FaChevronRight />
              </div>
            </div>
       </div>
        <div className="border-b-2 flex items-center gap-3 px-4 py-4 sm:px-16">
          <p className="text-sm text-gray-600 hover:text-[#4ae2fa] hover:underline cursor-pointer">
            Airon solution Ltd.
          </p>
          <FaAngleDoubleRight />
          <Link href='/our-service'>
            <p className="text-sm text-gray-600 capitalize hover:text-[#4ae2fa] hover:underline cursor-pointer">
            Ongoing
            </p>
          </Link>
          <FaAngleDoubleRight />
          <p className="text-sm text-gray-600 capitalize"> Akij Group</p>
        </div>
      </div>
      <div className="px-4 sm:px-16 my-10">
        <Image
          className="w-full "
          src="/img/floor_System_Banner.jpg"
          alt="Modern Warehouse image"
          width={700}
          height={500}
        />
      </div>
      <div>
      <div className="my-8 px-4 sm:px-16">
      <div className="grid grid-cols-6 gap-4">
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
      <div className="grid lg:grid-cols-2 gap-5 px-4 sm:px-16">
        <div className="hidden sm:block">
          <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">Project Description</h1>
          <Devider/>
          <div class="flex flex-col ">
  <div class="sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-3 lg:px-8">
      <div class="overflow-x-auto">
        <table
          class="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
          <thead
            class="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th
                scope="col"
                class="border border-neutral-200 px-3 py-4 text-sm text-gray-600 dark:border-white/10">
                Floor Description
              </th>
              <th
                scope="col"
                class="border border-neutral-200 px-3 py-4 text-sm text-gray-600 dark:border-white/10">
                Company
              </th>
              <th
                scope="col"
                class="border border-neutral-200 px-3 py-4 text-sm text-gray-600 dark:border-white/10">
                Floor Type
              </th>
              <th
                scope="col"
                class="border border-neutral-200 px-3 py-4 text-sm text-gray-600 dark:border-white/10">
                Total Sft
              </th>
              <th
                scope="col"
                class="border border-neutral-200 px-3 py-4 text-sm text-gray-600 dark:border-white/10">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td
                class="whitespace-nowrap border border-neutral-200 px-3 py-4 text-xs dark:border-white/10">
                floor finishing work <br /> with ride on power trowel
              </td>
              <td
                class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">
                Akij Plastic Limited
              </td>
              <td
                class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">
                Floor Construction
              </td>
              <td class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">100000 sft</td>
              <td class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">Mymensing</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td
                class="whitespace-nowrap border border-neutral-200 px-3 py-4 text-xs dark:border-white/10">
                floor finishing work <br /> with ride on power trowel
              </td>
              <td
                class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">
                Akij Plastic Limited
              </td>
              <td
                class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">
                Floor Construction
              </td>
              <td class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">100000 sft</td>
              <td class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">Mymensing</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td
                class="whitespace-nowrap border border-neutral-200 px-3 py-4 text-xs dark:border-white/10">
                floor finishing work <br /> with ride on power trowel
              </td>
              <td
                class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">
                Akij Plastic Limited
              </td>
              <td
                class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">
                Floor Construction
              </td>
              <td class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">100000 sft</td>
              <td class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">Mymensing</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td
                class="whitespace-nowrap border border-neutral-200 px-3 py-4 text-xs dark:border-white/10">
                floor finishing work <br /> with ride on power trowel
              </td>
              <td
                class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">
                Akij Plastic Limited
              </td>
              <td
                class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">
                Floor Construction
              </td>
              <td class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">100000 sft</td>
              <td class="whitespace-nowrap border text-xs border-neutral-200 px-3 py-4 dark:border-white/10">Mymensing</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>





        </div>
        <div>
          <h1  className=" text-md text-gray-800 sm:text-xl font-semibold">The Challenges</h1>
         <Devider/>
         <p className="text-sm text-gray-500 py-2">As a superflat floor and structural construction specialist the name of NAIF ENGINEERING & BUILDERS LTD is very prominent in the construction industry of Bangladesh. Having finished a successful bonded warehouse and 83300 SFT super flat floor at Ispahhani Summit Alliance Terminal Limited in Chittagong using the modern technology the company NAIF ENGINEERING & BUILDERS LTD has emerged as a committed and reliable name in the market.</p>
         
        </div>
      </div>
    </div>
  );
}
