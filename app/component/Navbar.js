'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import "../../public/css/navbar.css"
export default function Navbar() {
  // State to manage the menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
 
     <div>
      
       <header className="navbar-container  flex border-b border-1 bg-white font-sans min-h-[70px] tracking-wide relative fixed top-0 left-0 right-0   shadow-md z-50">
        <div className="w-full flex flex-wrap items-center justify-center gap-6  py-3 relative">
          <a href="javascript:void(0)">
            <Image src="https://readymadeui.com/readymadeui.svg" width={300} height={300} alt="logo" className="w-36" />
          </a>

          <div
            id="collapseMenu"
            className={`${
              menuOpen ? 'block' : 'hidden'
            } lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul
              className="lg:flex lg:ml-10 lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"
            >
              <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
                <a href="javascript:void(0)">
                  <Image src="https://readymadeui.com/readymadeui.svg" width={300} height={300} alt="logo" className="w-36" />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#007bff] font-bold text-sm block">
                  Home
                </a>
              </li>
              <li className="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Agencies
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div className="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 className="text-base text-[#007bff] font-bold">USA</h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          New York
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          San Francisco
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Houston
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Dallas
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Philadelphia
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          San Diego
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Atlanta
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Austin
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Portland
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Denver
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 className="text-base text-[#007bff] font-bold">UK</h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          London
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Edinburgh
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Manchester
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Birmingham
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 className="text-base text-[#007bff] font-bold">AUSTRALIA</h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Sydney
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Brisbane
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Melbourne
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Adelaide
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Perth
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 className="text-base text-[#007bff] font-bold">CANADA</h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Vancouver
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Montreal
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Toronto
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Calgary
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 className="text-base text-[#007bff] font-bold">OTHER</h6>
                    <ul className="mt-3 pt-3 border-t border-1 space-y-3">
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Tokyo
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Dubai
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Cape Town
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          New Delhi
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Hong Kong
                        </a>
                      </li>
                      <li className="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          className="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Johannesburg
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a href="javascript:void(0)" className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                  Services
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a href="javascript:void(0)" className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                  Career
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a href="javascript:void(0)" className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                  Portfolio
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a href="javascript:void(0)" className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                  Blog
                </a>
              </li>
              <li className="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a href="javascript:void(0)" className="hover:text-[#007bff] text-gray-500 font-bold text-sm block">
                  Contact
                </a>
              </li>
             
            </ul>
          </div>

          <button
            id="toggleBtn"
            className="block lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 30 30">
              <path
                d="M0 1.633C0 .73.746 0 1.667 0h26.666C29.254 0 30 .73 30 1.633c0 .902-.746 1.632-1.667 1.632H1.667C.746 3.265 0 2.535 0 1.633zm0 13.471c0-.902.746-1.632 1.667-1.632h26.666c.92 0 1.667.73 1.667 1.632 0 .903-.746 1.633-1.667 1.633H1.667C.746 16.737 0 16.006 0 15.104zM1.667 25.102h26.666c.92 0 1.667.73 1.667 1.633 0 .902-.746 1.632-1.667 1.632H1.667C.746 28.367 0 27.637 0 26.735c0-.903.746-1.633 1.667-1.633z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>
     </div>
  
  );
};


