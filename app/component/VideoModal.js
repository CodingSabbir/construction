'use client';
import { useState, Fragment } from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import Image from 'next/image';


export default function ModalVideo({ imageSrc }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className=' lg:pt-10'>
      {/* 1. The button */}
      <button
        className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
        onClick={() => {
          setModalOpen(true);
        }}
        aria-label="Watch the video"
      >
        <Image
          className=" h-38 sm:h-52 transition-shadow duration-300 ease-in-out"
          src={imageSrc}
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
  );
}
