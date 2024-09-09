"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { AiOutlineSearch, AiTwotoneFilePdf } from "react-icons/ai";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import Image from "next/image";
import JMIGroup from "./JmiGroup";

export default function CompletedPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div  className="mt-24">
      <div>
        <div className="flex justify-between items-center bg-[#EEF7FF] border-t-2 mt-16 border-b-2 px-4 sm:px-16 ">
          <h2 className="sm:text-[28px] tracking-widest uppercase font-bold mb-5 py-4 sm:py-8">
          Portfolio Category: Completed
          </h2>
        </div>
        <div className="border-b-2 flex items-center gap-3 px-4 py-4 sm:px-16">
          <Link href="/">
            <p className="text-sm text-gray-600 hover:text-[#4ae2fa] hover:underline cursor-pointer">
              Airon solution Ltd.
            </p>
          </Link>
          <FaAngleDoubleRight />
          <p className="text-sm text-gray-600 capitalize">Completed</p>
        </div>
      </div>

      <section className="light md:pb-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="px-4 sm:px-20">
          <div className="grid grid-cols-12 gap-4">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8 lg:border-r-2">
              <div>
                <Image
                  className="w-full my-7 px-4"
                  src="/img/Constructabil (3).jpg"
                  alt="img"
                  width={400}
                  height={400}
                />
              </div>

              <p className="underline text-md pt-2 sm:text-3xl cursor-pointer hover:text-[#4ae2fa] font-semibold">
               JMI Group
              </p>
              <JMIGroup/>
              <div className="col-span-12 lg:col-span-8 lg:border-r-2">
              <div>
                <Image
                  className=" w-full  rounded-md my-7 pr-4"
                  src="/img/ispahani.jpg"
                  alt="img"
                  width={400}
                  height={400}
                />
              </div>

            <Link href="/ispahhani-summit">
            <p className="underline text-md pt-2 sm:text-3xl cursor-pointer hover:text-[#4ae2fa] font-semibold">
              Ispahhani Summit Alliance Terminal Ltd.
              </p>
            </Link>
            <JMIGroup/>
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

              <h2 className="text-lg font-semibold text-zinc-700 py-5">
                Recent Posts
              </h2>

              {/* Recent Posts */}
              <div className="flex items-center">
                <div className="h-10 w-10 px-2 text-gray-400">
                  <AiTwotoneFilePdf />
                </div>
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
              <div className="pb-20 sm:pb-0">
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  footer={
                    selected
                      ? ` ${selected.toLocaleDateString()}`
                      : "Pick a day."
                  }
                />
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
}
