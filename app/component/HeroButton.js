import React from 'react'
import Link from 'next/link'
export default function HeroButton() {
  return (
<div className='flex  justify-between px-4 sm:px-20 bg-[#4ae2fa] py-5'>
    <div>
        <p className=' text-md sm:text-[28px]'>Contractors & Construction Managers Since 2024.</p>
    </div>
    <div>
       <Link href="/contact">
       <button className=' text-white px-5 py-3 font-semibold border-2 rounded-sm uppercase hover:bg-black'> Get A quote</button>
       </Link>
    </div>
</div>
  )
}
