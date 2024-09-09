'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { AiOutlineSearch, AiTwotoneFilePdf } from 'react-icons/ai'
import { DayPicker } from "react-day-picker"
import "react-day-picker/style.css"
import Image from 'next/image'

export default function BlogEidMubarakPage() {
  const [selected, setSelected] = useState(null)

  return (
    <div className='mt-28'>
     

      <section className="light md:pb-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="px-4 sm:px-20">
          <div className="grid grid-cols-12 gap-4">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8 lg:border-r-2">
               <div className=' px-4'>
               <h2 className=' text-lg sm:text-4xl font-semibold'>Eid Mubarak!!</h2>
               <p className='text-gray-500 text-sm uppercase py-4'>Posted by neabl on March 12, 2024 with 0 Comment</p>
               </div>
            <div >
            <Image className='w-full my-7 px-4' src="/img/eid-mubarak-Facebook-Post.png" alt='img' width={400} height={400}/>
            </div>
             
                <h2 className='text-lg font-semibold text-gray-500'>Embracing Ramadan: A Time for Reflection and Connection</h2>
                <p className='py-5 text-sm text-gray-500'>As the crescent moon graces the sky, we welcome the holy month of Ramadan. It’s a time of self-reflection, devotion, and community. Join us as we explore the significance of Ramadan and how we can make the most of this spiritually enriching time.”</p>
                
                <p className='py-2 text-sm text-gray-500'>“May this Ramadan be a source of inspiration, healing, and connection for all. From our family to yours, Ramadan Mubarak!”</p>

                <p className='pb-2 text-sm text-gray-500'>#RamadanBlessings #SpreadLove #NaifGroup</p>
                <div className='flex gap-4  py-8 bg-slate-200 px-3 mx-3 rounded-sm'>
                <Image className='w-20' src="/img/2bfffa90ca1d155da55edb5c22dcf8de.png" alt='img' width={400} height={400}/>
                <p className='text-sm'>
                Written by <span className='text-red-400'>SABBIR</span></p>
                </div>




                <div class="border border-gray-300 p-4 rounded-lg mx-6  mt-20">
    <h2 class="text-lg font-medium mb-2 uppercase">Leave a comment</h2>
    <form>
        <div class="mb-4">
            <label className="block text-gray-700 font-medium mb-2" for="name">
                Name
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                id="name" type="text" placeholder="Enter your name"/>
        </div>
        <div class="mb-4">
            <label className="block text-gray-700 font-medium mb-2" for="name">
                E-mail
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                id="name" type="mail" placeholder="Enter your mail"/>
        </div>
        <div class="mb-4">
            <label className="block text-gray-700 font-medium mb-2" for="comment">
                Comment
            </label>
            <textarea rows="4"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                id="comment" placeholder="Enter your comment"></textarea>
        </div>
        <div className="flex justify-end">
            <button
                class="bg-[#4ae2fa]  text-black font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">Post Comment</button>
        </div>
    </form>
</div>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-9 px-4 md:pl-6 lg:pl-0 pt-10">
              {/* Search bar */}
              <div className="relative w-full flex items-center">
                <AiOutlineSearch className="absolute left-3 text-xl top-2 text-gray-500" />
                <input
                  type="text"
                  className="w-full pl-10 border border-gray-500 focus:bg-gray-200 p-2 rounded"
                  placeholder="Search..."
                />
              </div>

              <h2 className="text-lg font-semibold text-zinc-700 py-5">Recent Posts</h2>

              {/* Recent Posts */}
              <div className="flex items-center">
                <div className="h-10 w-10 px-2 text-gray-400"><AiTwotoneFilePdf /></div>
               <Link href="/blog">
               <p className="text-sm text-gray-500 hover:text-[#4ae2fa] cursor-pointer">
                  Naif Engineering & Builders Leads the Charge...
                </p>
               </Link>
              </div>

              {/* Additional Recent Posts */}
              {/* You can repeat this block for other recent posts */}
              <div className="flex py-2 items-center">
                <div className="h-10 w-10 px-2 text-gray-400">
                  <AiTwotoneFilePdf />
                </div>
                <Link href="/blog-ramadan">
                  <p className="text-sm text-gray-500 hover:text-[#4ae2fa] cursor-pointer">
                    Ramadan Mubarak!!
                  </p>
                </Link>
              </div>
              <div className="flex  items-center">
                <div className="h-10 w-10 px-2 text-gray-400">
                  <AiTwotoneFilePdf />
                </div>
               <Link href="/blog-mubarak">
               <p className="text-sm text-gray-500 hover:text-[#4ae2fa] cursor-pointer">
                  Eid Mubarak!!
                </p>
               </Link>
              </div>

              {/* Calendar */}
              <div className='pb-20 sm:pb-0' >
                <DayPicker
               
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  footer={selected ? ` ${selected.toLocaleDateString()}` : "Pick a day."}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
