import Image from 'next/image';
import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";
const servicesData = [
    {
        imgSrc: '/img/our-service (7).jpg',
        title: 'The Effective Teamwork',
        description:
          'As the general contractor, we first create the highest level of trust and integrity with our clients. We value our role in the success of your project.',
        linkText: 'view service detail',
      },
  {
    imgSrc: '/img/our-service (2).jpg',
    title: 'The Effective Teamwork',
    description:
      'As the general contractor, we first create the highest level of trust and integrity with our clients. We value our role in the success of your project.',
    linkText: 'view service detail',
  },
  {
    imgSrc: '/img/our-service (3).jpg',
    title: 'Best House Renovation',
    description:
      'Constructor explains how you can enjoy high end flooring trends like textured wood and realistic stones with new laminate flooring.',
    linkText: 'view service detail',
  },
  {
    imgSrc: '/img/our-service (4).jpg',
    title: 'The Green Building',
    description:
      'Green construction refers to a structure and using process that is environmentally responsible and resource-efficient throughout a buildings life-cycle.',
    linkText: 'view service detail',
  },
  {
    imgSrc: '/img/our-service (5).jpg',
    title: 'The Effective Teamwork',
    description:
      'As the general contractor, we first create the highest level of trust and integrity with our clients. We value our role in the success of your project.',
    linkText: 'view service detail',
  },
  {
    imgSrc: '/img/our-service (6).jpg',
    title: 'Best House Renovation',
    description:
      'Constructor explains how you can enjoy high end flooring trends like textured wood and realistic stones with new laminate flooring.',
    linkText: 'view service detail',
  },
  {
    imgSrc: '/img/our-service (7).jpg',
    title: 'The Green Building',
    description:
      'Green construction refers to a structure and using process that is environmentally responsible and resource-efficient throughout a buildings life-cycle.',
    linkText: 'view service detail',
  },
  {
    imgSrc: '/img/our-service (8).jpg',
    title: 'The Effective Teamwork',
    description:
      'As the general contractor, we first create the highest level of trust and integrity with our clients. We value our role in the success of your project.',
    linkText: 'view service detail',
  },
  {
    imgSrc: '/img/our-service (9).jpg',
    title: 'Best House Renovation',
    description:
      'Constructor explains how you can enjoy high end flooring trends like textured wood and realistic stones with new laminate flooring.',
    linkText: 'view service detail',
  },
];

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
          {servicesData.map((service, index) => (
            <div key={index} className="group my-3">
              <div className="flex items-center justify-center">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full "
                  width={300}
                  height={300}
                />
              </div>
              <div className="pt-5 transition-all duration-300">
                <span className="text-gray-900 font-medium text-lg mb-3 block">{service.title}</span>
                {/* <h4 className="text-sm text-gray-600 font-medium mb-5">
                  {service.description}
                </h4> */}
                <a
                  href="javascript:;"
                  className="cursor-pointer text-[#4ae2fa] hover:underline text-sm font-semibold uppercase"
                >
                  {service.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
