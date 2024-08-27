import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";
import servicesData from "../data/Service"
export default function OurServicePage() {
  return (
    <section className=" sm:mt-5 py-10">
         <div>
        <h2 className="sm:text-[28px] tracking-widest px-4 sm:px-20 bg-[#EEF7FF] uppercase font-bold border-t-2 mt-16 border-b-2 mb-5 py-4 sm:py-8">
        Our Services
        </h2>
        <div className="border-b-2 flex items-center gap-3 px-4 pb-4 sm:px-20">
          <p className="text-sm text-gray-600 hover:text-[#4ae2fa] hover:underline cursor-pointer">
            Airon solution Ltd.
          </p>
          <FaAngleDoubleRight />
          
            <p className="text-sm text-gray-600 capitalize">
              Our Services
            </p>
         
          
         
        </div>
      </div>
      <div className="pt-5 sm:pt-16  px-4 sm:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service,id) => (
            <div key={id} className="group my-3">
             <Link href={`/our-service/${service.link}`}>
             <div className="flex items-center justify-center">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="pt-5 transition-all duration-300">
                <span className="text-gray-900 hover:text-[#4ae2fa] cursor-pointer font-medium text-lg mb-3 block">{service.title}</span>
                {/* <h4 className="text-sm text-gray-600 font-medium mb-5">
                  {service.description}
                </h4> */}
                <p
                  
                  className="cursor-pointer text-[#4ae2fa] hover:underline text-sm font-semibold uppercase"
                >
                  {service.linkText}
                </p>
              </div>
             </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
