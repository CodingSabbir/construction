import React from 'react'
import { FaChevronRight ,FaMapMarkerAlt,FaCalculator } from "react-icons/fa";
import { FaPhone,FaMessage,   } from "react-icons/fa6";
import { FaFacebookF ,FaLinkedinIn ,FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
   <div>
     <footer className="font-sans tracking-wide bg-black py-10 px-4 sm:px-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className='bg-[#4ae2fa] flex items-center justify-center -mt-16 mb-3'>
            <div>
              <p className='text-lg'>Follow us</p>
            </div>
          <div className="text-white flex gap-5 items-center  p-3">
    <div className="border cursor-pointer hover:border-white text-black hover:text-white border-black rounded-full p-2">
        <FaFacebookF />
    </div>
    <div className="border cursor-pointer hover:border-white text-black hover:text-white border-black rounded-full p-2">
        <FaLinkedinIn />
    </div>
    <div className="border cursor-pointer hover:border-white text-black hover:text-white border-black rounded-full p-2">
        <FaYoutube />
    </div>
</div>

          </div>
          <h4 className="text-white  font-semibold text-lg mb-6 uppercase">About company</h4>
          <ul className="space-y-5">
            <li>
              <a href="javascript:void(0)" className="hover:text-[#4ae2fa] text-gray-300 text-sm transition-all">We (NAIF ENGINEERING & BUILDERS LTD) ensure 100% quality to construct any project.Our organization is always ready to receive any biggest challenge for a sustainable construction locally and globally.</a>
            </li>
           
          </ul>
        </div>

        <div>
          <h4 className="text-white  font-semibold text-lg mb-6">Company</h4>
          <ul className=" space-y-2">
            <li className='flex items-center  cursor-pointer gap-2 text-sm border-b border-dotted pb-1.5 border-gray-600 '>
            <FaChevronRight  className='text-[12px] hover:text-[#4ae2fa] text-gray-300 text-sm transition-all'/>
              <p href="javascript:void(0)" className="hover:text-[#4ae2fa] capitalize text-gray-300 text-sm transition-all">airon Solution Ltd</p>
            </li>
            <li className='flex items-center  cursor-pointer gap-2 text-sm border-b border-dotted pb-1.5 border-gray-600 '>
            <FaChevronRight  className='text-[12px] hover:text-[#4ae2fa] text-gray-300 text-sm transition-all'/>
              <p href="javascript:void(0)" className="hover:text-[#4ae2fa] capitalize text-gray-300 text-sm transition-all">airon Solution Ltd</p>
            </li>
            <li className='flex items-center  cursor-pointer gap-2 text-sm border-b border-dotted pb-1.5 border-gray-600'>
            <FaChevronRight  className='text-[12px] hover:text-[#4ae2fa] text-gray-300 text-sm transition-all'/>
              <p href="javascript:void(0)" className="hover:text-[#4ae2fa] capitalize text-gray-300 text-sm transition-all">airon Solution Ltd</p>
            </li>
           
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Construction Office</h4>
          <ul className=" space-y-2">
            <li className='flex   cursor-pointer gap-2 text-sm  '>
            <FaMapMarkerAlt  className='text-[28px] hover:text-[#4ae2fa] text-gray-300 text-sm transition-all'/>
              <p href="javascript:void(0)" className="hover:text-[#4ae2fa] capitalize text-gray-300 text-sm transition-all">House: #15/A (2nd floor)
Road: #16 (new) #27 (old)
Dhanmondi, Dhaka-1209, Bangladesh.</p>
            </li>
            <li className='flex items-center  cursor-pointer gap-2 text-sm '>
            <FaPhone   className='text-[12px] hover:text-[#4ae2fa] text-gray-300 text-sm transition-all'/>
              <p href="javascript:void(0)" className="hover:text-[#4ae2fa] capitalize text-gray-300 text-sm transition-all">+88 01762-638811</p>
            </li>
            <li className='flex items-center  cursor-pointer gap-2 text-sm '>
            <FaMessage  className='text-[12px] hover:text-[#4ae2fa] text-gray-300 text-sm transition-all'/>
              <p href="javascript:void(0)" className="hover:text-[#4ae2fa] capitalize text-gray-300 text-sm transition-all hover:underline">sabbir@gmail.com</p>
            </li>
            <li className='flex items-center  cursor-pointer gap-2 text-sm '>
            <FaCalculator   className='text-[12px] hover:text-[#4ae2fa] text-gray-300 text-sm transition-all'/>
              <p href="javascript:void(0)" className="hover:text-[#4ae2fa] capitalize text-gray-300 text-sm transition-all">IP :+015479545479</p>
            </li>
           
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Business Hours</h4>
          <ul className=" space-y-2">
            <li className='flex items-center  cursor-pointer gap-2 text-sm  '>
           
              <p href="javascript:void(0)" className="hover:text-[#4ae2fa] capitalize text-gray-300 text-sm transition-all">Our support available to help you 24 hours a day, seven days a week.</p>
            </li>
            <li className='flex items-center  cursor-pointer gap-2 text-sm border-b border-dotted pb-1.5 border-gray-600 '>
            
              <p href="javascript:void(0)" className="hover:text-[#4ae2fa] capitalize text-gray-300 text-sm transition-all">Saturday-Thursday: <span className='font-bold lowercase text-gray-300'>9:00 am to 4:00 pm</span></p>
            </li>
            <li className='flex items-center  cursor-pointer gap-2 text-sm border-b border-dotted pb-1.5 border-gray-600 '>
            
            <p href="javascript:void(0)" className="hover:text-[#4ae2fa] capitalize text-gray-300 text-sm transition-all">Friday: <span className='font-bold  text-gray-300 ml-28'>Closed</span></p>
          </li>
           
          </ul>
        </div>
      </div>

      
     
    </footer>
    <div className="border-t bg-[#1A2130] border-[#6b5f5f]  pt-8 px-4 sm:px-20 flex justify-between">
        <p className="text-gray-400 text-sm pb-5">
        Copyright © 2024 <span className='text-gray-200 cursor-pointer hover:underline'>Naif Engineering & Builders Ltd</span> - Developed a by NAIF <span className='text-gray-200 cursor-pointer hover:underline'>Sabbir Rahman.</span>
        </p>
        <div className=' flex gap-3 text-gray-600 text-sm'>
          <p className='hidden sm:block cursor-pointer hover:underline hover:text-gray-300'>Disclaimer</p>
          <p className='hidden sm:block cursor-pointer hover:underline hover:text-gray-300'>Privacy Policy</p>
        </div>
      </div>
      <div className=' sm:hidden px-4 sm:px-20 block flex gap-3 text-gray-400 text-sm  pt-5 bg-[#1A2130] '>
          <p className='cursor-pointer hover:underline hover:text-gray-300'>Disclaimer</p>
          <p className=' cursor-pointer hover:underline hover:text-gray-300'>Privacy Policy</p>
        </div>
   </div>
  )
}
