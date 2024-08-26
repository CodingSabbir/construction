'use client'
import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import Image from 'next/image';
import Devider from '../component/Devider';
import DownloadPdfButton from '../component/Download';
import { useState, Fragment } from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';

export default function CompanyProfilePage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='mb-20'>
       <div>
       <h2 className=' sm:text-[32px] tracking-widest px-4 sm:px-20 bg-[#EEF7FF] uppercase font-bold  border-t-2 mt-20 border-b-2 mb-7 py-5 sm:py-10'>Company Profile</h2>
       <div className='border-b-2 flex items-center gap-5 px-4 pb-6 sm:px-20'>
        <p className='text-sm text-gray-600 hover:text-[#4ae2fa] hover:underline cursor-pointer'>Airon solution Ltd.</p>
        <FaAngleDoubleRight />
        <p className=' text-sm text-gray-600 capitalize'>Company Profile</p>
       </div>
       </div>

        <div className='px-4 sm:px-20 grid sm:grid-cols-2 items-center sm:gap-10 my-6 lg:my-0 '>
            <div>
            <div className=' lg:py-10'>
      {/* 1. The button */}
      <button
        className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
        onClick={() => {
          setModalOpen(true);
        }}
        aria-label="Watch the video"
      >
        <Image
          className=" h-38 sm:h-80 transition-shadow duration-300 ease-in-out"
          src='/img/blog (1).jpg'
          width={640} // Example width, update according to your image dimensions
          height={260} // Example height, update according to your image dimensions
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
          <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
          <path
            className="fill-indigo-500 drop-shadow-2xl"
            d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
          />
        </svg>
      </button>

      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)} className="relative z-50">
          {/* 2. The backdrop layer */}
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

          {/* 3. The modal video */}
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
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </DialogPanel>
              {/* Close Icon */}
              <button
                onClick={() => setModalOpen(false)}
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
                    d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.714-4.714a.75.75 0 111.06 1.06L13.525 12l4.714 4.714a.75.75 0 11-1.06 1.06L12 14.475l-4.714 4.714a.75.75 0 11-1.06-1.06L10.475 12 5.76 7.286a.75.75 0 010-1.06z"
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
            <div>
                <Image className='h-38 sm:h-80 mt-5 sm:mt-0' src='/img/company_profile.png' alt='company-image' width={640} height={500}/>
            </div>
        </div>
        <div className='px-4 sm:px-20'>
            <div className='text-center'>
            <h2 className='text-2xl font-semibold'>Who We Are</h2>
            <Devider/>
            </div>
            <p className='text-gray-500 text-sm pt-2'>Bangladesh (officially the People’s Republic of Bangladesh) is one of the popular names of the world for its faster growing of economy, who endured a lot of crisis in her life. But after overcoming all of her destructions, recently Bangladesh has turned into a medium earning country from a poor country. Now, it is one of the floating countries economically in the current world.In order to a sustain and faster improvement, Bangladesh has taken many steps to its structural development like communication, education, medical, power supply, technology, express high way & bridge, metro rail, housing sector, foreign policy, industry, silo of grain, garments and so on.</p>
            <br/>
            <p className='text-gray-500 text-sm pt-2'>We believe, Engineering & Constructing sectors have a great opportunity to establish business organization considering the current circumstance of Bangladesh as its economy is flourishing rapidly. Considering of this bright possibility of Bangladesh and with the hope of keeping contribution in this development, (Md. Nazmul Haque Khan) has established an organization named (NAIF ENGINEERING & BUILDERS LTD).</p>
            <br/>
            <p className='text-gray-500 text-sm pt-2'>NAIF ENGINEERING & BUILDERS LTD is the first digital and technological based self-dependent (Superflat floor) constructing organization. At present, we are constructing the biggest Superflat Floor project of Bangladesh. We have all the modern and high tech equipment & technology for our construction which have been imported from various first world countries. Moreover, we have an excellent skilled and trained engineering & working team. They are always ready to implement their skill & experience to construct a quality project.</p>
            <br/>
            <p className='text-gray-500 text-sm pt-2'>We (NAIF ENGINEERING & BUILDERS LTD) ensure 100% quality to construct any project. We provide a specific uniform code for our workers and also ensure an excellent security for them. Our organization is always ready to receive any biggest challenge for a sustainable construction locally and globally.</p>
            <br/>
            <p className='text-gray-500 text-sm pt-2'>We are happy to inform you a little more about the founder of (NAIF ENGINEERING & BUILDERS LTD) that he has experience of working & constructing business of long ten years in different places of Middle East territory. He has also a vast experience to work with many famous engineers of many renowned organizations in different countries of the global like USA, UK, Germany, Italy, KSA, Dubai, Qatar, Iran, Philippine, China, Japan, Korea, Russian federation, India, Malaysia as well.</p>
        </div>
        <DownloadPdfButton/>
    </div>
  )
}
