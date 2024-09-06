import Link from 'next/link'
import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

export default function CareerPage() {
  return (
    <div className='mt-24 '>
         <div className="flex justify-between items-center bg-[#EEF7FF] border-t-2 mt-16 border-b-2 px-4 sm:px-16 ">
       <h2 className="sm:text-[28px] tracking-widest  uppercase font-bold mb-5 py-4 sm:py-8">
       Career
        </h2>
        
       </div>
        <div className="border-b-2 flex items-center gap-3 px-4 py-4 sm:px-16">
        <Link href='/'>
          <p className="text-sm text-gray-600 hover:text-[#4ae2fa] hover:underline cursor-pointer">
            Airon solution Ltd.
          </p>
          </Link>
          <FaAngleDoubleRight />
          
            <p className="text-sm text-gray-600 capitalize">
            Career
            </p>
        
        
        </div>
        <h3 className='text-center text-lg sm:text-3xl py-14  font-semibold text-gray-700'>No Vacancy available at this moment.</h3>
    </div>
  )
}
