import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";
import ModalVideo from '../component/VideoModal';


export default function VideoGalleryPage() {
  return (
    <div className='mb-16 mt-20 '> {/* Reduced bottom margin */}
      <div>
        <h2 className='sm:text-[28px] tracking-widest px-4 sm:px-16 bg-[#EEF7FF] uppercase font-bold border-t-2 mt-16 border-b-2 mb-5 py-4 sm:py-8 text-center'>
          Video Gallery
        </h2>
        <div className='border-b-2 flex items-center gap-3 px-4 pb-4 sm:px-16'>
          <p className='text-sm text-gray-600 hover:text-[#4ae2fa] hover:underline cursor-pointer'>
            Airon solution Ltd.
          </p>
          <FaAngleDoubleRight />
          <p className='text-sm text-gray-600 capitalize'>Video Gallery</p>
        </div>
      </div>

      <div className='px-4 sm:px-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-10'>
        <div>
          <ModalVideo imageSrc="/img/video-gallery (1).jpg" />
        </div>
        <div>
          <ModalVideo  imageSrc="/img/video-gallery (2).jpg"/>
        </div>
        <div>
          <ModalVideo imageSrc="/img/video-gallery (3).jpg" />
        </div>
        <div>
          <ModalVideo imageSrc="/img/video-gallery (4).jpg" />
        </div>
        <div>
          <ModalVideo imageSrc="/img/video-gallery (4).jpg" />
        </div>
      </div>
    </div>
  );
}
