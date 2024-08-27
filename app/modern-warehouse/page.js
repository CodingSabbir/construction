'use client'
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Image from "next/image";
import ImageFilter from "../component/ImageFilter";
import Link from "next/link";
import { useState } from 'react';
export default function ModernWarehousePage() {
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
          Modern Warehouse
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
          <p className="text-sm text-gray-600 capitalize">Modern Warehouse</p>
        </div>
      </div>
      <div className="px-4 sm:px-20 my-10">
        <Image
          className="w-full "
          src="/img/modern_warehouse_banner_pic.jpg"
          alt="Modern Warehouse image"
          width={700}
          height={500}
        />
      </div>
      <div>
        <ImageFilter />
      </div>
      <div className="grid sm:grid-cols-2 gap-5 px-4 sm:px-20">
        <div>
          <h1 className=" text-md text-gray-800 sm:text-xl font-semibold">Modern Warehouse</h1>
          <p className="text-sm text-gray-500 py-2">We add value to our projects by listening carefully to our clients in order to ensure that we align with their objectives and the needs of building occupants, in addition to delivering structures that are safe, sustainable and cost-effective. From the earliest design stages, we plan for the diverse uses of a project through its whole life-cycle, focusing on efficiency and economy.
          We deal with</p>
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
        <div>
          <h1  className=" text-md text-gray-800 sm:text-xl font-semibold">Our modern warehouse construction services includes:</h1>
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
