import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import ModalVideo from '../component/VideoModal';
import Image from 'next/image';
import Devider from '../component/Devider';
import DownloadPdfButton from '../component/Download';
export default function CompanyProfilePage() {
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

        <div className='px-4 sm:px-20 grid sm:grid-cols-2 items-center sm:gap-10'>
            <div>
            <ModalVideo/>
            </div>
            <div>
                <Image className='h-38 sm:h-80' src='/img/company_profile.png' alt='company-image' width={640} height={500}/>
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
