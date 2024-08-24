"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaLink, FaSearch } from "react-icons/fa";
import Devider from "./Devider";

const portfolio = [
  {
    name: "My best client",
    category: ["all", "frontend", "ux-ui"],
    img: "/img/project (1).jpg",
    work: "completed",
  },
  {
    name: "My favorite case",
    category: ["all", "mobile", "ux-ui"],
    img: "/img/project (2).jpg",
    work: "upcamming",
  },
  {
    name: "An old job",
    category: ["all", "frontend"],
    img: "/img/project (3).jpg",
    work: "upcamming",
  },
  {
    name: "It is a really cool website",
    category: ["all", "frontend", "ux-ui"],
    img: "/img/project (4).jpg",
    work: "completed",
  },
  {
    name: "Something more",
    category: ["all", "others", "frontend"],
    img: "/img/project (5).jpg",
    work: "ongoing",
  },
  {
    name: "Another project",
    category: ["all", "frontend"],
    img: "/img/project (6).jpg",
    work: "upcamming",
  },
];

function Project() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    let filteredProjects;
    switch (filter) {
      case "all":
        filteredProjects = portfolio.slice(0, 6); // Show only 6 projects for 'all'
        break;
      case "frontend":
        filteredProjects = portfolio
          .filter((p) => p.category.includes("frontend"))
          .slice(0, 5); // Show only 5 projects for 'frontend'
        break;
      case "mobile":
        filteredProjects = portfolio
          .filter((p) => p.category.includes("mobile"))
          .slice(0, 4); // Show only 4 projects for 'mobile'
        break;
      case "ux-ui":
        filteredProjects = portfolio
          .filter((p) => p.category.includes("ux-ui"))
          .slice(0, 5); // Show only 5 projects for 'ux-ui'
        break;
      default:
        filteredProjects = portfolio;
        break;
    }
    setProjects(filteredProjects);
  }, [filter]);

  // Handle click to change image with animation
  const handleImageClick = () => {
    setActiveImage((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <section className="py-10 bg-black text-white">
      <div className="px-4 sm:px-20">
       <div className="text-center pb-5">
        <h2 className="text-4xl font-semibold">Our Projects</h2>
       <Devider/>
       </div>
        <div className="flex flex-wrap justify-center mb-8 space-x-4">
          {/* Filter Buttons */}
          <button
            className={`px-4 my-2 sm:my-0 py-2 rounded-md text-sm font-semibold transition duration-300 ${
              filter === "all"
                ? "bg-[#F05A7E] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilter("all")}
          >
            Filter-All
          </button>
          <button
            className={`px-4 my-2 sm:my-0 py-2 rounded-md text-sm font-semibold transition duration-300 ${
              filter === "frontend"
                ? "bg-[#F05A7E] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilter("frontend")}
          >
            Completed
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ${
              filter === "mobile"
                ? "bg-[#F05A7E] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilter("mobile")}
          >
            Ongoing
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ${
              filter === "ux-ui"
                ? "bg-[#F05A7E] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilter("ux-ui")}
          >
         Upcamming
          </button>
          <button
            className={`px-4 py-2 mt-2 sm:mt-0 rounded-md text-sm font-semibold transition duration-300 ${
              filter === "others"
                ? "bg-[#F05A7E] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilter("others")}
          >
            Sort By None
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <div
              key={item.name}
              className="relative overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
              onClick={handleImageClick}
            >
              <Image
                src={projects[(index + activeImage) % projects.length].img}
                alt={item.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <div className="absolute inset-0 -mt-20 bg-[#F05A7E] flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute flex space-x-4">
                  <div className="p-2 cursor-pointer hover:bg-white transition-colors rounded-full duration-300">
                    <FaLink className="text-white text-xl hover:text-black" />
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-white transition-colors rounded-full duration-300">
                    <FaSearch className="text-white text-xl hover:text-black" />
                  </div>
                </div>

                <span className="text-white text-lg font-semibold mt-24">
                  {item.name}
                </span>
                <p className="text-black text-xs font-semibold mt-2 cursor-pointer" data-aos="fade-up"
     data-aos-duration="1500">
                  {item.work}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    <div className="flex justify-center items-center gap-5 mt-10">
    <button
            className={`px-4 py-2 rounded-md text-sm  font-semibold transition duration-300 ${
              filter === "ux-ui"
                ? "bg-[#F05A7E] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilter("ux-ui")}
          >
         1
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm  font-semibold transition duration-300 ${
              filter === "ux-ui"
                ? "bg-[#F05A7E] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setFilter("mobile")}
          >
         2
          </button>
    </div>
    </section>
  );
}

export default Project;



// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { FaLink, FaSearch } from "react-icons/fa";

// const portfolio = [
//   {
//     name: "My best client",
//     category: ["all", "frontend", "ux-ui"],
//     img: "/img/project (1).jpg",
//   },
//   {
//     name: "My favorite case",
//     category: ["all", "mobile", "ux-ui"],
//     img: "/img/project (2).jpg",
//   },
//   {
//     name: "An old job",
//     category: ["all", "frontend"],
//     img: "/img/project (3).jpg",
//   },
//   {
//     name: "It is a really cool website",
//     category: ["all", "frontend", "ux-ui"],
//     img: "/img/project (4).jpg",
//   },
//   {
//     name: "Something more",
//     category: ["all", "others", "frontend"],
//     img: "/img/project (5).jpg",
//   },
//   {
//     name: "Another project",
//     category: ["all", "frontend"],
//     img: "/img/project (6).jpg",
//   },
// ];

// function Project() {
//   const [filter, setFilter] = useState("all");
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     let filteredProjects;
//     switch (filter) {
//       case "all":
//         filteredProjects = portfolio.slice(0, 6); // Show only 6 projects for 'all'
//         break;
//       case "frontend":
//         filteredProjects = portfolio
//           .filter((p) => p.category.includes("frontend"))
//           .slice(0, 5); // Show only 5 projects for 'frontend'
//         break;
//       case "mobile":
//         filteredProjects = portfolio
//           .filter((p) => p.category.includes("mobile"))
//           .slice(0, 4); // Show only 4 projects for 'mobile'
//         break;
//       case "ux-ui":
//         filteredProjects = portfolio
//           .filter((p) => p.category.includes("ux-ui"))
//           .slice(0, 5); // Show only 5 projects for 'ux-ui'
//         break;
//       default:
//         filteredProjects = portfolio;
//         break;
//     }
//     setProjects(filteredProjects);
//   }, [filter]);

//   return (
//     <section className="py-10 bg-black text-white">
//       <div className="px-4 sm:px-20">
//         <div className="flex flex-wrap justify-center mb-8 space-x-4">
//           {/* Filter Buttons */}
//           <button
//             className={`px-4 my-2 sm:my-0 py-2 rounded-md text-sm font-semibold transition duration-300 ${
//               filter === "all"
//                 ? "bg-[#F05A7E] text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setFilter("all")}
//           >
//             Filter-All
//           </button>
//           <button
//             className={`px-4 my-2 sm:my-0 py-2 rounded-md text-sm font-semibold transition duration-300 ${
//               filter === "frontend"
//                 ? "bg-[#F05A7E] text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setFilter("frontend")}
//           >
//             Frontend
//           </button>
//           <button
//             className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ${
//               filter === "mobile"
//                 ? "bg-[#F05A7E] text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setFilter("mobile")}
//           >
//             Mobile
//           </button>
//           <button
//             className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ${
//               filter === "ux-ui"
//                 ? "bg-[#F05A7E] text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setFilter("ux-ui")}
//           >
//             UX/UI
//           </button>
//           <button
//             className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ${
//               filter === "others"
//                 ? "bg-[#F05A7E] text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setFilter("others")}
//           >
//             Others
//           </button>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.map((item) => (
//             <div
//               key={item.name}
//               className="relative overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
//             >
//               <Image
//                 src={item.img}
//                 alt={item.name}
//                 width={300}
//                 height={300}
//                 className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-0"
//               />
//               <div className="absolute inset-0 bg-[#F05A7E] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                 <div className="absolute flex space-x-4">
//                   <div className="p-2 cursor-pointer hover:bg-white transition-colors rounded-full duration-300">
//                     <FaLink className="text-white text-xl hover:text-black" />
//                   </div>
//                   <div className="p-2 cursor-pointer hover:bg-white transition-colors rounded-full duration-300">
//                     <FaSearch className="text-white text-xl hover:text-black" />
//                   </div>
//                 </div>

//                 <span className="text-white text-lg font-semibold pt-20">
//                   {item.name}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Project;
