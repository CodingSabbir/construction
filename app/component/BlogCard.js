import Image from 'next/image'
import React from 'react'

export default function BlogCard() {
  return (
    <section className="px-4 sm:px-20 bg-[#EEF7FF] sm:mt-5 pb-7">
    <div className=" pt-5 sm:pt-16">
      <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap sm:gap-5 lg:gap-0 sm:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
         <div className="group w-full max-lg:max-w-xl lg:w-1/3  ">
          <div className="flex items-center">
              <Image src="/img/blog (1).jpg" alt="blogs tailwind section" className=" w-full" width={300} height={300}/>
          </div>
          <div className="pt-5 transition-all duration-300  ">
              <span className="text-gray-900 font-medium mb-3 block">The Green Building</span>
              <h4 className="text-sm text-gray-600 font-medium mb-5">Green construction refers to a structure and using process that is environmentally responsible and resource-efficient throughout a buildings life-cycle.</h4>
              <a href="javascript:;" className="cursor-pointer text-[#4ae2fa] text-md font-semibold uppercase">The progress
              </a>
          </div>
         </div>
         <div className="group w-full max-lg:max-w-xl lg:w-1/3  ">
          <div className="flex items-center">
              <Image src="/img/blog (2).jpg" alt="blogs tailwind section" className=" w-full" width={300} height={300}/>
          </div>
          <div className="pt-5 transition-all duration-300  ">
              <span className="text-gray-900 font-medium mb-3 block">The Effective Teamwork</span>
              <h4 className="text-sm text-gray-600 font-medium mb-5">As the general contractor, we first create the highest level of trust and integrity with our clients. We value our role in the success of your project.</h4>
              <a href="javascript:;" className="cursor-pointer text-[#4ae2fa] text-md font-semibold uppercase">The benefits
              </a>
          </div>
         </div>
         <div className="group w-full max-lg:max-w-xl lg:w-1/3  ">
          <div className="flex items-center">
              <Image src="/img/blog (3).jpg" alt="blogs tailwind section" className=" w-full" width={300} height={300}/>
          </div>
          <div className=" pt-5 transition-all duration-300  ">
              <span className="text-gray-900 font-medium mb-3 block">Best House Renovation</span>
              <h4 className="text-sm text-gray-600 font-medium mb-5">Constructor explains how you can enjoy high end flooring trends like textured wood and realistic stones with new laminate flooring.</h4>
              <a href="javascript:;" className="cursor-pointer text-[#4ae2fa] text-md font-semibold uppercase">read more
              </a>
          </div>
         </div>
      </div>
    </div>
</section>
                                        
  )
}
