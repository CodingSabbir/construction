"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { AiOutlineSearch, AiTwotoneFilePdf } from "react-icons/ai";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import Image from "next/image";

export default function BlogPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <div className="mt-24">
        <div className="flex justify-between items-center bg-[#EEF7FF] border-t-2 mt-16 border-b-2 px-4 sm:px-16 ">
          <h2 className="sm:text-[28px] tracking-widest uppercase font-bold mb-5 py-4 sm:py-8">
            Blog
          </h2>
        </div>
        <div className="border-b-2 flex items-center gap-3 px-4 py-4 sm:px-16">
          <Link href="/">
            <p className="text-sm text-gray-600 hover:text-[#4ae2fa] hover:underline cursor-pointer">
              Airon solution Ltd.
            </p>
          </Link>
          <FaAngleDoubleRight />
          <p className="text-sm text-gray-600 capitalize">Blog</p>
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
                  src="/img/Modern-high-rise-building-Bangladesh-by-PP-Fiber-800x400.jpg"
                  alt="img"
                  width={400}
                  height={400}
                />
              </div>

              <p className="underline text-md pt-2 sm:text-3xl cursor-pointer hover:text-[#4ae2fa] font-semibold">
                {" "}
                Naif Engineering & Builders Leads the Charge: PP Fibers for
                Stronger, More Sustainable Concrete Structures in Bangladesh
              </p>
              <p className=" uppercase text-sm text-gray-600 py-3">
                Posted by neabl on May 28, 2024 with 0 Comment
              </p>
              <p className="text-sm text-gray-600">
                Bangladesh’s construction industry is experiencing a phenomenal
                surge. From towering skyscrapers to intricate architectural
                marvels, concrete reigns supreme as the building material of
                choice. But with this growth comes the constant quest for
                innovation and improvement. Enter PP fibers, a revolutionary
                material poised to disrupt the way concrete is reinforced.
                Pioneered in Bangladesh by Naif Engineering and Builders Ltd.
                (Top Construction Company in Bangladesh), PP fibers are ushering
                in a new era of lighter, stronger, and more versatile concrete
                structures.
              </p>

              <p className="text-md text-gray-700 font-semibold py-2">
                Why Rethink Rebar, the Traditional King?
              </p>
              <p className="text-sm text-gray-600">
                For generations, steel rebar has been the undisputed champion of
                concrete reinforcement. Its undeniable strength provides the
                backbone for countless structures. However, steel rebar also
                comes with limitations:
              </p>
              <ul className=" py-5">
                <li className="text-sm text-gray-600 list-disc ml-5 sm:ml-10">
                  <span className="font-bold">Corrosion Concerns: </span> Steel
                  is susceptible to rust, especially in Bangladesh’s humid
                  climate and coastal regions. This corrosion weakens the rebar
                  and ultimately compromises the integrity of the concrete
                  structure.
                </li>
                <li className="text-sm text-gray-600 list-disc ml-5 sm:ml-10 py-4">
                  <span className="font-bold">Corrosion Concerns: </span> Steel
                  is susceptible to rust, especially in Bangladesh’s humid
                  climate and coastal regions. This corrosion weakens the rebar
                  and ultimately compromises the integrity of the concrete
                  structure.
                </li>
                <li className="text-sm text-gray-600 list-disc ml-5 sm:ml-10 ">
                  <span className="font-bold">Corrosion Concerns: </span> Steel
                  is susceptible to rust, especially in Bangladesh’s humid
                  climate and coastal regions. This corrosion weakens the rebar
                  and ultimately compromises the integrity of the concrete
                  structure.
                </li>
              </ul>
              <h2 className="text-md text-gray-700 font-semibold py-2">
                Types of Fiber in Concrete
              </h2>
              <p className="text-sm text-gray-600">
                While PP fibers are a game-changer, they are not the only fiber
                used in concrete reinforcement. Here’s a quick breakdown of some
                common types, alongside a helpful image for reference:
              </p>
              <div>
                <Image
                  className="w-full my-7 px-4"
                  src="/img/Types-of-Fiber-in-Concrete.jpg"
                  alt="img"
                  width={400}
                  height={400}
                />
              </div>
              <ul className=" py-5">
                <li className="text-sm text-gray-600 list-disc ml-5 sm:ml-10">
                  <span className="font-bold">Corrosion Concerns: </span> Steel
                  is susceptible to rust, especially in Bangladesh’s humid
                  climate and coastal regions. This corrosion weakens the rebar
                  and ultimately compromises the integrity of the concrete
                  structure.
                </li>
                <li className="text-sm text-gray-600 list-disc ml-5 sm:ml-10 py-4">
                  <span className="font-bold">Corrosion Concerns: </span> Steel
                  is susceptible to rust, especially in Bangladesh’s humid
                  climate and coastal regions. This corrosion weakens the rebar
                  and ultimately compromises the integrity of the concrete
                  structure.
                </li>
                <li className="text-sm text-gray-600 list-disc ml-5 sm:ml-10 ">
                  <span className="font-bold">Corrosion Concerns: </span> Steel
                  is susceptible to rust, especially in Bangladesh’s humid
                  climate and coastal regions. This corrosion weakens the rebar
                  and ultimately compromises the integrity of the concrete
                  structure.
                </li>
              </ul>
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
